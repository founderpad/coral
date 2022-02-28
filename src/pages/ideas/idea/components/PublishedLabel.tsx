import { Icon, Tag } from '@chakra-ui/react';
import React from 'react';
import { IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';

export const PublishedLabel = ({ isPublished }: { isPublished: boolean }) => {
	if (isPublished) {
		return (
			<Tag variant="solid" fontSize="xs" bg="green.300">
				<Icon as={IoCheckmarkSharp} fontSize="0.875rem" mr={1} />
				Published
			</Tag>
		);
	}

	return (
		<Tag variant="solid" fontSize="xs" bg="gray.400">
			<Icon as={IoCloseOutline} fontSize="0.875rem" mr={1} />
			Not published
		</Tag>
	);
};

export default PublishedLabel;
