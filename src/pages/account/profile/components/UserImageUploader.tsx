import { UserAvatar } from '@/components/shared';
import ImageUploader from '@/components/shared/imageuploader/ImageUploader';
import NotificationContext from '@/context/NotificationContext';
import { useUpdateUserAvatarMutation } from '@/generated/api';
import { useAuth, useCurrentUser } from '@/hooks/auth';
import { useFileUpload, useModalDrawer } from '@/hooks/util';
import { updateUserImage } from '@/slices/auth';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

const UserImageUploader = () => {
	const dispatch = useDispatch();
	const userId = useAuth().getUser()?.id;
	const avatarUrl = useCurrentUser().avatarUrl;
	const { addNotification } = useContext(NotificationContext);

	const { closeModalDrawer } = useModalDrawer();

	const { uploadAvatar } = useFileUpload();
	// const { upload } = useFileUpload();
	const [updateAvatar] = useUpdateUserAvatarMutation();

	const onUpload = async (file: File) => {
		const avatarUrl = await uploadAvatar({ file, bucketId: 'avatars' });

		await updateAvatar({
			variables: {
				id: userId,
				userDetails: {
					avatarUrl
				}
			},
			onCompleted: (_data) => {
				if (avatarUrl) {
					dispatch(updateUserImage(avatarUrl));
					addNotification({
						message: 'Avatar successfully updated.',
						status: 'success'
					});
				}
				closeModalDrawer();
			},
			onError: () => {
				addNotification({
					message: 'Failed to update avatar. Please try again later.',
					status: 'error'
				});
				closeModalDrawer();
			}
		});
	};

	return (
		<ImageUploader
			title="Edit profile photo"
			boxSize={{ base: 100, md: 120 }}
			onUpload={onUpload}
			defaultSrc={avatarUrl ?? undefined}
		>
			<UserAvatar
				src={avatarUrl ?? undefined}
				boxSize={{ base: 100, md: 120 }}
				aria-label="Edit profile picture"
			/>
		</ImageUploader>
	);
};

export default UserImageUploader;
