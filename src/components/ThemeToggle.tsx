import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return (
        <button
            aria-label={label}
            title={label}
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
} 