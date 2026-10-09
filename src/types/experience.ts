import type { CarouselImage } from "@/components/ui/image-carousel"

export interface ExperienceCountry {
  flag: string
  name: string
}

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
  countries?: ExperienceCountry[]
  animationDelay?: string
}
