import { useColorModeValue } from '@chakra-ui/color-mode';
import {
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverContentProps,
	PopoverHeader,
	PopoverProps,
	PopoverTrigger
} from '@chakra-ui/react';
import BaseHeading from '@/components/heading/BaseHeading';
import React from 'react';

type Props = PopoverProps &
	PopoverContentProps & {
		triggerEl: React.ReactNode;
		title?: string;
		showClose?: boolean;
	};

export const BasePopover = (props: Props) => {
	const {
		children,
		trigger = 'hover',
		triggerEl,
		title,
		top = '12px',
		showClose = true,
		width
	} = props;
	const bg = useColorModeValue('white', 'gray.500');

	return (
		<Popover trigger={trigger} placement="bottom" strategy="fixed">
			<PopoverTrigger>{triggerEl}</PopoverTrigger>

			{children && (
				<PopoverContent
					borderWidth={1}
					borderTop={0}
					boxShadow="xl"
					bg={bg}
					top={top}
					rounded="none"
					w={width}
					minWidth="300px"
					display="flex"
					overflowY="auto"
					// maxH="calc(100vh - 72px)"
					flexDirection="column"
					flexWrap="nowrap"
					maxH="600px"
					h="full"
				>
					{title && (
						<PopoverHeader
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							p={4}
						>
							{showClose && <PopoverCloseButton top={3} />}
							<BaseHeading
								fontSize="sm"
								color="fpGrey.900"
								w="full"
							>
								{title}
							</BaseHeading>
						</PopoverHeader>
					)}
					<PopoverBody flexGrow={1} overflowY="auto" minHeight="auto">
						{children as any}
					</PopoverBody>
				</PopoverContent>
			)}
		</Popover>
	);
};

export default BasePopover;
