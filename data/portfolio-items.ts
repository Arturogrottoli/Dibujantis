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

// Actualizar los primeros 4 proyectos con las imágenes reales
export const portfolioItems: PortfolioItem[] = [
  // Pet Care projects - Modal interaction
  {
    id: 1,
    title: "BUBBA BEAR",
    description: "Branding design",
    image: "https://i.postimg.cc/wvw34KDQ/A-BUBBA-BEAR-1.png",
    images: [
      "https://i.postimg.cc/wvw34KDQ/A-BUBBA-BEAR-1.png",
      "https://i.postimg.cc/fWgJxNzw/A-BUBBA-BEAR-2.png",
      "https://i.postimg.cc/zvMv5ntL/A-BUBBA-BEAR-3.png",
      "https://i.postimg.cc/XqXqT28S/A-BUBBA-BEAR-4.png",
    ],
    category: "branding",
    copyright: "bubbabear.com",
    featured: true,
    type: "modal",
  },
  {
    id: 2,
    title: "PAWTALK",
    description: "Branding + Packaging design",
    image: "https://i.postimg.cc/44Kh2dFK/B-PAWTALK-1.png",
    images: [
      "https://i.postimg.cc/44Kh2dFK/B-PAWTALK-1.png",
      "https://i.postimg.cc/bNkS85Pp/B-PAWTALK-2.png",
      "https://i.postimg.cc/MpYcfjXL/B-PAWTALK-3.png",
    ],
    category: "branding",
    copyright: "pawtalk.no",
    featured: true,
    type: "modal",
  },
  {
    id: 3,
    title: "NUTRA PAWS",
    description: "Branding + Packaging design",
    image: "https://i.postimg.cc/XNTBRbTs/C-MYSTERY-1.png",
    images: [
      "https://i.postimg.cc/XNTBRbTs/C-MYSTERY-1.png",
      "https://i.postimg.cc/Xv7rf7CY/C-MYSTERY-2.png",
      "https://i.postimg.cc/q7bzjVsX/C-MYSTERY-3.png",
    ],
    category: "branding",
    copyright: "nutrapaws.nl",
    featured: true,
    type: "modal",
  },
  {
    id: 4,
    title: "MYSTERY COFFEE LEAGUE",
    description: "Branding design",
    image: "https://i.postimg.cc/MpwMGYZR/D-NUTRAPAWS-1.png",
    images: [
      "https://i.postimg.cc/MpwMGYZR/D-NUTRAPAWS-1.png",
      "https://i.postimg.cc/PxCN73KG/D-NUTRAPAWS-2.png",
      "https://i.postimg.cc/pT3yMf1m/D-NUTRAPAWS-3.png",
    ],
    category: "branding",
    copyright: "mystery.coffee",
    featured: true,
    type: "modal",
  },
  // Sports project - Page interaction
  {
    id: 26,
    title: "PEAK PERFORMANCE",
    description: "Sports brand identity",
    image: "https://public.readdy.ai/ai/img_res/eef8066ffaebf4dfd8d877e2c7c2a7b9.jpg",
    images: [
      "https://public.readdy.ai/ai/img_res/eef8066ffaebf4dfd8d877e2c7c2a7b9.jpg",
      "https://public.readdy.ai/ai/img_res/617ea946fe776a96f8d4cc37c304d506.jpg",
      "https://public.readdy.ai/ai/img_res/bcd65baac9b42cbe435cf4fb561fff51.jpg",
    ],
    category: "sports",
    copyright: "peakperformance.com",
    featured: true,
    type: "page",
  },

  // Other projects
  {
    id: 5,
    title: "Fantasy Character Design",
    description: "Digital illustration for gaming concept art",
    image: "https://public.readdy.ai/ai/img_res/9767356549fd3483ca792756e6cc3e7f.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/9767356549fd3483ca792756e6cc3e7f.jpg"),
    category: "illustration",
    type: "modal",
  },
  {
    id: 6,
    title: "Abstract Dimensions",
    description: "Digital art exploration series",
    image: "https://public.readdy.ai/ai/img_res/4c16dc52a8136a8360e099cc7a5ae54b.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/4c16dc52a8136a8360e099cc7a5ae54b.jpg"),
    category: "digital",
    type: "modal",
  },
  {
    id: 7,
    title: "Children's Book Series",
    description: 'Illustrations for "The Enchanted Forest Tales"',
    image: "https://public.readdy.ai/ai/img_res/8c115793840682abe6c041319e84c835.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/8c115793840682abe6c041319e84c835.jpg"),
    category: "illustration",
    type: "modal",
  },
  {
    id: 8,
    title: "Luxury Beauty Brand",
    description: "Complete packaging and identity design",
    image: "https://public.readdy.ai/ai/img_res/703e3a22242458fabf4ef23190b6ecf4.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/703e3a22242458fabf4ef23190b6ecf4.jpg"),
    category: "branding",
    type: "modal",
  },
  {
    id: 9,
    title: "Neo Tokyo 2025",
    description: "Concept art for sci-fi project",
    image: "https://public.readdy.ai/ai/img_res/3ea10c6fd17fb5148f2ec6c029ac2a00.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/3ea10c6fd17fb5148f2ec6c029ac2a00.jpg"),
    category: "digital",
    type: "modal",
  },
  {
    id: 10,
    title: "Botanical Studies",
    description: "Scientific illustration series",
    image: "https://public.readdy.ai/ai/img_res/707994daa1dd85e2f87ede6f50150fa4.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/707994daa1dd85e2f87ede6f50150fa4.jpg"),
    category: "illustration",
    type: "modal",
  },
  {
    id: 11,
    title: "Geometric Dreams",
    description: "3D art exploration",
    image: "https://public.readdy.ai/ai/img_res/07b798dcdc35ecb5dd9b6d1cd340db20.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/07b798dcdc35ecb5dd9b6d1cd340db20.jpg"),
    category: "digital",
    type: "modal",
  },
  {
    id: 12,
    title: "Mythical Beasts",
    description: "Japanese-inspired illustration series",
    image: "https://public.readdy.ai/ai/img_res/5dddda2fbcce1495c2354c7927ea34b3.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/5dddda2fbcce1495c2354c7927ea34b3.jpg"),
    category: "illustration",
    type: "modal",
  },
  {
    id: 13,
    title: "TechFlow Solutions",
    description: "Tech startup brand identity",
    image: "https://public.readdy.ai/ai/img_res/bcd65baac9b42cbe435cf4fb561fff51.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/bcd65baac9b42cbe435cf4fb561fff51.jpg"),
    category: "branding",
    type: "modal",
  },
  {
    id: 14,
    title: "Dreamscapes",
    description: "Surreal digital art collection",
    image: "https://public.readdy.ai/ai/img_res/b58299489f128b8a318bd7f73a9a913e.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/b58299489f128b8a318bd7f73a9a913e.jpg"),
    category: "digital",
    type: "modal",
  },
  {
    id: 15,
    title: "Wanderlust Series",
    description: "Retro travel poster collection",
    image: "https://public.readdy.ai/ai/img_res/5da6a0629b00cfb7f4ba8c35594bd9df.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/5da6a0629b00cfb7f4ba8c35594bd9df.jpg"),
    category: "illustration",
    type: "modal",
  },
  {
    id: 16,
    title: "Nature's Harvest",
    description: "Organic food brand identity",
    image: "https://public.readdy.ai/ai/img_res/2e0f68146fcbbdf3eb8b0055ffe2ccc7.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/2e0f68146fcbbdf3eb8b0055ffe2ccc7.jpg"),
    category: "branding",
    type: "modal",
  },
  {
    id: 17,
    title: "Algorithm Art",
    description: "Generative digital artwork",
    image: "https://public.readdy.ai/ai/img_res/6bc1393aa9f95d63d6b516b7c0ee492f.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/6bc1393aa9f95d63d6b516b7c0ee492f.jpg"),
    category: "digital",
    type: "modal",
  },
  {
    id: 18,
    title: "Fashion Forward",
    description: "Editorial fashion illustrations",
    image: "https://public.readdy.ai/ai/img_res/2b217a63a6b32a9fd0846f8d68fb1c59.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/2b217a63a6b32a9fd0846f8d68fb1c59.jpg"),
    category: "illustration",
    type: "modal",
  },
  {
    id: 19,
    title: "SoundWave Festival",
    description: "Music event branding",
    image: "https://public.readdy.ai/ai/img_res/cc88b922a4b891097ee709b162d63060.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/cc88b922a4b891097ee709b162d63060.jpg"),
    category: "branding",
    type: "modal",
  },
  {
    id: 20,
    title: "Guardian Chronicles",
    description: "Game character design",
    image: "https://public.readdy.ai/ai/img_res/a62ee06353454d80d19d8088ce0ce1a9.jpg",
    images: generateAdditionalImages("https://public.readdy.ai/ai/img_res/a62ee06353454d80d19d8088ce0ce1a9.jpg"),
    category: "digital",
    type: "modal",
  },
]

