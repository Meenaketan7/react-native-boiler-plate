import { Storage } from 'redux-persist';
import { mmkv } from '..';

export const reduxStorage: Storage = {
	setItem: (key, value) => {
		mmkv.set(key, value);
		return Promise.resolve(true);
	},
	getItem: key => {
		const value = mmkv.getString(key);
		return Promise.resolve(value);
	},
	removeItem: key => {
		mmkv.delete(key);
		return Promise.resolve();
	},
};
