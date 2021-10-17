import {
	Modal as ChakraModal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/modal';
import { ButtonGroup, ModalProps, useBreakpointValue } from '@chakra-ui/react';
import { BaseButton, CancelButton } from 'components/buttons';
import { ModalDrawerFooterActions } from 'components/shared';
import React from 'react';

type IModalProps = Omit<ModalProps, 'children'> & {
	title?: React.ReactNode;
	isOpen: boolean;
	onConfirm: () => void;
	body?: React.ReactNode;
	noBtnLabel?: string | 'Cancel';
	yesBtnLabel?: string | 'Yes';
	closeLabel?: string | 'Cancel';
	yesBtnColor?: 'fpPrimary' | 'red';
	hideFooter?: boolean;
	width?: number | string;
	maxW?: number | string;
	bodyPadding?: number;
	actions?: React.ReactNode;
	removePadding?: boolean;
};

export const Modal = (props: IModalProps): JSX.Element => {
	const {
		title,
		isOpen,
		body,
		onClose,
		onConfirm,
		noBtnLabel,
		yesBtnLabel,
		yesBtnColor,
		hideFooter,
		size,
		actions,
		removePadding
	} = props;

	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<ChakraModal
			isOpen={isOpen}
			onClose={onClose}
			size={isMobile ? 'full' : size}
			scrollBehavior={'inside'}
			closeOnOverlayClick={false}
			isCentered
		>
			<ModalOverlay />
			<ModalContent
				borderRadius={0}
				position={'relative'}
				minH={'200px'}
				maxH={'95vh'}
				my={0}
				d={'flex'}
			>
				{title && (
					<ModalHeader
						color={'fpGrey.900'}
						fontWeight={'medium'}
						fontSize={'xl'}
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
								/>
								{actions}
							</ButtonGroup>
						)}
					</ModalHeader>
				)}
				<ModalBody
					fontWeight={'normal'}
					fontSize={'md'}
					color={'gray.500'}
					flex={1}
					p={removePadding ? 0 : 4}
					maxH={'100%'}
				>
					{body}
				</ModalBody>
				{!hideFooter && (
					<ModalFooter d={'flex'} w={'full'} p={4}>
						<ModalDrawerFooterActions noBtnLabel={noBtnLabel}>
							<BaseButton
								name={'modal-actions-confirm-button'}
								variant={'ghost'}
								colorScheme={yesBtnColor ?? 'fpPrimary'}
								onClick={onConfirm}
								rounded={'md'}
							>
								{yesBtnLabel ?? 'OK'}
							</BaseButton>
						</ModalDrawerFooterActions>
					</ModalFooter>
				)}
			</ModalContent>
		</ChakraModal>
	);
};

export default Modal;
