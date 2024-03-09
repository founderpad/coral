import NotificationContext from '@/context/NotificationContext';
import { useSignInEmailPassword } from '@nhost/nextjs';
import { useContext } from 'react';
import { event } from '@/lib/ga';
import { LoginProps } from '../types/login';

export const useLogin = () => {
	const { signInEmailPassword, error, isError, needsEmailVerification } =
		useSignInEmailPassword();
	const { addNotification } = useContext(NotificationContext);

	const onLogin = async ({ email, password }: LoginProps) => {
		try {
			await signInEmailPassword(email, password);

			if (needsEmailVerification) {
				addNotification({
					message: `Failed to login. Please verify your email address first.`,
					status: 'error'
				});
			}

			if (isError) {
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
				action: `Login > ${isError ? 'error' : 'success'}`,
				params: {
					email,
					user_registration_date: new Date()
				}
			});
		}
	};

	return { onLogin };
};
