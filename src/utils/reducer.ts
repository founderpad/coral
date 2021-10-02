import { combineReducers } from 'redux';
import AuthSlice from 'slices/auth';

/**
 * The @appReducer specifies the top-level app reducer, which we used to combine reducers together.
 *
 * @author jlee
 */
const appReducer = combineReducers({
	authSlice: AuthSlice
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;
export default rootReducer;
