import { hackathons } from '../data/hackathons';
import { SectionHeading } from '../components/ui/SectionHeading';
import { InViewFade } from '../components/util/InViewFade';
import { Trophy, MapPin, Zap, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function HackathonsSection() {
    const highlightedEvents = hackathons.filter(h => h.highlight);
    const otherEvents = hackathons.filter(h => !h.highlight);

    return (
        <section id="hackathons" className="py-16 md:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<Trophy className="w-6 h-6" />}
                    subtitle="Competitive achievements and ecosystem participation in blockchain innovation"
                >
                    Hackathons & Events
                </SectionHeading>

                {/* Highlighted Achievements */}
                <div className="mt-12">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Major Achievements</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {highlightedEvents.map((event, index) => (
                            <InViewFade key={event.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800 p-8 hover:shadow-2xl hover:shadow-yellow-200/30 dark:hover:shadow-yellow-900/20 transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Achievement Badge */}
                                    <div className="absolute -top-3 -right-3 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                        <Trophy className="w-4 h-4" />
                                        {event.achievement}
                                    </div>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shrink-0">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors mb-2">
                                                {event.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                                                <MapPin className="w-4 h-4" />
                                                <span className="font-medium">{event.location}</span>
                                            </div>
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </InViewFade>
                        ))}
                    </div>
                </div>

                {/* Other Events */}
                {otherEvents.length > 0 && (
                    <div>
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <Users className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Community Participation</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherEvents.map((event, index) => (
                                <InViewFade key={event.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 shrink-0">
                                                {event.type === 'hackathon' ? <Zap className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1">
                                                    {event.name}
                                                </h4>
                                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                    <MapPin className="w-3 h-3" />
                                                    <span>{event.location}</span>
                                                </div>
                                                {event.description && (
                                                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </InViewFade>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
} 