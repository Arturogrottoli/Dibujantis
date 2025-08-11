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
    image: "https://i.postimg.cc/sfq8Wz1B/BUBBA-1.png",
    images: [
      "https://i.postimg.cc/sfq8Wz1B/BUBBA-1.png",
      "https://i.postimg.cc/SKSt4N1P/BUBBA-2.png",
      "https://i.postimg.cc/bvmVwcKw/BUBBA-3.png",
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
    image: "https://i.postimg.cc/FHQBPxyN/BUNDLE-1.png",
    images: [
      "https://i.postimg.cc/FHQBPxyN/BUNDLE-1.png",
      "https://i.postimg.cc/xTmZyZb6/BUNDLE-2.png",
      "https://i.postimg.cc/htb3N7sx/BUNDLE-3.png",
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
    image: "https://i.postimg.cc/1tt4Nbvz/ICONS-1.png",
    images: [
      "https://i.postimg.cc/1tt4Nbvz/ICONS-1.png",
      "https://i.postimg.cc/NF2Mdmqq/ICONS-2.png",
      "https://i.postimg.cc/t70gwJp1/ICONS-3.png",
      "https://i.postimg.cc/dQhmbfJv/ICONS-4.png",
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
    image: "https://i.postimg.cc/1RbcsKzF/ILLUS-1.png",
    images: [
      "https://i.postimg.cc/1RbcsKzF/ILLUS-1.png",
      "https://i.postimg.cc/pX8QTn96/ILLUS-2.png",
      "https://i.postimg.cc/CxgGfLkL/ILLUS-3.png",
      "https://i.postimg.cc/mrZ78Xmv/ILLUS-4.png",
      "https://i.postimg.cc/bw9Q0c90/ILLUS-5.png",
      "https://i.postimg.cc/vmPfjrjc/ILLUS-6.png",
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
    image: "https://i.postimg.cc/JnGZWyVK/LOGOS-1.png",
    images: [
      "https://i.postimg.cc/JnGZWyVK/LOGOS-1.png",
      "https://i.postimg.cc/0QFm589v/LOGOS-2.png",
      "https://i.postimg.cc/5yzz6ZtC/LOGOS-3.png",
      "https://i.postimg.cc/v8xfq6vZ/LOGOS-4.png",
      "https://i.postimg.cc/MKyRx2Nk/LOGOS-5.png",
      "https://i.postimg.cc/kXr8kXjF/LOGOS-6.png",
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
    image: "https://i.postimg.cc/CxS8xrpR/MYSTERY-1.png",
    images: [
      "https://i.postimg.cc/CxS8xrpR/MYSTERY-1.png",
      "https://i.postimg.cc/VkgCr9zD/MYSTERY-2.png",
      "https://i.postimg.cc/xdFNg0Jm/MYSTERY-3.png",
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
    image: "https://i.postimg.cc/02qMVXQV/NUTRA-1.png",
    images: [
      "https://i.postimg.cc/02qMVXQV/NUTRA-1.png",
      "https://i.postimg.cc/sXQQNt7N/NUTRA-2.png",
      "https://i.postimg.cc/kMSRFPnV/NUTRA-3.png",
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
    image: "https://i.postimg.cc/RFk65XTV/PATTERN-1.png",
    images: [
      "https://i.postimg.cc/RFk65XTV/PATTERN-1.png",
      "https://i.postimg.cc/cCfKswD7/PATTERN-2.png",
      "https://i.postimg.cc/yYXJth3s/PATTERN-3.png",
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
    image: "https://i.postimg.cc/pLsmX2BS/PAW-1.png",
    images: [
      "https://i.postimg.cc/pLsmX2BS/PAW-1.png",
      "https://i.postimg.cc/VkfS8SXM/PAW-2.png",
      "https://i.postimg.cc/FK17Y2WH/PAW-3.png",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
]




