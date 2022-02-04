import { Alert, AlertDescription, AlertProps } from '@chakra-ui/react';
// import { useNotification } from '@hooks/util';

// export const AlertFeedback = () => {
// 	const { notification } = useNotification();

// 	if (!notification.message) return null;

// 	const isSuccess = notification.status === 'success';

// 	return (
// 		<Alert
// 			status={notification.status}
// 			alignItems={'flex-start'}
// 			px={0}
// 			py={0}
// 			variant={'subtle'}
// 			bg={'transparent'}
// 		>
// 			<AlertDescription
// 				fontSize={'xs'}
// 				color={isSuccess ? 'green.400' : 'red.400'}
// 			>
// 				{notification.message}
// 			</AlertDescription>
// 		</Alert>
// 	);
// };

interface Props {
	status?: AlertProps['status'];
	message: string;
	error?: boolean;
}

export const AlertFeedback = (props: Props) => {
	const { status = 'success', message, error = false } = props;

	return (
		<Alert
			status={status}
			alignItems={'flex-start'}
			px={0}
			py={0}
			variant={'subtle'}
			bg={'transparent'}
		>
			<AlertDescription
				fontSize={'xs'}
				color={error ? 'red.400' : 'green.400'}
			>
				{message}
			</AlertDescription>
		</Alert>
	);
};
