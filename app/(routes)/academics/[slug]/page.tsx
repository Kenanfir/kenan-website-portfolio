import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, BookOpen, User } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const item = getProjectBySlug(params.slug); // Using projects data for now as that's where research lives
    return {
        title: item ? `${item.title} | Kenan Firmansyah` : "Academic Work",
        description: item?.shortDescription,
    };
}

export async function generateStaticParams() {
    const { projects } = await import("@/data/content");
    // Only generate for academic projects
    return projects
        .filter(p => p.categories.includes("academics"))
        .map((p) => ({
            slug: p.slug,
        }));
}

export default async function AcademicDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const item = getProjectBySlug(params.slug);

    if (!item) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
            <Link
                href="/academics"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Academics
            </Link>

            <header className="space-y-6">
                <span className="px-3 py-1 text-sm font-medium border border-academics text-academics rounded-full uppercase tracking-wider">
                    Academic / Research
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{item.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    {item.shortDescription}
                </p>

                <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>Role: {Array.isArray(item.role) ? item.role.join(", ") : item.role}</span>
                    </div>
                    <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>{item.type}</span>
                    </div>
                </div>
            </header>

            <div className="prose prose-invert max-w-none border-t border-border pt-8">
                <h3>Abstract / About</h3>
                <p>
                    {item.shortDescription}
                </p>

                <h3>My Contribution</h3>
                <p>
                    Detailed breakdown of research contributions, methodology, and implementation.
                </p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li>Insight into {item.tags[0] || "Topic"}</li>
                    <li>Development of {item.type} capabilities</li>
                </ul>
            </div>

        </div>
    );
}
