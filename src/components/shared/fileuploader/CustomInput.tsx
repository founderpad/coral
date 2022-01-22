import { Flex, Icon, Text } from '@chakra-ui/react';
import { CaptionLabel } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { useFileUploader } from '@hooks/util';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadSharp } from 'react-icons/io5';
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
		(acceptedFiles: Array<File>, fileRejections) => {
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
		[attachedFiles]
	);

	const { getRootProps, getInputProps } = useDropzone({
		accept: '.pdf, .doc, .docx, .txt',
		maxSize: 5242880,
		onDrop
	});

	if (attachedFiles.length) return null;
	if (uploadedFiles.length | defaultFiles.length) return null;

	return (
		<React.Fragment>
			<FlexLayout
				d={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				boxSize={'125px'}
				p={2}
				bgColor={'gray.100'}
				border={'2px dashed'}
				borderColor={'gray.300'}
				_hover={{ borderColor: 'gray.400' }}
				as="section"
				cursor={'pointer'}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				<Flex
					as="p"
					color={'gray.400'}
					alignItems={'center'}
					flexDirection={'column'}
				>
					<Icon
						as={IoCloudUploadSharp}
						fontSize={'x-large'}
						mb={2}
						color={'gray.400'}
					/>
					<Text color={'gray.500'} fontSize={'sm'}>
						Upload
					</Text>
				</Flex>
			</FlexLayout>

			<CaptionLabel
				fontSize={'smaller'}
				color={error ? 'red.500' : 'gray.400'}
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
