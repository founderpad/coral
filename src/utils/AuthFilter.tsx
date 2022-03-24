import { useApolloClient } from '@apollo/client';
import MainLayout from '@components/layouts/MainLayout';
import { Loading } from '@components/shared';
import { useAuth } from '@hooks/auth';
import { useModalDrawer } from '@hooks/util';
// import { logout } from '@slices/auth';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { nhost } from './nhost';

export default function AuthFilter(Component: any) {
	return () => {
		// const dispatch = useDispatch();
		const { setModalDrawer } = useModalDrawer();
		const client = useApolloClient();

		useEffect(() => {
			nhost.auth.onAuthStateChanged((event) => {
				if (event === 'SIGNED_OUT') {
					// dispatch(logout());
					client.resetStore();
					setModalDrawer({
						isOpen: false
					});
				}
			});
		}, []);

		const { isAuthenticated, isLoading } = useAuth();

		if (isLoading) return <Loading />;
		if (!isAuthenticated) Router.push('/login');

		return (
			<React.Fragment>
				<Head>
					<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"></script>
				</Head>
				<MainLayout>
					<Component {...arguments} />
				</MainLayout>
			</React.Fragment>
		);
	};
}
