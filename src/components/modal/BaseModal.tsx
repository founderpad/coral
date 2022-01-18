import ModalContext from '@context/ModalContext';
import React, { useContext } from 'react';
import Modal from '.';

const BaseModal = ({
	...rest
}: {
	children?: React.ReactNode;
}): JSX.Element => {
	const { modal, setModal } = useContext(ModalContext);
	const { handler } = modal;

	const closeDialog = () => {
		setModal({
			isOpen: false,
			title: '',
			text: '',
			body: null,
			handler: null,
			yesBtnLabel: '',
			noBtnText: ''
		});
	};

	const onCloseClick = () => {
		closeDialog();
	};

	const onConfirmClick = () => {
		handler();
		closeDialog();
	};

	return (
		<Modal
			{...modal}
			{...rest}
			onConfirm={onConfirmClick}
			onClose={onCloseClick}
		/>
	);
};

export default BaseModal;
