import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/4">
          <Image
            src="https://i.postimg.cc/BZdSpjhs/perfil.png"
            alt="Designer Profile"
            width={400}
            height={600}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            Hello, I'm Antonela Carpena (dibujantis™)
I'm an Argentinian illustrator and graphic designer with over 20 years of experience collaborating with clients from around the world.
          </p>
          <p className="text-lg text-gray-600 mb-8">
           I studied Graphic Design at the University of Buenos Aires. Throughout my career, I’ve taken part in various courses and workshops to continue developing my skills and stay current in the field. I also taught illustration for several years.
          </p>
          <p className="text-lg text-gray-600 mb-8">
           My work includes logo design, patterns, icon sets, advertising and communication pieces, illustration for various purposes and editorial design. I focus on creating visual solutions that are impactful and unique.
          </p>
          <p className="text-lg text-gray-600 mb-8">
         My style is dynamic, with bold colors and strong lines. I offer personalized design packages and adapt my approach to suit each brand’s identity and goals. </p>
          <p className="text-lg text-gray-600 mb-8">
        Contact me, let’s work together! I'd love to help bring your ideas to life.  </p>
        </div>
      </div>
    </section>
  )
}
