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
	const showErrorNotification = useErrorNotification();

	return async ({
		email,
		password,
		firstName,
		lastName
	}: IRegisterFormData): Promise<void> => {
		try {
			const response = await auth.signUp({
				email,
				password,
				options: {
					displayName:
						firstName?.trim() + ' ' + (lastName?.trim() ?? '')
				}
				// options: {
				// 	// userData: <{ display_name: string }>{
				// 	// 	display_name:
				// 	// 		firstName?.trim() + ' ' + (lastName?.trim() ?? ''),
				// 	// 	// user_type: type,
				// 	// 	first_name: firstName?.trim(),
				// 	// 	last_name: lastName?.trim()
				// 	// }
			});

			if (response.error) {
				showErrorNotification({
					title: 'Failed to register account',
					description: 'Please try again later.'
				});
			}

			ga.event({
				action: `Register - ${response.error ? 'error' : 'success'}`,
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

export const useLogin = (): any => {
	const showErrorNotification = useErrorNotification();
	const { addNotification, removeNotification } = useNotification();
	const dispatch = useDispatch();
	const router = useRouter();

	const [fetchUser] = useUserLazyQuery({
		variables: {
			userId: auth.getUser()?.id
		},
		onError: () => {
			showErrorNotification({
				title: 'Failed to get user',
				description: 'Please try again later'
			});
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
				// showErrorNotification({
				// 	title: 'Failed to login',
				// 	description: response.error.message
				// });
				// throw 'Failed to login';
				// console.log('ddgfgfhygf');
				addNotification(`Failed to login. ${response.error.message}`);
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

// export const useForgottenPassword = () => {
// 	const showSuccessNotification = useSuccessNotification();
// 	const showErrorNotification = useErrorNotification();

// 	return async ({ email }: Pick<IAuthFormData, 'email'>): Promise<void> => {
// 		try {
// 			showSuccessNotification({
// 				title: 'Password reset email sent',
// 				description: "We've sent you an email to reset you password."
// 			});
// 		} catch (error) {
// 			showErrorNotification({
// 				title: 'Failed to send password reset email',
// 				description: 'Please try again later.'
// 			});
// 		}
// 	};
// };

// export const useGetUser = (userId: string): any => {
// 	const [getUser, { loading, data }] = useLazyQuery(GET_USER, {
// 		variables: {
// 			user_id: userId
// 		}
// 	});

// 	getUser();
// };

export const useFetchUser = () => {
	// const router = useRouter();
	const dispatch = useDispatch();

	return ({ userId }: { userId: string }) => {
		return () => {
			useUserLazyQuery({
				variables: {
					userId
				},
				onCompleted: (data) => {
					const user = data.user as TUsers;
					dispatch(setUser(user));
				}
			});
		};
	};

	// const [getUser] = useUserLazyQuery({
	// 	variables: {
	// 		userId
	// 	},
	// 	onCompleted: (data) => {
	// 		const user = data.user as TUsers;
	// 		dispatch(setUser(user));
	// 		console.log('user: ', user);
	// 	}
	// });

	// useEffect(() => {
	// 	if (userId) {
	// 		console.log('brrrrr');
	// 	}
	// }, [userId]);

	// return useUserLazyQuery({
	// 	variables: {
	// 		userId: id
	// 	},
	// 	onCompleted: (data) => {
	// 		const user = data.user as TUsers;
	// 		console.log('user: ', user);
	// 		dispatch(setUser(user));
	// 		router.replace('/ideas?page=1');
	// 		ga.event({
	// 			action: 'Login',
	// 			params: {
	// 				user_id: auth.getUser().id,
	// 				display_name: user.displayName,
	// 				user_email: user.email,
	// 				user_created_date: user.createdAt,
	// 				user_login_date: user.lastSeen
	// 			}
	// 		});
	// 	}
	// });
};

// const useUpdateLastLoggedInTime = (userId: string) => {
// 	return useUpdateUserLastLoggedInMutation({
// 		variables: {
// 			id:
// 		}
// 	});
// }

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

export const useCheckLoggedIn = (): void => {
	// const { isAuthenticated } = useAuth();
	// const router = useRouter();
	// if (isAuthenticated) router.push('/ideas?page=1');
};

export const useClaim = (): string => auth.getUser()?.id;
export const useAuth = (): any => auth;

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
