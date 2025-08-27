import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { mmkv } from '../store/mmkv';

type Theme = 'light' | 'dark';

export interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
	changeTheme: (value: 'dark' | 'light' | 'default') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: React.ReactNode;
}
const STORAGE_KEY = 'appTheme';
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const systemTheme = useColorScheme();
	const [theme, setTheme] = useState<Theme>(systemTheme || 'light');
	console.log(systemTheme);
	useEffect(() => {
		const loadTheme = async () => {
			try {
				const storedTheme = mmkv.getString(STORAGE_KEY) as
					| 'dark'
					| 'light'
					| 'default'
					| undefined;
				if (storedTheme === 'dark' || storedTheme === 'light') {
					setTheme(storedTheme);
				} else {
					setTheme(systemTheme === 'dark' ? 'dark' : 'light');
				}
			} catch (error) {
				console.error('Failed to load theme from storage:', error);
			}
		};

		loadTheme();
	}, []);

	const toggleTheme = async () => {
		try {
			const newTheme = theme === 'light' ? 'dark' : 'light';
			changeTheme(newTheme);
		} catch (err) {
			console.error('Failed to set Theme:', err);
		}
	};
	const changeTheme = async (value: 'dark' | 'light' | 'default') => {
		try {
			mmkv.set(STORAGE_KEY, value);
			const resolvedTheme: Theme = value === 'default' ? (systemTheme as Theme) : value;
			setTheme(resolvedTheme);
		} catch (err) {
			console.error('Failed to set Theme:', err);
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
			<GluestackUIProvider mode={theme}>{children}</GluestackUIProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
