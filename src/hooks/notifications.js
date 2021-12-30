import { useEffect } from 'react';
import { useCurrentUser } from './auth';

// app id: b40b7cc7-13dc-4662-8b48-efa668f9b72a

export const usePushNotifications = () => {
	const user = useCurrentUser();

	useEffect(() => {
		window.OneSignal = window.OneSignal || [];
		if (OneSignal) {
			OneSignal.push(function () {
				OneSignal.setExternalUserId(user.id);
				OneSignal.init({
					appId: 'c4cb5426-3957-47fb-bce2-f363d031aaa2',
					safari_web_id:
						'web.onesignal.auto.58b504fd-a471-4836-bd65-020899577e4e',
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

		return () => {
			window.OneSignal = undefined;
		};
	}, []);

	useEffect(() => {
		if (!user) {
			window.OneSignal = window.OneSignal || [];
			OneSignal.push(function () {
				OneSignal.removeExternalUserId();
			});
		}
	}, [user]);
};

export const usePushClient = () => {
	return OneSignal;
};
