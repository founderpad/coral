import { AlertFeedback } from '@components/alert';
import { AppDivider, FileUploader } from '@components/shared';
import {
	TUser_Profile,
	useHideResumeMutation,
	useUpdateResumeMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { cache } from '@pages/_app';
import { formatUploadedUrls, redirectTo } from '@utils/validators';
import gql from 'graphql-tag';
import React, { useCallback } from 'react';
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
				hideResume
			}
		`
	}) as TUser_Profile;

	const isUploadSuccess = useQueryParam('ru_success');
	const isUploadError = useQueryParam('ru_error');
	const isDeleteSuccess = useQueryParam('rd_success');
	const isDeleteError = useQueryParam('rd_error');

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
				if (uploadedFiles.length) {
					redirectTo(false, 'ru');
				} else {
					redirectTo(false, 'rd');
				}
			},
			onError: () => {
				if (uploadedFiles.length) {
					redirectTo(true, 'ru');
				} else {
					redirectTo(true, 'rd');
				}
			}
		});
	};

	const defaultFiles = formatUploadedUrls(
		userProfile?.resume ? [userProfile?.resume] : []
	);

	return (
		<React.Fragment>
			<FileUploader
				label="Resume"
				defaultFiles={defaultFiles}
				bucketId="resumes"
				showUpload={true}
				onComplete={onComplete}
			/>
			<AppDivider />

			{(isUploadSuccess || isDeleteSuccess) && (
				<AlertFeedback
					status="success"
					message={`Resume has been ${
						isUploadSuccess ? 'added' : 'deleted'
					} successfully`}
				/>
			)}

			{(isUploadError || isDeleteError) && (
				<AlertFeedback
					status="error"
					message={`Failed to ${
						isUploadError ? 'add' : 'delete'
					} resume. Please try again later`}
				/>
			)}
		</React.Fragment>
	);
};

export default ResumeUploader;
