"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Users, FileText } from "lucide-react";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { research } from "@/data/site";

export function ResearchSection() {
    return (
        <section id="research" className="py-20 sm:py-28 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        Publications
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Research & Publications
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Academic research and technical publications in machine
                        learning and AI
                    </p>
                </AnimatedSection>

                {/* Research Cards */}
                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {research.map((paper) => (
                        <StaggerItem key={paper.id}>
                            <motion.a
                                href={paper.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full group"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                                    <CardContent className="p-6">
                                        {/* Header with icon and badge */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                {paper.featured && (
                                                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
                                                        Featured
                                                    </span>
                                                )}
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {paper.date}
                                                </span>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {paper.title}
                                        </h3>

                                        {/* Abstract */}
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                            {paper.abstract}
                                        </p>

                                        {/* Authors */}
                                        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                            <Users className="w-4 h-4" />
                                            <span className="line-clamp-1">
                                                {paper.authors.join(", ")}
                                            </span>
                                        </div>

                                        {/* Publication */}
                                        <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                                            <FileText className="w-4 h-4" />
                                            <span>{paper.publication}</span>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {paper.tags
                                                .slice(0, 4)
                                                .map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 text-xs bg-secondary rounded-full text-muted-foreground"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
