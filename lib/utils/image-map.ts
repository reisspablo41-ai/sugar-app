// Image mapping helper - maps descriptive filenames to usage locations
export const imageMap = {
    // Product images
    products: {
        whiteRefinedSugar: "/images/white-cubes-of-sugar.jpg",
        brownSugar: "/images/brown-sugar-5847979_1920.jpg",
        crystalSugar: "/images/candy-sugar-764743_1920.jpg",
        powderSugar: "/images/powder-sugar.jpg",
        whitePowderSugar: "/images/white-powder-sugar-on-teaspoon.jpg",
        brownSugarPowder: "/images/brown-and-white-sugar-in-powder-form.jpg",
        rawSugar: "/images/brown-sugar-4918707_1920.jpg",
        granulatedSugar: "/images/brown-sugar-1048255_1920.jpg",
    },

    // Sugar cane field images
    fields: {
        sugarCaneField1: "/images/sugarcane-farm.jpg",
        sugarCaneField2: "/images/sugar-cane-stems-in-sugar-cane-field.jpg",
        sugarCaneField3: "/images/suragr-cane-farm-with-a-tree-infront.jpg",
        sugarCaneField4: "/images/sugarcane-2857972_1920.jpg",
        sugarCaneStem: "/images/sugarcane-stem-vclose-up.jpg",
    },

    // People/workers
    people: {
        farmerPortrait1: "/images/man-in-sugar-cane-field-portrait.jpg",
        farmerPortrait2: "/images/man-in-sugarcane-field-protrait.jpg",
        farmerWithStem: "/images/man-insugar-cane0field-holding-suagrcane-stem.jpg",
    },

    // Facilities
    facilities: {
        productionFacility: "/images/production-facility.png",
    },

    // Blog images (check if exists)
    blog: {
        generic1: "/images/blog/pexels-plato-terentev-3804555-5909686.jpg",
    }
};

// Helper to get image or fallback
export function getProductImage(productSlug: string): string {
    const map: Record<string, string> = {
        "icumsa-45-white-refined-sugar": imageMap.products.whiteRefinedSugar,
        "white-refined-brazil-sugar": imageMap.products.whiteRefinedSugar,
        "icumsa-100-cane-sugar": imageMap.products.crystalSugar,
        "icumsa-150-cane-sugar": imageMap.products.granulatedSugar,
        "icumsa-600-1200-cane-sugar": imageMap.products.rawSugar,
        "fine-crystal-sugar": imageMap.products.crystalSugar,
        "extra-fine-crystal-sugar": imageMap.products.crystalSugar,
        "big-granulated-sugar": imageMap.products.granulatedSugar,
        "sugar-powder": imageMap.products.powderSugar,
        "raw-sugar": imageMap.products.brownSugar,
        "white-granulated-sugar": imageMap.products.whiteRefinedSugar,
        "crystal-white-sugar": imageMap.products.whiteRefinedSugar,
        "brazil-refined-cane-sugar": imageMap.products.whiteRefinedSugar,
    };

    return map[productSlug] || imageMap.products.whiteRefinedSugar;
}
