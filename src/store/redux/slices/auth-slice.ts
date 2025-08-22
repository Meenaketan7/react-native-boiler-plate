import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authT {
	auth: any | null;
	loading: boolean;
}

const initialAuthState: authT = {
	auth: null,
	loading: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		startLoading: state => {
			state.loading = true;
		},
		stopLoading: state => {
			state.loading = false;
		},
		saveAuth: (state, action: PayloadAction<any | null>) => {
			state.auth = action.payload;
			state.loading = false;
		},
		clearAuth: state => {
			state.auth = null;
			state.loading = false;
		},
	},
});

export const { saveAuth, startLoading, stopLoading, clearAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
