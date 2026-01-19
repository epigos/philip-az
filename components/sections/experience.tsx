"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { experiences } from "@/data/site";
import {
    Briefcase,
    MapPin,
    Calendar,
    ExternalLink,
    ChevronDown,
} from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

function ExperienceCard({
    exp,
    index,
}: {
    exp: (typeof experiences)[0];
    index: number;
}) {
    return (
        <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card border border-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
        >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                </div>

                {/* Main Info */}
                <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                            <h3 className="font-semibold text-foreground">
                                {exp.role}
                            </h3>
                            <p className="text-primary font-medium text-sm">
                                {exp.company}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                                <Calendar size={12} />
                                {exp.startDate} — {exp.endDate}
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <MapPin size={12} />
                                {exp.location}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                        {exp.description}
                    </p>
                </div>

                {/* Company link */}
                {exp.link && (
                    <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        title={`Visit ${exp.company}`}
                    >
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>

            {/* Tech badges - shown on hover or always visible on mobile */}
            <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-2">
                {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                    >
                        {tech}
                    </span>
                ))}
                {exp.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                        +{exp.technologies.length - 5}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export function ExperienceSection() {
    const [isOpen, setIsOpen] = useState(false);
    const visibleCount = 2;
    const visibleExperiences = experiences.slice(0, visibleCount);
    const hiddenExperiences = experiences.slice(visibleCount);

    return (
        <section id="experience" className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        Career Timeline
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                        Work Experience
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        10+ years building software across fintech, social
                        media, payments, and AI
                    </p>
                </AnimatedSection>

                {/* Compact Experience Grid */}
                <div className="max-w-4xl mx-auto">
                    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                        <div className="grid gap-4">
                            {/* Always visible experiences */}
                            {visibleExperiences.map((exp, index) => (
                                <ExperienceCard
                                    key={exp.id}
                                    exp={exp}
                                    index={index}
                                />
                            ))}

                            {/* Collapsible experiences */}
                            <CollapsibleContent className="grid gap-4">
                                {hiddenExperiences.map((exp, index) => (
                                    <ExperienceCard
                                        key={exp.id}
                                        exp={exp}
                                        index={index}
                                    />
                                ))}
                            </CollapsibleContent>
                        </div>

                        {/* Toggle button */}
                        {hiddenExperiences.length > 0 && (
                            <CollapsibleTrigger asChild>
                                <button className="mt-6 mx-auto flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                                    <span>
                                        {isOpen
                                            ? "Show less"
                                            : `Show ${hiddenExperiences.length} more roles`}
                                    </span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </CollapsibleTrigger>
                        )}
                    </Collapsible>
                </div>
            </div>
        </section>
    );
}
