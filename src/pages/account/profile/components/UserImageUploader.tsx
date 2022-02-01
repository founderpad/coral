import { UserAvatar } from '@components/shared';
import ImageUploader from '@components/shared/imageuploader/ImageUploader';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useUpdateUserAvatarMutation } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useSuccessNotification } from '@hooks/toast';
import { useFileUpload } from '@hooks/util';
import { updateUserImage } from '@slices/auth';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

const UserImageUploader = () => {
	const dispatch = useDispatch();
	const avatarUrl = useCurrentUser()?.avatarUrl;
	const id = useCurrentUser()?.id;
	const { setModalDrawer } = useContext(ModalDrawerContext);
	// const { addNotification } = useNotification();
	const showSuccessNotification = useSuccessNotification();

	const uploadAvatar = useFileUpload();
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
		const avatarUrl = await uploadAvatar({ file, bucketId: 'avatars' });

		await updateAvatar({
			variables: {
				id,
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
				setModalDrawer({ isOpen: false });
			}
		});
	};

	return (
		<ImageUploader
			title="Edit profile photo"
			boxSize={140}
			onUpload={onUpload}
			defaultSrc={avatarUrl ?? undefined}
		>
			<UserAvatar
				src={avatarUrl ?? undefined}
				boxSize={140}
				aria-label="Edit profile picture"
			/>
		</ImageUploader>
	);
};

export default UserImageUploader;
