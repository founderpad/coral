import { AlertFeedback } from '@components/alert';
import { FileUploader } from '@components/shared';
import { TUser_Profile, useUpdateResumeMutation } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { cache } from '@pages/_app';
import { formatUploadedUrls, redirectTo } from '@utils/validators';
import gql from 'graphql-tag';
import { IUploadedFileProps } from '../../../../types/upload';

const ResumeUploader = () => {
	const { profile } = useCurrentUser() ?? {};
	const [updateResume] = useUpdateResumeMutation();

	const userProfile = cache.readFragment({
		id: `user_profile:${profile?.id}`, // The value of the profile's cache id
		fragment: gql`
			fragment ResumeFragment on user_profile {
				id
				resume
			}
		`
	}) as TUser_Profile;

	const isChangeSuccess = useQueryParam('ru_success');
	const isChangeError = useQueryParam('ru_error');

	const onComplete = (uploadedFiles: IUploadedFileProps[]) => {
		updateResume({
			variables: {
				id: profile?.id,
				resume: {
					resume: uploadedFiles[0]
						? `${uploadedFiles[0].fileUrl}?v=${uploadedFiles[0].uploadedAt}`
						: null
				}
			},
			onCompleted: (_data) => {
				console.log('ppppppp');
				redirectTo(false, 'ru');
			},
			onError: () => {
				redirectTo(true, 'ru');
			}
		});
	};

	const defaultFiles = formatUploadedUrls(
		userProfile?.resume ? [userProfile?.resume] : []
	);

	return (
		<>
			<FileUploader
				label={'Resume'}
				defaultFiles={defaultFiles}
				bucketId={'resumes'}
				showUpload={true}
				onComplete={onComplete}
			/>
			{isChangeSuccess && (
				<AlertFeedback
					status={'success'}
					message={'Resume has been added successfully'}
				/>
			)}

			{isChangeError && (
				<AlertFeedback
					status={'error'}
					message={'Failed to add resume. Please try again later'}
				/>
			)}
		</>
	);
};

export default ResumeUploader;
