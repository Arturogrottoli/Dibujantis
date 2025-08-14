"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import ProjectModal from "./project-modal"
import { portfolioItems } from "@/data/portfolio-items"

export default function PortfolioSection() {
  const router = useRouter()
  const [filter, setFilter] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredItems = filter ? portfolioItems.filter((item) => item.category === filter) : portfolioItems

  // Move featured items to the beginning
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  // Modificar la función handleProjectClick para que todos los proyectos usen el modal
  const handleProjectClick = (project: any) => {
    // Open modal for all projects
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <p className="text-2xl md:text-4xl font-montserrat text-primary text-center mb-8">
          Hi! This is dibujantis! Welcome!
        </p>
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-12 text-center">Featured Works</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
              onClick={() => handleProjectClick(item)}
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
                <p className="text-center mb-4">{item.description}</p>
                {item.copyright && <p className="text-sm mt-auto">COPYRIGHT: {item.copyright}</p>}
              
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500">
          <p>© 2025 Dibujantis. All rights reserved.</p>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={
          selectedProject
            ? {
                title: selectedProject.title,
                description: selectedProject.description,
                copyright: selectedProject.copyright,
                images: selectedProject.images,
              }
            : null
        }
      />
    </section>
  )
}

