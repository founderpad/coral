import { useMatchSettingsQuery } from '@/generated/api';
import { useUserData } from '@nhost/react';

export const useMatchSettings = () => {
	const user = useUserData();

	const { data } = useMatchSettingsQuery({
		variables: {
			id: user?.id
		}
	});

	return { data };
};

export default useMatchSettings;
