import { Alert, AlertDescription } from '@chakra-ui/react';
import { useNotification } from '@hooks/util';

export const AlertFeedback = () => {
	const { notification } = useNotification();

	if (!notification.message) return null;

	const isSuccess = notification.status === 'success';

	return (
		<Alert
			status={notification.status}
			alignItems={'flex-start'}
			px={0}
			py={0}
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
