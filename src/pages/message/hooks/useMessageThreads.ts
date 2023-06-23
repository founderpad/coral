import { useUserMessageThreadsQuery } from '@/generated/api';
import { useUserId } from '@nhost/react';

export const useMessageThreads = () => {
	const userId = useUserId();
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
