"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/constants/products";
import { ArrowRight } from "lucide-react";
import { getProductImage } from "@/lib/utils/image-map";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.slug}`}>
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
            >
                <Card className="h-full overflow-hidden group cursor-pointer border-2 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                        <Image
                            src={product.image || getProductImage(product.slug)}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {product.icumsa && (
                            <div className="absolute top-4 right-4 z-10">
                                <Badge variant="secondary" className="font-bold shadow-lg">
                                    ICUMSA {product.icumsa}
                                </Badge>
                            </div>
                        )}
                        <div className="absolute top-4 left-4 z-10">
                            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm capitalize shadow-lg">
                                {product.category}
                            </Badge>
                        </div>
                    </div>

                    <CardHeader>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                            {product.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                            {product.description}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ul className="space-y-1 mb-4">
                            {product.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button variant="ghost" className="w-full group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </Link>
    );
}
