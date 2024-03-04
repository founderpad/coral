import NotificationContext from '@/context/NotificationContext';
import { TLoginFields } from '@/types/auth';
import { useSignInEmailPassword } from '@nhost/nextjs';
import { useContext } from 'react';
import { event } from '@/lib/ga';

export const useLogin = () => {
	const { signInEmailPassword, error, needsEmailVerification } =
		useSignInEmailPassword();
	const { addNotification } = useContext(NotificationContext);

	const onLogin = async ({ email, password }: TLoginFields) => {
		try {
			await signInEmailPassword(email, password);

			if (needsEmailVerification) {
				addNotification({
					message: `Failed to login. Please verify your email address first.`,
					status: 'error'
				});
			}

			if (Boolean(error)) {
				// TODO
				// Add error boundary
				throw new Error(error?.message);
			}
		} catch {
			// Improve typing here
			addNotification({
				message: error?.message || 'Failed to login.',
				status: 'error'
			});
		} finally {
			event({
				action: `Login > ${Boolean(error) ? 'error' : 'success'}`,
				params: {
					email,
					user_registration_date: new Date()
				}
			});
		}
	};

	return { onLogin };
};
