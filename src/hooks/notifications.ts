import { useEffect } from 'react';
import { OneSignalWindow } from '../types/window';
import { useAuth, useCurrentUser } from './auth';

declare let window: OneSignalWindow;

export const usePushNotifications = () => {
	const userId = useAuth().user?.id;

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
				window.OneSignal.setExternalUserId(userId);
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
						}
					}
				});
				// window.OneSignal.setExternalUserId(user?.id);
			});
		}
	}, []);

	useEffect(() => {
		if (!userId) {
			const OneSignal = window.OneSignal;
			OneSignal.push(function () {
				OneSignal.removeExternalUserId();
			});
			window.OneSignal = undefined;
		}
	}, [userId]);
};
