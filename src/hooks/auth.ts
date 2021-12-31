import { useAuth } from '@nhost/react-auth';
import { TUsers, useUserLazyQuery } from 'generated/api';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'slices/auth';
import { IAuthFormData, IRegisterFormData } from 'types/auth';
import { auth } from 'utils/nhost';
import { RootState } from 'utils/reducer';
import { useErrorNotification, useSuccessNotification } from './toast';

export const useRegister = () => {
	const showErrorNotification = useErrorNotification();
	const router = useRouter();

	return async ({
		email,
		password,
		firstName,
		lastName
	}: IRegisterFormData): Promise<void> => {
		try {
			await auth.register({
				email,
				password,
				options: {
					userData: <{ display_name: string }>{
						display_name:
							firstName?.trim() + ' ' + (lastName?.trim() ?? ''),
						// user_type: type,
						first_name: firstName?.trim(),
						last_name: lastName?.trim()
					}
				}
			});
			router.push('/register/complete');

			ga.event({
				action: 'Register',
				params: {
					email,
					display_name:
						firstName?.trim() + ' ' + (lastName?.trim() ?? ''),
					user_registration_date: new Date()
				}
			});
		} catch (error) {
			showErrorNotification({
				title: 'Failed to create an account',
				description: 'Please try again later.'
			});
		}
	};
};

export const useLogin = () => {
	const showErrorNotification = useErrorNotification();
	const [getAuthUser] = useGetAuthenticatedUser();

	return async ({ email, password }: IAuthFormData): Promise<void> => {
		try {
			await auth.login({ email, password });
			getAuthUser();
		} catch (error) {
			showErrorNotification({
				title: 'Failed to login',
				description: 'Incorrect email and/or password.'
			});
		}
	};
};

export const useLogout = () => {
	const showErrorNotification = useErrorNotification();
	// const dispatch = useDispatch();
	// const client = usePushClient();

	return async (): Promise<void> => {
		try {
			await auth.logout();
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

export const useForgottenPassword = () => {
	const showSuccessNotification = useSuccessNotification();
	const showErrorNotification = useErrorNotification();

	return async ({ email }: Pick<IAuthFormData, 'email'>): Promise<void> => {
		try {
			await auth.requestPasswordChange(email);
			showSuccessNotification({
				title: 'Password reset email sent',
				description: "We've sent you an email to reset you password."
			});
		} catch (error) {
			showErrorNotification({
				title: 'Failed to send password reset email',
				description: 'Please try again later.'
			});
		}
	};
};

// export const useGetUser = (userId: string): any => {
// 	const [getUser, { loading, data }] = useLazyQuery(GET_USER, {
// 		variables: {
// 			user_id: userId
// 		}
// 	});

// 	getUser();
// };

export const useGetAuthenticatedUser = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	return useUserLazyQuery({
		variables: {
			user_id: auth.getClaim('x-hasura-user-id') as string
		},
		onCompleted: (data) => {
			const user = data.user as TUsers;
			dispatch(setUser(user));
			router.replace('/ideas?page=1');

			ga.event({
				action: 'Login',
				params: {
					user_id: auth.getClaim('x-hasura-user-id') as string,
					display_name: user.display_name,
					user_email: user.account.email,
					user_created_date: user.created_at,
					user_login_date: new Date()
				}
			});
		}
	});
};

// export const useUpdateProfile = (user_profile: TProfile) => {
// 	const dispatch = useDispatch();
// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 	const { __typename, id, ...rest } = user_profile;
// 	const userProfileCopy = { ...rest };

// 	return useMutation(UPDATE_PROFILE, {
// 		variables: {
// 			id: id,
// 			user_profile: userProfileCopy
// 		},
// 		onCompleted: () => {
// 			dispatch(updateUserProfile(user_profile));
// 		}
// 	});
// };

// export const useUpdatePersonalDetails = (
// 	userPersonalDetails: TPersonalDetails
// ) => {
// 	// const dispatch = useDispatch();
// 	const { setModalDrawer } = useContext(ModalDrawerContext);
// 	const showSuccessNotification = useSuccessNotification();

// 	const { first_name, last_name, country } = userPersonalDetails;

// 	return useMutation(UPDATE_USER_PERSONAL_DETAILS, {
// 		variables: {
// 			id: auth.getClaim('x-hasura-user-id') as string,
// 			userPersonalDetails: { first_name, last_name, country }
// 		},
// 		onCompleted: (data) => {
// 			// dispatch(updateUserPersonalDetails(data.user));
// 			setModalDrawer({
// 				isOpen: false
// 			});

// 			showSuccessNotification({
// 				title: 'Your personal details have been updated'
// 			});
// 		}
// 	});
// };

export const useCurrentUser = (): TUsers => {
	try {
		return useSelector((state: RootState) => state.authSlice.user);
	} catch (e) {
		return undefined;
	}
};

export const useCheckLoggedIn = () => {
	const { signedIn } = useAuth();
	const router = useRouter();

	if (signedIn) router.back();
};

export const useClaim = () => auth.getClaim('x-hasura-user-id') as string;

// export const useUpdateUserAvatar = () => {
// 	// return (filePath: string): any =>
// 	// return useUpdateUserPersonalDetailsMutation({
// 	// 	variables: {
// 	// 		id: auth.getClaim('x-hasura-user-id') as string,
// 	// 		userPersonalDetails: {
// 	// 			avatar_url: filePath
// 	// 		}
// 	// 	},
// 	// 	// eslint-disable-next-line @typescript-eslint/no-empty-function
// 	// 	onCompleted: (_data) => {}
// 	// });

// 	return (filePath: string) => {
// 		return useUpdateUserPersonalDetailsMutation({
// 			variables: {
// 				id: auth.getClaim('x-hasura-user-id') as string,
// 				userPersonalDetails: {
// 					avatar_url: filePath
// 				}
// 			},
// 			// eslint-disable-next-line @typescript-eslint/no-empty-function
// 			onCompleted: (_data) => {}
// 		});
// 	};
// };
