import { UserAvatar } from 'components/shared';
import ImageUploader from 'components/shared/imageuploader/ImageUploader';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useUpdateUserPersonalDetailsMutation } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useSuccessNotification } from 'hooks/toast';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserImage } from 'slices/auth';

const UserImageUploader = (): JSX.Element => {
	const dispatch = useDispatch();
	const { id, avatarUrl } = useCurrentUser();
	// const [filePath, setFilePath] = useState(undefined);
	const [filePath] = useState(undefined);

	const showSuccessNotification = useSuccessNotification();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	useEffect(() => {
		if (filePath) updateAvatar();
	}, [filePath]);

	const [updateAvatar] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id,
			userPersonalDetails: {
				avatarUrl:
					'https://backend-19728797.nhost.app/storage/o' + filePath
			}
		},
		onCompleted: (_data) => {
			dispatch(
				updateUserImage(
					'https://backend-19728797.nhost.app/storage/o' + filePath
				)
			);

			showSuccessNotification({
				title: 'Your avatar has been updated'
			});
			setModalDrawer({ isOpen: false });
		}
	});

	const uploadUserImage = async (_image: File) => {
		// const extension = image?.name.split('.').pop();
		// const timestamp = new Date().getTime();
		// const filePath = `/public/avatars/${id}.${extension}?v=` + timestamp;
		// await storage.put(filePath, image, null, (_d: any) => {
		// 	setFilePath(filePath);
		// });
	};

	return (
		<ImageUploader
			title="Edit profile photo"
			boxSize={140}
			onUpload={uploadUserImage}
			defaultSrc={avatarUrl}
		>
			<UserAvatar
				src={avatarUrl}
				boxSize={140}
				aria-label="Edit profile picture"
			/>
		</ImageUploader>
	);
};

export default UserImageUploader;
