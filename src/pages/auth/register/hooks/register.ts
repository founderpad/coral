import NotificationContext from '@/context/NotificationContext';
import { TRegisterFormFields } from '@/types/auth';
import { useSignUpEmailPassword } from '@nhost/nextjs';
import { useContext } from 'react';
import { event } from '@/lib/ga';
import Router from 'next/router';
import { encodeString } from '@/utils/validators';

export const useRegister = () => {
	const { signUpEmailPassword, error, isSuccess, isError } =
		useSignUpEmailPassword();
	const { addNotification } = useContext(NotificationContext);

	const onRegister = async (values: TRegisterFormFields) => {
		const { email, password, firstName, lastName } = values;

		try {
			await signUpEmailPassword(email, password, {
				displayName: `${firstName} ${lastName}`.trim(),
				metadata: {
					firstName,
					lastName
				}
			});

			if (isError) {
				throw new Error(error?.message);
			}

			// TODO
			// Move to routes
			if (isSuccess) {
				Router.push(
					`/register/registersuccess?nm=${encodeString(firstName)}`
				);
			}
		} catch {
			// Improve typing here
			addNotification({
				message: error?.message || 'Failed to register.',
				status: 'error'
			});
		} finally {
			event({
				action: `Register > ${isError ? 'error' : 'success'}`,
				params: {
					email,
					display_name: `${firstName} ${lastName}`.trim(),
					user_registration_date: new Date()
				}
			});
		}
	};

	return { onRegister };
};
