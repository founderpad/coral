import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUsers } from 'generated/api';
import storage from 'redux-persist/lib/storage';

const initialState = {
	user: null as TUsers
};

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<TUsers>) {
			state.user = action.payload;
		},
		clearUser(state) {
			state.user = null;
			storage.removeItem('persist:root');
		},
		setProfileComplete(state) {
			state.user = {
				...state.user,
				profile: {
					...state.user.profile,
					isComplete: true
				}
			};
		},
		updatePersonalDetails(state, action: PayloadAction<TUsers>) {
			state.user = {
				...state.user,
				...action.payload
			};
		},
		updateUserImage(state, action: PayloadAction<string>) {
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
	updatePersonalDetails,
	updateUserImage
} = authSlice.actions;
export default authSlice.reducer;
