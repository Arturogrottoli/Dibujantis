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
    description: "Branding design for baby products",
    image: "https://i.imgur.com/7wGx3Er.png",
    images: [
      "https://i.imgur.com/7wGx3Er.png",
      "https://i.imgur.com/Uk5tkUM.png",
      "https://i.imgur.com/BkleitL.png",
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
  image: "https://i.imgur.com/hlcPkns.png",
  images: [
    "https://i.imgur.com/hlcPkns.png",
    "https://i.imgur.com/olDb0ui.png",
    "https://i.imgur.com/8KDLopb.jpeg",
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
  image: "https://i.imgur.com/liyNn0k.png",
  images: [
    "https://i.imgur.com/liyNn0k.png",
    "https://i.imgur.com/Pmmms4D.png",
    "https://i.imgur.com/vmIINVI.png",
    "https://i.imgur.com/BSbGtBW.png",
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
  image: "https://i.imgur.com/fHaagZP.png",
  images: [
    "https://i.imgur.com/fHaagZP.png",
    "https://i.imgur.com/EEoB6Ma.png",
    "https://i.imgur.com/ozWOZfn.png",
    "https://i.imgur.com/k2wX7KX.png",
    "https://i.imgur.com/vjq1wS0.png",
    "https://i.imgur.com/NHYJ1dd.png",
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
  image: "https://i.imgur.com/GOKR2da.png",
  images: [
    "https://i.imgur.com/GOKR2da.png",
    "https://i.imgur.com/2NZoh9I.png",
    "https://i.imgur.com/PPcE5Rp.png",
    "https://i.imgur.com/JMnNHHE.png",
    "https://i.imgur.com/Twbddv1.png",
    "https://i.imgur.com/QOo86Gh.png",
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
  image: "https://i.imgur.com/aFdSQj6.png",
  images: [
    "https://i.imgur.com/aFdSQj6.png",
    "https://i.imgur.com/8gXsILv.jpeg",
    "https://i.imgur.com/QL3a6SF.png",
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
  image: "https://i.imgur.com/EWdTlhS.png",
  images: [
    "https://i.imgur.com/EWdTlhS.png",
    "https://i.imgur.com/vwnurzb.png",
    "https://i.imgur.com/Kld54bU.png",
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
  image: "https://i.imgur.com/FoXMkrA.png",
  images: [
    "https://i.imgur.com/FoXMkrA.png",
    "https://i.imgur.com/bHLk1oa.png",
    "https://i.imgur.com/znK355K.png",
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
  image: "https://i.imgur.com/KhkmQRm.png",
  images: [
    "https://i.imgur.com/KhkmQRm.png",
    "https://i.imgur.com/YqDbwWf.png",
    "https://i.imgur.com/Qi9g1iD.png",
  ],
  category: "branding",
  copyright: "pawtalk.no",
  featured: true,
  type: "modal",
},

]





