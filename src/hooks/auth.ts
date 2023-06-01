import { TUsers, useUserLazyQuery } from '@/generated/api';
import { event } from '@/lib/ga';
import { setUser } from '@/slices/auth';
import { RootState } from '@/utils/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { TRegisterFormFields, TLoginFields } from 'src/types/auth';
import { useErrorNotification } from './toast';
import Router from 'next/router';
import { useContext, useEffect } from 'react';
import { encodeString, redirectTo } from '@/utils/validators';
import ModalDrawerContext from '@/context/ModalDrawerContext';
import { auth } from '@/pages/_app';
import {
	useAuthenticationStatus,
	useSignInEmailPassword,
	useSignUpEmailPassword
} from '@nhost/react';
import { Provider } from '@nhost/nhost-js';
import NotificationContext from '@/context/NotificationContext';

export const useRegister = () => {
	const { addNotification } = useContext(NotificationContext);

	const { signUpEmailPassword, needsEmailVerification } =
		useSignUpEmailPassword();

	const onRegister = async (values: TRegisterFormFields) => {
		const { email, password, firstName, lastName } = values;

		try {
			// const response = await auth.signUp({
			// 	email,
			// 	password,
			// 	options: {
			// 		displayName: `${firstName?.trim()} ${
			// 			lastName?.trim() ?? ''
			// 		}`
			// 	}
			// });

			const response = await signUpEmailPassword(email, password, {
				displayName: `${firstName} ${lastName}`.trim(),
				metadata: {
					firstName,
					lastName
				}
			});

			if (response.error) {
				addNotification(
					`Failed to create account. ${response.error.message}.`,
					'error'
				);

				throw new Error(
					`Failed to create account with error code ${response.error.status}. ${response.error.message}.`
				);
			}

			event({
				action: `Register - ${response.error ? 'error' : 'success'}`,
				params: {
					email,
					display_name: `${firstName} ${lastName}`.trim(),
					user_registration_date: new Date()
				}
			});

			Router.push(
				`/register/registersuccess?nm=${encodeString(firstName)}`
			);
		} catch (error) {
			console.log('Failed to create account');
		}
	};

	return { onRegister };
};

export const useLogin = () => {
	const { signInEmailPassword } = useSignInEmailPassword();
	const { addNotification } = useContext(NotificationContext);
	const onLogin = async ({ email, password }: TLoginFields) => {
		try {
			// const response = await auth.signIn({ email, password });
			// if (response.error) {
			// 	redirectTo(true, undefined, '/login');
			// 	throw new Error('Failed to login');
			// }
			const response = await signInEmailPassword(email, password);
			if (response.error) {
				addNotification(
					`Failed to login. Incorrect email and/or password.`,
					'error'
				);

				throw new Error(
					`Failed to login with error code ${response.error.status}. ${response.error.message}.`
				);
			}
		} catch (error) {
			console.error('Failed to login');
		}
	};

	return { onLogin };
};

export const useSocialLogin = () => {
	const [getUser] = useGetAuthUser();

	const { isAuthenticated } = useAuthenticationStatus();
	useEffect(() => {
		if (isAuthenticated) getUser();
	}, [isAuthenticated, getUser]);

	return async (authProvider: Provider) => {
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
	const resetPassword = async ({ email }: { email: string }) => {
		try {
			await auth.resetPassword({ email });
			redirectTo(false, 'rp', '/resetpassword');
		} catch (error) {
			redirectTo(true, 'rp', '/resetpassword');
		}
	};

	return resetPassword;
};

export const useChangePassword = () => {
	const { closeModalDrawer } = useContext(ModalDrawerContext);

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
		closeModalDrawer();
	};

	return onChangePassword;
};

export const useGetAuthUser = () => {
	const dispatch = useDispatch();

	const getUser = useUserLazyQuery({
		variables: {
			userId: useClaim()
		},
		onError: () => {
			redirectTo(true);
			throw new Error('Failed to get user');
		},
		onCompleted: (data) => {
			const user = data.user as TUsers;
			dispatch(setUser(user));
			Router.replace('/ideas/search?page=1');
		}
	});

	return getUser;
};

export const useLogout = (): (() => Promise<void>) => {
	const showErrorNotification = useErrorNotification();
	return async (): Promise<void> => {
		try {
			await auth.signOut();
			// client.push(function () {
			// 	client.removeExternalUserId();
			// });
			// await client.clearStore();
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
	const { isAuthenticated } = useAuthenticationStatus();
	const changePasswordHash = Router.asPath.split('#')[1] ?? '';

	useEffect(() => {
		if (isAuthenticated && !changePasswordHash) {
			Router.replace('/ideas/search?page=1');
		}
	}, [isAuthenticated, changePasswordHash]);
};

export const useClaim = (): string | undefined => auth.getUser()?.id;
export const useAuth = () => auth;
