import {
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalContentProps,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	ModalProps
} from '@chakra-ui/react';
import { ModalDrawerFooterActions } from '@/components/shared';
import React from 'react';

type IModalProps = Omit<ModalProps, 'children'> & {
	isOpen?: boolean;
	title?: string;
	body?: React.ReactNode;
	noBtnLabel?: string | 'Cancel';
	removePadding?: boolean;
	width?: ModalContentProps['width'];
	size?: string | undefined;
	action?: React.ReactNode | undefined;
	showHeader?: boolean;
	showFooter?: boolean;
	// action?: typeof BaseButton;
};

export const Modal = (props: IModalProps) => {
	const {
		title,
		isOpen,
		body,
		onClose,
		noBtnLabel,
		size,
		action,
		removePadding,
		showHeader = true,
		showFooter = true
	} = props;

	return (
		<ChakraModal
			isOpen={isOpen}
			onClose={onClose}
			size={size}
			scrollBehavior="inside"
			closeOnOverlayClick={false}
			isCentered
		>
			<ModalOverlay />
			<ModalContent
				rounded="md"
				position="relative"
				maxH="95vh"
				my={0}
				display="flex"
			>
				{showHeader && (
					<ModalHeader
						borderBottomWidth={1}
						fontSize="md"
						p={4}
						display="flex"
						justifyContent="center"
						fontWeight="semibold"
					>
						<ModalCloseButton color="black" left={2} top={3} />
						{title}
					</ModalHeader>
				)}

				<ModalBody
					fontWeight="normal"
					fontSize="sm"
					color="gray.600"
					flex={1}
					p={removePadding ? 0 : 4}
					maxH="100%"
					// borderRadius="md"
				>
					{body}
				</ModalBody>

				{showFooter && (
					<ModalFooter
						display="flex"
						w="full"
						p={4}
						borderTopWidth={1}
					>
						<ModalDrawerFooterActions noBtnLabel={noBtnLabel}>
							{action}
						</ModalDrawerFooterActions>
					</ModalFooter>
				)}
			</ModalContent>
		</ChakraModal>
	);
};

export default Modal;
