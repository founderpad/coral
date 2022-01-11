import { Alert, AlertDescription, AlertTitle } from '@chakra-ui/react';
import { useNotification } from 'hooks/util';

const AlertFeedback = () => {
	const { notification } = useNotification();

	if (!!notification)
		return (
			<Alert
				status={notification.status}
				flexDirection={'column'}
				alignItems={'flex-start'}
			>
				{notification.title && (
					<AlertTitle fontSize={'xs'}>
						{notification.title}
					</AlertTitle>
				)}
				<AlertDescription fontSize={'xs'}>
					{notification.message}
				</AlertDescription>
			</Alert>
		);

	return null;

	return null;
};

export default AlertFeedback;
