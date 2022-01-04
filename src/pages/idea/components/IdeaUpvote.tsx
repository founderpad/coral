import { UpvoteButton } from 'components/shared/UpvoteButton';
import {
	TIdea_Preview,
	useDeleteIdeaUpvoteMutation,
	useInsertIdeaUpvoteMutation
} from 'generated/api';
import { useClaim, useCurrentUser } from 'hooks/auth';
import * as ga from 'lib/ga';
import React, { useCallback, useState } from 'react';
import { TIdea } from 'types/idea';

const IdeaUpvote = (idea: TIdea_Preview | TIdea): JSX.Element => {
	const [upvote, setUpvote] = useState({
		hasUserUpvoted: idea.votes.length > 0,
		votesTotal: idea.votes_aggregate?.aggregate.count ?? 0
	});

	const user = useCurrentUser();
	const { hasUserUpvoted, votesTotal } = upvote;

	const [insertIdeaUpvote] = useInsertIdeaUpvoteMutation({
		variables: {
			idea_vote: {
				idea_id: idea.id
			}
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: true, votesTotal: votesTotal + 1 });
			ga.event({
				action: 'User idea upvote',
				params: {
					from_user_id: user.id,
					from_user_email: user.account.email,
					idea_id: idea.id,
					idea_name: idea.name,
					to_idea_user_id: idea.id
				}
			});
		}
	});

	const [deleteIdeaUpvote] = useDeleteIdeaUpvoteMutation({
		variables: {
			idea_id: idea.id,
			user_id: useClaim()
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: false, votesTotal: votesTotal - 1 });
		}
	});

	const toggleUpvote = useCallback(() => {
		hasUserUpvoted ? deleteIdeaUpvote() : insertIdeaUpvote();
	}, [hasUserUpvoted]);

	return (
		<UpvoteButton
			onClick={toggleUpvote}
			name={'idea'}
			hasUserUpvoted={hasUserUpvoted}
			votesTotal={votesTotal}
		/>
	);
};

export default IdeaUpvote;
