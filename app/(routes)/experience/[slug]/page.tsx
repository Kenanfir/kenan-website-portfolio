import { notFound } from "next/navigation";
import { getExperienceBySlug } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Building, Calendar, User } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const experience = getExperienceBySlug(params.slug);
    return {
        title: experience ? `${experience.title} | Kenan Firmansyah` : "Experience Not Found",
        description: experience?.summary,
    };
}

export async function generateStaticParams() {
    const { experiences } = await import("@/data/content");
    return experiences.map((e) => ({
        slug: e.slug,
    }));
}

export default async function ExperienceDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const experience = getExperienceBySlug(params.slug);

    if (!experience) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
            {/* Back Link */}
            <Link
                href={`/${experience.categories[0]}`}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {experience.categories[0]}
            </Link>

            <header className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{experience.title}</h1>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-muted-foreground border-l-4 border-primary pl-4">
                    <div className="flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        <span className="font-medium">{experience.org}</span>
                    </div>
                    <div className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        <span className="font-medium">{experience.role}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-mono text-sm">{experience.timeframe}</span>
                    </div>
                </div>
            </header>

            <div className="prose prose-invert max-w-none">
                <h3>Overview</h3>
                <p className="text-xl leading-relaxed text-foreground/90">
                    {experience.summary}
                </p>

                {experience.highlights.length > 0 && (
                    <>
                        <h3>Key Highlights</h3>
                        <ul>
                            {experience.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                            ))}
                        </ul>
                    </>
                )}

                {/* Placeholder for Responsibilities since data only had summary/highlights */}
                <h3>Responsibilities</h3>
                <p>
                    In this role, I was responsible for delivering high-quality solutions and collaborating within a cross-functional team.
                    Specific duties included:
                </p>
                <ul>
                    <li>Developing features using the mentioned stack.</li>
                    <li>Collaborating with designers and other developers.</li>
                    <li>Debugging and optimizing performance.</li>
                </ul>
            </div>

        </div>
    );
}
