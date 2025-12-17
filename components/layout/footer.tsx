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
                                    Estrada da Água Fria, km 42, s/n - Zona Rural, Maracaju - MS, 79150-000, Brazil
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="h-5 w-5 text-primary flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <a
                                    href="https://wa.me/5511931471328"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +5511931471328
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a
                                    href="mailto:sales@premiumsugarsuppliers.com"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    sales@premiumsugarsuppliers.com
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
