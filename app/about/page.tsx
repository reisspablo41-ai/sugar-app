import { HeroSection } from "@/components/sections/hero";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Globe, Award, TrendingUp, Shield } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Excellence",
        description: "Unwavering dedication to the highest quality standards in every granule we produce.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Serving clients across 50+ countries with reliable delivery and exceptional service.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to eco-friendly practices and responsible sourcing for a better tomorrow.",
    },
    {
        icon: Users,
        title: "Customer Focus",
        description: "Building lasting partnerships through customized solutions and dedicated support.",
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        description: "Leveraging cutting-edge technology while honoring traditional craftsmanship.",
    },
    {
        icon: Shield,
        title: "Reliability",
        description: "Consistent quality and timely delivery you can count on, every single time.",
    },
];

export default function AboutPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <HeroSection
                    title="About Brazil Global Sugar"
                    subtitle="Premium Sugar Manufacturers Since 1998"
                    description="Leading the global sugar industry with excellence, sustainability, and unwavering commitment to quality."
                />

                {/* Company Story */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl font-bold">Our Legacy</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Brazil Global Sugar Manufacturers emerged from the fertile soils of Brazil, a country known for its vibrant landscapes and a deep-rooted tradition of sugar cultivation. From the very beginning, our goal has been clear – to become leaders in the production, wholesale supply, and export of premium-quality sugar products.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl font-bold">Dedication to Excellence</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    At the heart of our success is an unwavering dedication to excellence. Our state-of-the-art facilities, equipped with cutting-edge technology, allow us to craft sugar products that stand out for their purity, flavor, and versatility. From the sun-soaked fields to the final granule, every step of our process reflects a commitment to maintaining the highest standards.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Product Portfolio</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Explore the diverse world of sweetness within our product portfolio. From the robust ICUMSA 150 Cane Sugar to the delicate Fine Crystal Sugar, each variant is meticulously crafted to cater to the dynamic needs of global markets. As wholesale suppliers, manufacturers, and exporters, our offerings include ICUMSA 100 Cane Sugar, ICUMSA 600-1200 Cane Sugar, ICUMSA 45 White Refined Sugar, Big Granulated Sugar, Extra Fine Crystal Sugar, and Sugar Powder.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-16 md:py-24 bg-muted/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {values.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <Card key={value.title} className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Sustainability */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl font-bold">Sustainability and Responsibility</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In an era where environmental consciousness is paramount, Brazil Global Sugar Manufacturers takes pride in adopting sustainable practices. From responsible sourcing of raw materials to eco-friendly production processes, we strive to minimize our ecological footprint. Our commitment to sustainability is not just a responsibility; it's a reflection of our values.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl font-bold">Global Reach</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    As exporters, our reach extends far beyond the borders of Brazil. We take pride in being a global supplier of choice, catering to diverse markets worldwide. Our extensive network enables us to deliver quality sugar products to clients around the globe, ensuring that the sweetness of Brazil reaches every corner of the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
