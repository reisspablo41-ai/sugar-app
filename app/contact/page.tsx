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

                {/* Google Maps */}
                <section className="w-full h-[450px] bg-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197598010582!2d-46.65535842443077!3d-23.561414562420453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2zU8OjbyBQYXVsbzsgQnJhemlu!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brazil Global Sugar Manufacturers Location"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
