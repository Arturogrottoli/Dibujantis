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
  // BUBBA BEAR - Branding
  {
    id: 1,
    title: "BUBBA BEAR",
    description: "Branding design for pet care products",
    image: "https://i.postimg.cc/8J8Nx0Q2/BUBBA-1.png",
    images: [
      "https://i.postimg.cc/8J8Nx0Q2/BUBBA-1.png",
      "https://i.postimg.cc/7bnJMgSH/BUBBA-2.png",
      "https://i.postimg.cc/yWHSZfgp/BUBBA-3.png",
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
    image: "https://i.postimg.cc/T5fG35PQ/BUNDLE-1.png",
    images: [
      "https://i.postimg.cc/T5fG35PQ/BUNDLE-1.png",
      "https://i.postimg.cc/1npsSryf/BUNDLE-2.png",
      "https://i.postimg.cc/BPp3LZL3/BUNDLE-3.png",
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
    image: "https://i.postimg.cc/0zb6sFFj/ICONS-1.png",
    images: [
      "https://i.postimg.cc/0zb6sFFj/ICONS-1.png",
      "https://i.postimg.cc/QFwFxSZb/ICONS-2.png",
      "https://i.postimg.cc/VStdSMYc/ICONS-3.png",
      "https://i.postimg.cc/JDWtjnnH/ICONS-4.png",
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
    image: "https://i.postimg.cc/WF6z8vFW/ILLUS-1.png",
    images: [
      "https://i.postimg.cc/WF6z8vFW/ILLUS-1.png",
      "https://i.postimg.cc/0KkQHB78/ILLUS-2.png",
      "https://i.postimg.cc/G9dH2HVZ/ILLUS-3.png",
      "https://i.postimg.cc/3W1WD3HW/ILLUS-4.png",
      "https://i.postimg.cc/CzK5G9F7/ILLUS-5.png",
      "https://i.postimg.cc/hf3jpMvB/ILLUS-6.png",
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
    image: "https://i.postimg.cc/ZWBqg3vy/LOGOS-1.png",
    images: [
      "https://i.postimg.cc/ZWBqg3vy/LOGOS-1.png",
      "https://i.postimg.cc/21s5f6n9/LOGOS-2.png",
      "https://i.postimg.cc/Ff0HF4Zr/LOGOS-3.png",
      "https://i.postimg.cc/njZcCPRv/LOGOS-4.png",
      "https://i.postimg.cc/N94GTkSZ/LOGOS-5.png",
      "https://i.postimg.cc/30x8ZDHN/LOGOS-6.png",
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
    image: "https://i.postimg.cc/7bHZ4jT4/MYSTERY-1.png",
    images: [
      "https://i.postimg.cc/7bHZ4jT4/MYSTERY-1.png",
      "https://i.postimg.cc/bsdYDbTF/MYSTERY-2.png",
      "https://i.postimg.cc/LJ1HvpGt/MYSTERY-3.png",
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
    image: "https://i.postimg.cc/cK7dycx6/NUTRA-1.png",
    images: [
      "https://i.postimg.cc/cK7dycx6/NUTRA-1.png",
      "https://i.postimg.cc/VSPzVhc3/NUTRA-2.png",
      "https://i.postimg.cc/mzbBbFkj/NUTRA-3.png",
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
    image: "https://i.postimg.cc/HcBHjs7g/PATTERN-1.png",
    images: [
      "https://i.postimg.cc/HcBHjs7g/PATTERN-1.png",
      "https://i.postimg.cc/vxTynFW6/PATTERN-2.png",
      "https://i.postimg.cc/JtzMvJ94/PATTERN-3.png",
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
    image: "https://i.postimg.cc/0rXPsjsG/PAW-1.png",
    images: [
      "https://i.postimg.cc/0rXPsjsG/PAW-1.png",
      "https://i.postimg.cc/CzZYL0h3/PAW-2.png",
      "https://i.postimg.cc/JG98sFtG/PAW-3.png",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
]



