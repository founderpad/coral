import { useToast } from '@chakra-ui/react';

interface INotificationProps {
	title: string;
	description?: string;
	status: 'info' | 'warning' | 'success' | 'error';
}

export const useNotification = (): any => {
	const toast = useToast();

	return ({ title, description, status }: INotificationProps) => {
		toast({
			title,
			description,
			status,
			duration: 2000,
			variant: 'subtle',
			position: 'bottom-right'
		});
	};
};

export const useSuccessNotification = (): any => {
	const notification = useNotification();
	return ({ title, description }: { title: string; description?: string }) =>
		notification({ title, description, status: 'success' });
};

export const useErrorNotification = (): any => {
	const notification = useNotification();
	return ({ title, description }: { title: string; description?: string }) =>
		notification({ title, description, status: 'error' });
};
