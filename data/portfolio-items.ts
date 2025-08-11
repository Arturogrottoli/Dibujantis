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



export const portfolioItems: PortfolioItem[] = [
 {
  id: 1,
  title: "BUBBA BEAR",
  description: "Branding design for pet care products",
  image: "https://i.postimg.cc/7h5SMjsX/BUBBA-1.png",
  images: [
    "https://i.postimg.cc/7h5SMjsX/BUBBA-1.png",
    "https://i.postimg.cc/NGn6ffFn/BUBBA-2.png",
    "https://i.postimg.cc/SRHCZVH4/BUBBA-3.png",
  ],
  category: "branding",
  copyright: "bubbabear.com",
  featured: true,
  type: "modal",
},

  {
    id: 2,
    title: "BUNDLE",
    description: "Branding and packaging design",
    image:  "https://i.postimg.cc/Ls0W9F13/BUNDLE-1.png",
    images: [
      "https://i.postimg.cc/Ls0W9F13/BUNDLE-1.png",
"https://i.postimg.cc/KvyHvNRw/BUNDLE-2.png",
"https://i.postimg.cc/RhwpL3bg/BUNDLE-3.png",
    ],
    category: "branding",
    copyright: "bundle.com",
    featured: true,
    type: "modal",
  },
 {
  id: 3,
  title: "ICONS COLLECTION",
  description: "Custom icon design series",
  image: "https://i.postimg.cc/N0F7byzQ/ICONS-1.png",
  images: [
    "https://i.postimg.cc/N0F7byzQ/ICONS-1.png",
    "https://i.postimg.cc/fL07nGsF/ICONS-2.png",
    "https://i.postimg.cc/7LR1RxF0/ICONS-3.png",
    "https://i.postimg.cc/vTFrQ0Hm/ICONS-4.png",
  ],
  category: "digital",
  copyright: "dibujantis.com",
  featured: true,
  type: "modal",
},
{
  id: 4,
  title: "ILLUSTRATIONS",
  description: "Digital illustration series",
  image: "https://i.postimg.cc/brxQd1s9/ILLUS-1.png",
  images: [
    "https://i.postimg.cc/brxQd1s9/ILLUS-1.png",
    "https://i.postimg.cc/T2gjkvC5/ILLUS-2.png",
    "https://i.postimg.cc/GhRFVg57/ILLUS-3.png",
    "https://i.postimg.cc/pLXDXhxK/ILLUS-4.png",
    "https://i.postimg.cc/J4QNLcw1/ILLUS-5.png",
    "https://i.postimg.cc/g2S3wzkQ/ILLUS-6.png",
  ],
  category: "illustration",
  copyright: "dibujantis.com",
  featured: true,
  type: "modal",
},

  {
    id: 5,
    title: "LOGO COLLECTION",
    description: "Custom logo design portfolio",
    image: "https://i.postimg.cc/TwmbHnqv/LOGOS-1.png",
    images: [
      "https://i.postimg.cc/TwmbHnqv/LOGOS-1.png",
      "https://i.postimg.cc/xdXMMwXC/LOGOS-2.png",
      "https://i.postimg.cc/pd38ZsjB/LOGOS-3.png",
      "https://i.postimg.cc/RhBtrqX6/LOGOS-4.png",
      "https://i.postimg.cc/tJNx9yMr/LOGOS-5.png",
      "https://i.postimg.cc/dQ2d2mV8/LOGOS-6.png",
    ],
    category: "branding",
    copyright: "dibujantis.com",
    featured: true,
    type: "modal",
  },
  {
    id: 6,
    title: "MYSTERY COFFEE LEAGUE",
    description: "Coffee brand identity design",
    image: "https://i.postimg.cc/BQJFMLjR/MYSTERY-1.png",
    images: [
      "https://i.postimg.cc/BQJFMLjR/MYSTERY-1.png",
      "https://i.postimg.cc/VkVbfKKc/MYSTERY-2.png",
      "https://i.postimg.cc/kg4bP0Fc/MYSTERY-3.png",
    ],
    category: "branding",
    copyright: "mystery.coffee",
    featured: true,
    type: "modal",
  },
  {
    id: 7,
    title: "NUTRA PAWS",
    description: "Pet nutrition brand design",
    image: "https://i.postimg.cc/CKnnzb2n/NUTRA-1.png",
    images: [
      "https://i.postimg.cc/CKnnzb2n/NUTRA-1.png",
      "https://i.postimg.cc/28TZJkvy/NUTRA-2.png",
      "https://i.postimg.cc/d1879wwq/NUTRA-3.png",
    ],
    category: "branding",
    copyright: "nutrapaws.nl",
    featured: true,
    type: "modal",
  },
  {
    id: 8,
    title: "PATTERN COLLECTION",
    description: "Custom pattern design series",
    image: "https://i.postimg.cc/G208YH07/PATTERN-1.png",
    images: [
      "https://i.postimg.cc/G208YH07/PATTERN-1.png",
      "https://i.postimg.cc/90CD8KQy/PATTERN-2.png",
      "https://i.postimg.cc/Wz8hQ8dC/PATTERN-3.png",
    ],
    category: "digital",
    copyright: "dibujantis.com",
    featured: true,
    type: "modal",
  },
  {
    id: 9,
    title: "PAWTALK",
    description: "Pet care brand identity",
    image: "https://i.postimg.cc/xTjkLw72/PAW-1.png",
    images: [
      "https://i.postimg.cc/xTjkLw72/PAW-1.png",
      "https://i.postimg.cc/SQf22Sgd/PAW-2.png",
      "https://i.postimg.cc/wTW12W8s/PAW-3.png",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
]





