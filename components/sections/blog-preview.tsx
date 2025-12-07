"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BlogPreview() {
    const featuredPosts = blogPosts.slice(0, 9);

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
                        Latest Insights
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Expert knowledge and industry updates from sugar manufacturing professionals
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/30 cursor-pointer group overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image || "/images/white-cubes-of-sugar.jpg"}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="secondary">{post.category}</Badge>
                                            <div className="flex items-center text-xs text-muted-foreground">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="flex items-center text-xs">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/blog">
                        <Button variant="outline" size="lg">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
