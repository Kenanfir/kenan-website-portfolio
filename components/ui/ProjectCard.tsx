"use client";

import Link from "next/link";
import { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    // Determine primary category for color logic
    const primaryCategory = project.categories[0] || "game";
    const categoryStyles: Record<string, string> = {
        game: "hover:border-game/50 hover:shadow-game/20",
        apps: "hover:border-apps/50 hover:shadow-apps/20",
        tech: "hover:border-tech/50 hover:shadow-tech/20",
        random: "hover:border-random/50 hover:shadow-random/20",
        academics: "hover:border-academics/50 hover:shadow-academics/20",
    };
    const badgeStyles: Record<string, string> = {
        game: "bg-game/10 text-game border-game/20",
        apps: "bg-apps/10 text-apps border-apps/20",
        tech: "bg-tech/10 text-tech border-tech/20",
        random: "bg-random/10 text-random border-random/20",
        academics: "bg-academics/10 text-academics border-academics/20",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Link
                href={`/projects/${project.slug}`}
                className={cn(
                    "flex flex-col h-full p-6 border border-border bg-card rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                    categoryStyles[primaryCategory] || categoryStyles.game
                )}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.categories.map((cat) => (
                            <span
                                key={cat}
                                className={cn(
                                    "px-2 py-0.5 text-xs font-medium rounded-full border border-transparent uppercase tracking-wider",
                                    badgeStyles[cat]
                                )}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                    {project.status === "ongoing" && (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-amber-500 animate-pulse">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            Ongoing
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 md:line-clamp-2 flex-grow">
                    {project.shortDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-border/30">
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-secondary rounded-md">
                                #{tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-secondary rounded-md">
                                +{project.tags.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
