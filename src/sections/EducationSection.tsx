import { education } from '../data/education';
import { SectionHeading } from '../components/ui/SectionHeading';
import { InViewFade } from '../components/util/InViewFade';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function EducationSection() {
    return (
        <section id="education" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<GraduationCap className="w-6 h-6" />}
                    subtitle="Academic foundation in computer science and engineering"
                >
                    Education
                </SectionHeading>

                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <InViewFade key={edu.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Status Badge */}
                                    {edu.status && (
                                        <div className="absolute -top-2 -right-2">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${edu.status === 'Currently Pursuing'
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                                : 'bg-gradient-to-r from-slate-500 to-slate-600 text-white'
                                                }`}>
                                                {edu.status}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 shrink-0">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-sky-600 dark:text-sky-400 font-semibold">
                                                {edu.field}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                                            {edu.institution}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.startDate} - {edu.endDate}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </InViewFade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 