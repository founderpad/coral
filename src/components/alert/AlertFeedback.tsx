import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertProps
} from '@chakra-ui/react';
import { IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';
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

function getStatusIcon(status: AlertProps['status']) {
	switch (status) {
		case 'success':
			return (
				<AlertIcon
					as={IoCheckmarkSharp}
					boxSize={'16px'}
					mr={1}
					color={'green.400'}
				/>
			);
		case 'error':
			return (
				<AlertIcon
					as={IoCloseOutline}
					boxSize={'16px'}
					mr={1}
					color={'red.500'}
				/>
			);
		default:
			break;
	}
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
			{/* <AlertIcon as={getStatusIcon(status)} boxSize={'14px'} mr={1} /> */}

			{getStatusIcon(status)}

			<AlertDescription
				fontSize={'xs'}
				color={status === 'error' ? 'red.500' : 'green.400'}
			>
				{message}
			</AlertDescription>
		</Alert>
	);
};
