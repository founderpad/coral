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
import {
	Provider,
	SignInEmailPasswordHandlerResult,
	SignUpEmailPasswordHandlerResult
} from '@nhost/nhost-js';
import NotificationContext from '@/context/NotificationContext';

export const useRegister = () => {
	const { addNotification } = useContext(NotificationContext);
	const { signUpEmailPassword } = useSignUpEmailPassword();
	let response: SignUpEmailPasswordHandlerResult;

	const onRegister = async (values: TRegisterFormFields) => {
		const { email, password, firstName, lastName } = values;

		try {
			response = await signUpEmailPassword(email, password, {
				displayName: `${firstName} ${lastName}`.trim(),
				metadata: {
					firstName,
					lastName
				}
			});

			if (response.error) {
				throw new Error(
					`Failed to create account. ${response.error.message}.`
				);
			}

			Router.push(
				`/register/registersuccess?nm=${encodeString(firstName)}`
			);
		} catch (error: any) {
			addNotification({ message: error.message, status: 'error' });
		} finally {
			event({
				action: `Register - ${response.error ? 'error' : 'success'}`,
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

export const useLogin = () => {
	const { signInEmailPassword } = useSignInEmailPassword();
	const { addNotification } = useContext(NotificationContext);
	let response: SignInEmailPasswordHandlerResult;

	const onLogin = async ({ email, password }: TLoginFields) => {
		try {
			response = await signInEmailPassword(email, password);
			if (response.needsEmailVerification) {
				addNotification({
					message: `Failed to login. Please verify your email address first.`,
					status: 'error'
				});
			}
			if (response.error) {
				throw new Error(
					'Failed to login. Incorrect email and/or password.'
				);
			}
		} catch (error: any) {
			addNotification({ message: error.message, status: 'error' });
		} finally {
			event({
				action: `Login - ${response.isError ? 'error' : 'success'}`,
				params: {
					email,
					user_registration_date: new Date()
				}
			});
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
	const { addNotification } = useContext(NotificationContext);

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
				action: 'Reset your password',
				params: {
					email
				}
			});
		}
	};

	return { onResetPassword };
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
