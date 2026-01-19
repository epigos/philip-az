import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectHighlightsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { ResearchSection } from "@/components/sections/research";
import { GitHubActivity } from "@/components/github-activity";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProjectHighlightsSection />
            <ExperienceSection />
            <EducationSection />
            <ResearchSection />
            <GitHubActivity />
            <TestimonialsSection />
            <CTASection />
        </>
    );
}
