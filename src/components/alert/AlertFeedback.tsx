import { useNotification } from '@/hooks/util';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertProps,
	CloseButton
} from '@chakra-ui/react';
import { useEffect } from 'react';

const colorMapping: Record<keyof AlertProps['status'], string> = {
	error: 'red.500',
	success: 'green.500',
	info: 'blue.500'
};

type Props = AlertProps & {
	message: string;
	showClose?: boolean;
	showIcon?: boolean;
	auto?: boolean;
};

export const AlertFeedback = (props: Props) => {
	const {
		message,
		status,
		showClose = false,
		showIcon = false,
		auto = false,
		...rest
	} = props;
	const { removeNotification } = useNotification();

	useEffect(() => {
		if (auto) {
			const timeout = setTimeout(removeNotification, 2000);

			return () => clearTimeout(timeout);
		}
	}, [auto, removeNotification]);

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
