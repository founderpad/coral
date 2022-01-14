import { Box, Flex, Text } from '@chakra-ui/layout';
import { BoxProps, ButtonGroup, Icon } from '@chakra-ui/react';
import { PrimaryButton } from 'components/buttons';
import { DeleteButton } from 'components/buttons/DeleteButton';
import { FormLabelText } from 'components/form';
import {
	IoCheckmarkCircleSharp,
	IoCloudUploadSharp,
	IoDocumentSharp
} from 'components/icons';
import { CaptionLabel } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PrimaryLink } from 'components/links';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PointSeparator } from './Separators';

type Props = BoxProps & {
	label?: any;
	defaultSrc?: string;
	onUpload: (file: File) => void;
	onDelete: (fileId: string) => void;
};

export const FileUploader = (props: Props) => {
	const { label, defaultSrc, onUpload, onDelete } = props;
	const [myFiles, setMyFiles] = useState([]);
	const [error, setError] = useState<string>(undefined);

	// const onDrop = useCallback(
	// 	(acceptedFiles) => {
	// 		setMyFiles([...myFiles, ...acceptedFiles]);
	// 	},
	// 	[myFiles]
	// );

	const onDrop = useCallback(
		(acceptedFiles, fileRejections) => {
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
			setMyFiles([...myFiles, ...acceptedFiles]);
		},
		[myFiles]
	);

	const { getRootProps, getInputProps } = useDropzone({
		accept: '.pdf, .doc, .docx, .txt',
		maxSize: 5242880,
		onDrop
	});

	const onRemoveFile = (file: File) => () => {
		const newFiles = [...myFiles];
		newFiles.splice(newFiles.indexOf(file), 1);
		setMyFiles(newFiles);
		setError(undefined);
	};

	const files = myFiles.map((file: File, index: number) => {
		return (
			<StackLayout w={'full'} spacing={0} key={index}>
				<FormLabelText label={label} />
				<FlexLayout
					justifyContent={'space-between'}
					alignItems={'center'}
					w={'full'}
				>
					<StackLayout
						direction={'row'}
						spacing={0}
						alignItems={'center'}
					>
						<Icon
							as={IoCheckmarkCircleSharp}
							mr={2}
							color={'green.500'}
							fontSize={'large'}
						/>
						<Text color={'fpGrey.900'} fontSize={'smaller'}>
							{file.name}
						</Text>
						<PointSeparator small />
						<Text color={'fpGrey.500'} fontSize={'xs'}>
							{file.size}b
						</Text>
					</StackLayout>
					<ButtonGroup
						display={'flex'}
						spacing={4}
						mt={{ base: 2, sm: 0 }}
					>
						<PrimaryButton
							name={'upload-button'}
							onClick={() => onUpload(file)}
							variant={'outline'}
							fontSize={'xs'}
							size={'xs'}
						>
							Upload
						</PrimaryButton>

						<DeleteButton
							name={'remove-file'}
							onClick={onRemoveFile(file)}
							variant={'outline'}
							fontSize={'xs'}
							size={'xs'}
						>
							Remove
						</DeleteButton>
					</ButtonGroup>
				</FlexLayout>
			</StackLayout>
		);
	});

	const onDeleteFile = useCallback((path: string) => {
		setMyFiles([]);
		onDelete(path);
	}, []);

	return (
		<Box py={4} w={'full'}>
			{defaultSrc ? (
				<AddedFile
					src={defaultSrc}
					onDelete={onDeleteFile}
					label={label}
				/>
			) : (
				files.length > 0 && <FilesList files={files} />
			)}
			{!defaultSrc && !files.length && (
				<>
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
								{label}
							</Text>
						</Flex>
					</FlexLayout>

					<CaptionLabel
						fontSize={'smaller'}
						color={error ? 'red.500' : 'gray.400'}
						mt={2}
					>
						{error ?? (
							<>
								Max file size: 5mb
								<br />
								Supported formats: .pdf, .doc, .docx, .txt
							</>
						)}
					</CaptionLabel>
				</>
			)}
		</Box>
	);
};

const FilesList = ({ files }: { files: JSX.Element[] }) => (
	<Flex as={'aside'} mb={0} alignItems={'center'}>
		{files}
	</Flex>
);

const AddedFile = ({
	src,
	onDelete,
	label
}: {
	src: string;
	onDelete: (src: string) => void;
	label: string;
}) => (
	<Flex justifyContent={'space-between'} alignItems={'center'}>
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
			/>
			<Flex flexDirection={'column'}>
				<PrimaryLink
					fontSize={'smaller'}
					title={'View file'}
					href={src}
					isExternal
				>
					{/* View */}
					{label}
				</PrimaryLink>
				<CaptionLabel>
					{/* Added {formatTimestamp(src?.split('?v=')[1])} */}
				</CaptionLabel>
			</Flex>
		</StackLayout>
		<DeleteButton
			name={'delete-file-button'}
			variant={'ghost'}
			onClick={() => onDelete(src)}
		>
			Delete
		</DeleteButton>
	</Flex>
);
