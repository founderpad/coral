import NotificationContext from 'context/NotificationContext';
import React, { useCallback, useState } from 'react';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
	const [notification, setNotification] = useState<string>(null);

	const addNotification = (message: string) => {
		setNotification(message);
	};

	const removeNotification = () => setNotification(null);

	const value = {
		notification,
		addNotification: useCallback(
			(message: string) => addNotification(message),
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
