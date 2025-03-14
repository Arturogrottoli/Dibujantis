import Header from "@/components/header"
import PortfolioSection from "@/components/portfolio-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Confetti from "@/components/confetti"

export default function Home() {
  return (
    <>
      <Confetti />
      <Header />
      <main className="pt-36">
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

