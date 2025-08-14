import { profile } from '../data/profile';
import { MapPin, Sparkles } from 'lucide-react';
import { AnimatedCounter } from '../components/util/AnimatedCounter';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section id="home" className="relative pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-sky-400/10 to-blue-500/10 blur-xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-500/10 blur-xl"
                    animate={{
                        x: [0, -25, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 mb-6"
                >
                    <Sparkles className="w-5 h-5 text-sky-500" />
                    <span className="text-sm font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wider">Portfolio</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-['Space_Grotesk',ui-sans-serif] text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1]"
                >
                    {profile.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-3 mt-4"
                >
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">{profile.role}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-2 mt-3 text-slate-600 dark:text-slate-400"
                >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{profile.location}</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                >
                    {profile.tagline}
                </motion.p>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-8 grid grid-cols-3 gap-6 max-w-lg"
                >
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-2xl font-bold text-sky-600 dark:text-sky-400">
                            <AnimatedCounter value={3} suffix="+" />
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-2xl font-bold text-sky-600 dark:text-sky-400">
                            <AnimatedCounter value={10} suffix="+" />
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects Built</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-2xl font-bold text-sky-600 dark:text-sky-400">
                            <AnimatedCounter value={3} suffix="+" />
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Hackathons</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-10"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-500 hover:to-blue-500 dark:from-sky-500 dark:to-blue-500 dark:hover:from-sky-400 dark:hover:to-blue-400 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                        <span>Get In Touch</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
} 