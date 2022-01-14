import { FileUploader } from 'components/shared';
import { TUser_Profile, useUpdateResumeMutation } from 'generated/api';
import gql from 'graphql-tag';
import { useCurrentUser } from 'hooks/auth';
import { useFileDelete, useFileUpload, useNotification } from 'hooks/util';
import { cache } from 'pages/_app';
import { useCallback } from 'react';

const ResumeUploader = () => {
	// const showSuccessNotification = useSuccessNotification();
	// const [filePath, setFilePath] = useState(undefined);
	// const dispatch = useDispatch();
	const { profile, avatarUrl } = useCurrentUser();
	const { addNotification } = useNotification();

	const userProfile = cache.readFragment({
		id: `user_profile:${profile.id}`, // The value of the profile's cache id
		fragment: gql`
			fragment ResumeFragment on user_profile {
				id
				resume
			}
		`
	}) as TUser_Profile;

	// useEffect(() => {
	// 	if (filePath !== undefined) updateResumeMutation();
	// }, [filePath]);

	const uploadResume = useFileUpload();
	const deleteResume = useFileDelete();
	const [updateResume] = useUpdateResumeMutation();

	// const [updateResumeMutation] = useUpdateResumeMutation({
	// 	variables: {
	// 		id: profile.id,
	// 		resume: {
	// 			resume: filePath
	// 		}
	// 	},
	// 	onCompleted: (_data) => {
	// 		showSuccessNotification({
	// 			title: `Your resume has been ${
	// 				filePath ? 'updated' : 'deleted'
	// 			}`
	// 		});
	// 	}
	// });

	// const uploadResume = async (_resume: File) => {
	// const extension = resume?.name.split('.').pop();
	// const timestamp = new Date().getTime();
	// const filePath =
	// 	`/public/resumes/${
	// 		auth.getClaim('x-hasura-user-id') as string
	// 	}.${extension}?v=` + timestamp;
	// try {
	// 	await storage.put(filePath, resume, null, (_d: any) => {
	// 		setFilePath(filePath);
	// 	});
	// } catch (e) {
	// 	console.error(e);
	// }
	// };

	const onDelete = useCallback(async (filePath: string) => {
		const fileId = filePath.toString().split('files/')[1];
		await deleteResume({ fileId });

		// updateResume({
		// 	variables: {
		// 		id: profile.id,
		// 		resume: {
		// 			resume: ''
		// 		}
		// 	},
		// 	onCompleted: (_data) => {
		// 		addNotification('Resume deleted successfully.', 'success');
		// 		dispatch(updateUserImage(''));
		// 	},
		// 	onError: (_data) => {
		// 		addNotification(
		// 			'Failed to delete resume. Please try again later.',
		// 			'error'
		// 		);
		// 	}
		// });
	}, []);

	const onUpload = useCallback(async (file: File) => {
		const filePath = await uploadResume({
			file,
			bucketId: 'resumes',
			fileName: 'Resume'
		});

		await updateResume({
			variables: {
				id: profile.id,
				resume: {
					resume: filePath
				}
			},
			onCompleted: (_data) => {
				addNotification(
					`Resume successfully ${avatarUrl ? 'updated' : 'added'}`,
					'success'
				);
			}
		});
	}, []);

	return (
		<FileUploader
			boxSize={100}
			label={'Drag/drop here'}
			defaultSrc={userProfile?.resume}
			onUpload={onUpload}
			onDelete={onDelete}
		/>
	);
};

export default ResumeUploader;
