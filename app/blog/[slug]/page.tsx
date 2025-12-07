import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants/blog";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <TopBar />
            <Header />
            <main>
                {/* Post Header */}
                <article>
                    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <Link href="/blog">
                                    <Button variant="ghost" className="mb-6">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back to Blog
                                    </Button>
                                </Link>

                                {post.image && (
                                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                <div className="mb-6">
                                    <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                                        {post.title}
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2" />
                                            {post.readTime}
                                        </div>
                                        <div>By {post.author}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="py-16 md:py-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-a:text-primary">
                                    <ReactMarkdown>{post.content}</ReactMarkdown>
                                </div>

                                {/* Social Share */}
                                <div className="mt-12 pt-8 border-t">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">Share this article</h3>
                                        <Button variant="outline">
                                            <Share2 className="mr-2 h-4 w-4" />
                                            Share
                                        </Button>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20">
                                    <h3 className="text-2xl font-bold mb-4">Interested in Our Products?</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Contact us today to learn more about our premium sugar products and get a custom quote for your business needs.
                                    </p>
                                    <Link href="/contact">
                                        <Button size="lg">Get in Touch</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
