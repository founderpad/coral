import { useNotification } from '@/hooks/util';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertProps,
	CloseButton
} from '@chakra-ui/react';
import { IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';

function getStatusIcon(status: Props['status']) {
	switch (status) {
		case 'success':
			return (
				<AlertIcon
					as={IoCheckmarkSharp}
					boxSize="16px"
					mr={1}
					color="green.500"
				/>
			);
		case 'error':
			return (
				<AlertIcon
					as={IoCloseOutline}
					boxSize="16px"
					mr={1}
					color="red.500"
				/>
			);
		default:
			break;
	}
}

type Props = AlertProps & {
	message: string;
	showClose?: boolean;
	showIcon?: boolean;
};

export const AlertFeedback = (props: Props) => {
	const {
		message,
		status,
		showClose = false,
		showIcon = false,
		...rest
	} = props;
	const { removeNotification } = useNotification();

	return (
		<Alert {...rest} p={0} bg="white">
			{showIcon && getStatusIcon(status)}
			<AlertDescription
				fontSize="xs"
				color={status === 'error' ? 'red.500' : 'green.500'}
				flex={1}
			>
				{message}
			</AlertDescription>
			{showClose && (
				<CloseButton
					size="sm"
					color="fpGrey.400"
					onClick={removeNotification}
				/>
			)}
		</Alert>
	);
};
