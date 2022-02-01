import { TUsers, useUserLazyQuery } from '@generated/api';
import { event } from '@lib/ga';
import { useNhostAuth } from '@nhost/react-auth';
import { setUser } from '@slices/auth';
import { auth } from '@utils/nhost';
import { RootState } from '@utils/reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
	IAuthFormData,
	IRegisterFormData,
	TAuthProvider
} from 'src/types/auth';
import { useErrorNotification } from './toast';
// import { useNotification } from './util';
import Router from 'next/router';
import { useEffect } from 'react';

export const useRegister = (): any => {
	const showErrorNotification = useErrorNotification();
	// const { addNotification, removeNotification } = useNotification();

	return async ({
		email,
		password,
		firstName,
		lastName
	}: IRegisterFormData): Promise<void> => {
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
				// options: {
				// 	// userData: <{ display_name: string }>{
				// 	// 	display_name:
				// 	// 		displayName?.trim() + ' ' + (lastName?.trim() ?? ''),
				// 	// 	// user_type: type,
				// 	// 	first_name: displayName?.trim(),
				// 	// 	last_name: lastName?.trim()
				// 	// }
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
	const showErrorNotification = useErrorNotification();
	const [getUser] = useGetAuthUser();

	return async ({ email, password }: IAuthFormData): Promise<void> => {
		try {
			// removeNotification();
			const response = await auth.signIn({ email, password });

			if (response.error) {
				// addNotification(response.error.message, 'error');
				showErrorNotification({
					title: 'Failed to login',
					description: response.error.message
				});
				throw 'Failed to login';
			} else {
				getUser();
			}
		} catch (error) {
			throw 'An error has occurred';
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

const useGetAuthUser = () => {
	// const { addNotification } = useNotification();
	const showErrorNotification = useErrorNotification();

	const dispatch = useDispatch();

	const getUser = useUserLazyQuery({
		variables: {
			userId: auth.getUser()?.id
		},
		onError: () => {
			// addNotification(
			// 	'Failed to get user. Please try again later.',
			// 	'error'
			// );
			showErrorNotification({
				title: 'Failed to login',
				description: 'Please try again later'
			});
			throw 'Failed to get user';
		},
		onCompleted: (data) => {
			const user = data.user as TUsers;
			dispatch(setUser(user));
			Router.replace('/ideas?page=1');
		}
	});

	return getUser;
};

export const useLogout = (): any => {
	const showErrorNotification = useErrorNotification();
	// const dispatch = useDispatch();
	// const client = usePushClient();

	return async (): Promise<void> => {
		try {
			await auth.signOut();
			// client.push(function () {
			// 	client.removeExternalUserId();
			// });
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
