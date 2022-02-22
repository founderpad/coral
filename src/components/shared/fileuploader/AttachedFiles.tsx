import { ButtonGroup } from '@chakra-ui/react';
import { DeleteButton, PrimaryButton } from '@components/buttons';
import { FlexLayout, StackLayout } from '@components/layouts';
import { useFileUploader } from '@hooks/util';
import React, { memo } from 'react';
import AttachedFile from './AttachedFile';

export const AttachedFiles = memo(
	({ showUpload }: { showUpload?: boolean }) => {
		const { attachedFiles, onUpload, removeAttachedFile, uploadedFiles } =
			useFileUploader();

		// if (!attachedFiles.length && uploadedFiles.length) return null;

		if (!attachedFiles.length) return null;
		if (uploadedFiles.length) return null;

		return (
			<React.Fragment>
				{attachedFiles.map((uf) => (
					<StackLayout w="full" spacing={0} key={uf.file.name}>
						<FlexLayout
							justifyContent="space-between"
							alignItems="center"
							w="full"
						>
							<AttachedFile
								name={uf.file.name}
								size={uf.file.size}
							/>
							<ButtonGroup
								display="flex"
								spacing={4}
								mt={{ base: 2, sm: 0 }}
							>
								{showUpload && (
									<PrimaryButton
										name="Upload"
										variant="outline"
										fontSize="xs"
										size="xs"
										onClick={onUpload}
									>
										Upload
									</PrimaryButton>
								)}
								<DeleteButton
									name="remove-file"
									onClick={() => removeAttachedFile(uf)}
									variant="outline"
									fontSize="xs"
									size="xs"
								>
									Remove
								</DeleteButton>
							</ButtonGroup>
						</FlexLayout>
					</StackLayout>
				))}
			</React.Fragment>
		);
	}
);

export default AttachedFiles;
