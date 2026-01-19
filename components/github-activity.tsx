"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/data/site";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "epigos";

export function GitHubActivity() {
    const { theme } = useTheme();
    // Custom color scheme that matches GitHub's colors
    const colorScheme = {
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    return (
        <section id="github" className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-10">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        Open Source
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                        GitHub Contributions
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        My coding activity over the past year
                    </p>
                </AnimatedSection>

                {/* Contribution Heatmap */}
                <AnimatedSection delay={0.2}>
                    <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
                        <div className="min-w-fit flex justify-center">
                            <TooltipProvider delayDuration={100}>
                                <GitHubCalendar
                                    username={GITHUB_USERNAME}
                                    colorScheme={
                                        theme === "dark" ? "dark" : "light"
                                    }
                                    theme={{
                                        light: colorScheme.light,
                                        dark: colorScheme.dark,
                                    }}
                                    fontSize={12}
                                    blockSize={12}
                                    blockMargin={4}
                                    labels={{
                                        totalCount:
                                            "{{count}} contributions in the last year",
                                    }}
                                    showWeekdayLabels={true}
                                    renderBlock={(block, activity) => (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                {block}
                                            </TooltipTrigger>
                                            <TooltipContent
                                                side="top"
                                                className="bg-popover border border-border text-popover-foreground"
                                            >
                                                <div className="text-xs">
                                                    <span className="font-semibold">
                                                        {activity.count}{" "}
                                                        contribution
                                                        {activity.count !== 1
                                                            ? "s"
                                                            : ""}
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        {" "}
                                                        on{" "}
                                                    </span>
                                                    <span className="font-medium">
                                                        {new Date(
                                                            activity.date,
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                weekday:
                                                                    "short",
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            },
                                                        )}
                                                    </span>
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                />
                            </TooltipProvider>
                        </div>

                        {/* GitHub Profile Link */}
                        <div className="flex justify-center mt-6">
                            <a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                            >
                                <Github size={16} />
                                View GitHub Profile
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
