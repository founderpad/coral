import { useColorModeValue } from '@chakra-ui/color-mode';
import {
	Popover,
	PopoverContent,
	PopoverProps,
	PopoverTrigger
} from '@chakra-ui/popover';
import React from 'react';

type Props = PopoverProps & { triggerEl: React.ReactNode };

export const BasePopover = (props: Props): JSX.Element => {
	const { children, trigger, triggerEl } = props;

	return (
		<Popover
			trigger={trigger ?? 'hover'}
			placement={'bottom'}
			// strategy={'fixed'}
		>
			<PopoverTrigger>{triggerEl}</PopoverTrigger>

			{children && (
				// <Portal>
				<PopoverContent
					border={0}
					boxShadow={'xl'}
					bg={useColorModeValue('white', 'gray.500')}
					p={4}
				>
					{children}
				</PopoverContent>
				// </Portal>
			)}
		</Popover>
	);
};

export default BasePopover;
