import {
	ProfileDocument,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from '@/generated/api';
import { useModalDrawer, useNotification } from '@/hooks/util';
import { useUserData } from '@nhost/react';

const useUpdateUserExperience = () => {
	const { closeModalDrawer } = useModalDrawer();
	const [updateUserProfileMutation] = useUpdateUserProfileMutation();
	const { addNotification } = useNotification();
	const user = useUserData();

	const onUpdateExperience = (experienceValues: TUser_Profile_Set_Input) =>
		updateUserProfileMutation({
			variables: {
				id: user?.id,
				user_profile: {
					...experienceValues
				}
			},
			refetchQueries: [
				{
					query: ProfileDocument,
					variables: {
						userId: user?.id
					}
				}
			],
			onCompleted: (_data) => {
				closeModalDrawer();
				addNotification({
					message: 'Your details have been updated successfully',
					status: 'success'
				});
			},
			onError: (_data) => {
				closeModalDrawer();
				addNotification({
					message: 'Failed to update details. Please try again later',
					status: 'error'
				});
			}
		});

	return { onUpdateExperience };
};

export default useUpdateUserExperience;
