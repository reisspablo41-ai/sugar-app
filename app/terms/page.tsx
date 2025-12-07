import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                            Last updated: December 2024
                        </p>
                    </div>
                </div>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the Brazil Global Sugar Manufacturers website, you accept and agree to be bound by these Terms of Service.
                            </p>

                            <h2>2. Products and Services</h2>
                            <p>
                                All products and services offered by Brazil Global Sugar Manufacturers are subject to availability. We reserve the right to modify, suspend, or discontinue any product or service at any time without notice.
                            </p>

                            <h2>3. Quotes and Pricing</h2>
                            <p>
                                All quotes provided are subject to confirmation and may be modified based on market conditions, quantity, and delivery requirements. Final pricing will be confirmed in writing before any order is processed.
                            </p>

                            <h2>4. Order Processing</h2>
                            <p>
                                Orders are processed upon receipt of proper documentation and payment confirmation. Delivery times are estimates and may vary based on various factors including customs clearance and shipping conditions.
                            </p>

                            <h2>5. Quality Standards</h2>
                            <p>
                                All our sugar products meet international quality standards including ISO and ICUMSA specifications. Quality certificates are provided with  all shipments.
                            </p>

                            <h2>6. Limitation of Liability</h2>
                            <p>
                                Brazil Global Sugar Manufacturers shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.
                            </p>

                            <h2>7. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, images, logos, and trademarks, is the property of Brazil Global Sugar Manufacturers and is protected by international copyright laws.
                            </p>

                            <h2>8. Governing Law</h2>
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of Brazil.
                            </p>

                            <h2>9. Contact Information</h2>
                            <p>
                                For questions regarding these terms, please contact us at:
                            </p>
                            <p>
                                Email: info@brazilsugar.com<br />
                                Phone: +55 (11) 1234-5678
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
