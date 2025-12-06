"use client";

import { Skill } from "@/data/types";
import { cn } from "@/lib/utils";

interface SkillGroupProps {
    title: string;
    skills: Skill[];
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <div className="mb-8 keep-inside">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {title}
            </h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={cn(
                            "px-3 py-1.5 rounded-md border text-sm transition-all hover:scale-105 cursor-default",
                            "border-border bg-secondary/30",
                            skill.level >= 3 ? "text-foreground font-medium" : "text-muted-foreground"
                        )}
                        title={`Level: ${skill.level}/4`}
                    >
                        {skill.name}
                        <div className="w-full h-0.5 mt-1 bg-border rounded-full overflow-hidden">
                            <div
                                className={cn("h-full bg-foreground/50",
                                    skill.level === 4 && "w-full",
                                    skill.level === 3 && "w-3/4",
                                    skill.level === 2 && "w-1/2",
                                    skill.level === 1 && "w-1/4",
                                )}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
