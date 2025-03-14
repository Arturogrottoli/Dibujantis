import Image from "next/image"

type PortfolioItem = {
  id: number
  title: string
  description: string
  image: string
  category: "illustration" | "branding" | "digital"
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Fantasy Character Design",
    description: "Digital illustration for gaming concept art",
    image: "https://public.readdy.ai/ai/img_res/9767356549fd3483ca792756e6cc3e7f.jpg",
    category: "illustration",
  },
  {
    id: 2,
    title: "Eco Brand Identity",
    description: "Complete branding package for sustainable products",
    image: "https://public.readdy.ai/ai/img_res/297bec4fcecd22c42ef26ea99d8c0dab.jpg",
    category: "branding",
  },
  {
    id: 3,
    title: "Abstract Dimensions",
    description: "Digital art exploration series",
    image: "https://public.readdy.ai/ai/img_res/4c16dc52a8136a8360e099cc7a5ae54b.jpg",
    category: "digital",
  },
  {
    id: 4,
    title: "Children's Book Series",
    description: 'Illustrations for "The Enchanted Forest Tales"',
    image: "https://public.readdy.ai/ai/img_res/8c115793840682abe6c041319e84c835.jpg",
    category: "illustration",
  },
  {
    id: 5,
    title: "Luxury Beauty Brand",
    description: "Complete packaging and identity design",
    image: "https://public.readdy.ai/ai/img_res/703e3a22242458fabf4ef23190b6ecf4.jpg",
    category: "branding",
  },
  {
    id: 6,
    title: "Neo Tokyo 2025",
    description: "Concept art for sci-fi project",
    image: "https://public.readdy.ai/ai/img_res/3ea10c6fd17fb5148f2ec6c029ac2a00.jpg",
    category: "digital",
  },
  {
    id: 7,
    title: "Botanical Studies",
    description: "Scientific illustration series",
    image: "https://public.readdy.ai/ai/img_res/707994daa1dd85e2f87ede6f50150fa4.jpg",
    category: "illustration",
  },
  {
    id: 8,
    title: "Artisan Coffee Co.",
    description: "Vintage-inspired brand identity",
    image: "https://public.readdy.ai/ai/img_res/f4a0a8d0977b825640bc39569fc13f05.jpg",
    category: "branding",
  },
  {
    id: 9,
    title: "Geometric Dreams",
    description: "3D art exploration",
    image: "https://public.readdy.ai/ai/img_res/07b798dcdc35ecb5dd9b6d1cd340db20.jpg",
    category: "digital",
  },
  {
    id: 10,
    title: "Mythical Beasts",
    description: "Japanese-inspired illustration series",
    image: "https://public.readdy.ai/ai/img_res/5dddda2fbcce1495c2354c7927ea34b3.jpg",
    category: "illustration",
  },
  {
    id: 11,
    title: "TechFlow Solutions",
    description: "Tech startup brand identity",
    image: "https://public.readdy.ai/ai/img_res/bcd65baac9b42cbe435cf4fb561fff51.jpg",
    category: "branding",
  },
  {
    id: 12,
    title: "Dreamscapes",
    description: "Surreal digital art collection",
    image: "https://public.readdy.ai/ai/img_res/b58299489f128b8a318bd7f73a9a913e.jpg",
    category: "digital",
  },
  {
    id: 13,
    title: "Wanderlust Series",
    description: "Retro travel poster collection",
    image: "https://public.readdy.ai/ai/img_res/5da6a0629b00cfb7f4ba8c35594bd9df.jpg",
    category: "illustration",
  },
  {
    id: 14,
    title: "Nature's Harvest",
    description: "Organic food brand identity",
    image: "https://public.readdy.ai/ai/img_res/2e0f68146fcbbdf3eb8b0055ffe2ccc7.jpg",
    category: "branding",
  },
  {
    id: 15,
    title: "Algorithm Art",
    description: "Generative digital artwork",
    image: "https://public.readdy.ai/ai/img_res/6bc1393aa9f95d63d6b516b7c0ee492f.jpg",
    category: "digital",
  },
  {
    id: 16,
    title: "Fashion Forward",
    description: "Editorial fashion illustrations",
    image: "https://public.readdy.ai/ai/img_res/2b217a63a6b32a9fd0846f8d68fb1c59.jpg",
    category: "illustration",
  },
  {
    id: 17,
    title: "SoundWave Festival",
    description: "Music event branding",
    image: "https://public.readdy.ai/ai/img_res/cc88b922a4b891097ee709b162d63060.jpg",
    category: "branding",
  },
  {
    id: 18,
    title: "Guardian Chronicles",
    description: "Game character design",
    image: "https://public.readdy.ai/ai/img_res/a62ee06353454d80d19d8088ce0ce1a9.jpg",
    category: "digital",
  },
  {
    id: 19,
    title: "Urban Sketches",
    description: "Architectural illustration series",
    image: "https://public.readdy.ai/ai/img_res/6bd831ff5892f0628deadebb694103fd.jpg",
    category: "illustration",
  },
  {
    id: 20,
    title: "Serenity Spa",
    description: "Wellness brand identity",
    image: "https://public.readdy.ai/ai/img_res/617ea946fe776a96f8d4cc37c304d506.jpg",
    category: "branding",
  },
  {
    id: 21,
    title: "Kinetic Type",
    description: "Motion graphics project",
    image: "https://public.readdy.ai/ai/img_res/0f6e16645904f4cd44e0d57314caef81.jpg",
    category: "digital",
  },
  {
    id: 22,
    title: "Geometric Minimalism",
    description: "Vector art series",
    image: "https://public.readdy.ai/ai/img_res/b969e784264867e2bc1c55356d3f1934.jpg",
    category: "illustration",
  },
  {
    id: 23,
    title: "Vintage Vineyard",
    description: "Wine label design",
    image: "https://public.readdy.ai/ai/img_res/3193e35cef9e95e03bbed1341d9508af.jpg",
    category: "branding",
  },
  {
    id: 24,
    title: "Future City",
    description: "Isometric illustration",
    image: "https://public.readdy.ai/ai/img_res/5a22daf1c23b74c98e39bd1f5f9834ce.jpg",
    category: "digital",
  },
  {
    id: 25,
    title: "Fantasy Maps",
    description: "Illustrated cartography",
    image: "https://public.readdy.ai/ai/img_res/cb73cdd8e00c3fe0d198eaf339c8b7fb.jpg",
    category: "illustration",
  },
  {
    id: 26,
    title: "Peak Performance",
    description: "Sports brand identity",
    image: "https://public.readdy.ai/ai/img_res/eef8066ffaebf4dfd8d877e2c7c2a7b9.jpg",
    category: "branding",
  },
  {
    id: 27,
    title: "Liquid Metal",
    description: "Digital art exploration",
    image: "https://public.readdy.ai/ai/img_res/1362d1a01445abb3702e012f5134c6df.jpg",
    category: "digital",
  },
  {
    id: 28,
    title: "Culinary Arts",
    description: "Food illustration series",
    image: "https://public.readdy.ai/ai/img_res/fd85eae18ccce52f419c539ba68b2ef0.jpg",
    category: "illustration",
  },
  {
    id: 29,
    title: "Paw Perfect",
    description: "Pet care branding",
    image: "https://public.readdy.ai/ai/img_res/10ee2b904fd8629026c4b3d1d06116a5.jpg",
    category: "branding",
  },
  {
    id: 30,
    title: "Alien Worlds",
    description: "Sci-fi concept art",
    image: "https://public.readdy.ai/ai/img_res/da537c1a6e2a7f0186318b69c1d74b68.jpg",
    category: "digital",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <p className="text-2xl md:text-4xl font-montserrat text-primary text-center mb-8">
          Hi! This is dibujantis! Welcome!
        </p>
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-12 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`portfolio-item ${item.category} relative overflow-hidden rounded-lg shadow-lg aspect-square`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Project ${item.id}`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay absolute inset-0 bg-primary/80 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

