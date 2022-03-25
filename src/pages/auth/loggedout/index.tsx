import { useApolloClient } from '@apollo/client';
import AuthLayout from '@components/layouts/AuthLayout';
import { BaseLink } from '@components/links';
import { useAuth } from '@hooks/auth';
import { useModalDrawer } from '@hooks/util';
import { logout } from '@slices/auth';
import { auth, nhost } from '@utils/nhost';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const LoggedOut: NextPage = () => {
	const dispatch = useDispatch();
	const client = useApolloClient();
	const { setModalDrawer } = useModalDrawer();
	const userId = useAuth().user?.id;
	// if (userId) return <NotFound />;

	useEffect(() => {
		function signOut() {
			setModalDrawer({
				isOpen: false
			});
			auth.signOut();
		}

		if (userId) signOut();
	}, [setModalDrawer]);

	useEffect(() => {
		nhost.auth.onAuthStateChanged((event) => {
			if (event === 'SIGNED_OUT') {
				dispatch(logout());
				// dispatch(clearUser());
				client.resetStore();
			}
		});
	}, [client]);

	return (
		<AuthLayout
			title="Logged out"
			header="Logged out"
			subheader="You have logged out successfully"
		>
			<BaseLink
				title="Go to login"
				href="/login"
				fontSize="sm"
				alignSelf="center"
			>
				Go back to login
			</BaseLink>
		</AuthLayout>
	);
};

export default LoggedOut;
