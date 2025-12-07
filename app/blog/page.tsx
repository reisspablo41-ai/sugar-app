import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/constants/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

export default function BlogPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                            Sugar Industry Insights
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Expert knowledge, industry trends, and insights from Brazil's leading sugar manufacturers
                        </p>
                    </div>
                </div>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`}>
                                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/30 cursor-pointer group overflow-hidden">
                                        {post.image && (
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge variant="secondary">{post.category}</Badge>
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <Clock className="h-3 w-3 mr-1" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription className="flex items-center text-sm">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
