import MainLayout from '@components/layouts/MainLayout';
import { Loading } from '@components/shared';
import { useAuth } from '@hooks/auth';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';

export default function AuthFilter(Component: any) {
	return () => {
		const { isAuthenticated, isLoading } = useAuth();

		if (isLoading) return <Loading />;
		if (!isAuthenticated) {
			Router.push('/login');
		}

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
