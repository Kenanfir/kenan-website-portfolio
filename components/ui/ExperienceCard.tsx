"use client";

import { Experience } from "@/data/types";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="group relative border-l-2 border-border pl-6 pb-8 last:pb-0 hover:border-foreground/50 transition-colors">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-background bg-muted-foreground group-hover:bg-foreground transition-all" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <span className="text-sm font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                    {experience.timeframe}
                </span>
            </div>

            <div className="text-base font-medium text-foreground/80 mb-2">
                {experience.role} <span className="text-muted-foreground">@ {experience.org}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {experience.summary}
            </p>

            {experience.highlights.length > 0 && (
                <ul className="list-disc list-outside pl-4 space-y-1">
                    {experience.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground/80">{highlight}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
