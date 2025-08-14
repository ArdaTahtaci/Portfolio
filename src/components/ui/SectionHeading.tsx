import type { ReactNode } from 'react';

type Props = {
    id?: string;
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    subtitle?: string;
};

export function SectionHeading({ id, children, className = '', icon, subtitle }: Props) {
    return (
        <div className={`text-center ${className}`}>
            {icon && (
                <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
                        {icon}
                    </div>
                </div>
            )}
            <h2 id={id} className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {children}
            </h2>
            {subtitle && (
                <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
} 