"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { portfolioItems } from "@/data/portfolio-items"

export default function ProjectPage() {
  const router = useRouter()
  const params = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      // Find the project by ID
      const projectId = Number(params.id)
      const foundProject = portfolioItems.find((p) => p.id === projectId)

      if (foundProject) {
        setProject(foundProject)
      }
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{project.description}</p>
            {project.copyright && <p className="text-sm text-gray-500 mb-6">COPYRIGHT: {project.copyright}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-8 bg-gray-50">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={300}
                   height={300}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Client</h3>
                <p className="text-gray-600">Sports Brand</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Services</h3>
                <p className="text-gray-600">Brand Identity, Packaging Design, Marketing Materials</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Year</h3>
                <p className="text-gray-600">2023</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Industry</h3>
                <p className="text-gray-600">Sports & Fitness</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-gray-50 border-t">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              This comprehensive branding project for a premium sports brand focused on creating a dynamic and energetic
              visual identity that resonates with athletes and fitness enthusiasts.
            </p>
            <p className="text-gray-600">
              The design approach balanced professional aesthetics with motivational elements, resulting in a versatile
              brand system that works across various applications from packaging to digital platforms.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

