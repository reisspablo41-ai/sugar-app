export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    icumsa?: string;
    features: string[];
    specifications?: {
        label: string;
        value: string;
    }[];
    image?: string;
    category: "refined" | "raw" | "specialty";
}

export const products: Product[] = [
    {
        id: "1",
        slug: "icumsa-45-white-refined-sugar",
        name: "ICUMSA 45 White Refined Sugar",
        description: "The highest quality refined sugar available in the global market. Known for its pure white color, fine granulation, and exceptional sweetness.",
        icumsa: "45",
        category: "refined",
        image: "/images/products/white-refined-sugar.png",
        features: [
            "Pure white color",
            "Fine granulation",
            "Highest quality standard",
            "Ideal for food and beverage industry"
        ],
        specifications: [
            { label: "ICUMSA", value: "45 max" },
            { label: "Polarization", value: "99.8% min" },
            { label: "Moisture", value: "0.04% max" },
            { label: "Ash Content", value: "0.04% max" }
        ]
    },
    {
        id: "2",
        slug: "icumsa-100-cane-sugar",
        name: "ICUMSA 100 Cane Sugar",
        description: "Premium quality cane sugar with excellent color and taste characteristics, perfect for various industrial applications.",
        icumsa: "100",
        category: "refined",
        image: "/images/products/crystal-sugar.png",
        features: [
            "Light golden color",
            "Rich flavor profile",
            "High sucrose content",
            "Versatile applications"
        ],
        specifications: [
            { label: "ICUMSA", value: "100 max" },
            { label: "Polarization", value: "99.5% min" },
            { label: "Moisture", value: "0.10% max" },
            { label: "Ash Content", value: "0.10% max" }
        ]
    },
    {
        id: "3",
        slug: "icumsa-150-cane-sugar",
        name: "ICUMSA 150 Cane Sugar",
        description: "High-quality cane sugar with a slightly darker color, offering excellent sweetness and natural flavor.",
        icumsa: "150",
        category: "refined",
        image: "/images/brown-sugar-5847979_1920.jpg",
        features: [
            "Golden color",
            "Natural sweetness",
            "Premium quality",
            "Cost-effective solution"
        ]
    },
    {
        id: "4",
        slug: "icumsa-600-1200-cane-sugar",
        name: "ICUMSA 600-1200 Cane Sugar",
        description: "Raw cane sugar with a rich, natural flavor and distinctive brown color, ideal for specialty applications.",
        icumsa: "600-1200",
        category: "raw",
        image: "/images/products/raw-sugar.png",
        features: [
            "Brown color",
            "Rich molasses flavor",
            "Natural nutrients",
            "Specialty applications"
        ]
    },
    {
        id: "5",
        slug: "fine-crystal-sugar",
        name: "Fine Crystal Sugar",
        description: "Precisely refined sugar with fine crystal structure, perfect for baking and confectionery applications.",
        category: "refined",
        image: "/images/candy-sugar-764743_1920.jpg",
        features: [
            "Fine crystal structure",
            "Quick dissolving",
            "Perfect for baking",
            "Consistent quality"
        ]
    },
    {
        id: "6",
        slug: "extra-fine-crystal-sugar",
        name: "Extra Fine Crystal Sugar",
        description: "Ultra-fine refined sugar with exceptional dissolving properties, ideal for premium applications.",
        category: "refined",
        image: "/images/brown-and-white-sugar-in-powder-form.jpg",
        features: [
            "Ultra-fine crystals",
            "Instant dissolving",
            "Premium applications",
            "Smooth texture"
        ]
    },
    {
        id: "7",
        slug: "big-granulated-sugar",
        name: "Big Granulated Sugar",
        description: "Large crystal sugar with excellent flow properties, perfect for industrial and food service applications.",
        category: "specialty",
        image: "/images/brown-sugar-1048255_1920.jpg",
        features: [
            "Large crystals",
            "Excellent flow",
            "Industrial grade",
            "Long shelf life"
        ]
    },
    {
        id: "8",
        slug: "sugar-powder",
        name: "Sugar Powder",
        description: "Finely ground sugar perfect for confectionery, icing, and decorative applications.",
        category: "specialty",
        image: "/images/powder-sugar.jpg",
        features: [
            "Fine powder texture",
            "Quick mixing",
            "Perfect for icing",
            "Premium quality"
        ]
    },
    {
        id: "9",
        slug: "raw-sugar",
        name: "Raw Sugar",
        description: "Minimally processed sugar retaining natural molasses, offering rich flavor and natural color.",
        category: "raw",
        image: "/images/brown-sugar-4918707_1920.jpg",
        features: [
            "Minimal processing",
            "Natural molasses",
            "Rich flavor",
            "Natural nutrients"
        ]
    },
    {
        id: "10",
        slug: "white-granulated-sugar",
        name: "White Granulated Sugar",
        description: "Classic white granulated sugar for everyday use, offering consistent quality and sweetness.",
        category: "refined",
        image: "/images/white-cubes-of-sugar.jpg",
        features: [
            "Pure white color",
            "Standard granulation",
            "Versatile use",
            "Reliable quality"
        ]
    },
    {
        id: "11",
        slug: "crystal-white-sugar",
        name: "Crystal White Sugar",
        description: "Premium white sugar with distinctive crystal clarity and exceptional purity.",
        category: "refined",
        image: "/images/white-powder-sugar-on-teaspoon.jpg",
        features: [
            "Crystal clarity",
            "Exceptional purity",
            "Premium grade",
            "Perfect for beverages"
        ]
    },
    {
        id: "12",
        slug: "brazil-refined-cane-sugar",
        name: "Brazil Refined Cane Sugar ICUMSA 45",
        description: "Premium Brazilian refined cane sugar meeting the highest international standards.",
        icumsa: "45",
        category: "refined",
        image: "/images/pexels-plato-terentev-3804555-5909686.jpg",
        features: [
            "Brazilian origin",
            "International standards",
            "Premium quality",
            "Sustainable sourcing"
        ]
    }
];
