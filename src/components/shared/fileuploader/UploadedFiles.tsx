import { Flex, Icon } from '@chakra-ui/react';
import { DeleteButton } from '@components/buttons';
import { CaptionLabel } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useFileUploader } from '@hooks/util';
import { formatTimestamp } from '@utils/validators';
import React, { memo } from 'react';
import { IoDocumentSharp } from 'react-icons/io5';
import { IUploadedFileProps } from '../../../types/upload';

interface Props {
	defaultFiles: Array<IUploadedFileProps>;
	onComplete?: (files: Array<IUploadedFileProps>) => void;
}

export const UploadedFiles = memo((props: Props) => {
	const { defaultFiles } = props;
	const { uploadedFiles, onDelete } = useFileUploader();

	// useEffect(() => {
	// 	if (uploadedFiles.length) onComplete?.(uploadedFiles);
	// 	if (isDeleted) onComplete?.([]);
	// }, [uploadedFiles, isDeleted, onComplete]);

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
});

export default UploadedFiles;
