import { UpvoteButton } from '@/components/shared/UpvoteButton';
import { TIdeaPreviewFieldsFragment, TIdeas } from '@/generated/api';
import React from 'react';
import useToggleIdeaUpvote from './useToggleIdeaUpvote';

type TIdeaUpvote = Pick<
	TIdeas | TIdeaPreviewFieldsFragment,
	'votes' | 'votes_aggregate' | 'id' | 'name'
>;

export const IdeaUpvote = (idea: TIdeaUpvote) => {
	const { toggleUpvote, hasUserUpvoted, totalVotes } =
		useToggleIdeaUpvote(idea);

	return (
		<UpvoteButton
			onClick={toggleUpvote}
			name="idea"
			hasUserUpvoted={hasUserUpvoted}
			votesTotal={totalVotes}
		/>
	);
};

export default IdeaUpvote;
