import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertProps
} from '@chakra-ui/react';
import { IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';

type Props = AlertProps & {
	message: string;
};

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

export const AlertFeedback = (props: Props) => {
	const { status, message, ...rest } = props;

	return (
		<Alert
			{...rest}
			status={status}
			px={0}
			py={1}
			variant="subtle"
			bg="transparent"
		>
			{getStatusIcon(status)}
			<AlertDescription
				fontSize="xs"
				color={status === 'error' ? 'red.500' : 'green.500'}
			>
				{message}
			</AlertDescription>
		</Alert>
	);
};
