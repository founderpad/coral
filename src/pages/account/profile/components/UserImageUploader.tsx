import { UserAvatar } from 'components/shared';
import ImageUploader from 'components/shared/imageuploader/ImageUploader';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useUpdateUserPersonalDetailsMutation } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useSuccessNotification } from 'hooks/toast';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserImage } from 'slices/auth';
import { auth, storage } from 'utils/nhost';

const UserImageUploader = (): JSX.Element => {
	const dispatch = useDispatch();
	const { id, avatar_url } = useCurrentUser();
	const [filePath, setFilePath] = useState(undefined);
	const showSuccessNotification = useSuccessNotification();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	useEffect(() => {
		if (filePath) updateAvatar();
	}, [filePath]);

	const [updateAvatar] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id: auth.getClaim('x-hasura-user-id') as string,
			userPersonalDetails: {
				avatar_url:
					'https://backend-19728797.nhost.app/storage/o' + filePath
			}
		},
		onCompleted: (_data) => {
			dispatch(
				updateUserImage(
					'https://backend-19728797.nhost.app/storage/o' + filePath
				)
			);
			// console.log('completed data: ', _data);
			// console.log(
			// 	'image url: ',
			// 	'https://backend-19728797.nhost.app/storage/o' + filePath
			// );
			showSuccessNotification({
				title: 'Your avatar has been updated'
			});
			setModalDrawer({ isOpen: false });
		}
	});

	const uploadUserImage = async (image: File) => {
		const extension = image?.name.split('.').pop();
		const timestamp = new Date().getTime();

		const filePath = `/public/avatars/${id}.${extension}?v=` + timestamp;

		await storage.put(filePath, image, null, (_d: any) => {
			setFilePath(filePath);
		});
	};

	return (
		<ImageUploader
			title="Edit profile photo"
			boxSize={140}
			onUpload={uploadUserImage}
			defaultSrc={avatar_url}
		>
			<UserAvatar
				src={avatar_url}
				boxSize={140}
				aria-label="Edit profile picture"
			/>
		</ImageUploader>
	);
};

export default UserImageUploader;
