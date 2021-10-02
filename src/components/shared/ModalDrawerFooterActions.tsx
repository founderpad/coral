import { ButtonGroup } from '@chakra-ui/react';
import { CancelButton } from 'components/buttons';
import ModalDrawerContext from 'context/ModalDrawerContext';
import React, { memo, useContext } from 'react';

const ModalDrawerFooterActions = memo(
	({
		children,
		noBtnLabel
	}: {
		children: React.ReactNode;
		noBtnLabel?: string;
	}): JSX.Element => {
		const { setModalDrawer } = useContext(ModalDrawerContext);

		const onClose = () => {
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
		};

		return (
			<ButtonGroup
				justifyContent={'flex-end'}
				w={'full'}
				mt={4}
				as={'footer'}
				display={'flex'}
				ml={'auto'}
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

export default ModalDrawerFooterActions;
