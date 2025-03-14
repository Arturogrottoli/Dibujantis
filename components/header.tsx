"use client"

import type React from "react"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 ${isScrolled ? "shadow-sm" : ""}`}>
      <nav className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image
            src="https://public.readdy.ai/ai/img_res/81f57fde67c17b086f42bc9d204bbe28.jpg"
            alt="Logo"
            width={128}
            height={128}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          />
        </div>
        <div className="flex gap-4 md:gap-8">
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, "portfolio")}
            className="text-xl md:text-2xl hover:text-primary transition-colors cursor-pointer"
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-xl md:text-2xl hover:text-primary transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-xl md:text-2xl hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

