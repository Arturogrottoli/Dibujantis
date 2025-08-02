export type PortfolioItem = {
  id: number
  title: string
  description: string
  image: string
  images: string[] // Array of additional images
  category: "illustration" | "branding" | "digital" | "sports"
  copyright?: string
  featured?: boolean
  type?: "modal" | "page" // Determines interaction type
}

// Helper function to generate additional images
export const generateAdditionalImages = (mainImage: string): string[] => {
  // Return the main image plus 2 variations
  return [
    mainImage,
    mainImage.replace(".jpg", "-2.jpg") || "/placeholder.svg?height=600&width=800",
    mainImage.replace(".jpg", "-3.jpg") || "/placeholder.svg?height=600&width=800",
  ]
}

// Actualizar los proyectos con imágenes que funcionan en Vercel
export const portfolioItems: PortfolioItem[] = [
  // BUBBA BEAR - Branding
  {
    id: 1,
    title: "BUBBA BEAR",
    description: "Branding design for pet care products",
    image: "https://picsum.photos/600/600?random=1",
    images: [
      "https://picsum.photos/600/600?random=1",
      "https://picsum.photos/600/600?random=2",
      "https://picsum.photos/600/600?random=3",
    ],
    category: "branding",
    copyright: "bubbabear.com",
    featured: true,
    type: "modal",
  },
  // BUNDLE - Branding
  {
    id: 2,
    title: "BUNDLE",
    description: "Branding and packaging design",
    image: "https://picsum.photos/600/600?random=4",
    images: [
      "https://picsum.photos/600/600?random=4",
      "https://picsum.photos/600/600?random=5",
      "https://picsum.photos/600/600?random=6",
    ],
    category: "branding",
    copyright: "bundle.com",
    featured: true,
    type: "modal",
  },
  // ICONS - Digital/Illustration
  {
    id: 3,
    title: "ICONS COLLECTION",
    description: "Custom icon design series",
    image: "https://picsum.photos/600/600?random=7",
    images: [
      "https://picsum.photos/600/600?random=7",
      "https://picsum.photos/600/600?random=8",
      "https://picsum.photos/600/600?random=9",
      "https://picsum.photos/600/600?random=10",
    ],
    category: "digital",
    copyright: "dibujantis.com",
    featured: true,
    type: "modal",
  },
  // ILLUSTRATIONS - Illustration
  {
    id: 4,
    title: "ILLUSTRATIONS",
    description: "Digital illustration series",
    image: "https://picsum.photos/600/600?random=11",
    images: [
      "https://picsum.photos/600/600?random=11",
      "https://picsum.photos/600/600?random=12",
      "https://picsum.photos/600/600?random=13",
      "https://picsum.photos/600/600?random=14",
      "https://picsum.photos/600/600?random=15",
      "https://picsum.photos/600/600?random=16",
    ],
    category: "illustration",
    copyright: "dibujantis.com",
    featured: true,
    type: "modal",
  },
  // LOGOS - Branding
  {
    id: 5,
    title: "LOGO COLLECTION",
    description: "Custom logo design portfolio",
    image: "https://picsum.photos/600/600?random=17",
    images: [
      "https://picsum.photos/600/600?random=17",
      "https://picsum.photos/600/600?random=18",
      "https://picsum.photos/600/600?random=19",
      "https://picsum.photos/600/600?random=20",
      "https://picsum.photos/600/600?random=21",
      "https://picsum.photos/600/600?random=22",
    ],
    category: "branding",
    copyright: "dibujantis.com",
    featured: true,
    type: "modal",
  },
  // MYSTERY COFFEE - Branding
  {
    id: 6,
    title: "MYSTERY COFFEE LEAGUE",
    description: "Coffee brand identity design",
    image: "https://picsum.photos/600/600?random=23",
    images: [
      "https://picsum.photos/600/600?random=23",
      "https://picsum.photos/600/600?random=24",
      "https://picsum.photos/600/600?random=25",
    ],
    category: "branding",
    copyright: "mystery.coffee",
    featured: true,
    type: "modal",
  },
  // NUTRA - Branding
  {
    id: 7,
    title: "NUTRA PAWS",
    description: "Pet nutrition brand design",
    image: "https://picsum.photos/600/600?random=26",
    images: [
      "https://picsum.photos/600/600?random=26",
      "https://picsum.photos/600/600?random=27",
      "https://picsum.photos/600/600?random=28",
    ],
    category: "branding",
    copyright: "nutrapaws.nl",
    featured: true,
    type: "modal",
  },
  // PATTERN - Digital/Illustration
  {
    id: 8,
    title: "PATTERN COLLECTION",
    description: "Custom pattern design series",
    image: "https://picsum.photos/600/600?random=29",
    images: [
      "https://picsum.photos/600/600?random=29",
      "https://picsum.photos/600/600?random=30",
      "https://picsum.photos/600/600?random=31",
    ],
    category: "digital",
    copyright: "dibujantis.com",
    featured: true,
    type: "modal",
  },
  // PAW - Branding
  {
    id: 9,
    title: "PAWTALK",
    description: "Pet care brand identity",
    image: "https://picsum.photos/600/600?random=32",
    images: [
      "https://picsum.photos/600/600?random=32",
      "https://picsum.photos/600/600?random=33",
      "https://picsum.photos/600/600?random=34",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
]

