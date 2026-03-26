/**
 * EDMARK SENEGAL - Product Data Structure
 * 
 * This file contains all product information for the e-commerce site.
 * To add a new product, simply add a new object to the products array following the Product interface.
 * 
 * Product Interface:
 * - id: Unique identifier (string)
 * - name: Product name (string)
 * - slug: URL-friendly version of name (string, lowercase with hyphens)
 * - category: One of the categories defined in categories array (string)
 * - price: Price in FCFA (number)
 * - currency: Currency code (string, default: "FCFA")
 * - image: Main product image URL (string)
 * - images: Array of product image URLs (string[])
 * - description: Full product description (string)
 * - shortDescription: Brief product description for cards (string)
 * - benefits: Array of product benefits (string[])
 * - ingredients: Array of ingredients (string[])
 * - howToUse: Usage instructions (string)
 * - featured: Whether product appears on homepage (boolean)
 * - inStock: Product availability (boolean)
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  featured: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Splina Liquid Chlorophyll",
    slug: "splina-liquid-chlorophyll",
    category: "Detox & Cleansing",
    price: 45000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      "https://images.unsplash.com/photo-1556229174-5e42a09e9e2d?w=800&q=80",
    ],
    description: "Splina Liquid Chlorophyll est un complément alimentaire naturel dérivé de la luzerne. Il aide à détoxifier le corps, améliorer la digestion et renforcer le système immunitaire.",
    shortDescription: "Détoxifiant naturel dérivé de la luzerne pour une santé optimale",
    benefits: [
      "Détoxifie et nettoie le sang",
      "Améliore la digestion et réduit les odeurs corporelles",
      "Renforce le système immunitaire",
      "Augmente les niveaux d'énergie",
      "Favorise la santé de la peau",
      "Aide à l'oxygénation cellulaire",
    ],
    ingredients: [
      "Chlorophylle liquide de luzerne",
      "Eau purifiée",
      "Menthe naturelle",
    ],
    howToUse: "Diluer 1 bouchon (15ml) dans un verre d'eau. Prendre 2 fois par jour, de préférence le matin et le soir.",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Shake Off Phyto Fiber",
    slug: "shake-off-phyto-fiber",
    category: "Detox & Cleansing",
    price: 38000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
      "https://images.unsplash.com/photo-1571843858776-2a483bc18d60?w=800&q=80",
    ],
    description: "Shake Off Phyto Fiber est une formule de nettoyage intestinal puissante qui aide à éliminer les toxines, améliorer la digestion et favoriser la perte de poids naturelle.",
    shortDescription: "Fibre naturelle pour le nettoyage du côlon et la perte de poids",
    benefits: [
      "Nettoie le côlon en profondeur",
      "Élimine les toxines accumulées",
      "Favorise la perte de poids",
      "Améliore le transit intestinal",
      "Réduit les ballonnements",
      "Augmente l'énergie vitale",
    ],
    ingredients: [
      "Psyllium husk",
      "Fibres de fruits et légumes",
      "Probiotiques naturels",
      "Enzymes digestives",
    ],
    howToUse: "Mélanger 1 sachet avec 250-300ml d'eau froide. Boire immédiatement avant le coucher.",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "MRT Complex",
    slug: "mrt-complex",
    category: "Immunity & Wellness",
    price: 52000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80",
    ],
    description: "MRT (Millennium Regulators Tea) est un thé thérapeutique qui renforce le système immunitaire et aide à réguler les fonctions corporelles.",
    shortDescription: "Thé thérapeutique pour renforcer l'immunité",
    benefits: [
      "Renforce le système immunitaire",
      "Régule la pression artérielle",
      "Améliore la circulation sanguine",
      "Aide à contrôler le diabète",
      "Propriétés anti-inflammatoires",
      "Favorise le bien-être général",
    ],
    ingredients: [
      "Thé vert biologique",
      "Ginseng",
      "Ginkgo biloba",
      "Extraits de plantes médicinales",
    ],
    howToUse: "Infuser 1 sachet dans de l'eau chaude pendant 3-5 minutes. Boire 2-3 fois par jour.",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Cordyceps Coffee",
    slug: "cordyceps-coffee",
    category: "Energy & Vitality",
    price: 28000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    ],
    description: "Cordyceps Coffee combine les bienfaits du café premium avec le champignon Cordyceps pour augmenter l'énergie et améliorer les performances.",
    shortDescription: "Café enrichi au Cordyceps pour énergie et vitalité",
    benefits: [
      "Augmente l'énergie et l'endurance",
      "Améliore les performances physiques",
      "Renforce la libido naturellement",
      "Soutient la fonction rénale",
      "Améliore la concentration mentale",
      "Antioxydant puissant",
    ],
    ingredients: [
      "Café arabica premium",
      "Cordyceps sinensis",
      "Ganoderma lucidum",
      "Crémer non laitier",
    ],
    howToUse: "Mélanger 1 sachet avec 150ml d'eau chaude. Consommer 1-2 fois par jour.",
    featured: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Cellgevity",
    slug: "cellgevity",
    category: "Anti-Aging & Cell Health",
    price: 85000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1556229010-aa9e22f5e2d6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556229010-aa9e22f5e2d6?w=800&q=80",
      "https://images.unsplash.com/photo-1550572017-4814c86e8edc?w=800&q=80",
    ],
    description: "Cellgevity est un supplément révolutionnaire qui augmente les niveaux de glutathion, le maître antioxydant du corps.",
    shortDescription: "Antioxydant puissant pour la santé cellulaire",
    benefits: [
      "Augmente le glutathion naturellement",
      "Puissant effet anti-âge",
      "Protège contre le stress oxydatif",
      "Améliore la fonction immunitaire",
      "Favorise la désintoxication",
      "Améliore la santé de la peau",
    ],
    ingredients: [
      "Riboceine™ (RibCys)",
      "Acide alpha-lipoïque",
      "Chardon-Marie",
      "Vitamine C",
      "Sélénium",
    ],
    howToUse: "Prendre 2 capsules deux fois par jour avec de l'eau, de préférence à jeun.",
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Vi-Delsia",
    slug: "vi-delsia",
    category: "Digestive Health",
    price: 42000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
    ],
    description: "Vi-Delsia aide à traiter les ulcères, améliore la digestion et protège la muqueuse gastrique.",
    shortDescription: "Soutien digestif pour ulcères et santé gastrique",
    benefits: [
      "Traite les ulcères gastriques",
      "Protège la muqueuse de l'estomac",
      "Améliore la digestion",
      "Réduit les brûlures d'estomac",
      "Anti-inflammatoire naturel",
      "Favorise la guérison intestinale",
    ],
    ingredients: [
      "Extrait de réglisse",
      "Aloe vera",
      "Calendula",
      "Propolis",
    ],
    howToUse: "Prendre 2 capsules 3 fois par jour avant les repas.",
    featured: false,
    inStock: true,
  },
  {
    id: "7",
    name: "Pro-Argi 9+",
    slug: "pro-argi-9-plus",
    category: "Heart Health",
    price: 95000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    ],
    description: "Pro-Argi 9+ est une formule de L-arginine qui soutient la santé cardiovasculaire et améliore la circulation.",
    shortDescription: "Formule cardiovasculaire avec L-arginine",
    benefits: [
      "Soutient la santé cardiovasculaire",
      "Améliore la circulation sanguine",
      "Augmente l'énergie",
      "Favorise la production d'oxyde nitrique",
      "Aide à maintenir une pression artérielle saine",
      "Améliore les performances physiques",
    ],
    ingredients: [
      "L-arginine",
      "L-citrulline",
      "Vitamines B6, B12, C, D3, K2",
      "Acide folique",
      "Xylitol",
    ],
    howToUse: "Mélanger 1 sachet avec 240ml d'eau froide. Prendre une fois par jour.",
    featured: false,
    inStock: true,
  },
  {
    id: "8",
    name: "Ginseng Coffee",
    slug: "ginseng-coffee",
    category: "Energy & Vitality",
    price: 26000,
    currency: "FCFA",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    description: "Ginseng Coffee est un café santé qui combine les bienfaits du ginseng avec du café premium.",
    shortDescription: "Café santé enrichi au ginseng",
    benefits: [
      "Augmente l'énergie vitale",
      "Améliore la concentration",
      "Réduit la fatigue",
      "Renforce l'immunité",
      "Améliore les performances mentales",
      "Propriétés adaptogènes",
    ],
    ingredients: [
      "Café arabica",
      "Ginseng panax",
      "Crémer végétal",
      "Sucre de canne",
    ],
    howToUse: "Mélanger 1 sachet avec 150ml d'eau chaude. Consommer 1-2 fois par jour.",
    featured: false,
    inStock: true,
  },
];

export const categories = [
  "Tous les produits",
  "Detox & Cleansing",
  "Immunity & Wellness",
  "Energy & Vitality",
  "Anti-Aging & Cell Health",
  "Digestive Health",
  "Heart Health",
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getRelatedProducts = (productId: string, category: string, limit: number = 3): Product[] => {
  return products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, limit);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};