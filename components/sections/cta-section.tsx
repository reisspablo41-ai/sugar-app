"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    variant?: "primary" | "secondary";
}

export function CTASection({
    title,
    description,
    ctaText = "Get in Touch",
    ctaLink = "/contact",
    variant = "primary",
}: CTASectionProps) {
    const gradientClass =
        variant === "primary"
            ? "from-primary via-primary/90 to-primary/80"
            : "from-secondary via-secondary/90 to-secondary/80";

    return (
        <section className={`py-16 md:py-24 bg-gradient-to-r ${gradientClass} relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white opacity-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center space-y-6"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        {title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                        {description}
                    </p>
                    <div className="pt-4">
                        <Link href={ctaLink}>
                            <Button
                                size="lg"
                                variant={variant === "primary" ? "secondary" : "default"}
                                className="text-base px-8 group"
                            >
                                {ctaText}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
