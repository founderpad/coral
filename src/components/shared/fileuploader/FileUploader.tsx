import FileUploadProvider from '@provider/FileUploadProvider';
import React from 'react';
import { IStorageBucket, IUploadedFileProps } from '../../../types/upload';
import AttachedFiles from './AttachedFiles';
import { CustomInput } from './CustomInput';
import UploadedFiles from './UploadedFiles';

interface Props {
	label?: any;
	defaultSrc?: string;
	showUpload?: boolean;
	defaultFiles?: Array<IUploadedFileProps>;
	onComplete?: (files: Array<IUploadedFileProps>) => void;
	bucketId: IStorageBucket;
}

export const FileUploader = (props: Props) => {
	const { showUpload, defaultFiles = [], onComplete, bucketId } = props;

	return (
		<FileUploadProvider>
			<CustomInput bucketId={bucketId} defaultFiles={defaultFiles} />
			<AttachedFiles showUpload={showUpload} />
			<UploadedFiles
				defaultFiles={defaultFiles}
				onComplete={onComplete}
			/>
		</FileUploadProvider>
	);
};

export default FileUploader;
