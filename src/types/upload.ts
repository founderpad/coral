export interface IFileProps {
	bucketId?: 'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks' | string;
	fileName?: string;
}

export interface IFileUploadProps extends IFileProps {
	file: File;
}

export interface IUploadedFileProps extends IFileProps {
	fileId: string;
	fileUrl: string;
	uploadedAt: string;
}
