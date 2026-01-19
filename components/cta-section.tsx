"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface CTASectionProps {
    className?: string;
}

export function CTASection({ className }: CTASectionProps) {
    return (
        <section
            id="contact"
            className={cn("relative py-24 sm:py-32 overflow-hidden", className)}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-radial opacity-50" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6">
                <AnimatedSection className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            Let&apos;s Build Something Great
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Ready to Start Your
                        <span className="block text-primary mt-1">
                            Next Project?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
                        I&apos;m always excited to work on challenging projects
                        that push the boundaries of what&apos;s possible.
                        Whether you need a scalable backend system, ML
                        infrastructure, or AI-driven automations — let&apos;s
                        talk.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="text-base px-8 py-6 rounded-xl shadow-lg glow"
                            >
                                <a
                                    href={siteConfig.links.calendly}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Schedule a Call
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Additional info */}
                    <p className="mt-8 text-sm text-muted-foreground">
                        Typical response time:{" "}
                        <span className="text-foreground font-medium">
                            within 24 hours
                        </span>
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
