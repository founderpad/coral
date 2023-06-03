import { useNotification } from '@/hooks/util';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertProps,
	CloseButton
} from '@chakra-ui/react';

const colorMapping: Record<keyof AlertProps['status'], string> = {
	error: 'red.500',
	success: 'green.500',
	info: 'blue.500'
};

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
		<Alert {...rest} status={status} p={0} bg="white">
			{showIcon && <AlertIcon />}
			<AlertDescription
				fontSize="xs"
				color={
					colorMapping[status as keyof typeof colorMapping] ||
					'blue.500'
				}
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
