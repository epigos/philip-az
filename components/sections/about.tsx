"use client";

import { motion } from "framer-motion";
import { Brain, Boxes, Cog, Cpu, Bot } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig, techStack } from "@/data/site";

const focusAreas = [
    {
        icon: Brain,
        title: "Machine Learning & AI",
        description:
            "Building production-ready ML pipelines, deep learning models, computer vision systems, and generative AI solutions",
    },
    {
        icon: Bot,
        title: "AI Agents & Chatbots",
        description:
            "Designing intelligent conversational agents and autonomous AI systems that solve complex tasks",
    },
    {
        icon: Boxes,
        title: "Scalable Backend Systems",
        description:
            "Architecting microservices and event-driven systems that handle millions of requests",
    },
    {
        icon: Cog,
        title: "Business Automation",
        description:
            "Automating workflows and processes using AI to drive efficiency and business value",
    },
];

export function AboutSection() {
    return (
        <section id="about" className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left column - About text */}
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                            About Me
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                            Software Engineering
                            <span className="block text-primary mt-1">
                                Meets AI Innovation
                            </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>{siteConfig.author.bio}</p>
                            <p>
                                I specialise in architecting and implementing
                                advanced backend infrastructures, leading
                                development teams, and collaborating across
                                diverse business domains. My work spans from
                                building no-code AI platforms to integrating ML
                                models into production systems serving millions
                                of users.
                            </p>
                            <p>
                                As a speaker at AI conferences and an Honorary
                                Visiting Fellow at City, St George&apos;s,
                                University of London, I&apos;m passionate about
                                sharing knowledge and driving innovation in the
                                AI ecosystem.
                            </p>
                        </div>

                        {/* Focus Areas */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-10">
                            {focusAreas.map((area, index) => (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <area.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">
                                            {area.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {area.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right column - Tech Stack */}
                    <AnimatedSection delay={0.2}>
                        <div className="sticky top-28">
                            <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Cpu className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Tech Stack
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Tools & technologies I work with
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {Object.entries(techStack).map(
                                        ([category, items]) => (
                                            <div key={category}>
                                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                                    {category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {items.map(
                                                        (item, index) => (
                                                            <motion.span
                                                                key={item.name}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                transition={{
                                                                    delay:
                                                                        index *
                                                                        0.05,
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                }}
                                                                className="tech-badge"
                                                            >
                                                                {item.name}
                                                            </motion.span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
