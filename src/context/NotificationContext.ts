import { createContext } from 'react';

// const NotificationContext = createContext({
// 	notification: null,
// 	addNotification: (_message: string, _title?: string) => {},
// 	removeNotification: () => {}
// });

const NotificationContext = createContext({
	notification: {
		// title: undefined,
		message: undefined,
		status: 'success'
	},
	addNotification: (
		_message: string,
		_status?: string
		// _title?: string
	) => {},
	removeNotification: () => {}
});

export default NotificationContext;
