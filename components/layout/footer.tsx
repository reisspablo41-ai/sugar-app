import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const productCategories = [
    { name: "ICUMSA 100 Cane Sugar", href: "/products/icumsa-100-cane-sugar" },
    { name: "ICUMSA 600 1200 Cane Sugar", href: "/products/icumsa-600-1200-cane-sugar" },
    { name: "ICUMSA 150 Cane Sugar", href: "/products/icumsa-150-cane-sugar" },
    { name: "ICUMSA 45 White Refined Sugar", href: "/products/icumsa-45-white-refined-sugar" },
    { name: "Fine Crystal Sugar", href: "/products/fine-crystal-sugar" },
    { name: "Big Granulated sugar", href: "/products/big-granulated-sugar" },
    { name: "Extra Fine Crystal Sugar", href: "/products/extra-fine-crystal-sugar" },
    { name: "Sugar Powder", href: "/products/sugar-powder" },
    { name: "Raw Sugar", href: "/products/raw-sugar" },
];

const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
];

export function Footer() {
    return (
        <footer className="bg-muted/40 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Brazil Global Sugar
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Leading manufacturer, exporter, and wholesale supplier of premium
                            quality sugar products from Brazil to the world.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Our Products</h3>
                        <ul className="space-y-2">
                            {productCategories.map((product) => (
                                <li key={product.name}>
                                    <Link
                                        href={product.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Company</h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">
                                    São Paulo, Brazil
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a
                                    href="tel:+55123456789"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +55 (11) 1234-5678
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a
                                    href="mailto:info@brazilsugar.com"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    info@brazilsugar.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Brazil Global Sugar Manufacturers. All
                        rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
