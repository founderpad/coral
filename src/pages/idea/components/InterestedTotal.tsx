import { Icon, Tag } from '@chakra-ui/react';
import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

export const InterestedTotal = ({ total = 0 }: { total?: number }) => {
	if (total > 0)
		return (
			// <Label color={'yellow.500'} fontSize={'small'}>
			// 	{total} interested
			// </Label>
			<Tag
				variant={'solid'}
				fontSize={'xs'}
				colorScheme={'yellow'}
				alignItems={'center'}
			>
				<Icon as={IoStarSharp} fontSize={'0.875rem'} mr={1} />
				{total} interested
			</Tag>
		);

	return null;
};

export default InterestedTotal;
