import { TUsers, useUserLazyQuery } from '@/generated/api';
import { event } from '@/lib/ga';
import { setUser } from '@/slices/auth';
import { RootState } from '@/utils/reducer';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { auth, nhost } from '@/pages/_app.page';
import { useAuthenticationStatus } from '@nhost/react';
import { Provider } from '@nhost/nhost-js';
import { useNotification } from './util';

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

export const useLogout = () => {
	// const showErrorNotification = useErrorNotification();
	return async () => {
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

export const useCurrentUser = () => {
	return (
		useSelector((state: RootState) => state.authSlice.user) ??
		({} as TUsers)
	);
};

export const useCheckLoggedIn = () => {
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
