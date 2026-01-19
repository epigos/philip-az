"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className={cn(
                "relative w-10 h-10 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200",
                "flex items-center justify-center",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                className,
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {isDark ? (
                    <Moon size={18} className="text-foreground" />
                ) : (
                    <Sun size={18} className="text-foreground" />
                )}
            </motion.div>
        </motion.button>
    );
}
