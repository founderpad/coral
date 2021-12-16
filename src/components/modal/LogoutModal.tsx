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

	return (
		<DeleteButton
			name={'logout-modal-open-button'}
			// w={{ lg: 'full' }}
			variant={'outline'}
			onClick={onClick}
			ml={1}
		>
			Log out
		</DeleteButton>
	);
};

export default LogoutModal;
