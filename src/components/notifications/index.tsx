import { Alert, AlertDescription, AlertTitle } from '@chakra-ui/react';
import { useNotification } from 'hooks/util';
import React from 'react';

const Notification = () => {
	const { notification } = useNotification();

	if (notification)
		return (
			<Alert status={notification.type}>
				<AlertTitle>{notification.title}</AlertTitle>
				<AlertDescription fontSize={'xs'}>
					{notification.message}
				</AlertDescription>
			</Alert>
		);

	return null;
};

export default Notification;
