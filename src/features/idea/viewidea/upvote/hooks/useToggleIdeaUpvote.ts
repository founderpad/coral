import {
	TIdeaPreviewFieldsFragment,
	TIdeas,
	useDeleteIdeaUpvoteMutation,
	useInsertIdeaUpvoteMutation
} from '@/generated/api';
import { event } from '@/lib/ga';
import { useUserData } from '@nhost/react';
import { useCallback, useState } from 'react';

type TIdeaUpvote = Pick<
	TIdeas | TIdeaPreviewFieldsFragment,
	'votes' | 'votes_aggregate' | 'id' | 'name'
>;

const useToggleIdeaUpvote = (idea: TIdeaUpvote) => {
	const user = useUserData();
	const [upvote, setUpvote] = useState({
		hasUserUpvoted: idea?.votes?.length > 0,
		totalVotes: idea?.votes_aggregate?.aggregate?.count
	});

	const { hasUserUpvoted, totalVotes = 0 } = upvote;

	const [insertIdeaUpvote] = useInsertIdeaUpvoteMutation({
		variables: {
			idea_vote: {
				ideaId: idea.id
			}
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: true, totalVotes: totalVotes + 1 });
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
			userId: user?.id
		},
		onCompleted: () => {
			setUpvote({ hasUserUpvoted: false, totalVotes: totalVotes - 1 });
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

	return {
		addIdeaUpvote: insertIdeaUpvote,
		removeIdeaUpvote: deleteIdeaUpvote,
		hasUserUpvoted,
		totalVotes,
		toggleUpvote
	};
};

export default useToggleIdeaUpvote;
