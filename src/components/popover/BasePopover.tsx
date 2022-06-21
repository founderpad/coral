import { useColorModeValue } from '@chakra-ui/color-mode';
import {
	Popover,
	PopoverContent,
	PopoverProps,
	PopoverTrigger
} from '@chakra-ui/react';
import BaseHeading from '@/components/heading/BaseHeading';
import React from 'react';

type Props = PopoverProps & { triggerEl: React.ReactNode; title?: string };

export const BasePopover = (props: Props) => {
	const { children, trigger = 'hover', triggerEl, title } = props;
	const bg = useColorModeValue('white', 'gray.500');

	return (
		<Popover trigger={trigger} placement="bottom" strategy="fixed">
			<PopoverTrigger>{triggerEl}</PopoverTrigger>

			{children && (
				<PopoverContent
					border={0}
					borderWidth={1}
					boxShadow="xl"
					bg={bg}
					p={2}
					// mt={2}
					mt="4px"
					// rounded="md"
					rounded="none"
					w={{ base: '100vw', sm: 'auto' }}
					display="flex"
				>
					{title && (
						<BaseHeading fontSize="sm" p={4} color="fpGrey.900">
							{title}
						</BaseHeading>
					)}
					{children}
				</PopoverContent>
			)}
		</Popover>
	);
};

export default BasePopover;
