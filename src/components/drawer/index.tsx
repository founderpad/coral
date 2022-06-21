import {
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerContentProps,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	ModalContentProps,
	ModalProps
} from '@chakra-ui/react';
import { ModalDrawerFooterActions } from '@/components/shared';
import React from 'react';

type IModalProps = Omit<ModalProps, 'children'> & {
	isOpen: boolean;
	title?: string;
	body: React.ReactNode;
	noBtnLabel?: string;
	removePadding?: boolean;
	width?: ModalContentProps['width'];
	size?: string | undefined;
	contentHeight?: DrawerContentProps['h'];
	action?: React.ReactNode | undefined;
	showFooter?: boolean;
	showHeader?: boolean;
	showCancel?: boolean;
};

export const Drawer = ({
	title,
	isOpen,
	body,
	onClose,
	noBtnLabel,
	removePadding,
	action,
	showCancel = true,
	showHeader = true,
	showFooter = true,
	contentHeight
}: IModalProps) => {
	return (
		<ChakraDrawer
			isOpen={isOpen}
			onClose={onClose}
			placement="bottom"
			closeOnOverlayClick={false}
			isFullHeight={false}
			preserveScrollBarGap={true}
			useInert={true}
		>
			<DrawerOverlay />
			<DrawerContent
				borderTopWidth={1}
				maxH="99.1%"
				h={contentHeight}
				borderTopRadius="xl"
			>
				{showHeader && (
					<DrawerHeader
						borderBottomWidth={1}
						fontSize="md"
						p={4}
						display="flex"
						justifyContent="center"
						fontWeight="semibold"
					>
						<DrawerCloseButton color="black" left={2} top={3} />
						{title}
					</DrawerHeader>
				)}
				<DrawerBody
					fontWeight="normal"
					fontSize="sm"
					color="gray.600"
					flex={1}
					p={removePadding ? 0 : 4}
					maxH="100%"
					borderRadius="md"
					id="drawer-content"
				>
					{body}
				</DrawerBody>
				{showFooter && (
					<DrawerFooter
						display="flex"
						w="full"
						p={4}
						borderTopWidth={1}
					>
						<ModalDrawerFooterActions
							noBtnLabel={noBtnLabel}
							showCancel={showCancel}
						>
							{action}
						</ModalDrawerFooterActions>
					</DrawerFooter>
				)}
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
