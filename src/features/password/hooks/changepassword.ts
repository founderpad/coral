import ModalDrawerContext from '@/context/ModalDrawerContext';
import { useCurrentUser } from '@/hooks/auth';
import { useNotification } from '@/hooks/util';
import { auth } from '@/pages/_app.page';
import { useContext } from 'react';
import { event } from '@/lib/ga';

export const useChangePassword = () => {
	const { closeModalDrawer } = useContext(ModalDrawerContext);
	const { addNotification } = useNotification();
	const user = useCurrentUser();

	const onChangePassword = async ({
		newPassword
	}: {
		newPassword: string;
	}) => {
		try {
			const response = await auth.changePassword({ newPassword });

			if (response.error) {
				throw Error('Failed to change password');
			}

			addNotification({
				message: 'Your password has been updated successfully.',
				status: 'success'
			});
		} catch (error: unknown) {
			if (error instanceof Error) {
				addNotification({ message: error.message, status: 'error' });
			}
		} finally {
			event({
				action: 'Profile > Change your password',
				params: {
					email: user.email
				}
			});
			closeModalDrawer();
		}
	};

	return onChangePassword;
};
