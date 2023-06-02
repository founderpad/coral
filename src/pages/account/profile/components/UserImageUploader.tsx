import { UserAvatar } from '@/components/shared';
import ImageUploader from '@/components/shared/imageuploader/ImageUploader';
import { useUpdateUserAvatarMutation } from '@/generated/api';
import { useFileUploader } from '@/hooks/FileUpload';
import { useAuth, useCurrentUser } from '@/hooks/auth';
import { useModalDrawer, useNotification } from '@/hooks/util';
import { updateUserImage } from '@/slices/auth';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserImageUploader = () => {
	const dispatch = useDispatch();
	const userId = useAuth().getUser()?.id;
	const userAvatarUrl = useCurrentUser().avatarUrl;
	const { addNotification } = useNotification();
	const { closeModalDrawer } = useModalDrawer();
	const [updateAvatar] = useUpdateUserAvatarMutation();
	const { uploadSingleFile } = useFileUploader();

	const onUpload = async (file: File) => {
		const avatarUrl = await uploadSingleFile({ file, bucketId: 'avatars' });

		if (avatarUrl) {
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
						message:
							'Failed to update avatar. Please try again later.',
						status: 'error'
					});
					closeModalDrawer();
				}
			});
		}
	};

	return (
		<ImageUploader
			title="Edit profile photo"
			boxSize={{ base: 100, md: 120 }}
			onUpload={onUpload}
			defaultSrc={userAvatarUrl}
		>
			<UserAvatar
				src={userAvatarUrl}
				boxSize={{ base: 100, md: 120 }}
				aria-label="Edit profile picture"
			/>
		</ImageUploader>
	);
};

export default UserImageUploader;
