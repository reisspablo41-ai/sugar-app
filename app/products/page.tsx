import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductsGrid } from "@/components/sections/products-grid";
import { CTASection } from "@/components/sections/cta-section";
import { TopBar } from "@/components/layout/top-bar";

export default function ProductsPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                            Our Products
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Premium quality sugar products for every need, from industrial applications to specialty use
                        </p>
                    </div>
                </div>

                <ProductsGrid />

                <CTASection
                    title="Need a Custom Solution?"
                    description="We offer customizable packaging, quantities, and specifications to meet your unique requirements. Contact our team for personalized quotes."
                    ctaText="Request Custom Quote"
                    ctaLink="/contact"
                    variant="secondary"
                />
            </main>
            <Footer />
        </>
    );
}
