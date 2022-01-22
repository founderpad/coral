export interface IFileProps {
	fileName?: string;
	bucketId?: IStorageBucket;
}

export interface IFileUploadProps extends IFileProps {
	file: File;
}

export interface IUploadedFileProps extends IFileProps {
	fileId: Readonly<string>;
	fileUrl: Readonly<string>;
	uploadedAt: Readonly<string>;
}

export type IStorageBucket = Readonly<
	'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks'
>;
