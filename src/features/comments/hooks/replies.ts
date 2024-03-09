import { useRepliesForCommentQuery } from '@/generated/api';

const useReplies = (commentId: string) => {
	const { data } = useRepliesForCommentQuery({
		variables: {
			commentId
		},
		fetchPolicy: 'network-only'
	});

	return { data: data?.replies };
};

export default useReplies;
