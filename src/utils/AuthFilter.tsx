import MainLayout from '@/components/layouts/MainLayout';
import { Loading } from '@/components/shared';
import { useAuthenticationStatus } from '@nhost/react';
import Router from 'next/router';
import Script from 'next/script';
import React from 'react';

export default function AuthFilter(Component: any) {
	return function AuthProtected(props: any) {
		const { isLoading, isAuthenticated } = useAuthenticationStatus();

		if (isLoading) return <Loading />;
		if (!isAuthenticated) {
			Router.push('/login');
			return null;
		}

		return (
			<>
				<Script
					src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
					strategy="lazyOnload"
				></Script>
				<MainLayout>
					<Component {...props} />
				</MainLayout>
			</>
		);
	};
}
