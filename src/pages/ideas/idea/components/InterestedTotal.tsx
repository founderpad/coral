import { Icon, Tag } from '@chakra-ui/react';
import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

export const InterestedTotal = ({ total = 0 }: { total?: number }) => {
	if (total > 0)
		return (
			<Tag
				variant="solid"
				colorScheme="yellow"
				alignItems="center"
				fontSize="11px"
			>
				<Icon as={IoStarSharp} fontSize="0.8125rem" mr={1} />
				{total} interested
			</Tag>
		);

	return null;
};

export default InterestedTotal;
