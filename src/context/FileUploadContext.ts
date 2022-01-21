import { createContext } from 'react';
import { IFileUploadProps, IUploadedFileProps } from '../types/upload';

const FileUploadContext = createContext({
	attachedFiles: [] as Readonly<Array<IFileUploadProps>>,
	addAttachedFile: (_attachedFile: IFileUploadProps) => {},
	addAttachedFiles: (_attachedFiles: Array<IFileUploadProps>) => {},
	removeAttachedFile: (_attachedFile: IFileUploadProps) => {},
	onUpload: () => {},
	onDelete: (_fileId: string) => {},
	isDeleted: false,
	uploadedFiles: [] as Array<IUploadedFileProps>
});

export default FileUploadContext;
