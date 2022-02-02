import { useEffect } from 'react';
import { OneSignalWindow } from '../types/window';
import { useCurrentUser } from './auth';

declare let window: OneSignalWindow;

export const usePushNotifications = () => {
	const user = useCurrentUser();

	useEffect(() => {
		// if (window.OneSignal !== undefined) {
		// 	window.OneSignal = window.OneSignal || [];
		// 	OneSignal.push(function () {
		// 		OneSignal.setExternalUserId(user?.id);
		// 		OneSignal.init({
		// 			appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
		// 			safari_web_id:
		// 				process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI_WEB_ID,
		// 			notifyButton: {
		// 				enable: true,
		// 				size: 'small',
		// 				colors: {
		// 					'circle.background': '#2BA4C9',
		// 					'dialog.button.background': '#2BA4C9'
		// 				}
		// 			},
		// 			allowLocalhostAsSecureOrigin: true
		// 		});
		// 	});
		// }

		window.OneSignal = window.OneSignal || [];
		if (window.OneSignal) {
			window.OneSignal.push(function () {
				// window.OneSignal.setExternalUserId(user?.id);
				window.OneSignal.init({
					appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
					safari_web_id:
						process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI_WEB_ID,
					notifyButton: {
						enable: true,
						size: 'small',
						colors: {
							'circle.background': '#2BA4C9',
							'dialog.button.background': '#2BA4C9'
						},
						subdomainName: 'founderpad'
					},
					allowLocalhostAsSecureOrigin: true
				});
				window.OneSignal.setExternalUserId(user?.id);
			});
		}
	}, []);

	useEffect(() => {
		if (!user) {
			const OneSignal = window.OneSignal;
			OneSignal.push(function () {
				OneSignal.removeExternalUserId();
			});
			window.OneSignal = undefined;
		}
	}, [user]);
};
