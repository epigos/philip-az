"use client";

import { GraduationCap, Calendar, Trophy, Medal } from "lucide-react";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/animated-section";
import { Timeline, TimelineItem } from "@/components/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { education, honors } from "@/data/site";

export function EducationSection() {
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

                        <StaggerContainer
                            className="space-y-4"
                            staggerDelay={0.1}
                        >
                            {honors.map((honor) => (
                                <StaggerItem key={honor.id}>
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
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
