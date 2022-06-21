import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { IoPencilSharp } from '@/components/icons';
import React from 'react';

type Props = IconButtonProps & { htmlFor?: string };

export const EditButton = (props: Props) => (
	<IconButton
		{...props}
		aria-label="Edit"
		variant="ghost"
		colorScheme="gray"
		fontSize="md"
		size="sm"
		icon={<Icon as={IoPencilSharp} fontSize="sm" color="fpPrimary.500" />}
		rounded="full"
	/>
);
