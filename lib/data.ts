import { projects, experiences, skills } from "@/data/content";
import { Category } from "@/data/types";

export function getProjectsByCategory(category: Category) {
    return projects.filter((p) => p.categories.includes(category));
}

export function getExperiencesByCategory(category: Category) {
    return experiences.filter((e) => e.categories.includes(category));
}

export function getSkillsByCategory(category: Category) {
    return skills.filter((s) => s.categories.includes(category));
}

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}

export function getExperienceBySlug(slug: string) {
    return experiences.find((e) => e.slug === slug);
}

export function getGroupedSkills(category: Category) {
    const categorySkills = getSkillsByCategory(category);
    const groups = Array.from(new Set(categorySkills.map(s => s.group)));
    return groups.map(group => ({
        group,
        skills: categorySkills.filter(s => s.group === group).sort((a, b) => b.level - a.level)
    }));
}
