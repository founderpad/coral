import {
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerContentProps,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	ModalBodyProps,
	ModalProps
} from '@chakra-ui/react';
import { BaseButton } from '@components/buttons';
import { ModalDrawerFooterActions } from '@components/shared';
import React from 'react';

type IModalProps = Omit<ModalProps, 'children'> & {
	title: React.ReactNode;
	isOpen: boolean;
	body?: React.ReactNode;
	noBtnLabel?: string | 'Cancel';
	removePadding?: boolean;
	action?: typeof BaseButton;
	showFooter?: boolean;
	showCancel?: boolean;
	bodyProps?: ModalBodyProps;
	contentHeight?: DrawerContentProps['h'];
};

export const Drawer = ({
	title,
	isOpen,
	body,
	onClose,
	noBtnLabel,
	removePadding,
	action,
	showFooter = true,
	showCancel = true,
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
					<DrawerFooter d="flex" w="full" p={4} borderTopWidth={1}>
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
