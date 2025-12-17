import { ContactForm } from "@/components/sections/contact-form";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Get in touch with our team for quotes, inquiries, or partnership opportunities
                        </p>
                    </div>
                </div>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <ContactForm variant="light" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
