import {
	MatchSettingsDocument,
	TMatch_Settings_Set_Input,
	useUpdateMatchSettingsMutation,
	useUpdateMatchSettingsWithProfileSkillsMutation
} from '@/generated/api';
import { useModalDrawer, useNotification } from '@/hooks/util';
import { useUserData } from '@nhost/react';

export const useUpdateMatchSettings = (isInitial = false) => {
	const { closeModalDrawer } = useModalDrawer();
	const user = useUserData();
	const { addNotification } = useNotification();
	const [updateMatchmakeSettings] = useUpdateMatchSettingsMutation();
	const [updateMatchmakeSettingsWithProfileSkills] =
		useUpdateMatchSettingsWithProfileSkillsMutation();

	const onUpdateMatchmakeSettings = (
		matchSettings: TMatch_Settings_Set_Input & { profileSkills?: string[] }
	) => {
		if (isInitial && matchSettings.profileSkills?.length) {
			const { profileSkills, ...rest } = matchSettings;
			updateMatchmakeSettingsWithProfileSkills({
				variables: {
					id: user?.id,
					match_settings: {
						...rest
					},
					userProfileSkills: profileSkills
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
		} else {
			updateMatchmakeSettings({
				variables: {
					id: user?.id,
					match_settings: {
						...matchSettings
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
		}
	};

	return { onUpdateMatchmakeSettings };
};

export default useUpdateMatchSettings;
