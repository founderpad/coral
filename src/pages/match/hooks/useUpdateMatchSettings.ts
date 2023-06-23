import {
	MatchSettingsDocument,
	TMatch_Settings_Set_Input,
	useUpdateMatchSettingsMutation
} from '@/generated/api';
import { useModalDrawer, useNotification } from '@/hooks/util';
import { useUserData } from '@nhost/react';

export const useUpdateMatchSettings = (values: string[]) => {
	const { closeModalDrawer } = useModalDrawer();
	const user = useUserData();
	const { addNotification } = useNotification();
	const [updateMatchmakeSettings] = useUpdateMatchSettingsMutation();

	const onUpdateMatchmakeSettings = (
		matchSettings: TMatch_Settings_Set_Input
	) => {
		updateMatchmakeSettings({
			variables: {
				id: user?.id,
				match_settings: {
					...matchSettings,
					skills: values
				}
			},
			onCompleted: (_data) => {
				closeModalDrawer();
				addNotification({
					message:
						'Your match preferences have been updated successfully.',
					status: 'success'
				});
			},
			refetchQueries: [
				{
					query: MatchSettingsDocument,
					variables: {
						id: user?.id
					}
				}
			],
			onError: (_data) => {
				closeModalDrawer();
				addNotification({
					message:
						'Failed to update match preferences. Please try again later.',
					status: 'error'
				});
			}
		});
	};

	return { onUpdateMatchmakeSettings };
};

export default useUpdateMatchSettings;
