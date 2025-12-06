export type Category = "game" | "apps" | "tech" | "random" | "academics";
export type Level = 1 | 2 | 3 | 4; // 1=Beginner 2=Intermediate 3=Advanced 4=Professional

export interface Project {
    title: string;
    slug: string;
    categories: Category[];
    status?: string;
    teamSize?: number;
    timeframe?: string;
    type?: string;
    role: string | string[];
    shortDescription: string;
    engineOrStack: string[];
    tags: string[];
    featured: boolean;
    sections?: any[]; // For now, keep it flexible or define a Section type
}

export interface Experience {
    title: string;
    slug: string;
    categories: Category[];
    timeframe: string;
    role: string;
    org: string;
    summary: string;
    highlights: string[];
}

export interface Skill {
    name: string;
    categories: Category[];
    group: string;
    level: Level;
}

export interface Contact {
    email: string;
    linkedin: string;
    github: string;
}

export interface AboutData {
    name: string;
    title: string[]; // Changed to array for multiple lines
    summary: string[];
    contactInvitation: string;
}
