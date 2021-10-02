import { DeleteButton } from 'components/buttons';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useLogout } from 'hooks/auth';
import React, { useContext } from 'react';

const LogoutModal = (): JSX.Element => {
	const logout = useLogout();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: 'Confirm log out',
			isOpen: true,
			body: 'Are you want to log out of founderpad?',
			handler: () => logout(),
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Log out',
			yesBtnColor: 'red'
		});
	};

	return <DeleteButton w={{ lg: 'full' }} label={'Log out'} variant={'ghost'} onClick={onClick} />
};

export default LogoutModal;
