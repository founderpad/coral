/* eslint-disable prefer-rest-params */
import { useNhostAuth } from '@nhost/react-auth';
import MainLayout from 'components/layouts/MainLayout';
import { Loading } from 'components/shared';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function AuthFilter(Component: any) {
	// return (): JSX.Element => {
	// 	const { isAuthenticated } = useAuth();
	// 	const router = useRouter();

	// 	if (isAuthenticated === null) return <Loading />;
	// 	if (!isAuthenticated) router.push('/login');

	// 	return (
	// 		<React.Fragment>
	// 			<Head>
	// 				<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"></script>
	// 			</Head>
	// 			<MainLayout>
	// 				<Component {...arguments} />
	// 			</MainLayout>
	// 		</React.Fragment>
	// 	);
	// };

	return (): JSX.Element => {
		const { isAuthenticated } = useNhostAuth();
		const router = useRouter();

		if (isAuthenticated === null) return <Loading />;
		if (!isAuthenticated) router.push('/login');

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
