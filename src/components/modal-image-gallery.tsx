import { useEffect, useState } from "react"

import { ImageCarousel, type CarouselImage } from "@/components/ui/image-carousel"
import { Separator } from "@/components/ui/separator"

interface ModalImageGalleryProps {
  images: CarouselImage[]
}

export function ModalImageGallery({ images }: ModalImageGalleryProps) {
  const [validImages, setValidImages] = useState(images)

  useEffect(() => {
    setValidImages(images)
  }, [images])

  const handleImageError = (src: string) => {
    setValidImages((current) => current.filter((image) => image.src !== src))
  }

  if (validImages.length === 0) return null

  return (
    <>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Galería</h4>
        <ImageCarousel images={validImages} onImageError={handleImageError} />
      </div>
    </>
  )
}
