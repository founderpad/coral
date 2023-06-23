import { TUsers, useUserLazyQuery } from '@/generated/api';
import { event } from '@/lib/ga';
import { setUser } from '@/slices/auth';
import { RootState } from '@/utils/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { TRegisterFormFields, TLoginFields } from 'src/types/auth';
import Router, { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { encodeString } from '@/utils/validators';
import ModalDrawerContext from '@/context/ModalDrawerContext';
import { auth, nhost } from '@/pages/_app.page';
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
import { useNotification } from './util';
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
				action: `Register > ${response.error ? 'error' : 'success'}`,
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
				action: `Login > ${response.isError ? 'error' : 'success'}`,
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
	const { addNotification } = useNotification();

	const { isAuthenticated } = useAuthenticationStatus();
	useEffect(() => {
		if (isAuthenticated) getUser();
	}, [isAuthenticated, getUser]);

	return async (authProvider: Provider) => {
		try {
			const response = await auth.signIn({
				provider: authProvider
			});

			if (response.error) {
				throw Error(
					`Failed to login using ${
						authProvider.charAt(0).toUpperCase() +
						authProvider.slice(1)
					}`
				);
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				addNotification({ message: error.message, status: 'error' });
			}
		}
	};
};

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

export const useGetAuthUser = () => {
	const dispatch = useDispatch();
	const { addNotification } = useNotification();

	const getUser = useUserLazyQuery({
		variables: {
			userId: useClaim()
		},
		onError: (error) => {
			// redirectTo(true);
			addNotification({
				message: error.message,
				status: 'error'
			});
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
	// const showErrorNotification = useErrorNotification();
	return async (): Promise<void> => {
		try {
			await auth.signOut();
			// client.push(function () {
			// 	client.removeExternalUserId();
			// });
			// await client.clearStore();
		} catch (error) {
			// showErrorNotification({
			// 	title: 'Failed to logout',
			// 	description: 'Please try again later.'
			// });
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
	const router = useRouter();
	const { isAuthenticated } = useAuthenticationStatus();
	const session = nhost.auth.getSession();
	const { type, refreshToken } = router.query;

	const isChangePassword =
		type === 'passwordReset' && refreshToken === session?.refreshToken;

	useEffect(() => {
		if (isAuthenticated) {
			router.replace(`/home${isChangePassword ? '?resetpassword' : ''}`);
		}
	}, [isAuthenticated, router, isChangePassword]);
};

export const useClaim = (): string | undefined => auth.getUser()?.id;
export const useAuth = () => auth;
