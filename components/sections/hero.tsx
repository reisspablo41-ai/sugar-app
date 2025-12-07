"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export function HeroSection({
    title,
    subtitle = "Excellence in Every Grain",
    description,
    ctaText = "Get Started",
    ctaLink = "#",
    secondaryCtaText,
    secondaryCtaLink,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.pixabay.com/video/2025/07/11/290778_large.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
            </div>

            {/* Animated orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse z-0" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Subtitle Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
                    >
                        <Sparkles className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-semibold text-white">{subtitle}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                        >
                            {description}
                        </motion.p>
                    )}

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href={ctaLink}>
                            <Button size="lg" className="text-base px-8 group shadow-2xl hover:shadow-primary/50">
                                {ctaText}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        {secondaryCtaText && secondaryCtaLink && (
                            <Link href={secondaryCtaLink}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-base px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white shadow-xl"
                                >
                                    {secondaryCtaText}
                                </Button>
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
