import { useUserMessageThreadsQuery } from '@/generated/api';

export const useMessageThreads = (userId: string) => {
	const { data, loading } = useUserMessageThreadsQuery({
		variables: {
			userId
		}
	});
	return {
		data: data?.threads,
		loading
	};
};

export default useMessageThreads;
