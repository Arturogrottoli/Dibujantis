"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    copyright?: string
    images: string[]
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  // Reset current image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
    setImageError(false)
    setImageLoading(true)
    console.log("Modal opened with project:", project?.title)
    console.log("Images array:", project?.images)
  }, [project])

  // Preload next and previous images
  useEffect(() => {
    if (!project || !isOpen) return

    const imagesToPreload = [
      project.images[(currentImageIndex + 1) % project.images.length],
      project.images[(currentImageIndex - 1 + project.images.length) % project.images.length],
    ]

    imagesToPreload.forEach((src) => {
      if (src) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      }
    })
  }, [currentImageIndex, project, isOpen])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  const nextImage = () => {
    handleImageChange((currentImageIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    handleImageChange((currentImageIndex - 1 + project.images.length) % project.images.length)
  }

  const handleImageError = () => {
    console.error("Image failed to load:", project.images[currentImageIndex])
    setImageError(true)
  }

  const handleImageLoad = () => {
    console.log("Image loaded successfully:", project.images[currentImageIndex])
    setImageError(false)
    setImageLoading(false)
  }

  const handleImageChange = (newIndex: number) => {
    setImageLoading(true)
    setCurrentImageIndex(newIndex)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl p-4 md:p-6 mx-4 bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
          {project.copyright && <p className="text-sm text-gray-500 mt-1">COPYRIGHT: {project.copyright}</p>}
          
        </div>

        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={project.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className={`object-contain transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority={currentImageIndex === 0}
            loading={currentImageIndex === 0 ? "eager" : "lazy"}
          />

          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Error loading image</p>
            </div>
          )}

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {project.images.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentImageIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

