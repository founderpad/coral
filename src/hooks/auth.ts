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
import Router from 'next/router';
import { useContext, useEffect } from 'react';
import { encodeString, redirectTo } from '@utils/validators';
import ModalDrawerContext from '@context/ModalDrawerContext';

export const useRegister = () => {
	return async ({
		email,
		password,
		firstName,
		lastName
	}: TRegisterFormFields): Promise<void> => {
		try {
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
				redirectTo(true, undefined, '/register');
				throw 'Failed to register account';
			}

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

			Router.push(
				`/register/registersuccess?nm=${encodeString(firstName)}`
			);
		} catch (error) {
			redirectTo(true, undefined, '/register');
			throw 'Failed to register account';
		}
	};
};

export const useLogin = () => {
	return async ({ email, password }: TLoginFields): Promise<void> => {
		try {
			const response = await auth.signIn({ email, password });
			if (response.error) {
				redirectTo(true, undefined, '/login');
				throw new Error('Failed to login');
			}
		} catch (error) {}
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
	const { isAuthenticated } = useAuth();
	const changePasswordHash = Router.asPath.split('#')[1] ?? '';

	useEffect(() => {
		if (isAuthenticated && !changePasswordHash) {
			Router.replace('/ideas/search?page=1');
		}
	}, [isAuthenticated]);
};

export const useClaim = (): string | undefined => auth.getUser()?.id;
export const useAuth = () => useNhostAuth();
