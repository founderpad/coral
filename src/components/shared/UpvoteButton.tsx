import Icon from '@chakra-ui/icon';
import { BaseButton } from 'components/buttons';
import React from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';

export const UpvoteButton = ({
	onClick,
	hasUserUpvoted,
	name,
	votesTotal
}: {
	onClick: () => void;
	hasUserUpvoted: boolean;
	name: string;
	votesTotal?: number;
}) => {
	return (
		<BaseButton
			name={`upvote-${name}-button`}
			variant={'unstyled'}
			d={'flex'}
			css={{ width: '0.8em !important' }}
			color={hasUserUpvoted ? 'green.300' : 'gray.400'}
			onClick={onClick}
		>
			<Icon
				as={IoArrowUpSharp}
				fontSize={'md'}
				pt={0}
				mr={1}
				_hover={{ color: 'green.300' }}
			/>
			{votesTotal > 0 && votesTotal}
		</BaseButton>
	);
};
