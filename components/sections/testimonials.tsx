"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { TestimonialCard } from "@/components/testimonial-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        What People Say
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Testimonials
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Feedback from colleagues, managers, and collaborators
                        I&apos;ve had the pleasure to work with
                    </p>
                </AnimatedSection>

                {/* Testimonials Carousel */}
                <AnimatedSection delay={0.2}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="pl-4 md:basis-1/2"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="h-full"
                                    >
                                        <TestimonialCard
                                            quote={testimonial.quote}
                                            author={testimonial.author}
                                            role={testimonial.role}
                                            company={testimonial.company}
                                            avatar={testimonial.avatar}
                                            className="h-full"
                                        />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-8">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </AnimatedSection>

                {/* Trust indicators */}
                <AnimatedSection delay={0.4} className="mt-16">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <p className="text-3xl font-bold text-foreground">
                                10+
                            </p>
                            <p className="text-sm">Years Experience</p>
                        </motion.div>
                        <div className="w-px h-12 bg-border" />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <p className="text-3xl font-bold text-foreground">
                                20+
                            </p>
                            <p className="text-sm">Projects Delivered</p>
                        </motion.div>
                        <div className="w-px h-12 bg-border" />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <p className="text-3xl font-bold text-foreground">
                                100%
                            </p>
                            <p className="text-sm">Client Satisfaction</p>
                        </motion.div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
