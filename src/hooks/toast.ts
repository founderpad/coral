import { useToast } from '@chakra-ui/react';

interface INotificationProps {
	title: string;
	description?: string;
	status: 'info' | 'warning' | 'success' | 'error';
}

export const useToastNotification = (): (({
	title,
	description,
	status
}: INotificationProps) => void) => {
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

export const useSuccessNotification = (): (({
	title,
	description
}: Omit<INotificationProps, 'status'>) => void) => {
	const notification = useToastNotification();
	return ({ title, description }: { title: string; description?: string }) =>
		notification({ title, description, status: 'success' });
};
