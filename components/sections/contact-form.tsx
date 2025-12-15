"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
    variant?: "dark" | "light";
}

export function ContactForm({ variant = "dark" }: ContactFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        try {
            setError(null);
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to send message");
            }

            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center p-12 bg-primary/5 rounded-lg border-2 border-primary/20"
            >
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                    We've received your message and will get back to you shortly.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <div>
                    <h3 className={`text-2xl font-bold mb-4 ${variant === "dark" ? "text-white" : ""}`}>Get in Touch</h3>
                    <p className={`leading-relaxed ${variant === "dark" ? "text-white/90" : "text-muted-foreground"}`}>
                        Have questions about our products or need a custom quote? We're here to help.
                        Fill out the form and our team will respond within 24 hours.
                    </p>
                </div>

                <div className="space-y-4">
                    <Card className={variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : ""}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`}>
                                    <Mail className={`h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`} />
                                </div>
                                <div>
                                    <CardTitle className={`text-base ${variant === "dark" ? "text-white" : ""}`}>Email</CardTitle>
                                    <CardDescription className={variant === "dark" ? "text-white/80" : ""}>contact@premiumsugarsuppliers.com</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className={variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : ""}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`}>
                                    <Phone className={`h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`} />
                                </div>
                                <div>
                                    <CardTitle className={`text-base ${variant === "dark" ? "text-white" : ""}`}>Phone</CardTitle>
                                    <CardDescription className={variant === "dark" ? "text-white/80" : ""}>+5511931471328</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className={variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : ""}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`}>
                                    <MapPin className={`h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`} />
                                </div>
                                <div>
                                    <CardTitle className={`text-base ${variant === "dark" ? "text-white" : ""}`}>Location</CardTitle>
                                    <CardDescription className={variant === "dark" ? "text-white/80" : ""}>São Paulo, Brazil</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Card className={variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : ""}>
                    <CardHeader>
                        <CardTitle className={variant === "dark" ? "text-white" : ""}>Send us a Message</CardTitle>
                        <CardDescription className={variant === "dark" ? "text-white/80" : ""}>
                            Fill out the form below and we'll get back to you soon
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className={variant === "dark" ? "text-white" : ""}>Name *</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    {...register("name")}
                                    className={errors.name ? "border-destructive" : ""}
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className={variant === "dark" ? "text-white" : ""}>Email *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    {...register("email")}
                                    className={errors.email ? "border-destructive" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-destructive">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className={variant === "dark" ? "text-white" : ""}>Phone *</Label>
                                <Input
                                    id="phone"
                                    placeholder="+1 (555) 123-4567"
                                    {...register("phone")}
                                    className={errors.phone ? "border-destructive" : ""}
                                />
                                {errors.phone && (
                                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className={variant === "dark" ? "text-white" : ""}>Company (Optional)</Label>
                                <Input
                                    id="company"
                                    placeholder="Your Company Name"
                                    {...register("company")}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className={variant === "dark" ? "text-white" : ""}>Message *</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your requirements..."
                                    rows={4}
                                    {...register("message")}
                                    className={errors.message ? "border-destructive" : ""}
                                />
                                {errors.message && (
                                    <p className="text-sm text-destructive">{errors.message.message}</p>
                                )}
                            </div>

                            {error && (
                                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                                    <p className="text-sm text-destructive">{error}</p>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
