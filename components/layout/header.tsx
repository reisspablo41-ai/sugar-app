"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Company Profile", href: "/about" },
    {
        name: "Our Products",
        href: "/products",
        dropdown: [
            { name: "ICUMSA 100 Cane Sugar", href: "/products/icumsa-100-cane-sugar" },
            { name: "ICUMSA 600 1200 Cane Sugar", href: "/products/icumsa-600-1200-cane-sugar" },
            { name: "ICUMSA 150 Cane Sugar", href: "/products/icumsa-150-cane-sugar" },
            { name: "ICUMSA 45 White Refined Sugar", href: "/products/icumsa-45-white-refined-sugar" },
            { name: "Fine Crystal Sugar", href: "/products/fine-crystal-sugar" },
            { name: "Big Granulated sugar", href: "/products/big-granulated-sugar" },
            { name: "Extra Fine Crystal Sugar", href: "/products/extra-fine-crystal-sugar" },
            { name: "Sugar Powder", href: "/products/sugar-powder" },
            { name: "Raw Sugar", href: "/products/raw-sugar" },
        ]
    },
    {
        name: "Sugar",
        href: "#",
        dropdown: [
            { name: "Refined Sugar", href: "/products?category=refined" },
            { name: "Raw Sugar", href: "/products?category=raw" },
            { name: "Specialty Sugar", href: "/products?category=specialty" },
        ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full border-b bg-primary text-white shadow-sm"
            style={{ backgroundColor: 'hsl(var(--primary))' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-sm" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/sugar-logo.png"
                            alt="Brazil Global Sugar Manufacturers"
                            width={180}
                            height={60}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-white hover:text-secondary transition-colors rounded-md hover:bg-primary/80"
                                >
                                    <span className="flex items-center gap-1">
                                        {item.name}
                                        {item.dropdown && <ChevronDown className="h-4 w-4" />}
                                    </span>
                                </Link>

                                {/* Dropdown Menu */}
                                {item.dropdown && openDropdown === item.name && (
                                    <div className="absolute left-0 top-full mt-1 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                                        {item.dropdown.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.name}
                                                href={dropdownItem.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                {dropdownItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <Button className="bg-black text-white hover:bg-black/90">
                                Get Quote
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] pl-6">
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.dropdown ? (
                                            <button
                                                onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                                                className="flex items-center justify-between w-full py-2 text-base font-medium text-white hover:text-secondary transition-colors"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block py-2 text-base font-medium text-white hover:text-secondary transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                        {item.dropdown && mobileOpenDropdown === item.name && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className="block py-1 text-sm text-gray-200 hover:text-secondary transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full mt-4 bg-black text-white hover:bg-black/90">Get Quote</Button>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
