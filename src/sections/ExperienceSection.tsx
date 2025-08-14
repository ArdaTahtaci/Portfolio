import { experiences } from '../data/experience';
import { SectionHeading } from '../components/ui/SectionHeading';
import { InViewFade } from '../components/util/InViewFade';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ExperienceSection() {
    return (
        <section id="experience" className="py-16 md:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<Briefcase className="w-6 h-6" />}
                    subtitle="Professional journey and key contributions in software development"
                >
                    Work Experience
                </SectionHeading>

                <div className="mt-12 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <InViewFade key={exp.id} className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Company & Role */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                            {exp.position}
                                        </h3>
                                        <p className="text-lg font-semibold text-sky-600 dark:text-sky-400 mt-1">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.startDate} - {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-4 mb-6">
                                    {exp.description.map((desc, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                {desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </InViewFade>
                    ))}
                </div>
            </div>
        </section>
    );
} 