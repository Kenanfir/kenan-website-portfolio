import { notFound } from "next/navigation";
import {
    getProjectsByCategory,
    getExperiencesByCategory,
    getGroupedSkills
} from "@/lib/data";
import { Category } from "@/data/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { SkillGroup } from "@/components/ui/SkillGroup";
import type { Metadata } from "next";

// Force static generation for these paths
export function generateStaticParams() {
    return [
        { category: "game" },
        { category: "apps" },
        { category: "tech" },
        { category: "random" },
    ];
}

const categoryInfo: Record<string, { title: string; description: string; color: string }> = {
    game: {
        title: "Game Development",
        description: "Creating immersive worlds and systems. Unreal Engine, Unity, and AI focus.",
        color: "text-game"
    },
    apps: {
        title: "Apps & iOS",
        description: "Building clean, functional, and user-centric mobile applications.",
        color: "text-apps"
    },
    tech: {
        title: "Tech & Tools",
        description: "Exploring new technologies, self-hosting, and improving pipelines.",
        color: "text-tech"
    },
    random: {
        title: "Random Quest Log",
        description: "Side projects, fun experiments, and things that don't fit the main grid.",
        color: "text-random"
    }
};

export async function generateMetadata(props: { params: Promise<{ category: string }> }): Promise<Metadata> {
    const params = await props.params;
    const category = params.category;
    const info = categoryInfo[category];
    return {
        title: info ? `${info.title} | Kenan Firmansyah` : "Category",
        description: info?.description,
    };
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const category = params.category as Category;

    if (!["game", "apps", "tech", "random"].includes(category)) {
        notFound();
    }

    const info = categoryInfo[category];
    const projects = getProjectsByCategory(category);
    const experiences = getExperiencesByCategory(category);
    const skillGroups = getGroupedSkills(category);

    // Split featured and standard projects
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <div className="space-y-16 animate-in fade-in duration-700">

            {/* Hero Section */}
            <section className="space-y-4">
                <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${info.color}`}>
                    {info.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    {info.description}
                </p>
            </section>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {featuredProjects.map((project, idx) => (
                            <ProjectCard key={project.slug} project={project} index={idx} />
                        ))}
                    </div>
                </section>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">More Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, idx) => (
                            <ProjectCard key={project.slug} project={project} index={idx} />
                        ))}
                    </div>
                </section>
            )}

            {/* Experiences */}
            {experiences.length > 0 && (
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
                    <div className="space-y-6 border-l border-border/50 ml-2 pl-2">
                        {experiences.map((experience) => (
                            <ExperienceCard key={experience.slug} experience={experience} />
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skillGroups.length > 0 && (
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Related Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {skillGroups.map((group) => (
                            <SkillGroup key={group.group} title={group.group} skills={group.skills} />
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}
