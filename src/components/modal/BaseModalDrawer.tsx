import { useBreakpointValue } from '@chakra-ui/react';
import Drawer from '@components/drawer';
import ModalDrawerContext from '@context/ModalDrawerContext';
import React, { useContext } from 'react';
import Modal from '.';

/**
 * The @BaseModalDrawer component responsively determines whether to display a drawer or a modal.
 *
 * @param param0
 * @returns
 *
 * @author jlee
 */
const BaseModalDrawer = ({ ...rest }: { children?: React.ReactNode }) => {
	const isModal = useBreakpointValue({ base: false, sm: true });

	const { modalDrawer, setModalDrawer } = useContext(ModalDrawerContext);
	const {
		isOpen,
		title,
		body,
		handler,
		noBtnLabel,
		yesBtnLabel,
		yesBtnColor,
		hideFooter,
		width,
		size,
		actions,
		removePadding
	} = modalDrawer;

	const closeDialog = () => {
		setModalDrawer({
			isOpen: false,
			title: '',
			text: '',
			body: null,
			handler: null,
			yesBtnLabel: '',
			noBtnText: '',
			hideFooter: false,
			actions: undefined,
			size
		});
	};

	const onCloseClick = () => {
		closeDialog();
	};

	const onConfirmClick = () => {
		handler();
		closeDialog();
	};

	if (isModal) {
		return (
			<Modal
				{...rest}
				isOpen={isOpen}
				title={title}
				yesBtnLabel={yesBtnLabel}
				onConfirm={onConfirmClick}
				onClose={onCloseClick}
				noBtnLabel={noBtnLabel}
				body={body}
				yesBtnColor={yesBtnColor}
				hideFooter={hideFooter}
				width={width}
				size={size}
				actions={actions}
				removePadding={removePadding}
			/>
		);
	}

	return (
		<Drawer
			{...rest}
			isOpen={isOpen}
			title={title}
			yesBtnLabel={yesBtnLabel}
			onConfirm={onConfirmClick}
			onClose={onCloseClick}
			noBtnLabel={noBtnLabel}
			body={body}
			yesBtnColor={yesBtnColor}
			hideFooter={hideFooter}
			actions={actions}
			removePadding={removePadding}
		/>
	);
};

export default BaseModalDrawer;
