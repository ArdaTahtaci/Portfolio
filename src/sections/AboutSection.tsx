import { profile } from '../data/profile';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SkillsGrid } from '../components/SkillsGrid';
import { InViewFade } from '../components/util/InViewFade';
import { User, Award } from 'lucide-react';

export function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<User className="w-6 h-6" />}
                    subtitle="Get to know more about my background and expertise"
                >
                    About Me
                </SectionHeading>
                <InViewFade className="mt-12">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 text-center">
                            {profile.bio}
                        </p>
                    </div>
                </InViewFade>
                <div className="mt-16">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Technical Skills</h3>
                    </div>
                    <SkillsGrid />
                </div>
            </div>
        </section>
    );
} 