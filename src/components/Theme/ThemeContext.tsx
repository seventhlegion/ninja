import React, { useState, useEffect, createContext } from 'react';

// const getinitialTheme = (): any => {
// 	if (typeof window !== 'undefined' && window.localStorage) {

// 		const stored = localStorage.getItem('color-theme');

// 		if (typeof stored === 'string') {
// 			return stored;
// 		}

// 		const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
// 		if (userMedia.matches) {
// 			return 'dark'
// 		}
// 	}
// 	return 'light';
// }

export const ThemeContext: any = createContext(undefined);

export default function ThemeProvider({ initialTheme, children }: any) {
	const [theme, setTheme] = useState('dark');

	const rawSetTheme = (rawTheme: any) => {
		const root = window.document.documentElement;
		const isDark = rawTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(rawTheme);

		localStorage.setItem('color-theme', rawTheme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
