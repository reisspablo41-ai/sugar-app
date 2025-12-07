"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/constants/products";
import { ProductCard } from "../sections/product-card";

interface ProductsGridProps {
    limit?: number;
    category?: "refined" | "raw" | "specialty";
}

export function ProductsGrid({ limit, category }: ProductsGridProps) {
    let filteredProducts = products;

    if (category) {
        filteredProducts = products.filter((p) => p.category === category);
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, limit);
    }

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
                        Our Premium Products
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover our comprehensive range of high-quality sugar products
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
