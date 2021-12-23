import { UpvoteButton } from 'components/shared/UpvoteButton';
import { TIdea_Votes } from 'generated/api';
import React, { useCallback } from 'react';

const IdeaUpvote = ({
	ideaId,
	ideaVotes
}: {
	ideaId: string;
	ideaVotes: TIdea_Votes | null;
}): JSX.Element => {
	// const voteType = ideaVotes.idea?.idea_votes[0].vote_type;

	// const isUpvote = voteType === 1;

	const votesTotal =
		ideaVotes?.idea.idea_votes_aggregate.aggregate.count ?? 0;

	console.log('222: ', ideaId, ideaVotes);

	// const [upsertIdeaVote] = useUpsertIdeaVoteMutation({
	// 	variables: {
	// 		idea_vote: {
	// 			idea_id: ideaId,
	// 			vote_type: isUpvote ? -1 : 1
	// 		},
	// 		ideaId,
	// 		count: isUpvote ? -1 : 1
	// 	},
	// 	refetchQueries: [{ query: GET_IDEAS }]
	// });

	// const [upsertIdeaVote] = useUpvoteIdeaMutation({
	// 	variables: {
	// 		idea_vote: {
	// 			idea_id: ideaId
	// 		}
	// 	},
	// 	refetchQueries: [{ query: GET_IDEAS }]
	// });

	const toggleUpvote = useCallback(() => {
		// upsertIdeaVote();
	}, []);

	return (
		<UpvoteButton
			onClick={toggleUpvote}
			name={'idea'}
			hasUserUpvoted={true}
			votesTotal={votesTotal}
		/>
	);
};

export default IdeaUpvote;
