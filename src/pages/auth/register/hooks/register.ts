import NotificationContext from '@/context/NotificationContext';
import { TRegisterFormFields } from '@/types/auth';
import { encodeString } from '@/utils/validators';
import { useSignUpEmailPassword } from '@nhost/react';
import Router from 'next/router';
import { useContext } from 'react';
import { event } from '@/lib/ga';

export const useRegister = () => {
	const { addNotification } = useContext(NotificationContext);
	const { signUpEmailPassword, error } = useSignUpEmailPassword();

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

			if (Boolean(error)) {
				throw new Error(error?.message);
			}

			// TODO
			// Move to routes
			Router.push(
				`/register/registersuccess?nm=${encodeString(firstName)}`
			);
		} catch {
			// Improve typing here
			addNotification({
				message: error?.message || 'Failed to register.',
				status: 'error'
			});
		} finally {
			event({
				action: `Register > ${Boolean(error) ? 'error' : 'success'}`,
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
