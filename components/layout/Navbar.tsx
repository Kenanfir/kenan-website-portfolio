"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { contact } from "@/data/content";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Game", href: "/game", color: "hover:text-game" },
        { name: "Apps", href: "/apps", color: "hover:text-apps" },
        { name: "Tech", href: "/tech", color: "hover:text-tech" },
        { name: "Random", href: "/random", color: "hover:text-random" },
        { name: "Academics", href: "/academics", color: "hover:text-academics" },
    ];

    return (
        <nav className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center lg:px-48 px-4 justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="font-bold text-xl tracking-tight">
                        Home
                    </Link>
                    <div className="hidden md:flex gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:underline underline-offset-4",
                                    pathname.startsWith(link.href)
                                        ? "text-foreground"
                                        : "text-muted-foreground",
                                    link.color
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile menu or social icons could go here */}
                    <a href={`mailto:${contact.email}`} aria-label="Email">
                        <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    <a href={`https://linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
