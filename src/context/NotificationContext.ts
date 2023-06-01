import { AlertProps } from '@chakra-ui/react';
import { createContext } from 'react';

interface INotification {
	message: string;
	status: AlertProps['status'];
}

const NotificationContext = createContext({
	notification: undefined as INotification | undefined,
	addNotification: (_notification: INotification) => {},
	removeNotification: () => {}
});

export default NotificationContext;
