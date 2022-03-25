// import { AnyAction } from '@reduxjs/toolkit';
import AuthSlice from '@slices/auth';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

/**
 * The @appReducer specifies the top-level app reducer, which we used to combine reducers together.
 *
 * @author jlee
 */
const appReducer = combineReducers({
	authSlice: AuthSlice
});

// Type this
const rootReducer = (state: any, action: any) => {
	if (action.type === 'authSlice/logout') {
		storage.removeItem('persist:root');
		state = {} as RootState;
	}

	return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;
export default rootReducer;
