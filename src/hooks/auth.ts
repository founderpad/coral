import { logout } from './../slices/auth';
import { TUsers, useUserLazyQuery } from '@generated/api';
import { event } from '@lib/ga';
import { useNhostAuth } from '@nhost/react-auth';
import { setUser } from '@slices/auth';
import { auth } from '@utils/nhost';
import { RootState } from '@utils/reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
	TRegisterFormFields,
	TAuthProvider,
	TLoginFields
} from 'src/types/auth';
import { useErrorNotification } from './toast';
// import { useNotification } from './util';
import Router from 'next/router';
import { useContext, useEffect } from 'react';
import { encodeString, redirectTo } from '@utils/validators';
import ModalDrawerContext from '@context/ModalDrawerContext';
// import { useApolloClient } from '@apollo/client';

export const useRegister = (): any => {
	const showErrorNotification = useErrorNotification();
	// const { addNotification, removeNotification } = useNotification();

	return async ({
		email,
		password,
		firstName,
		lastName
	}: TRegisterFormFields): Promise<void> => {
		try {
			// removeNotification();
			const response = await auth.signUp({
				email,
				password,
				options: {
					displayName: `${firstName?.trim()} ${
						lastName?.trim() ?? ''
					}`
				}
			});

			if (response.error) {
				// addNotification(response.error.message, 'error');
				showErrorNotification({
					title: 'Failed to create account',
					description: response.error.message
				});
				throw 'Failed to register account';
			}

			// addNotification(
			// 	`You have successfully registered an account. `,
			// 	'success'
			// );

			event({
				action: `Register - ${response.error ? 'error' : 'success'}`,
				params: {
					email,
					display_name: `${firstName?.trim()} ${
						lastName?.trim() ?? ''
					}`,
					user_registration_date: new Date()
				}
			});

			// e1=${encodeString(
			// 	email
			// )}
			Router.push(
				`/register/registersuccess?nm=${encodeString(firstName)}`
			);
		} catch (error) {
			// addNotification(
			// 	'Failed to create an account. Please try again later.',
			// 	'error'
			// );

			showErrorNotification({
				title: 'Failed to create account',
				description: 'Please try again later'
			});
		}
	};
};

export const useLogin = (): (({
	email,
	password
}: {
	email: string;
	password: string;
}) => Promise<void>) => {
	// const { addNotification, removeNotification } = useNotification();
	// const showErrorNotification = useErrorNotification();
	const [getUser] = useGetAuthUser();

	return async ({ email, password }: TLoginFields): Promise<void> => {
		try {
			// removeNotification();
			const response = await auth.signIn({ email, password });

			if (response.error) {
				redirectTo(true);
				// addNotification(response.error.message, 'error');
				// showErrorNotification({
				// 	title: 'Failed to login',
				// 	description: response.error.message
				// });
				throw new Error('Failed to login');
			} else {
				getUser();
			}
		} catch (error) {
			// throw new Error('An error has occurred');
		}
	};
};

export const useSocialLogin = () => {
	const [getUser] = useGetAuthUser();

	const { isAuthenticated } = useAuth();
	useEffect(() => {
		if (isAuthenticated) getUser();
	}, [isAuthenticated]);

	return async (authProvider: TAuthProvider) => {
		try {
			await auth.signIn({
				provider: authProvider
			});
		} catch (error) {
			throw `Failed to login with ${authProvider}`;
		}
	};
};

export const useResetPassword = () => {
	const showErrorNotification = useErrorNotification();

	const resetPassword = async ({ email }: { email: string }) => {
		try {
			await auth.resetPassword({ email });
			redirectTo(false, 'rp');
		} catch (error) {
			redirectTo(true, 'rp');
			console.error('Error resetting password: ', error);
			showErrorNotification({
				title: 'Failed to reset password',
				description:
					'Please try again later, otherwise contact support@founderpad.com'
			});
		}
	};

	return resetPassword;
};

export const useChangePassword = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onChangePassword = async ({
		newPassword
	}: {
		newPassword: string;
	}) => {
		const { error } = await auth.changePassword({ newPassword });

		if (error) {
			redirectTo(true, 'rp');
			console.error('Error changing password: ', error);
			throw 'Failed to change password';
		}

		redirectTo(false, 'cp');

		setModalDrawer({
			isOpen: false
		});
	};

	return onChangePassword;
};

const useGetAuthUser = () => {
	// const { addNotification } = useNotification();
	// const showErrorNotification = useErrorNotification();

	const dispatch = useDispatch();

	const getUser = useUserLazyQuery({
		variables: {
			userId: auth.getUser()?.id
		},
		onError: () => {
			redirectTo(true);
			throw new Error('Failed to get user');
		},
		onCompleted: (data) => {
			const user = data.user as TUsers;
			dispatch(setUser(user));
			Router.replace('/ideas?page=1');
		}
	});

	return getUser;
};

export const useLogout = (): (() => Promise<void>) => {
	const showErrorNotification = useErrorNotification();
	const dispatch = useDispatch();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	// const client = useApolloClient();
	// const client = usePushClient();

	return async (): Promise<void> => {
		try {
			await auth.signOut();
			// client.push(function () {
			// 	client.removeExternalUserId();
			// });
			// await client.clearStore();
			dispatch(logout());
			setModalDrawer({
				isOpen: false
			});
		} catch (error) {
			showErrorNotification({
				title: 'Failed to logout',
				description: 'Please try again later.'
			});
		}
	};
};

export const useCurrentUser = (): TUsers => {
	return (
		useSelector((state: RootState) => state.authSlice.user) ??
		({} as TUsers)
	);
};

export const useCheckLoggedIn = (): void => {
	const { isAuthenticated } = useAuth() ?? false;

	useEffect(() => {
		if (isAuthenticated) {
			Router.push('/ideas?page=1');
			return;
		}
	}, [isAuthenticated]);
};

export const useClaim = (): string | undefined => auth.getUser()?.id;
export const useAuth = () => useNhostAuth();
