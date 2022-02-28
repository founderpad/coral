import { UpvoteButton } from '@components/shared/UpvoteButton';
import {
	TIdeaPreviewFieldsFragment,
	TIdeas,
	useDeleteIdeaUpvoteMutation,
	useInsertIdeaUpvoteMutation
} from '@generated/api';
import { useClaim, useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import React, { useCallback, useState } from 'react';

type TIdeaUpvote = Pick<
	TIdeas | TIdeaPreviewFieldsFragment,
	'votes' | 'votes_aggregate' | 'id' | 'name'
>;

export const IdeaUpvote = (idea: TIdeaUpvote) => {
	const [upvote, setUpvote] = useState({
		hasUserUpvoted: idea?.votes?.length > 0,
		votesTotal: idea?.votes_aggregate?.aggregate?.count
	});

	const user = useCurrentUser();

	const { hasUserUpvoted, votesTotal = 0 } = upvote;

	const [insertIdeaUpvote] = useInsertIdeaUpvoteMutation({
		variables: {
			idea_vote: {
				ideaId: idea.id
			}
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: true, votesTotal: votesTotal + 1 });
			event({
				action: 'User idea upvote',
				params: {
					from_user_id: user?.id,
					from_user_email: user?.email,
					idea_id: idea.id,
					idea_name: idea.name,
					to_idea_user_id: idea.id
				}
			});
		}
	});

	const [deleteIdeaUpvote] = useDeleteIdeaUpvoteMutation({
		variables: {
			ideaId: idea.id,
			userId: useClaim()
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: false, votesTotal: votesTotal - 1 });
			event({
				action: 'User idea remove upvote',
				params: {
					from_user_id: user?.id,
					from_user_email: user?.email,
					idea_id: idea.id,
					idea_name: idea.name,
					to_idea_user_id: idea.id
				}
			});
		}
	});

	const toggleUpvote = useCallback(() => {
		hasUserUpvoted ? deleteIdeaUpvote() : insertIdeaUpvote();
	}, [hasUserUpvoted, deleteIdeaUpvote, insertIdeaUpvote]);

	return (
		<UpvoteButton
			onClick={toggleUpvote}
			name="idea"
			hasUserUpvoted={hasUserUpvoted}
			votesTotal={votesTotal}
		/>
	);
};

export default IdeaUpvote;
