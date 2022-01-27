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
import { BaseButton, CancelButton } from '@components/buttons';
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
	actions?: React.ReactNode;
	removePadding?: boolean;
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
	actions
}: IModalProps) => {
	return (
		<ChakraDrawer
			isOpen={isOpen}
			onClose={onClose}
			placement={'bottom'}
			closeOnOverlayClick={false}
		>
			<DrawerOverlay />
			<DrawerContent borderTopWidth={1}>
				{title && (
					<React.Fragment>
						{!actions && (
							<DrawerCloseButton top={3} color={'black'} />
						)}
						<DrawerHeader
							fontWeight={'medium'}
							fontSize={'md'}
							p={4}
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
										size={'xs'}
									/>
									{actions}
								</ButtonGroup>
							)}
						</DrawerHeader>
					</React.Fragment>
				)}

				<DrawerBody
					fontWeight={'normal'}
					fontSize={'md'}
					color={'gray.500'}
					flex={1}
					p={removePadding ? 0 : 4}
					maxH={'100%'}
				>
					{body}
				</DrawerBody>
				{!hideFooter && (
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
				)}
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
