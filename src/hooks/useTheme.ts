import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'theme';

export type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        const enableDark = theme === 'dark';
        root.classList.toggle('dark', enableDark);
        body.classList.toggle('dark', enableDark);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return { theme, setTheme, toggleTheme };
} 