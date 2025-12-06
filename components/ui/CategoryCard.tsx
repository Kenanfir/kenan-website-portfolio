"use client";

import Link from "next/link";
import { Category } from "@/data/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CategoryCardProps {
    category: Category;
    title: string;
    description: string;
    delay?: number;
}

const categoryStyles: Record<Category, string> = {
    game: "border-game hover:bg-game/10 hover:shadow-[0_0_30px_-5px_var(--cat-game)]",
    apps: "border-apps hover:bg-apps/10 hover:shadow-[0_0_30px_-5px_var(--cat-apps)]",
    tech: "border-tech hover:bg-tech/10 hover:shadow-[0_0_30px_-5px_var(--cat-tech)]",
    random: "border-random hover:bg-random/10 hover:shadow-[0_0_30px_-5px_var(--cat-random)]",
    academics: "border-academics hover:bg-academics/10 hover:shadow-[0_0_30px_-5px_var(--cat-academics)]",
};

export function CategoryCard({ category, title, description, delay = 0 }: CategoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            <Link
                href={`/${category}`}
                className={cn(
                    "block relative h-full p-6 border rounded-xl bg-background/50 backdrop-blur-sm transition-all duration-300 group overflow-hidden",
                    categoryStyles[category]
                )}
            >
                <div className={cn(
                    "absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full translate-x-12 -translate-y-12 transition-colors duration-500",
                    category === 'game' && 'bg-game',
                    category === 'apps' && 'bg-apps',
                    category === 'tech' && 'bg-tech',
                    category === 'random' && 'bg-random',
                    category === 'academics' && 'bg-academics',
                )} />

                <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform origin-left">
                    {title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {description}
                </p>
            </Link>
        </motion.div>
    );
}
