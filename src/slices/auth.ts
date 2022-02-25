import { TUsers, TUser_Address, TUser_Profile } from '@generated/api';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

export const logout = createAction('auth/logout');

const initialState = {
	user: undefined as TUsers | undefined
};

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(logout, () => {
			return initialState;
		});
	},
	reducers: {
		setUser(state, action: PayloadAction<TUsers>) {
			state.user = action.payload;
		},
		clearUser(state) {
			state.user = undefined;
			storage.removeItem('persist:root');
		},
		setProfileComplete(state) {
			// Ugly. Remove Redux asap
			if (state.user?.profile)
				state.user = {
					...state.user,
					profile: {
						...state.user.profile,
						isComplete: true
					}
				};
		},
		updateUserPersonalDetails(
			state,
			action: PayloadAction<{
				user: TUsers;
				userAddress: TUser_Address;
				userProfile: TUser_Profile;
			}>
		) {
			const { user, userAddress, userProfile } = action.payload;
			if (state.user?.address)
				state.user = {
					...state.user,
					...user,
					address: {
						...state.user.address,
						...userAddress
					},
					profile: {
						...state.user.profile,
						...userProfile
					}
				};
		},
		updateUserImage(state, action: PayloadAction<string>) {
			if (state.user)
				state.user = {
					...state.user,
					avatarUrl: action.payload
				};
		}
	}
});

export const {
	setUser,
	clearUser,
	setProfileComplete,
	updateUserPersonalDetails,
	updateUserImage
} = authSlice.actions;
export default authSlice.reducer;
