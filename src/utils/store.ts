import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

/**
 * Create the Redux store
 *
 * @author jlee
 */

// const isProd = process.env.NODE_ENV !== 'development';

/**
 * Persist storage configuration set up
 * @key[root]
 * @storage[storage]
 */
const persistConfig: PersistConfig<any> = {
	key: 'root',
	storage
};

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware
	// devTools: isProd ?? false
});

// export { StoreProvider }

export default store;
