import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                            Last updated: December 2024
                        </p>
                    </div>
                </div>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <h2>1. Information We Collect</h2>
                            <p>
                                At Brazil Global Sugar Manufacturers, we collect information that you provide directly to us when you:
                            </p>
                            <ul>
                                <li>Request a quote or make an inquiry through our website</li>
                                <li>Subscribe to our newsletter or marketing communications</li>
                                <li>Participate in surveys or promotions</li>
                                <li>Contact our customer service team</li>
                            </ul>

                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Process and fulfill your requests and orders</li>
                                <li>Communicate with you about products, services, and promotions</li>
                                <li>Improve our website and customer service</li>
                                <li>Comply with legal obligations</li>
                            </ul>

                            <h2>3. Information Sharing</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law or to fulfill our services.
                            </p>

                            <h2>4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>

                            <h2>5. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>

                            <h2>6. Cookies</h2>
                            <p>
                                Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                            </p>

                            <h2>7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
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
