import { SectionHeading } from '../components/ui/SectionHeading';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { SocialIconLink } from '../components/SocialIconLink';
import { MessageCircle, Mail, Coffee } from 'lucide-react';

export function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<MessageCircle className="w-6 h-6" />}
                    subtitle="Let's discuss your next project or just have a chat"
                >
                    Get In Touch
                </SectionHeading>

                <div className="mt-12 max-w-2xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Coffee className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                        <p className="text-lg text-slate-700 dark:text-slate-300">
                            Always open to interesting conversations and opportunities
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Mail className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                        <p className="text-slate-600 dark:text-slate-400">
                            Drop me a line at{' '}
                            <a
                                className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors"
                                href={`mailto:${profile.email}`}
                            >
                                {profile.email}
                            </a>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-6 flex-wrap">
                        {socials.map((s) => (
                            <div key={s.id} className="group">
                                <SocialIconLink {...s} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 