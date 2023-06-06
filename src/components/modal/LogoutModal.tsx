import { useApolloClient } from '@apollo/client';
import { DeleteButton } from '@/components/buttons';
import { useModalDrawer } from '@/hooks/util';
import { auth, nhost } from '@/pages/_app';
import { logout } from '@/slices/auth';
// import { useLogout } from '@/hooks/auth';
// import Router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const LogoutModal = () => {
	// const logout = useLogout();
	const dispatch = useDispatch();
	const client = useApolloClient();
	const { closeModalDrawer, openModalDrawer } = useModalDrawer();

	const onLogout = () => {
		auth.signOut();
	};

	useEffect(() => {
		nhost.auth.onAuthStateChanged((event) => {
			if (event === 'SIGNED_OUT') {
				closeModalDrawer();
				dispatch(logout());
				client.clearStore();
				// Router.push('/loggedout');
			}
		});
	}, [client, dispatch, closeModalDrawer]);

	const onClick = () => {
		openModalDrawer({
			title: 'Confirm log out',
			body: 'Are you want to log out of founderpad?',
			action: (
				<DeleteButton
					name="logout-confirm-button"
					// onClick={() => Router.push('/loggedout')}
					onClick={onLogout}
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
