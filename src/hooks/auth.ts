import { QueryResult, useMutation, useQuery } from '@apollo/client';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useGetUserLazyQuery, Users } from 'generated/graphql';
import { USER_GET_EXPERIENCE, USER_UPDATE_EXPERIENCE } from 'graphql/user';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'slices/auth';
// import { updateUserPersonalDetails } from 'slices/auth';
import { IAuthFormData, IRegisterFormData, TExperience } from 'types/auth';
import { UserType } from 'utils/Constants';
import { auth } from 'utils/nhost';
import { RootState } from 'utils/reducer';
import { useErrorNotification, useSuccessNotification } from './toast';

export const useRegister = (): any => {
	const showErrorNotification = useErrorNotification();
	const router = useRouter();

	return async ({
		email,
		password,
		firstName,
		lastName,
		type
	}: IRegisterFormData): Promise<void> => {
		try {
			await auth.register({
				email,
				password,
				options: {
					userData: <{ display_name: string; user_type: UserType }>{
						display_name:
							firstName?.trim() + ' ' + (lastName?.trim() ?? ''),
						user_type: type,
						first_name: firstName?.trim(),
						last_name: lastName?.trim()
					}
				}
			});
			router.push('/register/complete');
		} catch (error) {
			showErrorNotification({
				title: 'Failed to create an account',
				description: error.message
			});
		}
	};
};

export const useLogin = (): any => {
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

export const useLogout = (): any => {
	const showErrorNotification = useErrorNotification();
	// const dispatch = useDispatch();
	const router = useRouter();

	return async (): Promise<void> => {
		try {
			await router.replace('/loggedout');
			await auth.logout();
			// dispatch(clearUser());
		} catch (error) {
			showErrorNotification({
				title: 'Failed to logout',
				description: 'Please try again later.'
			});
		}
	};
};

export const useForgottenPassword = (): any => {
	const showSuccessNotification = useSuccessNotification();
	const showErrorNotification = useErrorNotification();

	return async ({
		email
	}: Pick<IAuthFormData, 'email'>): Promise<void> => {
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

export const useGetAuthenticatedUser = (): any => {
	const router = useRouter();
	const dispatch = useDispatch();

	return useGetUserLazyQuery({
		variables: {
			user_id: auth.getClaim('x-hasura-user-id') as string
		},
		onCompleted: (data) => {
			const user = data.user;
			dispatch(setUser(user as Users));
			router.replace('/dashboard');
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

export const useGetExperience = (id: string): QueryResult<TExperience, any> => {
	const response = useQuery(USER_GET_EXPERIENCE, {
		variables: {
			id: id
		},
		fetchPolicy: 'cache-first'
	});

	return { ...response, data: response.data?.profile as TExperience };
};

export const useUpdateExperience = (userExperience: TExperience): any => {
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { __typename, id, user_id, ...rest } = userExperience;

	return useMutation(USER_UPDATE_EXPERIENCE, {
		variables: {
			id: id,
			userExperience: { ...rest }
		},
		onCompleted: (_data) => {
			setModalDrawer({
				isOpen: false
			});
			showSuccessNotification({
				title: 'Your experience has been updated'
			});
		}
	});
};

export const useCurrentUser = (): Users => {
	return useSelector((state: RootState) => state.authSlice.user);
};

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
