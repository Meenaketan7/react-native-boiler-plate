import { Action, combineReducers, Reducer } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth-slice';
import { RootState } from './store';

const appReducer = combineReducers({
	auth: authReducer,
});

export const rootReducer: Reducer = (state: RootState, action: Action) => {
	//@ts-ignore
	return appReducer(state, action);
};
