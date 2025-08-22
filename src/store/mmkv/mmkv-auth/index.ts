import { useEffect, useState } from 'react';
import { Storage } from '../mmkv-store';

import { User } from '@/types/type-auth';
import { StorageKeys } from '../../../constants';

export const useAuthStorage = () => {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<User | null>(null);

	// Load token and user on mount

	useEffect(() => {
		try {
			const storedToken = Storage.get<string>(StorageKeys.ACCESS_TOKEN);
			const storedUser = Storage.get<User>(StorageKeys.USER_INFO);

			setToken(storedToken ?? null);
			setUser(storedUser ?? null);
		} catch (error) {
			console.warn('Failed to load auth from MMKV:', error);
			setToken(null);
			setUser(null);
		}
	}, []);

	// Sync both user and token at once
	const setAuth = (auth: { token: string; user: User }) => {
		Storage.set(StorageKeys.ACCESS_TOKEN, auth.token);
		Storage.set(StorageKeys.USER_INFO, auth.user);
		setToken(auth.token);
		setUser(auth.user);
	};

	const clearAuth = () => {
		Storage.delete(StorageKeys.ACCESS_TOKEN);
		Storage.delete(StorageKeys.USER_INFO);
		setToken(null);
		setUser(null);
	};

	// TOKEN management
	const setAccessToken = (value: string) => {
		Storage.set(StorageKeys.ACCESS_TOKEN, value);
		setToken(value);
	};

	const removeAccessToken = () => {
		Storage.delete(StorageKeys.ACCESS_TOKEN);
		setToken(null);
	};

	// USER management
	const setUserInfo = (user: User) => {
		Storage.set(StorageKeys.USER_INFO, user);
		setUser(user);
	};

	const removeUser = () => {
		Storage.delete(StorageKeys.USER_INFO);
		setUser(null);
	};

	const updateUser = (updates: Partial<User>) => {
		if (!user) return;
		const updated = { ...user, ...updates };
		Storage.set(StorageKeys.USER_INFO, updated);
		setUser(updated);
	};

	const getUserProperty = <K extends keyof User>(key: K): User[K] | null => {
		return user?.[key] ?? null;
	};

	const updateUserProperty = <K extends keyof User>(key: K, value: User[K]) => {
		if (!user) return;
		const updated = { ...user, [key]: value };
		Storage.set(StorageKeys.USER_INFO, updated);
		setUser(updated);
	};

	const deleteUserProperty = (key: keyof User) => {
		if (!user || !(key in user)) return;
		const { [key]: _, ...rest } = user;
		Storage.set(StorageKeys.USER_INFO, rest);
		setUser(rest as User);
	};

	return {
		token,
		user,
		isLoggedIn: !!token && !!user,

		// full auth
		setAuth,
		clearAuth,

		// token
		setAccessToken,
		removeAccessToken,

		// user
		setUser: setUserInfo,
		removeUser,
		updateUser,
		getUserProperty,
		updateUserProperty,
		deleteUserProperty,
	};
};
