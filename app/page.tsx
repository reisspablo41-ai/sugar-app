import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProductsGrid } from "@/components/sections/products-grid";
import { AboutPreview } from "@/components/sections/about-preview";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSection
          title="Premium Brazilian Sugar Manufacturers & Exporters"
          subtitle="Top Quality Sugar Worldwide"
          description="Leading manufacturer and exporter of premium quality sugar products from Brazil. Supplying ICUMSA 45, refined, and raw sugar to over 50 countries worldwide with excellence and reliability."
          ctaText="Get a Quote"
          ctaLink="/contact"
          secondaryCtaText="View Products"
          secondaryCtaLink="/products"
        />

        <FeaturesSection />

        <AboutPreview />

        <ProductsGrid limit={8} />

        <StatsSection />

        <TestimonialsSection />

        <BlogPreview />

        {/* Enhanced Contact Section with Background Image */}
        <section className="relative py-16 md:py-24 bg-gray-900">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/sugar-cane-stems-in-sugar-cane-field.jpg)' }}
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
