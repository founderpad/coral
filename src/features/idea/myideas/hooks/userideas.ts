import { useUserIdeasQuery } from '@/generated/api';
import { useUserId } from '@nhost/react';

const useUserIdeas = () => {
	const userId = useUserId();

	const { data, loading } = useUserIdeasQuery({
		variables: {
			userId: userId
		},
		fetchPolicy: 'cache-and-network'
	});

	return { data: data?.user_ideas, loading };
};

export default useUserIdeas;
