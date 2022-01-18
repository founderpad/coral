import { AlertProps } from '@chakra-ui/react';
import { createContext } from 'react';

const NotificationContext = createContext({
	notification: {
		message: '',
		status: undefined as AlertProps['status']
	},
	addNotification: (_message: string, _status?: AlertProps['status']) => {},
	removeNotification: () => {}
});

export default NotificationContext;
