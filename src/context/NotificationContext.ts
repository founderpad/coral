import { createContext } from 'react';

const NotificationContext = createContext({
	notification: null,
	addNotification: (_message: string, _title?: string) => {},
	removeNotification: () => {}
});

export default NotificationContext;
