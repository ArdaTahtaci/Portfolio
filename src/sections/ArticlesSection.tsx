import { articles } from '../data/articles';
import { SectionHeading } from '../components/ui/SectionHeading';
import { InViewFade } from '../components/util/InViewFade';
import { PenTool, Clock, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function ArticlesSection() {
    return (
        <section id="articles" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<PenTool className="w-6 h-6" />}
                    subtitle="Insights and thoughts on blockchain, technology, and innovation"
                >
                    My Articles
                </SectionHeading>

                {/* Medium Profile Link */}
                <div className="mt-8 text-center">
                    <a
                        href="https://medium.com/@ardatahtaci"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200 text-sm font-medium"
                    >
                        <BookOpen className="w-4 h-4" />
                        Follow on Medium
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <InViewFade key={article.id}>
                            <motion.article
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative"
                            >
                                {/* Article Card */}
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-500 hover:-translate-y-2">

                                    {/* Featured Badge */}
                                    {article.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold shadow-lg">
                                                <PenTool className="w-3 h-3" />
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Article Content */}
                                    <div className="p-8">
                                        {/* Article Meta */}
                                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{article.readTime}</span>
                                            </div>
                                            <span>•</span>
                                            <span>{article.publishedDate}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                                            {article.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                                            {article.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {article.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read More Link */}
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors group/link"
                                        >
                                            Read Article
                                            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -top-1 -right-1 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-gradient-to-tr from-sky-400/10 to-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </motion.article>
                        </InViewFade>
                    ))}
                </div>

                {/* Call to Action */}
                <InViewFade className="mt-12 text-center">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Interested in collaborating or have questions about my articles?
                    </p>
                    <a
                        href="https://medium.com/@ardatahtaci"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-500 hover:to-teal-500 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <BookOpen className="w-4 h-4" />
                        Visit My Medium Profile
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </InViewFade>
            </div>
        </section>
    );
} 