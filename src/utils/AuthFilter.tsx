import MainLayout from '@components/layouts/MainLayout';
import { Loading } from '@components/shared';
import { useAuth } from '@hooks/auth';
import Router from 'next/router';
import Script from 'next/script';
import React from 'react';

export default function AuthFilter(Component: any) {
	return () => {
		const { isAuthenticated, isLoading } = useAuth();
		if (isLoading) return <Loading />;
		if (!isAuthenticated) Router.push('/login');

		return (
			<React.Fragment>
				<Script
					src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
					strategy="lazyOnload"
				></Script>
				<MainLayout>
					<Component {...arguments} />
				</MainLayout>
			</React.Fragment>
		);
	};
}
