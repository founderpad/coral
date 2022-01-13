import { TUsers, useUserLazyQuery } from 'generated/api';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'slices/auth';
import { IAuthFormData, IRegisterFormData } from 'types/auth';
import { auth } from 'utils/nhost';
import { RootState } from 'utils/reducer';
import { useErrorNotification } from './toast';
import { useNotification } from './util';

export const useRegister = (): any => {
	// const showErrorNotification = useErrorNotification();
	const { addNotification, removeNotification } = useNotification();

	return async ({
		email,
		password,
		firstName,
		lastName
	}: IRegisterFormData): Promise<void> => {
		try {
			removeNotification();
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
				addNotification(response.error.message, 'error');
				throw 'Failed to register account';
			}

			ga.event({
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
			addNotification(
				'Failed to create an account. Please try again later.',
				'error'
			);
		}
	};
};

export const useLogin = (): any => {
	const { addNotification, removeNotification } = useNotification();
	const dispatch = useDispatch();
	const router = useRouter();

	const [fetchUser] = useUserLazyQuery({
		variables: {
			userId: auth.getUser()?.id
		},
		onError: () => {
			addNotification(
				'Failed to get user. Please try again later.',
				'error'
			);
			throw 'Failed to get user';
		},
		onCompleted: (data) => {
			const user = data.user as TUsers;
			dispatch(setUser(user));
			router.replace('/ideas?page=1');
		}
	});

	return async ({ email, password }: IAuthFormData): Promise<void> => {
		try {
			removeNotification();
			const response = await auth.signIn({ email, password });

			if (response.error) {
				addNotification(response.error.message, 'error');
				throw 'Failed to login';
			} else {
				fetchUser();
			}
		} catch (error) {
			throw 'An error has occurred';
		}
	};
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
	try {
		return useSelector((state: RootState) => state.authSlice.user);
	} catch (e) {
		return undefined;
	}
};

export const useCheckLoggedIn = (): void => {
	// const { isAuthenticated } = useAuth();
	// const router = useRouter();
	// if (isAuthenticated) router.push('/ideas?page=1');
};

export const useClaim = (): string => auth.getUser()?.id;
export const useAuth = () => auth;
