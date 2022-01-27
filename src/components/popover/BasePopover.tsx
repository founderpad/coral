import { useColorModeValue } from '@chakra-ui/color-mode';
import {
	Popover,
	PopoverContent,
	PopoverProps,
	PopoverTrigger
} from '@chakra-ui/react';
import React from 'react';

type Props = PopoverProps & { triggerEl: React.ReactNode };

export const BasePopover = (props: Props) => {
	const { children, trigger, triggerEl } = props;
	const bg = useColorModeValue('white', 'gray.500');

	return (
		<Popover
			trigger={trigger ?? 'hover'}
			placement={'bottom'}
			strategy={'fixed'}
		>
			<PopoverTrigger>{triggerEl}</PopoverTrigger>

			{children && (
				// <Portal>
				<PopoverContent
					border={0}
					borderWidth={1}
					boxShadow={'xl'}
					bg={bg}
					p={6}
					minWidth={'400px'}
				>
					{children}
				</PopoverContent>
				// </Portal>
			)}
		</Popover>
	);
};

export default BasePopover;
