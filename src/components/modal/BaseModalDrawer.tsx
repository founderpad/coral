import Drawer from '@components/drawer';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useMobile } from '@hooks/util';
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
	const isMobile = useMobile();

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
		action,
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
			action: undefined,
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

	if (!isMobile) {
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
				action={action}
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
			action={action}
			removePadding={removePadding}
		/>
	);
};

export default BaseModalDrawer;
