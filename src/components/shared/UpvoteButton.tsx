import { Icon } from '@chakra-ui/react';
import { IoThumbsUpSharp } from '@components/icons';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import React from 'react';

export const UpvoteButton = ({
	onClick,
	hasUserUpvoted,
	name,
	votesTotal = 0
}: {
	onClick: () => void;
	hasUserUpvoted: boolean;
	name: string;
	votesTotal?: number;
}) => (
	<FlexLayout alignItems={'center'}>
		<Icon
			name={`upvote-${name}-button`}
			as={IoThumbsUpSharp}
			mr={1}
			_hover={{ color: 'green.300' }}
			fontSize={'sm'}
			color={hasUserUpvoted ? 'green.300' : 'gray.400'}
			cursor={'pointer'}
			onClick={onClick}
		/>
		{votesTotal > 0 && (
			<Label
				fontSize={'xs'}
				color={hasUserUpvoted ? 'green.300' : 'gray.400'}
			>
				{votesTotal}
			</Label>
		)}
	</FlexLayout>
);
