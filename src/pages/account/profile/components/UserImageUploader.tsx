import { UserAvatar } from '@components/shared';
import ImageUploader from '@components/shared/imageuploader/ImageUploader';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useUpdateUserAvatarMutation } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useFileUpload, useNotification } from '@hooks/util';
import { updateUserImage } from '@slices/auth';
import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';

const UserImageUploader = () => {
	const dispatch = useDispatch();
	const avatarUrl = useCurrentUser()?.avatarUrl;
	const id = useCurrentUser()?.id;
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const { addNotification } = useNotification();

	const uploadAvatar = useFileUpload();
	const [updateAvatar] = useUpdateUserAvatarMutation();

	const onUpload = useCallback(
		async (file: File) => {
			const filePath = await uploadAvatar({ file, bucketId: 'avatars' });

			await updateAvatar({
				variables: {
					id,
					userDetails: {
						avatarUrl: filePath
					}
				},
				onCompleted: (_data) => {
					if (filePath) dispatch(updateUserImage(filePath));
					addNotification('Avatar successfully updated', 'success');
					setModalDrawer({ isOpen: false });
				}
			});
		},
		[
			addNotification,
			dispatch,
			id,
			setModalDrawer,
			updateAvatar,
			uploadAvatar
		]
	);

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
