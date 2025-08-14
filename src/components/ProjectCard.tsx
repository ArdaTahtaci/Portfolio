import type { Project } from '../types';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { ETHGlobalIcon, DevfolioIcon } from './icons/CustomIcons';

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
    const getShowcaseIcon = (url: string) => {
        if (url.includes('ethglobal.com')) return <ETHGlobalIcon size={16} />;
        if (url.includes('devfolio.co')) return <DevfolioIcon size={16} />;
        return <ExternalLink className="w-4 h-4" />;
    };

    const getShowcaseLabel = (url: string) => {
        if (url.includes('ethglobal.com')) return 'View on ETHGlobal';
        if (url.includes('devfolio.co')) return 'View on Devfolio';
        return 'View live demo';
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1"
        >
            {project.featured && (
                <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    <Star className="w-3 h-3" />
                    Featured
                </div>
            )}

            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-200"
                            aria-label="View on GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30 hover:bg-sky-200 dark:hover:bg-sky-900/50 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-200"
                            aria-label={getShowcaseLabel(project.links.live)}
                        >
                            {getShowcaseIcon(project.links.live)}
                        </a>
                    )}
                </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.article>
    );
} 