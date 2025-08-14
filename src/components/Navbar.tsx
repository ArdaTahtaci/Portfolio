import { useActiveSection } from '../hooks/useActiveSection';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const SECTIONS = ['home', 'about', 'experience', 'education', 'hackathons', 'projects', 'articles', 'contact'];

export function Navbar() {
    const active = useActiveSection(SECTIONS, 120);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const formatSectionName = (section: string) => {
        if (section === 'hackathons') return 'Hackathons';
        return section.charAt(0).toUpperCase() + section.slice(1);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 border-b border-slate-200/20 dark:border-slate-700/20">
            <nav className="mx-auto max-w-screen-xl px-4 md:px-6 flex h-16 items-center justify-between">
                <a
                    href="#home"
                    className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                    AT
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-5 text-sm">
                    {SECTIONS.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${active === id
                                    ? 'text-sky-600 dark:text-sky-400'
                                    : 'text-slate-600 dark:text-slate-300'
                                    }`}
                            >
                                {formatSectionName(id)}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                    <ul className="px-4 py-4 space-y-2">
                        {SECTIONS.map((id) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={handleLinkClick}
                                    className={`block px-4 py-2 rounded-lg font-medium transition-colors ${active === id
                                        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                        }`}
                                >
                                    {formatSectionName(id)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
} 