import { useCommentsForIdeaQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';

export const useComments = () => {
	const id = useQueryParam('id');

	const { data, loading, fetchMore } = useCommentsForIdeaQuery({
		variables: {
			ideaId: id,
			offset: 0
		},
		fetchPolicy: 'network-only',
		nextFetchPolicy: 'network-only'
	});

	return {
		data: data?.comments,
		total: data?.totalComments?.aggregate?.count ?? 0,
		loading,
		fetchMore
	};
};

export default useComments;
