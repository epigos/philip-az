"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { projectHighlights } from "@/data/site";
import {
    Rocket,
    ExternalLink,
    Github,
    Calendar,
    Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: (typeof projectHighlights)[0];
    index: number;
    isLast: boolean;
    isLeft: boolean;
}

function ProjectCard({ project, isLeft }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            animate={
                isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isLeft ? -30 : 30 }
            }
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={cn(
                "relative mb-8 md:mb-0",
                // Mobile: single column with left padding
                "pl-10 md:pl-0",
                // Desktop: alternating grid placement
                "md:w-[calc(50%-20px)]",
                isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8",
            )}
        >
            {/* Mobile timeline line (left side) */}
            <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent" />

            {/* Mobile timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="md:hidden absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground shadow-lg z-10"
            >
                <Rocket size={12} />
            </motion.div>

            {/* Content Card */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold text-foreground leading-tight">
                            {project.name}
                        </h3>
                        {/* Links */}
                        <div className="flex gap-1.5 flex-shrink-0">
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                >
                                    <ExternalLink size={10} />
                                    Demo
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors"
                                >
                                    <Github size={10} />
                                </a>
                            )}
                            {project.links.paper && (
                                <a
                                    href={project.links.paper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors"
                                >
                                    <ExternalLink size={10} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                            <Building2 size={12} />
                            {project.context}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Calendar size={12} />
                            {project.year}
                        </span>
                    </div>
                </div>

                {/* Problem / Solution / Impact - Compact */}
                <div className="space-y-2 mb-3 text-sm">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Problem:{" "}
                        </span>
                        <span className="text-muted-foreground">
                            {project.problem}
                        </span>
                    </div>
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Solution:{" "}
                        </span>
                        <span className="text-muted-foreground">
                            {project.solution}
                        </span>
                    </div>
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                            Impact:{" "}
                        </span>
                        <span className="text-foreground/90 font-medium">
                            {project.impact}
                        </span>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function ProjectHighlightsSection() {
    const featuredProjects = projectHighlights.filter((p) => p.featured);

    return (
        <section id="projects" className="py-20 sm:py-28 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        What I&apos;ve Built
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Project Highlights
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Key projects showcasing end-to-end problem solving, from
                        identifying challenges to delivering measurable impact
                    </p>
                </AnimatedSection>

                {/* Alternating Timeline */}
                <div className="max-w-7xl mx-auto relative">
                    {/* Center timeline line - desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent -translate-x-1/2" />

                    {/* Projects grid */}
                    <div className="md:grid md:grid-cols-2 md:gap-y-8">
                        {featuredProjects.map((project, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={project.id}
                                    className={cn(
                                        "relative",
                                        // Desktop: span full width but position card on one side
                                        "md:col-span-2",
                                        "md:flex",
                                        isLeft
                                            ? "md:justify-start"
                                            : "md:justify-end",
                                    )}
                                >
                                    {/* Desktop timeline dot - centered */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-lg z-10"
                                    >
                                        <Rocket size={14} />
                                    </motion.div>

                                    <ProjectCard
                                        project={project}
                                        index={index}
                                        isLast={
                                            index ===
                                            featuredProjects.length - 1
                                        }
                                        isLeft={isLeft}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
