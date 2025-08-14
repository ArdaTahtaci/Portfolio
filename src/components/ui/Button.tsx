import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: 'primary' | 'ghost';
};

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
    const base = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-transform duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 ring-offset-transparent';
    const styles =
        variant === 'primary'
            ? 'bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400'
            : 'bg-transparent text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-white';
    return (
        <button className={`${base} ${styles} ${className}`} {...props}>
            {children}
        </button>
    );
} 