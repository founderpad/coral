import {
	ButtonGroup,
	ButtonProps,
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	ModalProps
} from '@chakra-ui/react';
import { BaseButton } from '@components/buttons';
import { ModalDrawerFooterActions } from '@components/shared';
import React from 'react';

type IModalProps = Omit<ModalProps, 'children'> & {
	title: React.ReactNode;
	isOpen: boolean;
	onConfirm: () => void;
	body?: React.ReactNode;
	noBtnLabel?: string | 'Cancel';
	yesBtnLabel?: string | 'Yes';
	closeLabel?: string | 'Cancel';
	yesBtnColor?: 'fpPrimary' | 'red' | ButtonProps['colorScheme'];
	hideFooter?: boolean;
	// actions?: React.ReactNode;
	removePadding?: boolean;
	action?: typeof BaseButton;
};

export const Drawer = ({
	title,
	isOpen,
	body,
	onClose,
	onConfirm,
	noBtnLabel,
	yesBtnLabel,
	yesBtnColor,
	hideFooter,
	removePadding,
	// actions,
	action
}: IModalProps) => {
	return (
		<ChakraDrawer
			isOpen={isOpen}
			onClose={onClose}
			placement={'bottom'}
			closeOnOverlayClick={false}
			isFullHeight={false}
			preserveScrollBarGap={true}
			useInert={true}
		>
			<DrawerOverlay />
			<DrawerContent
				borderTopWidth={1}
				maxH={'99.1%'}
				borderTopRadius={'xl'}
			>
				<DrawerHeader
					borderBottomWidth={1}
					fontSize={'md'}
					p={4}
					display={'flex'}
					justifyContent={'center'}
					fontWeight={'semibold'}
				>
					<DrawerCloseButton color={'black'} left={2} top={3} />
					{title}
				</DrawerHeader>
				{/* {title && (
					<React.Fragment>
						<DrawerHeader
							fontWeight={'medium'}
							fontSize={'md'}
							px={4}
							py={2}
							display={'flex'}
							alignItems={'center'}
							borderBottomWidth={1}
						>
							{title}
							{actions && (
								<ButtonGroup ml={'auto'} spacing={4}>
									<CancelButton
										label={'Cancel'}
										onClick={onClose}
										size={'sm'}
									/>
									{actions}
								</ButtonGroup>
							)}
						</DrawerHeader>
						{!actions && (
							<DrawerCloseButton top={1} color={'black'} />
						)}
					</React.Fragment>
				)} */}

				<DrawerBody
					fontWeight={'normal'}
					fontSize={'sm'}
					color={'gray.600'}
					flex={1}
					p={removePadding ? 0 : 4}
					maxH={'100%'}
					borderRadius={'md'}
				>
					{body}
				</DrawerBody>
				{/* {!hideFooter && (
					<DrawerFooter d={'flex'} w={'full'} p={4}>
						<ModalDrawerFooterActions noBtnLabel={noBtnLabel}>
							<BaseButton
								name={'drawer-actions-confirm-button'}
								variant={'ghost'}
								colorScheme={yesBtnColor}
								onClick={onConfirm}
								rounded={'md'}
							>
								{yesBtnLabel ?? 'OK'}
							</BaseButton>
						</ModalDrawerFooterActions>
					</DrawerFooter>
				)} */}

				<DrawerFooter d={'flex'} w={'full'} p={4} borderTopWidth={1}>
					<ModalDrawerFooterActions noBtnLabel={noBtnLabel}>
						{/* <BaseButton
							name={'drawer-actions-confirm-button'}
							variant={'ghost'}
							colorScheme={yesBtnColor}
							onClick={onConfirm}
							rounded={'md'}
						>
							{yesBtnLabel ?? 'OK'}
						</BaseButton> */}
						{/* {actionButton} */}
						{action}
					</ModalDrawerFooterActions>
				</DrawerFooter>
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
