import { Flex, Icon } from '@chakra-ui/react';
import { CaptionLabel, Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import { useFileUploader } from '@/hooks/util';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from 'react-icons/io5';
import {
	IFileUploadProps,
	IStorageBucket,
	IUploadedFileProps
} from '../../../types/upload';

interface Props {
	defaultFiles: Array<IUploadedFileProps>;
	bucketId: IStorageBucket;
}

export const CustomInput = (props: Props) => {
	const { bucketId, defaultFiles } = props;
	const [error, setError] = useState('');
	const { attachedFiles, addAttachedFiles, uploadedFiles } =
		useFileUploader();

	const onDrop = useCallback(
		(acceptedFiles: Array<File>, fileRejections: any[]) => {
			fileRejections.forEach((file: any) => {
				file.errors.forEach((err: any) => {
					if (err.code === 'file-too-large') {
						setError(`The file must have a maximum size of 5mb.`);
					}

					if (err.code === 'file-invalid-type') {
						setError(
							`This file must be of type .pdf, .doc, .docx, or .txt.`
						);
					}
				});
			});

			const filesToUpload: Array<IFileUploadProps> = [];
			for (const file of acceptedFiles) {
				filesToUpload.push({ file, bucketId });
			}

			addAttachedFiles(filesToUpload);
		},
		[addAttachedFiles, bucketId]
	);

	const { getRootProps, getInputProps } = useDropzone({
		// accept: '.pdf, .doc, .docx, .txt',
		// accept: {
		// 	'application/pdf': ['.pdf'],
		// 	'text/plain': ['.txt'],
		// 	'application/msword': ['.doc'],
		// 	'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
		// 		['.docx']
		// },
		accept: {
			'application/*': ['.pdf', '.doc', 'docx'],
			'text/plain': ['.txt']
		},
		maxSize: 5242880,
		onDrop
	});

	if (attachedFiles.length) return null;
	if (uploadedFiles.length | defaultFiles.length) return null;

	return (
		<React.Fragment>
			<FlexLayout
				display="flex"
				justifyContent="center"
				alignItems="center"
				boxSize="100px"
				p={2}
				bgColor="fpLightGrey.300"
				border="2px dashed"
				borderColor="fpLightGrey.900"
				_hover={{ borderColor: 'gray.300' }}
				as="section"
				cursor="pointer"
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				<Flex
					as="p"
					color="gray.400"
					alignItems="center"
					flexDirection="column"
				>
					<Icon as={IoCloudUploadOutline} fontSize="x-large" mb={2} />
					<Label fontSize="xs" color="gray.400">
						Upload
					</Label>
				</Flex>
			</FlexLayout>

			<CaptionLabel
				fontSize="smaller"
				color={error ? 'red.500' : 'fpGrey.900'}
				mt={2}
			>
				<React.Fragment>
					Max file size: 5mb
					<br />
					Supported formats: .pdf, .doc, .docx, .txt
				</React.Fragment>
			</CaptionLabel>
		</React.Fragment>
	);
};
