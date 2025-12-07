import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/constants/products";
import { getProductImage, imageMap } from "@/lib/utils/image-map";
import { CheckCircle2, ArrowRight, Globe, Factory, Package, Shield, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    // Get related products (same category, exclude current)
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <>
            <TopBar />
            <Header />
            <main>
                {/* Breadcrumb */}
                <section className="py-4 bg-muted/30 border-b">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary flex items-center">
                                <Home className="h-4 w-4 mr-1" />
                                Home
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/products" className="hover:text-primary">
                                Our Products
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-foreground font-medium">{product.name}</span>
                        </nav>
                    </div>
                </section>

                {/* Product Hero */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Product Image */}
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-muted">
                                <Image
                                    src={product.image || getProductImage(product.slug)}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {product.icumsa && (
                                    <div className="absolute top-6 right-6">
                                        <Badge className="text-lg px-4 py-2 font-bold">
                                            ICUMSA {product.icumsa}
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="space-y-6">
                                <div>
                                    <Badge variant="outline" className="mb-4 capitalize">
                                        {product.category}
                                    </Badge>
                                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                                        {product.name}
                                    </h1>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <Link href="/contact" className="flex-1">
                                        <Button size="lg" className="w-full">
                                            Request Quote
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button size="lg" variant="outline">
                                            Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Content Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto space-y-12">
                            {/* Suppliers Section */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">{product.name} Suppliers</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    At Brazil Global Sugar Manufacturers, our {product.name} stands as a testament to our unwavering commitment to excellence in sugar production. As wholesale suppliers, manufacturers, and exporters of this premium sugar variant, we take pride in delivering a product that embodies the essence of purity, flavor, and versatility.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Sourced from the lush and sun-kissed fields of Brazil, our sugar undergoes a meticulous refining process that ensures the removal of impurities, resulting in a crystal-clear sweetness that enhances the quality of culinary creations.
                                </p>
                            </div>

                            {/* Image Gallery */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src={product.image || getProductImage(product.slug)}
                                        alt={`${product.name} - Production`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src={imageMap.fields.sugarCaneField1}
                                        alt="Sugarcane fields in Brazil"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Manufacturers Section */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{product.name} Manufacturers</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    {product.name} is renowned for its exceptional purity, making it an ideal choice for those who seek the true essence of sweetness. Our manufacturing process is a blend of tradition and innovation.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The journey begins with the careful selection of premium sugarcane, harvested at the peak of ripeness. Through advanced processing techniques, we maintain the natural goodness of the cane while achieving the high standards of purity expected from our products.
                                </p>
                            </div>

                            {/* Versatility Section */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Versatility for Culinary Excellence</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    As manufacturers, we understand that versatility is key in meeting the diverse needs of our clients. {product.name} is crafted to be a versatile ingredient, seamlessly integrating into a wide range of applications.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-lg">{feature}</span>
                                    </div>
                                ))}
                                </div>
                            </div>

                            {/* Wholesale Supply Section */}
                            <div className="bg-muted/50 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Package className="h-8 w-8 text-primary" />
                                    <h3 className="text-2xl font-bold">Wholesale Supply Excellence</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    As wholesale suppliers, we cater to the demands of distributors, retailers, and various industries seeking bulk quantities of {product.name}. Our commitment to quality is reflected not only in the purity of our sugar but also in our efficient supply chain processes. With Brazil Global Sugar Manufacturers, clients can expect reliable and timely delivery of bulk orders, ensuring a seamless experience from order placement to product arrival.
                                </p>
                            </div>

                            {/* Global Export Section */}
                            <div className="bg-muted/50 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="h-8 w-8 text-primary" />
                                    <h3 className="text-2xl font-bold">Global Export Reach</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    As exporters, we take pride in sharing the excellence of {product.name} with clients worldwide. Our global export network ensures that the sweetness of Brazil reaches markets across the globe. Whether you are a confectionery manufacturer in Europe, a distributor in Asia, or a retailer in North America, Brazil Global Sugar Manufacturers is your trusted partner in accessing premium quality sugar products.
                                </p>
                            </div>

                            {/* Quality Assurance Section */}
                            <div className="bg-muted/50 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-8 w-8 text-primary" />
                                    <h3 className="text-2xl font-bold">Quality Assurance</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    Quality is at the forefront of everything we do. Our {product.name} undergoes rigorous quality control measures at every stage of production. From testing the sugarcane in the fields to the final packaging, we uphold the highest standards to ensure that our clients receive a product that exceeds expectations in terms of taste, texture, and overall quality.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In conclusion, {product.name} from Brazil Global Sugar Manufacturers is more than a sweetener; it's a symbol of our dedication to providing the finest sugar products to the world. As wholesale suppliers, manufacturers, and exporters, we invite you to experience the purity and versatility of {product.name}, where every granule tells a story of quality, craftsmanship, and the rich sweetness of Brazil.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specifications */}
                {product.specifications && (
                    <section className="py-16 md:py-24 bg-background">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
                                <Card>
                                    <CardContent className="p-0">
                                        <div className="divide-y">
                                            {product.specifications.map((spec, index) => (
                                                <div
                                                    key={index}
                                                    className="grid grid-cols-2 gap-4 p-6 hover:bg-muted/50 transition-colors"
                                                >
                                                    <div className="font-semibold text-lg">{spec.label}</div>
                                                    <div className="text-muted-foreground text-lg">{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order {product.name}?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Contact us today to get a custom quote for your bulk order. Our team is ready to assist you with all your sugar supply needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        Request Quote
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specifications */}
                {product.specifications && (
                    <section className="py-16 md:py-24 bg-muted/20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
                                <Card>
                                    <CardContent className="p-0">
                                        <div className="divide-y">
                                            {product.specifications.map((spec, index) => (
                                                <div
                                                    key={index}
                                                    className="grid grid-cols-2 gap-4 p-4 hover:bg-muted/50 transition-colors"
                                                >
                                                    <div className="font-semibold">{spec.label}</div>
                                                    <div className="text-muted-foreground">{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Products - All Products */}
                <section className="py-16 md:py-24 bg-muted/20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Best Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.filter(p => p.id !== product.id).slice(0, 8).map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.id}
                                        href={`/products/${relatedProduct.slug}`}
                                    >
                                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/30 overflow-hidden group">
                                        <div className="relative h-48">
                                            <Image
                                                src={relatedProduct.image || getProductImage(relatedProduct.slug)}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {relatedProduct.icumsa && (
                                                <div className="absolute top-2 right-2">
                                                    <Badge variant="secondary" className="text-xs">
                                                        ICUMSA {relatedProduct.icumsa}
                                                    </Badge>
                                                </div>
                                            )}
                                            </div>
                                            <CardHeader>
                                            <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
                                                    {relatedProduct.name}
                                                </CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        <div className="text-center mt-8">
                            <Link href="/products">
                                <Button variant="outline" size="lg">
                                    View All Products
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        </div>
                    </section>
            </main>
            <Footer />
        </>
    );
}
