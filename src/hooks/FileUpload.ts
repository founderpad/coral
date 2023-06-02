import { storage } from '@/pages/_app';
import { StorageUploadFileParams } from '@nhost/nhost-js';
import { useMemo } from 'react';
import { useNotification } from './util';

type StorageUploadFileParamsWithValidBucketId = Omit<
	StorageUploadFileParams,
	'bucketId'
> & {
	bucketId: 'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks';
};

export const useFileUpload = () => {
	const uploadAvatar = async ({
		file,
		bucketId
	}: StorageUploadFileParamsWithValidBucketId) => {
		const response = await storage.upload({
			file,
			name: `${file.name.split('.')[0]}-${new Date().getTime()}`,
			bucketId
		});
		const fileId = response.fileMetadata?.id;
		if (fileId) return storage.getPublicUrl({ fileId });
		return null;
	};

	return { uploadAvatar };
};

export const useFileDelete = () => {
	return ({ fileId }: { fileId: string }) => {
		return storage.delete({ fileId });
	};
};

type BucketId = 'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks';
type FileWithBucketId = { file: File; bucketId: BucketId };

const createFileName = (name: string) => {
	return `${name.split('.')[0]}-${new Date().getTime()}`;
};

const upload = async (fileWithBucketId: FileWithBucketId) => {
	const { bucketId, file } = fileWithBucketId;
	return await storage.upload({
		file,
		name: createFileName(file.name),
		bucketId
	});
};

export const useFileUploader = () => {
	// const [fileUrls, setFileUrls] = useState<string[]>([]);
	const { addNotification } = useNotification();

	const uploadSingleFile = useMemo(
		() => async (fileWithBucketId: FileWithBucketId) => {
			try {
				const response = await upload(fileWithBucketId);

				if (response.error) {
					throw new Error(
						'Failed to upload your file. Please try again later.'
					);
				}

				const fileId = response.fileMetadata?.id;
				if (fileId) return storage.getPublicUrl({ fileId });
			} catch (error: unknown) {
				if (error instanceof Error) {
					addNotification({
						message: error.message,
						status: 'error'
					});
				}
			}
		},
		[addNotification]
	);

	const uploadFiles = useMemo(
		() => async (filesWithBucketId: FileWithBucketId[]) => {
			const results = await Promise.all(
				filesWithBucketId.map(async (fileWithBucket) => {
					const { bucketId, file } = fileWithBucket;
					const response = await storage.upload({
						file,
						name: createFileName(file.name),
						bucketId
					});

					return response;
				})
			);

			console.log('results: ', results);
		},
		[]
	);

	const deleteFile = () => {};

	return { uploadSingleFile, uploadFiles, deleteFile };
};
