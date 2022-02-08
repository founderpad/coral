import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertProps
} from '@chakra-ui/react';
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
}

export const AlertFeedback = (props: Props) => {
	const { status = 'success', message } = props;

	return (
		<Alert
			status={status}
			alignItems={'center'}
			px={0}
			py={0}
			variant={'subtle'}
			bg={'transparent'}
		>
			<AlertIcon boxSize={'14px'} mr={2} />

			<AlertDescription
				fontSize={'xs'}
				color={status === 'error' ? 'red.400' : 'green.400'}
			>
				{message}
			</AlertDescription>
		</Alert>
	);
};
