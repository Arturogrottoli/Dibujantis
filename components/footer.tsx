"use client"

import type React from "react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-white py-8 px-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-lg text-gray-600">&copy; 2025 Dibujantis. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, "portfolio")}
            className="text-lg text-gray-600 hover:text-primary transition-colors cursor-pointer"
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-lg text-gray-600 hover:text-primary transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-lg text-gray-600 hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <i className="ri-arrow-up-line text-primary"></i>
        </button>
      </div>
    </footer>
  )
}

