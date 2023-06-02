import { Button, Icon } from '@chakra-ui/react';
import { IoArrowUpSharp } from '@/components/icons';
import React from 'react';

interface IButtonProps {
	onClick: () => void;
	hasUserUpvoted: boolean;
	name: string;
	votesTotal?: number;
}

export const UpvoteButton = ({
	onClick,
	hasUserUpvoted,
	name,
	votesTotal = 0
}: IButtonProps) => (
	<Button
		name={`update-${name}-button`}
		pl={0}
		size="sm"
		variant="unstyled"
		leftIcon={<Icon as={IoArrowUpSharp} fontSize="lg" />}
		_selected={{ background: 'transparent' }}
		onClick={onClick}
		display="flex"
		alignItems="center"
		color={hasUserUpvoted ? 'green.300' : 'fpGrey.300'}
		_hover={{ color: 'green.300' }}
	>
		{votesTotal}
	</Button>
);
