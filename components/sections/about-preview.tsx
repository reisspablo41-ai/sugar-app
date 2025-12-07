"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/sugarcane-farm.jpg"
                            alt="Sugar cane plantation in Brazil"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            About Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                            25+ Years of Sugar Excellence
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            From the fertile soils of Brazil to tables around the world, we've been crafting premium sugar products that meet the highest international standards. Our commitment to quality, sustainability, and customer satisfaction has made us a global leader in sugar manufacturing and export.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">50+</div>
                                <div className="text-sm text-muted-foreground">Countries Served</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">10K+</div>
                                <div className="text-sm text-muted-foreground">Tons Monthly</div>
                            </div>
                        </div>
                        <Link href="/about">
                            <Button size="lg" className="mt-4">
                                Learn More About Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
