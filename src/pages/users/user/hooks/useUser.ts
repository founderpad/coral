import { useUserProfileDetailsQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';

export const useUser = () => {
	const { data, loading } = useUserProfileDetailsQuery({
		variables: {
			userId: useQueryParam('id')
		}
	});

	return { data: data?.user, loading };
};

export default useUser;
