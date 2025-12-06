import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectsByCategory } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Wrench } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const project = getProjectBySlug(params.slug);
    return {
        title: project ? `${project.title} | Kenan Firmansyah` : "Project Not Found",
        description: project?.shortDescription,
    };
}

export async function generateStaticParams() {
    // Import projects dynamically or just use the data
    const { projects } = await import("@/data/content");
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    // Related projects (same category, exclude current)
    const relatedProjects = getProjectsByCategory(project.categories[0])
        .filter(p => p.slug !== project.slug)
        .slice(0, 2);

    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
            {/* Back Link */}
            <Link
                href={`/${project.categories[0]}`}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {project.categories[0]}
            </Link>

            {/* Hero Header */}
            <header className="space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map(cat => (
                        <span key={cat} className="px-3 py-1 text-sm font-medium border border-border rounded-full uppercase tracking-wider text-muted-foreground">
                            {cat}
                        </span>
                    ))}
                    {project.status === 'ongoing' && (
                        <span className="px-3 py-1 text-sm font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full uppercase tracking-wider">
                            Ongoing
                        </span>
                    )}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    {project.shortDescription}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border">
                    <div>
                        <h4 className="flex items-center text-sm font-semibold text-muted-foreground mb-1">
                            <Wrench className="w-4 h-4 mr-2" /> Role
                        </h4>
                        <p className="font-medium">{Array.isArray(project.role) ? project.role.join(", ") : project.role}</p>
                    </div>
                    <div>
                        <h4 className="flex items-center text-sm font-semibold text-muted-foreground mb-1">
                            <Users className="w-4 h-4 mr-2" /> Team Size
                        </h4>
                        <p className="font-medium">{project.teamSize ? `${project.teamSize} People` : "Solo"}</p>
                    </div>
                    <div>
                        <h4 className="flex items-center text-sm font-semibold text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4 mr-2" /> Timeframe
                        </h4>
                        <p className="font-medium">{project.timeframe || "N/A"}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                            Tech Stack
                        </h4>
                        <p className="font-medium text-sm">{project.engineOrStack.join(", ")}</p>
                    </div>
                </div>
            </header>

            {/* Main Content Areas */}
            <div className="space-y-8">
                {/* Placeholder for Sections (if we had rich text content) */}
                <div className="prose prose-invert max-w-none">
                    <h3>Overview</h3>
                    <p>
                        Detailed description of the project goes here. Since the current data only provided short descriptions,
                        this section is a placeholder for expanded content about <strong>{project.title}</strong>.
                    </p>

                    <h3>My Role & Contributions</h3>
                    <p>
                        Specific breakdown of responsibilities. For example: {Array.isArray(project.role) ? project.role.join(" and ") : project.role}.
                    </p>

                    <h3>Challenges & Solutions</h3>
                    <p>
                        Technical challenges faced during development and how they were overcome.
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="pt-12 border-t border-border">
                    <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedProjects.map((p, idx) => (
                            <ProjectCard key={p.slug} project={p} index={idx} />
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}
