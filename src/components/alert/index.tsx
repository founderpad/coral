import { Alert, AlertDescription } from '@chakra-ui/react';
import { useNotification } from '@hooks/util';

const AlertFeedback = () => {
	const { notification } = useNotification();

	if (!notification) return null;

	const isSuccess = notification.status === 'success';

	return (
		<Alert
			status={notification.status}
			alignItems={'flex-start'}
			px={0}
			py={0}
			// display={'contents'}
			variant={'subtle'}
			bg={'transparent'}
		>
			<AlertDescription
				fontSize={'xs'}
				color={isSuccess ? 'green.400' : 'red.400'}
			>
				{notification.message}
			</AlertDescription>
		</Alert>
	);
};

export default AlertFeedback;
