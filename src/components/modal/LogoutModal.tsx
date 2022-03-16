import { DeleteButton } from '@components/buttons';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useLogout } from '@hooks/auth';
import React, { useContext } from 'react';

const LogoutModal = () => {
	const logout = useLogout();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: 'Confirm log out',
			isOpen: true,
			body: 'Are you want to log out of founderpad?',
			action: (
				<DeleteButton
					name="logout-confirm-button"
					onClick={logout}
					variant="outline"
				>
					Log out
				</DeleteButton>
			)
		});
	};

	return (
		<DeleteButton
			name="logout-modal-open-button"
			variant="ghost"
			onClick={onClick}
			pl={0}
			w="full"
		>
			Log out
		</DeleteButton>
	);
};

export default LogoutModal;
