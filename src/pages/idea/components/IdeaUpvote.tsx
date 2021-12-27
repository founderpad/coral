import { UpvoteButton } from 'components/shared/UpvoteButton';
import {
	TIdea_Preview,
	useDeleteIdeaUpvoteMutation,
	useInsertIdeaUpvoteMutation
} from 'generated/api';
import { useClaim } from 'hooks/auth';
import React, { useCallback, useState } from 'react';

const IdeaUpvote = (idea: TIdea_Preview): JSX.Element => {
	const [upvote, setUpvote] = useState({
		hasUserUpvoted: idea.votes?.length > 0,
		votesTotal: idea.votes_aggregate?.aggregate.count ?? 0
	});

	const { hasUserUpvoted, votesTotal } = upvote;

	const [insertIdeaUpvote] = useInsertIdeaUpvoteMutation({
		variables: {
			idea_vote: {
				idea_id: idea.id
			}
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: true, votesTotal: votesTotal + 1 });
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
