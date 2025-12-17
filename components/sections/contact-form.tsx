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
                                    <CardDescription className={variant === "dark" ? "text-white/80" : ""}>sales@premiumsugarsuppliers.com</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    <Card className={variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : ""}>
                        <CardHeader className="pb-3">
                            <a
                                href="https://wa.me/5511931471328"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                            >
                                <div className={`p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`}>
                                    <svg
                                        className={`h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <CardTitle className={`text-base ${variant === "dark" ? "text-white" : ""}`}>WhatsApp</CardTitle>
                                    <CardDescription className={variant === "dark" ? "text-white/80" : ""}>+5511931471328</CardDescription>
                                </div>
                            </a>
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
                                    <CardDescription className={variant === "dark" ? "text-white/80" : ""}>Estrada da Água Fria, km 42, s/n - Zona Rural, Maracaju - MS, 79150-000, Brazil</CardDescription>
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
