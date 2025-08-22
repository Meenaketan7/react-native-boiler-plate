import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import { reduxStorage } from '../mmkv/mmkv-redux';
import { rootReducer } from './root-reduces';
const persistConfig = {
	key: 'root',
	storage: reduxStorage,
	//	blacklist: [''],
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
