import { ButtonGroup } from '@chakra-ui/react';
import { CancelButton } from '@components/buttons';
import ModalDrawerContext from '@context/ModalDrawerContext';
import React, { memo, useCallback, useContext } from 'react';

export const ModalDrawerFooterActions = memo(
	({
		children,
		noBtnLabel
	}: {
		children: React.ReactNode;
		noBtnLabel?: string;
	}) => {
		const { setModalDrawer } = useContext(ModalDrawerContext);

		const onClose = useCallback(() => {
			setModalDrawer({
				isOpen: undefined,
				title: undefined,
				text: undefined,
				body: undefined,
				handler: undefined,
				yesBtnLabel: undefined,
				noBtnText: undefined,
				hideFooter: undefined,
				width: undefined
			});
		}, [setModalDrawer]);

		return (
			<ButtonGroup
				justifyContent={'flex-end'}
				w={'full'}
				as={'footer'}
				display={'flex'}
				// ml={'auto'}
				spacing={4}
			>
				<CancelButton
					label={noBtnLabel ?? 'Clear'}
					onClick={onClose}
					title={'Reset search'}
				/>
				{children}
			</ButtonGroup>
		);
	}
);
