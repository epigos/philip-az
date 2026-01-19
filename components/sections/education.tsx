"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Calendar,
    Trophy,
    Medal,
    ChevronDown,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Timeline, TimelineItem } from "@/components/timeline";
import { Card, CardContent } from "@/components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { education, honors } from "@/data/site";

function HonorCard({
    honor,
    index,
}: {
    honor: (typeof honors)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="card-hover">
                <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                            <Medal className="w-5 h-5 text-chart-4" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-2">
                                <h4 className="font-semibold text-foreground">
                                    {honor.title}
                                </h4>
                                <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                                    <Calendar className="w-3 h-3" />
                                    {honor.date}
                                </span>
                            </div>
                            <p className="text-sm text-primary font-medium mt-0.5">
                                {honor.organization}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                {honor.description}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export function EducationSection() {
    const [isOpen, setIsOpen] = useState(false);
    const visibleCount = 2;
    const visibleHonors = honors.slice(0, visibleCount);
    const hiddenHonors = honors.slice(visibleCount);

    return (
        <section id="education" className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        Background
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Education & Honors
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Academic foundation and professional recognition
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Education Timeline */}
                    <div>
                        <AnimatedSection>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    Education
                                </h3>
                            </div>
                        </AnimatedSection>

                        <Timeline>
                            {education.map((edu, index) => (
                                <TimelineItem
                                    key={edu.id}
                                    id={edu.id}
                                    title={edu.degree}
                                    subtitle={edu.institution}
                                    location={edu.location}
                                    startDate={edu.startDate}
                                    endDate={edu.endDate}
                                    highlights={edu.highlights}
                                    type="education"
                                    isLast={index === education.length - 1}
                                />
                            ))}
                        </Timeline>
                    </div>

                    {/* Honors & Awards */}
                    <div>
                        <AnimatedSection delay={0.2}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Trophy className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    Honors & Awards
                                </h3>
                            </div>
                        </AnimatedSection>

                        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                            <div className="grid gap-4">
                                {/* Always visible honors */}
                                {visibleHonors.map((honor, index) => (
                                    <HonorCard
                                        key={honor.id}
                                        honor={honor}
                                        index={index}
                                    />
                                ))}

                                {/* Collapsible honors */}
                                <CollapsibleContent className="grid gap-4">
                                    {hiddenHonors.map((honor, index) => (
                                        <HonorCard
                                            key={honor.id}
                                            honor={honor}
                                            index={index}
                                        />
                                    ))}
                                </CollapsibleContent>
                            </div>

                            {/* Toggle button */}
                            {hiddenHonors.length > 0 && (
                                <CollapsibleTrigger asChild>
                                    <button className="mt-6 mx-auto flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                                        <span>
                                            {isOpen
                                                ? "Show less"
                                                : `Show ${hiddenHonors.length} more`}
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
            </div>
        </section>
    );
}
