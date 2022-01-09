/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useCurrentUser } from './auth';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePushNotifications = () => {
	const user = useCurrentUser();

	useEffect(() => {
		window.OneSignal = window.OneSignal || [];
		if (OneSignal) {
			OneSignal.push(function () {
				OneSignal.setExternalUserId(user?.id);
				OneSignal.init({
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
					},
					allowLocalhostAsSecureOrigin: true
				});
			});
		}
	}, []);

	useEffect(() => {
		if (!user) {
			OneSignal.push(function () {
				OneSignal.removeExternalUserId();
			});
			window.OneSignal = undefined;
		}
	}, [user]);
};
