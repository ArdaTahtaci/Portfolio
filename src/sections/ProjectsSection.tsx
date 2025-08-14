import { projects } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { Code, Star } from 'lucide-react';

export function ProjectsSection() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <SectionHeading
                    icon={<Code className="w-6 h-6" />}
                    subtitle="A showcase of my recent work and technical achievements"
                >
                    Featured Projects
                </SectionHeading>

                {/* Featured Projects */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredProjects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <>
                        <div className="flex items-center justify-center gap-2 mt-20 mb-8">
                            <Star className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Other Projects</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
} 