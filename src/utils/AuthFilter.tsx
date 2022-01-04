/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { useAuth } from '@nhost/react-auth';
import { useAuth } from '@nhost/react-auth';
import MainLayout from 'components/layouts/MainLayout';
import { Loading } from 'components/shared';
// import { useCurrentUser } from 'hooks/auth';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

export default function AuthFilter(Component: any) {
	return () => {
		const { signedIn } = useAuth();
		// const user = useCurrentUser();
		const router = useRouter();

		if (signedIn === null) {
			return <Loading />;
		}

		if (!signedIn) router.push('/login');

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
