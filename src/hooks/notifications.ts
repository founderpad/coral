import { useEffect } from 'react';
import { OneSignalWindow } from '../types/window';
import { useAuth } from './auth';

declare let window: OneSignalWindow;

export const usePushNotifications = () => {
	const userId = useAuth().user?.id;

	useEffect(() => {
		window.OneSignal = window.OneSignal || [];
		if (window.OneSignal) {
			window.OneSignal.push(function () {
				window.OneSignal.setExternalUserId(userId);
				window.OneSignal.init({
					allowLocalhostAsSecureOrigin: true,
					appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
					safari_web_id:
						process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI_WEB_ID,
					notifyButton: {
						enable: true,
						size: 'small',
						position: 'bottom-left',
						colors: {
							'circle.background': '#2BA4C9',
							'dialog.button.background': '#2BA4C9'
						}
					}
				});
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
