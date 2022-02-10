import { Icon } from '@chakra-ui/react';
import { IoArrowUpSharp } from '@components/icons';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import React from 'react';

export const UpvoteButton = ({
	onClick,
	hasUserUpvoted,
	name,
	votesTotal = 0,
	large = false
}: {
	onClick: () => void;
	hasUserUpvoted: boolean;
	name: string;
	votesTotal?: number;
	large?: boolean;
}) => (
	<FlexLayout alignItems={'center'}>
		<Icon
			name={`upvote-${name}-button`}
			as={IoArrowUpSharp}
			mr={1}
			_hover={{ color: 'green.300' }}
			fontSize={large ? 'lg' : 'md'}
			color={hasUserUpvoted ? 'green.300' : 'gray.400'}
			cursor={'pointer'}
			onClick={onClick}
		/>
		{votesTotal > 0 && (
			<Label
				fontSize={large ? 'md' : 'sm'}
				color={hasUserUpvoted ? 'green.300' : 'gray.400'}
			>
				{votesTotal}
			</Label>
		)}
	</FlexLayout>
);
