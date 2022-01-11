import { AlertProps } from '@chakra-ui/react';
import { createContext } from 'react';

const NotificationContext = createContext({
	notification: {
		message: undefined,
		status: undefined
	},
	addNotification: (_message: string, _status?: AlertProps['status']) => {},
	removeNotification: () => {}
});

export default NotificationContext;
