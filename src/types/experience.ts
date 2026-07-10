import type { CarouselImage } from "@/components/ui/image-carousel"

export interface Experience {
  id: string
  role: string
  company: string
  companySubtitle: string
  period: string
  summary: string
  description: string
  technologies: string[]
  images: CarouselImage[]
  animationDelay?: string
}
