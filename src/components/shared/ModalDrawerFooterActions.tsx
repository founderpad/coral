import { ButtonGroup } from '@chakra-ui/react';
import { CancelButton } from '@/components/buttons';
import { useModalDrawer } from '@/hooks/util';
import React, { memo, useCallback } from 'react';

interface ModalDrawerFooterActionsProps {
	children: React.ReactNode;
	noBtnLabel?: string;
	showCancel?: boolean;
}

const ModalDrawerFooterActions = memo(
	({
		children,
		noBtnLabel = 'Cancel',
		showCancel = true
	}: ModalDrawerFooterActionsProps) => {
		const { closeModalDrawer } = useModalDrawer();

		const onClose = useCallback(() => {
			closeModalDrawer();
		}, [closeModalDrawer]);

		return (
			<ButtonGroup
				justifyContent="flex-end"
				w="full"
				as="footer"
				display="flex"
				spacing={4}
			>
				{showCancel && (
					<CancelButton
						label={noBtnLabel ?? 'Clear'}
						onClick={onClose}
						title="Close"
					/>
				)}
				{children}
			</ButtonGroup>
		);
	}
);

export default ModalDrawerFooterActions;
