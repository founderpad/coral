import NotificationContext from 'context/NotificationContext';
import React, { useCallback, useState } from 'react';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
	const [notification, setNotification] =
		useState<{ message: string; status: string }>(null);

	const addNotification = (message: string, status: string) => {
		setNotification({ message, status });
	};

	const removeNotification = () => setNotification(null);

	const value = {
		notification,
		addNotification: useCallback(
			(message: string, status: string) =>
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
