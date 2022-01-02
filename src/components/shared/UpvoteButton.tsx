import Icon from '@chakra-ui/icon';
import { BaseButton } from 'components/buttons';
import { Label } from 'components/labels';
import React from 'react';
import { IoThumbsUpSharp } from 'react-icons/io5';

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
}) => (
	<BaseButton
		name={`upvote-${name}-button`}
		variant={'ghost'}
		d={'flex'}
		css={{ width: '0.8em !important' }}
		color={hasUserUpvoted ? 'green.300' : 'gray.400'}
		onClick={onClick}
	>
		<Icon
			as={IoThumbsUpSharp}
			fontSize={'sm'}
			mr={1}
			_hover={{ color: 'green.300' }}
		/>
		<Label
			fontSize={'xs'}
			color={hasUserUpvoted ? 'green.300' : 'gray.400'}
		>
			{votesTotal > 0 && votesTotal}
		</Label>
	</BaseButton>
);
