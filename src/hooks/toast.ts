import { useToast } from '@chakra-ui/toast';

export const useNotification = () => {
	const toast = useToast();

	return ({
		title,
		description,
		status
	}: {
		title: string;
		description?: string;
		status: 'info' | 'warning' | 'success' | 'error';
	}) => {
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

export const useSuccessNotification = () => {
	const notification = useNotification();
	return ({ title, description }: { title: string; description?: string }) =>
		notification({ title, description, status: 'success' });
};

export const useErrorNotification = () => {
	const notification = useNotification();
	return ({ title, description }: { title: string; description?: string }) =>
		notification({ title, description, status: 'error' });
};
