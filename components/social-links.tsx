"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Newspaper, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface SocialLinksProps {
    className?: string;
    iconSize?: number;
    showLabels?: boolean;
    variant?: "default" | "outline" | "ghost";
}

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    blog: Newspaper,
    calendly: Calendar,
};

const socialLabels = {
    github: "GitHub",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    blog: "Blog",
    calendly: "Schedule",
};

export function SocialLinks({
    className,
    iconSize = 20,
    showLabels = false,
    variant = "ghost",
}: SocialLinksProps) {
    const links = [
        { key: "github", href: siteConfig.links.github },
        { key: "linkedin", href: siteConfig.links.linkedin },
        { key: "twitter", href: siteConfig.links.twitter },
        { key: "blog", href: siteConfig.links.blog },
    ];

    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
            "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    return (
        <div className={cn("flex items-center gap-2", className)}>
            {links.map((link, index) => {
                const Icon = socialIcons[link.key as keyof typeof socialIcons];
                const label =
                    socialLabels[link.key as keyof typeof socialLabels];

                return (
                    <motion.a
                        key={link.key}
                        href={link.href}
                        target={link.key !== "email" ? "_blank" : undefined}
                        rel={
                            link.key !== "email"
                                ? "noopener noreferrer"
                                : undefined
                        }
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                            "inline-flex items-center justify-center gap-2 rounded-lg p-2.5 transition-all duration-200",
                            variantStyles[variant],
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        )}
                        aria-label={label}
                    >
                        <Icon size={iconSize} />
                        {showLabels && (
                            <span className="text-sm font-medium">{label}</span>
                        )}
                    </motion.a>
                );
            })}
        </div>
    );
}
