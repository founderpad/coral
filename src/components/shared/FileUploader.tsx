import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { BoxProps, Icon } from '@chakra-ui/react';
import { PrimaryButton } from 'components/buttons';
import { DeleteButton } from 'components/buttons/DeleteButton';
import { FlexLayout } from 'components/layouts';
import { PrimaryLink } from 'components/links';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
	IoCheckmarkCircleSharp,
	IoCloudUploadSharp,
	IoDocumentSharp
} from 'react-icons/io5';
import { formatTimestamp } from 'utils/validators';
import { PointSeparator } from './Separators';

type Props = BoxProps & {
	label?: any;
	defaultSrc?: string;
	onUpload: (file: File) => void;
	onDelete: (path: string) => void;
};

export const FileUploader = (props: Props): JSX.Element => {
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

	const files = myFiles.map((file: File) => {
		return (
			<Flex
				key={file.name}
				justifyContent={'space-between'}
				w={'full'}
				alignItems={'center'}
				flex={1}
			>
				<Flex alignItems={'center'}>
					<Icon
						as={IoCheckmarkCircleSharp}
						mr={2}
						color={'green.500'}
						fontSize={'large'}
					/>
					<Text color={'fpGrey.500'}>{file.name}</Text>
					<PointSeparator />
					<Text color={'fpGrey.500'}>{file.size}b</Text>
				</Flex>
				<HStack spacing={4}>
					<PrimaryButton
						name={'upload-button'}
						onClick={() => onUpload(file)}
					>
						Upload
					</PrimaryButton>

					<DeleteButton
						name={'remove-file'}
						onClick={onRemoveFile(file)}
						variant={'outline'}
					>
						Remove
					</DeleteButton>
				</HStack>
			</Flex>
		);
	});

	const onDeleteFile = useCallback((path: string) => {
		setMyFiles([]);
		onDelete(path);
	}, []);

	return (
		<Box py={4}>
			{defaultSrc ? (
				<AddedFile
					src={defaultSrc}
					onDelete={(src) => onDeleteFile(src)}
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

					<Text
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
					</Text>
				</>
			)}
		</Box>
	);
};

const FilesList = ({ files }: { files: JSX.Element[] }): JSX.Element => (
	<Flex as={'aside'} mb={8} alignItems={'center'}>
		{files}
	</Flex>
);

const AddedFile = ({
	src,
	onDelete
}: {
	src: string;
	onDelete: (src: string) => void;
}) => (
	<Flex justifyContent={'space-between'} alignItems={'center'}>
		<HStack alignItems={'center'}>
			<Icon
				as={IoDocumentSharp}
				color={'gray.400'}
				fontSize={'xx-large'}
			/>
			<Flex flexDirection={'column'}>
				<PrimaryLink
					title={'View file'}
					href={process.env.NEXT_PUBLIC_STORAGE_URL + src}
					isExternal
				>
					View
				</PrimaryLink>
				<Text color={'gray.400'} fontSize={'xs'}>
					Added {formatTimestamp(src?.split('?v=')[1])}
				</Text>
			</Flex>
		</HStack>
		<DeleteButton
			name={'delete-file-button'}
			variant={'ghost'}
			onClick={() => onDelete(src)}
		>
			Delete
		</DeleteButton>
	</Flex>
);
