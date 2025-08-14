import { skills } from '../data/skills';
import { motion } from 'framer-motion';

export function SkillsGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                >
                    <div className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-md transition-all duration-200 text-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {skill.label}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
} 