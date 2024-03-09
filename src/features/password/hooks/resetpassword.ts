import { useNotification } from '@/hooks/util';
import { auth } from '@/pages/_app.page';
import { event } from '@/lib/ga';

export const useResetPassword = () => {
	const { addNotification } = useNotification();

	const onResetPassword = async ({ email }: { email: string }) => {
		try {
			await auth.resetPassword({ email });

			addNotification({
				message:
					'If you are registered, you will receive an email with instructions to reset your password.',
				status: 'success'
			});
		} catch (error: any) {
			addNotification({ message: error.message, status: 'error' });
		} finally {
			event({
				action: 'Auth > Reset your password',
				params: {
					email
				}
			});
		}
	};

	return { onResetPassword };
};
