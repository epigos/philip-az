"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
    Briefcase,
    GraduationCap,
    Award,
    Calendar,
    MapPin,
} from "lucide-react";

interface TimelineItemProps {
    id: string;
    title: string;
    subtitle: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description?: string;
    highlights?: string[];
    technologies?: string[];
    type?: "work" | "education" | "award";
    isLast?: boolean;
}

export function TimelineItem({
    title,
    subtitle,
    location,
    startDate,
    endDate,
    description,
    highlights,
    technologies,
    type = "work",
    isLast = false,
}: TimelineItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const icons = {
        work: Briefcase,
        education: GraduationCap,
        award: Award,
    };

    const Icon = icons[type];
    const dateDisplay = endDate ? `${startDate} — ${endDate}` : startDate;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative pl-8 pb-12 last:pb-0"
        >
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent" />
            )}

            {/* Timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground shadow-lg"
            >
                <Icon size={12} />
            </motion.div>

            {/* Content */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">
                            {title}
                        </h3>
                        <p className="text-primary font-medium">{subtitle}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                            <Calendar size={14} />
                            {dateDisplay}
                        </span>
                        {location && (
                            <span className="inline-flex items-center gap-1">
                                <MapPin size={14} />
                                {location}
                            </span>
                        )}
                    </div>
                </div>

                {description && (
                    <p className="text-muted-foreground mb-4">{description}</p>
                )}

                {highlights && highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                        {highlights.map((highlight, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -10 }
                                }
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {highlight}
                            </motion.li>
                        ))}
                    </ul>
                )}

                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ delay: 0.4 + index * 0.05 }}
                                className="tech-badge"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

interface TimelineProps {
    children: React.ReactNode;
    className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
    return <div className={cn("relative", className)}>{children}</div>;
}
