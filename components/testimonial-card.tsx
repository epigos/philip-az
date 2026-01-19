"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
    className?: string;
}

export function TestimonialCard({
    quote,
    author,
    role,
    company,
    avatar,
    className,
}: TestimonialCardProps) {
    const initials = author
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={cn(
                "relative flex flex-col p-6 bg-card border border-border rounded-xl",
                "shadow-sm hover:shadow-lg transition-all duration-300",
                "w-full",
                className,
            )}
        >
            {/* Quote icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

            {/* Quote text */}
            <p className="text-foreground/90 leading-relaxed mb-6 text-sm sm:text-base">
                &ldquo;{quote}&rdquo;
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3 mt-auto">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={avatar} alt={author} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {initials}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-foreground">{author}</p>
                    <p className="text-sm text-muted-foreground">
                        {role} at {company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
