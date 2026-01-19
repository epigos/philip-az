"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/data/site";

export function HeroSection() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-radial" />
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
            <div className="absolute inset-0 bg-noise" />

            {/* Animated gradient orbs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2 }}
                className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[128px]"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-1/4 -right-32 w-96 h-96 bg-chart-2/30 rounded-full blur-[128px]"
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/80 border border-border backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    {/* Name and role */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
                    >
                        <span className="block text-foreground">
                            {siteConfig.author.name}
                        </span>
                        <span className="block text-primary mt-2">
                            {siteConfig.author.role}
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto"
                    >
                        {siteConfig.author.tagline}
                    </motion.p>

                    {/* Bio snippet */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed"
                    >
                        8+ years building scalable backend systems and AI-driven
                        solutions. Honorary Visiting Fellow at City, St
                        George&apos;s, University of London.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
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
                                    Start a Project
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <SocialLinks variant="outline" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <span className="text-xs font-medium uppercase tracking-wider">
                        Scroll to explore
                    </span>
                    <ChevronDown className="w-5 h-5" />
                </motion.a>
            </motion.div>
        </section>
    );
}
