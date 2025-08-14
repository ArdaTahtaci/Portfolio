import type { ReactNode } from 'react';
import type { SocialLink } from '../types';
import { Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import { TelegramIcon } from './icons/CustomIcons';

const iconMap: Record<SocialLink['icon'], ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    x: <Twitter size={20} />,
    globe: <Globe size={20} />,
    mail: <Mail size={20} />,
    telegram: <TelegramIcon size={20} />,
};

export function SocialIconLink({ label, url, icon }: SocialLink) {
    return (
        <a
            href={url}
            target={url.startsWith('http') ? '_blank' : undefined}
            rel={url.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-md transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
            aria-label={label}
        >
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 transition-colors">
                {iconMap[icon]}
            </div>
            <span className="font-medium">{label}</span>
        </a>
    );
} 