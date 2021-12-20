import { useEffect } from 'react';
import { useCurrentUser } from './auth';

export const usePushNotifications = () => {
	const user = useCurrentUser();

	useEffect(() => {
		window.OneSignal = window.OneSignal || [];
		OneSignal.push(function () {
			OneSignal.setExternalUserId(user.id);
			OneSignal.init({
				appId: 'b40b7cc7-13dc-4662-8b48-efa668f9b72a',
				notifyButton: {
					enable: true
				},
				allowLocalhostAsSecureOrigin: true
			});
		});

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
