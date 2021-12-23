import { UpvoteButton } from 'components/shared/UpvoteButton';
import {
	TIdea_Votes,
	useDeleteIdeaUpvoteMutation,
	useInsertIdeaUpvoteMutation
} from 'generated/api';
import { useClaim } from 'hooks/auth';
import React, { useCallback } from 'react';

const IdeaUpvote = ({
	ideaId,
	ideaVotes
}: {
	ideaId: string;
	ideaVotes: TIdea_Votes | null;
}): JSX.Element => {
	const votesTotal =
		ideaVotes?.idea.idea_votes_aggregate.aggregate.count ?? 0;

	const hasUserUpvoted = !!ideaVotes?.idea.idea_votes;

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

	// const [upsertIdeaVote] = useUpvoteIdeaMutation({
	// 	variables: {
	// 		idea_vote: {
	// 			idea_id: ideaId
	// 		}
	// 	},
	// 	refetchQueries: [{ query: GET_IDEAS }]
	// });

	const [insertIdeaUpvote] = useInsertIdeaUpvoteMutation({
		variables: {
			idea_vote: {
				idea_id: ideaId
			}
		}
	});

	const [deleteIdeaUpvote] = useDeleteIdeaUpvoteMutation({
		variables: {
			idea_id: ideaId,
			user_id: useClaim()
		}
	});

	const toggleUpvote = useCallback(() => {
		hasUserUpvoted ? deleteIdeaUpvote() : insertIdeaUpvote();
	}, []);

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
