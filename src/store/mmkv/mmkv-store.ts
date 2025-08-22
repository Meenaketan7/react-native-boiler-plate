import { mmkv } from '.';

export const Storage = {
	set: <T>(key: string, value: T) => {
		const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
		mmkv.set(key, stringValue);
	},

	get: <T>(key: string): T | null => {
		const value = mmkv.getString(key);
		if (!value) return null;

		try {
			return JSON.parse(value) as T;
		} catch {
			return value as unknown as T;
		}
	},

	delete: (key: string) => {
		mmkv.delete(key);
	},

	clearAll: () => {
		mmkv.clearAll();
	},
};
