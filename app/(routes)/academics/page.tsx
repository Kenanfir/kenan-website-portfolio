import {
    getProjectsByCategory,
    getExperiencesByCategory,
    getGroupedSkills
} from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Academics | Kenan Firmansyah",
    description: "Academic background, research, publications, and teaching experience.",
};

export default function AcademicsPage() {
    const category = "academics";
    const projects = getProjectsByCategory(category); // Usually research projects
    const experiences = getExperiencesByCategory(category); // Teaching, Research Assistant
    const skillGroups = getGroupedSkills(category);

    return (
        <div className="space-y-16 animate-in fade-in duration-700">

            {/* Hero */}
            <section className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-academics">
                    Academics & Research
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    My journey in Computer Science, Game AI research, and teaching contributions.
                </p>
            </section>

            {/* Education Highlight (Hardcoded for now as it's specific) */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                <div className="p-6 border border-academics/20 bg-academics/5 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">Bachelor of Applied Science in Game Technology</h3>
                        <span className="text-sm font-mono text-muted-foreground">2021 - 2025</span>
                    </div>
                    <p className="font-medium text-lg mb-2">Politeknik Elektronika Negeri Surabaya (PENS)</p>
                    <p className="text-muted-foreground mb-4">Focus on Artificial Intelligence in Games and Gameplay Programming.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                        <li>Thesis: "Implementation of Fuzzy Logic and Monte Carlo in VR Horror Game AI" (Xanthous)</li>
                        <li>GPA: 3.8+ (Cum Laude expected)</li>
                    </ul>
                </div>
            </section>

            {/* Research Projects / Publications */}
            {projects.length > 0 && (
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Reseach & Publications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, idx) => (
                            <ProjectCard key={project.slug} project={project} index={idx} />
                        ))}
                    </div>
                </section>
            )}

            {/* Teaching & Mentorship */}
            {experiences.length > 0 && (
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Teaching & Experience</h2>
                    <div className="space-y-6 border-l border-border/50 ml-2 pl-2">
                        {experiences.map((experience) => (
                            <ExperienceCard key={experience.slug} experience={experience} />
                        ))}
                    </div>
                </section>
            )}

            {/* Academic Skills */}
            {skillGroups.length > 0 && (
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Research Skills</h2>
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
