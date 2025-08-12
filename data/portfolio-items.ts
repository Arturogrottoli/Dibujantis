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
  image: "https://i.postimg.cc/hG9JgcwH/ICONS-1.png",
  images: [
    "https://i.postimg.cc/hG9JgcwH/ICONS-1.png",
"https://i.postimg.cc/zvf3nWBr/ICONS-2.png",
"https://i.postimg.cc/SsknxHbj/ICONS-3.png",
"https://i.postimg.cc/63cy2zBc/ICONS-4.png",
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
  image: "https://i.postimg.cc/FsMsKwjm/ILLUS-1.png",
  images: [
    "https://i.postimg.cc/FsMsKwjm/ILLUS-1.png",
"https://i.postimg.cc/q70Jsnb5/ILLUS-2.png",
"https://i.postimg.cc/BvgqM6RQ/ILLUS-3.png",
"https://i.postimg.cc/76Zqc4y1/ILLUS-4.png",
"https://i.postimg.cc/SxcQYVr9/ILLUS-5.png",
"https://i.postimg.cc/cHkdGzsp/ILLUS-6.png",
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
    image: "https://i.postimg.cc/52wVP0DQ/LOGOS-1.png",
    images: [
      "https://i.postimg.cc/52wVP0DQ/LOGOS-1.png",
"https://i.postimg.cc/LX0KqZgw/LOGOS-2.png",
"https://i.postimg.cc/MG58SL6W/LOGOS-3.png",
"https://i.postimg.cc/mDrW2Sk7/LOGOS-4.png",
"https://i.postimg.cc/mrBGK4GX/LOGOS-5.png",
"https://i.postimg.cc/T1L8nYrw/LOGOS-6.png",
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
    image: "https://i.postimg.cc/GtZWKwQj/MYSTERY-1.png",
    images: [
      "https://i.postimg.cc/GtZWKwQj/MYSTERY-1.png",
"https://i.postimg.cc/YqFK90rD/MYSTERY-2.png",
"https://i.postimg.cc/G3VndGCs/MYSTERY-3.png",
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
    image: "https://i.postimg.cc/3xwqGwYH/NUTRA-1.png",
    images: [
      "https://i.postimg.cc/3xwqGwYH/NUTRA-1.png",
"https://i.postimg.cc/HkPh9Ck8/NUTRA-2.png",
"https://i.postimg.cc/tTFvbZtF/NUTRA-3.png",
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
    image: "https://i.postimg.cc/jjwk8kDg/PATTERN-1.png",
    images: [
      "https://i.postimg.cc/jjwk8kDg/PATTERN-1.png",
"https://i.postimg.cc/zfs24SWJ/PATTERN-2.png",
"https://i.postimg.cc/yxBQ81vt/PATTERN-3.png",
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
    image: "https://i.postimg.cc/h4bZ3mGB/PAW-1.png",
    images: [
      "https://i.postimg.cc/h4bZ3mGB/PAW-1.png",
"https://i.postimg.cc/90px46kM/PAW-2.png",
"https://i.postimg.cc/jdx3VjWJ/PAW-3.png",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
]





