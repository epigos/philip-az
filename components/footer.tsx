"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/data/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 border-t border-border bg-card/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo and tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                                PA
                            </span>
                            <span className="text-lg font-bold text-foreground">
                                {siteConfig.name}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {siteConfig.author.tagline}
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <SocialLinks variant="ghost" />

                    {/* Bottom section */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
                        <span>
                            © {currentYear} {siteConfig.name}. All rights
                            reserved.
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Built with{" "}
                            <Heart className="w-4 h-4 text-destructive fill-destructive" />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
