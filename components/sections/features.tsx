"use client";

import { motion } from "framer-motion";
import { Award, Globe, Leaf, TruckIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
    {
        icon: Award,
        title: "Premium Quality",
        description: "Highest quality refined sugar meeting international standards with rigorous quality control.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Exporting to over 50 countries worldwide with reliable logistics and timely delivery.",
    },
    {
        icon: Leaf,
        title: "Sustainable Practices",
        description: "Eco-friendly production methods and responsible sourcing to minimize environmental impact.",
    },
    {
        icon: TruckIcon,
        title: "Efficient Logistics",
        description: "Streamlined supply chain ensuring your products arrive safely and on schedule.",
    },
];

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Why Choose Brazil Global Sugar
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Leading the industry with excellence, sustainability, and global service
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
