import type { CarouselImage } from "@/components/ui/image-carousel"

export interface Project {
  id: string
  title: string
  period: string
  summary: string
  description: string
  technologies: string[]
  url?: string
  images: CarouselImage[]
  animationDelay?: string
}
