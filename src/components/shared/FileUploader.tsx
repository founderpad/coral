import { BoxProps, ButtonGroup, Flex, Icon, Text } from '@chakra-ui/react';
import { DeleteButton, PrimaryButton } from '@components/buttons';
import { CaptionLabel } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useFileUploader } from '@hooks/util';
import FileUploadProvider from '@provider/FileUploadProvider';
import { formatTimestamp } from '@utils/validators';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
	IoCheckmarkCircleSharp,
	IoCloudUploadSharp,
	IoDocumentSharp
} from 'react-icons/io5';
import { PointSeparator } from '.';
import { IFileUploadProps, IUploadedFileProps } from '../../types/upload';

type Props = BoxProps & {
	label?: any;
	defaultSrc?: string;
	bucketId: 'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks';
	showUpload?: boolean;
	defaultFiles?: Array<IUploadedFileProps>;
	onComplete?: (files: Array<IUploadedFileProps>) => void;
};

export const FileUploader = (props: Props) => {
	const { bucketId, showUpload, defaultFiles = [], onComplete } = props;

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

const CustomInput = ({
	bucketId,
	defaultFiles
}: {
	bucketId: 'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks';
	defaultFiles: Array<IUploadedFileProps>;
}) => {
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

const AttachedFiles = ({ showUpload }: { showUpload?: boolean }) => {
	const { attachedFiles, onUpload, removeAttachedFile, uploadedFiles } =
		useFileUploader();

	// if (!attachedFiles.length && uploadedFiles.length) return null;

	if (!attachedFiles.length) return null;
	if (uploadedFiles.length) return null;

	return (
		<React.Fragment>
			{attachedFiles.map((uf) => (
				<StackLayout w={'full'} spacing={0} key={uf.file.name}>
					<FlexLayout
						justifyContent={'space-between'}
						alignItems={'center'}
						w={'full'}
					>
						<AttachedFile name={uf.file.name} size={uf.file.size} />
						<ButtonGroup
							display={'flex'}
							spacing={4}
							mt={{ base: 2, sm: 0 }}
						>
							{showUpload && (
								<PrimaryButton
									name={'Upload'}
									variant={'outline'}
									fontSize={'xs'}
									size={'xs'}
									onClick={onUpload}
								>
									Upload
								</PrimaryButton>
							)}
							<DeleteButton
								name={'remove-file'}
								onClick={() => removeAttachedFile(uf)}
								variant={'outline'}
								fontSize={'xs'}
								size={'xs'}
							>
								Remove
							</DeleteButton>
						</ButtonGroup>
					</FlexLayout>
				</StackLayout>
			))}
		</React.Fragment>
	);
};

const AttachedFile = ({ name, size }: { name: string; size: number }) => (
	<StackLayout direction={'row'} spacing={0} alignItems={'center'}>
		<Icon
			as={IoCheckmarkCircleSharp}
			mr={2}
			color={'green.500'}
			fontSize={'large'}
		/>
		<Text color={'fpGrey.900'} fontSize={'smaller'}>
			{name}
		</Text>
		<PointSeparator small />
		<Text color={'fpGrey.500'} fontSize={'xs'}>
			{size}b
		</Text>
	</StackLayout>
);

const UploadedFiles = ({
	defaultFiles,
	onComplete
}: {
	defaultFiles: Array<IUploadedFileProps>;
	onComplete?: (files: Array<IUploadedFileProps>) => void;
}) => {
	const { uploadedFiles, onDelete, isDeleted } = useFileUploader();

	useEffect(() => {
		if (uploadedFiles.length) onComplete?.(uploadedFiles);
		if (isDeleted) onComplete?.([]);
	}, [uploadedFiles, isDeleted]);

	const files = defaultFiles.length ? defaultFiles : uploadedFiles;

	if (!files.length) return null;

	return (
		<React.Fragment>
			{files.map((f) => (
				<FlexLayout
					key={f.fileId}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<StackLayout
						alignItems={'center'}
						direction={'row'}
						flex={1}
						spacing={0}
					>
						<Icon
							as={IoDocumentSharp}
							color={'gray.400'}
							fontSize={'xx-large'}
							mr={3}
						/>
						<Flex flexDirection={'column'}>
							<PrimaryLink
								fontSize={'smaller'}
								title={'View file'}
								href={f.fileUrl}
								isExternal
							>
								View
							</PrimaryLink>
							<CaptionLabel>
								Added {formatTimestamp(f.uploadedAt)}
							</CaptionLabel>
						</Flex>
					</StackLayout>
					<DeleteButton
						name={'delete-file-button'}
						variant={'ghost'}
						onClick={() => onDelete(f.fileId)}
					>
						Delete
					</DeleteButton>
				</FlexLayout>
			))}
		</React.Fragment>
	);
};
