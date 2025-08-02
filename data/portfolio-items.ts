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

// Actualizar los proyectos con las imágenes reales de dibujantis.com
export const portfolioItems: PortfolioItem[] = [
  // BUBBA BEAR - Branding
  {
    id: 1,
    title: "BUBBA BEAR",
    description: "Branding design for pet care products",
    image: "http://www.dibujantis.com/IMAGES/BUBBA1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/BUBBA1.png",
      "http://www.dibujantis.com/IMAGES/BUBBA2.png",
      "http://www.dibujantis.com/IMAGES/BUBBA3.png",
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
    image: "http://www.dibujantis.com/IMAGES/BUNDLE1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/BUNDLE1.png",
      "http://www.dibujantis.com/IMAGES/BUNDLE2.png",
      "http://www.dibujantis.com/IMAGES/BUNDLE3.png",
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
    image: "http://www.dibujantis.com/IMAGES/ICONS1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/ICONS1.png",
      "http://www.dibujantis.com/IMAGES/ICONS2.png",
      "http://www.dibujantis.com/IMAGES/ICONS3.png",
      "http://www.dibujantis.com/IMAGES/ICONS4.png",
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
    image: "http://www.dibujantis.com/IMAGES/ILLUS1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/ILLUS1.png",
      "http://www.dibujantis.com/IMAGES/ILLUS2.png",
      "http://www.dibujantis.com/IMAGES/ILLUS3.png",
      "http://www.dibujantis.com/IMAGES/ILLUS4.png",
      "http://www.dibujantis.com/IMAGES/ILLUS5.png",
      "http://www.dibujantis.com/IMAGES/ILLUS6.png",
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
    image: "http://www.dibujantis.com/IMAGES/LOGOS1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/LOGOS1.png",
      "http://www.dibujantis.com/IMAGES/LOGOS2.png",
      "http://www.dibujantis.com/IMAGES/LOGOS3.png",
      "http://www.dibujantis.com/IMAGES/LOGOS4.png",
      "http://www.dibujantis.com/IMAGES/LOGOS5.png",
      "http://www.dibujantis.com/IMAGES/LOGOS6.png",
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
    image: "http://www.dibujantis.com/IMAGES/MYSTERY1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/MYSTERY1.png",
      "http://www.dibujantis.com/IMAGES/MYSTERY2.png",
      "http://www.dibujantis.com/IMAGES/MYSTERY3.png",
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
    image: "http://www.dibujantis.com/IMAGES/NUTRA1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/NUTRA1.png",
      "http://www.dibujantis.com/IMAGES/NUTRA2.png",
      "http://www.dibujantis.com/IMAGES/NUTRA3.png",
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
    image: "http://www.dibujantis.com/IMAGES/PATTERN1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/PATTERN1.png",
      "http://www.dibujantis.com/IMAGES/PATTERN2.png",
      "http://www.dibujantis.com/IMAGES/PATTERN3.png",
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
    image: "http://www.dibujantis.com/IMAGES/PAW1.png",
    images: [
      "http://www.dibujantis.com/IMAGES/PAW1.png",
      "http://www.dibujantis.com/IMAGES/PAW2.png",
      "http://www.dibujantis.com/IMAGES/PAW3.png",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
]

