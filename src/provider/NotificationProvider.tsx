import { AlertProps } from '@chakra-ui/react';
import NotificationContext from '@/context/NotificationContext';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface INotification {
	message: string;
	status: AlertProps['status'];
}

/**
 * The @NotificationProvider is used to toggle notifications in the UI
 * @param param0
 * @returns
 */
const NotificationProvider = ({ children }: { children: ReactNode }) => {
	const [notification, setNotification] = useState<
		INotification | undefined
	>();

	const router = useRouter();

	useEffect(() => {
		removeNotification();
	}, [router.pathname]);

	const addNotification = (notification: INotification) => {
		setNotification({
			message: notification.message,
			status: notification.status
		});
	};

	const removeNotification = () => setNotification(undefined);

	const value = {
		notification,
		addNotification: useCallback(
			(notification: INotification) => addNotification(notification),
			[]
		),
		removeNotification: useCallback(() => removeNotification(), [])
	};

	return (
		<NotificationContext.Provider value={value}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;
