import { UserAvatar } from '@/components/shared';
import ImageUploader from '@/components/shared/imageuploader/ImageUploader';
import { useUpdateUserAvatarMutation } from '@/generated/api';
import { useAuth, useCurrentUser } from '@/hooks/auth';
import { useSuccessNotification } from '@/hooks/toast';
import { useModalDrawer } from '@/hooks/util';
import { updateUserImage } from '@/slices/auth';
import { useFileUpload } from '@nhost/react';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserImageUploader = () => {
	const dispatch = useDispatch();
	const userId = useAuth().getUser()?.id;
	const avatarUrl = useCurrentUser().avatarUrl;

	const { closeModalDrawer } = useModalDrawer();
	// const { addNotification } = useNotification();
	const showSuccessNotification = useSuccessNotification();

	// const uploadAvatar = useFileUpload();
	const { upload } = useFileUpload();
	const [updateAvatar] = useUpdateUserAvatarMutation();

	// const onUpload = useCallback(async (file: File) => {
	// 	const avatarUrl = await uploadAvatar({ file, bucketId: 'avatars' });

	// 	await updateAvatar({
	// 		variables: {
	// 			id,
	// 			userDetails: {
	// 				avatarUrl
	// 			}
	// 		},
	// 		onCompleted: (_data) => {
	// 			if (avatarUrl) {
	// 				dispatch(updateUserImage(avatarUrl));
	// 				addNotification('Avatar successfully updated', 'success');
	// 			}
	// 			setModalDrawer({ isOpen: false });
	// 		}
	// 	});
	// });

	const onUpload = async (file: File) => {
		// const avatarUrl = await uploadAvatar({ file, bucketId: 'avatars' });

		const response = await upload({ file, bucketId: 'avatars' });

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
					// addNotification('Avatar successfully updated', 'success');
					showSuccessNotification({
						title: 'Avatar updated successfully'
					});
				}
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
