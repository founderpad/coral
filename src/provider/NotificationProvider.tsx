import { AlertProps } from '@chakra-ui/react';
import NotificationContext from '@/context/NotificationContext';
import React, { useCallback, useState } from 'react';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
	const [notification, setNotification] = useState<{
		message: string;
		status: AlertProps['status'];
	}>({ message: '', status: 'success' });

	const addNotification = (message: string, status: AlertProps['status']) => {
		setNotification({ message, status });
	};

	const removeNotification = () =>
		setNotification({ message: '', status: 'success' });

	const value = {
		notification,
		addNotification: useCallback(
			(message: string, status: AlertProps['status']) =>
				addNotification(message, status),
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
