import ModalContext from '@/context/ModalContext';
import React, { useContext } from 'react';
import Modal from '.';

const BaseModal = ({ ...rest }: { children?: React.ReactNode }) => {
	const { modal, setModal } = useContext(ModalContext);

	const closeDialog = () => {
		setModal({
			isOpen: false,
			title: '',
			text: '',
			body: null,
			noBtnText: ''
		});
	};

	const onCloseClick = () => {
		closeDialog();
	};

	return <Modal {...modal} {...rest} onClose={onCloseClick} />;
};

export default BaseModal;
