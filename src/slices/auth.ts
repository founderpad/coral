import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Users } from 'generated/graphql';
import storage from 'redux-persist/lib/storage';

const initialState = {
	user: null as Users
};

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<Users>) {
			state.user = action.payload;
		},
		clearUser(state) {
			state.user = null;
			storage.removeItem('persist:root');
		},
		setProfileComplete(state) {
			state.user = {
				...state.user,
				user_profile: {
					...state.user.user_profile,
					is_complete: true
				}
			};
		},
		updatePersonalDetails(state, action: PayloadAction<Users>) {
			state.user = {
				...state.user,
				...action.payload
			};
		},
		updateUserImage(state, action: PayloadAction<string>) {
			state.user = {
				...state.user,
				avatar_url: action.payload
			};
		}
	}
});

export const { setUser, clearUser, setProfileComplete, updatePersonalDetails, updateUserImage } =
	authSlice.actions;
export default authSlice.reducer;
