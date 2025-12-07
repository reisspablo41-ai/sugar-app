"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "25+", label: "Years Experience" },
    { value: "10K+", label: "Tons Monthly" },
    { value: "99.9%", label: "Customer Satisfaction" },
];

export function StatsSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Delivering excellence globally with proven results
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white/80 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
