"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: "1",
        name: "Maria Silva",
        company: "Global Foods International",
        role: "Procurement Director",
        content: "Brazil Global Sugar has been our trusted supplier for over 5 years. Their ICUMSA 45 sugar quality is consistently excellent, and their logistics team ensures timely delivery every time.",
    },
    {
        id: "2",
        name: "John Anderson",
        company: "Sweet Delights Beverages",
        role: "CEO",
        content: "The quality and purity of their refined sugar products are unmatched. We've tried other suppliers, but Brazil Global Sugar stands out for reliability and superior customer service.",
    },
    {
        id: "3",
        name: "Ahmed Hassan",
        company: "ME Trading Group",
        role: "Supply Chain Manager",
        content: "Working with Brazil Global Sugar has transformed our supply chain. Their competitive pricing and flexible terms have significantly improved our margins while maintaining top-quality products.",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trusted by leading companies worldwide for premium quality and exceptional service
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <Quote className="h-8 w-8 text-primary mb-4" />
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        "{testimonial.content}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-base">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-sm text-primary font-medium mt-1">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
