import FileUploadContext from '@context/FileUploadContext';
import { storage } from '@utils/nhost';
import React, { useCallback, useState } from 'react';
import {
	IFileUploadProps,
	IStorageBucket,
	IUploadedFileProps
} from '../types/upload';

const FileUploadProvider = ({ children }: { children: React.ReactNode }) => {
	const [attachedFiles, setAttachedFiles] = useState<Array<IFileUploadProps>>(
		[]
	);

	const [isDeleted, setIsDeleted] = useState(false);

	const [uploadedFiles, setUploadedFiles] = useState<
		Array<IUploadedFileProps>
	>([]);

	const addAttachedFile = (fileToAttach: IFileUploadProps) => {
		setAttachedFiles([...attachedFiles, fileToAttach]);
	};

	const addAttachedFiles = (filesToAttach: Array<IFileUploadProps>) => {
		setAttachedFiles([...attachedFiles, ...filesToAttach]);
	};

	const removeAttachedFile = (removeFile: IFileUploadProps) => {
		setAttachedFiles((attachedFiles) =>
			attachedFiles.filter((af) => af.file !== removeFile.file)
		);
	};

	const onUpload = async () => {
		let storageFiles: IUploadedFileProps[] = [];
		for (const attachedFile of attachedFiles) {
			const response = await storage.upload({
				file: attachedFile.file,
				name: attachedFile.file.name,
				bucketId: attachedFile.bucketId
			});

			if (response.error) throw 'Failed to upload file';

			if (response.fileMetadata) {
				const { id, name, bucketId } = response.fileMetadata;
				const fileUrl = storage.getUrl({ fileId: id });

				if (!fileUrl) throw 'Failed to get file from server';

				storageFiles.push({
					fileId: id,
					bucketId: bucketId as IStorageBucket,
					fileName: name,
					fileUrl,
					uploadedAt: new Date().getTime().toString()
				});
			}
		}
		setAttachedFiles([]);
		setUploadedFiles(storageFiles);
	};

	const onDelete = async (fileId: string) => {
		await storage.delete({ fileId });

		setUploadedFiles((uploadedFiles) =>
			uploadedFiles.filter((uf) => uf.fileId !== fileId)
		);

		setIsDeleted(true);
	};

	const value = {
		attachedFiles,
		addAttachedFile: useCallback(
			(attachedFile: IFileUploadProps) => addAttachedFile(attachedFile),
			[]
		),
		addAttachedFiles: useCallback(
			(attachedFiles: Array<IFileUploadProps>) =>
				addAttachedFiles(attachedFiles),
			[]
		),
		removeAttachedFile: useCallback(
			(removeFile: IFileUploadProps) => removeAttachedFile(removeFile),
			[]
		),
		onUpload,
		onDelete,
		isDeleted,
		uploadedFiles
	};

	return (
		<FileUploadContext.Provider value={value}>
			{children}
		</FileUploadContext.Provider>
	);
};

export default FileUploadProvider;
