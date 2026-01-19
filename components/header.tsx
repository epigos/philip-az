"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig, navigation } from "@/data/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { appConfig } from "@/lib/config";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
                    : "bg-transparent",
            )}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <nav className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-2 text-lg font-bold text-foreground"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image
                            src={`${appConfig.basePath}${siteConfig.author.avatar}`}
                            alt={siteConfig.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="hidden sm:inline">
                            {siteConfig.name.split(" ")[0]}
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                    "text-muted-foreground hover:text-foreground hover:bg-accent",
                                )}
                                target={item.target}
                                rel={
                                    item.target
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* CTA Button - Desktop */}
                        <Button
                            asChild
                            className="hidden sm:inline-flex rounded-lg"
                        >
                            <a
                                href={siteConfig.links.calendly}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get in Touch
                            </a>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-background border-b border-border"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col gap-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={cn(
                                            "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                                            "text-muted-foreground hover:text-foreground hover:bg-accent",
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <Button asChild className="mt-2 rounded-lg">
                                    <a
                                        href={siteConfig.links.calendly}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get in Touch
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
