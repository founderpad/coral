import { FileUploader } from 'components/shared';
import { TUser_Profile, useUpdateResumeMutation } from 'generated/graphql';
import gql from 'graphql-tag';
import { useCurrentUser } from 'hooks/auth';
import { useSuccessNotification } from 'hooks/toast';
import { cache } from 'pages/_app';
import { useEffect, useState } from 'react';
import { auth, storage } from 'utils/nhost';

const ResumeUploader = (): JSX.Element => {
	const showSuccessNotification = useSuccessNotification();
	const [filePath, setFilePath] = useState(undefined);
	const { user_profile } = useCurrentUser();

	const userProfile = cache.readFragment({
		id: `user_profile:${user_profile.id}`, // The value of the profile's cache id
		fragment: gql`
			fragment ResumeFragment on user_profile {
				id
				resume
			}
		`
	}) as TUser_Profile;

	useEffect(() => {
		if (filePath !== undefined) updateResumeMutation();
	}, [filePath]);

	const [updateResumeMutation] = useUpdateResumeMutation({
		variables: {
			id: user_profile.id,
			resume: {
				resume: filePath
			}
		},
		onCompleted: (_data) => {
			showSuccessNotification({
				title: `Your resume has been ${
					filePath ? 'updated' : 'deleted'
				}`
			});
		}
	});

	const uploadResume = async (resume: File) => {
		const extension = resume?.name.split('.').pop();
		const timestamp = new Date().getTime();
		const filePath =
			`/public/resumes/${
				auth.getClaim('x-hasura-user-id') as string
			}.${extension}?v=` + timestamp;

		console.log('resume: ', resume);

		try {
			await storage.put(filePath, resume, null, (_d: any) => {
				setFilePath(filePath);
			});
		} catch (e) {
			console.error(e);
		}
	};

	const deleteResume = async (path: string) => {
		try {
			await storage.delete(path);
			setFilePath(null);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<FileUploader
			boxSize={125}
			pt={4}
			label={'Drag/drop here'}
			defaultSrc={userProfile?.resume}
			onUpload={uploadResume}
			onDelete={deleteResume}
		/>
	);
};

export default ResumeUploader;
