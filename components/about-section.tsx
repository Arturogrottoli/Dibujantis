import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/4">
          <Image
            src="https://public.readdy.ai/ai/img_res/9504bc7a9085e3bd864a7dd577f5f0d0.jpg"
            alt="Designer Profile"
            width={400}
            height={600}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            With over 8 years of experience in digital design and illustration, I've had the privilege of working with
            clients across various industries, from tech startups to established publishing houses.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            My approach combines traditional artistic techniques with modern digital tools, creating unique visual
            experiences that tell compelling stories and engage audiences.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            I specialize in creating immersive visual experiences that bridge the gap between traditional artistry and
            digital innovation. My work spans across various mediums - from detailed digital illustrations and brand
            identity design to UI/UX solutions and art direction. I believe in the power of visual storytelling to
            create meaningful connections and leave lasting impressions. Whether working on intricate character designs,
            developing comprehensive brand identities, or crafting user-centered digital experiences, I bring a
            thoughtful and strategic approach to every project.
          </p>
          <div className="flex gap-4">
            <Image
              src="https://public.readdy.ai/ai/img_res/7ff94de41ba776b3d0aea8f0276f1a77.jpg"
              alt="Software Skills"
              width={200}
              height={48}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

