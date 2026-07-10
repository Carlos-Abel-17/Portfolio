import { useState } from "react"
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CarouselImage {
  src: string
  alt: string
  caption: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  className?: string
}

function CarouselSlide({ image }: { image: CarouselImage }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-56 sm:h-64 w-full flex-col items-center justify-center gap-2 bg-muted text-muted-foreground">
        <ImageOff className="size-8 opacity-50" />
        <span className="text-sm">Imagen no disponible</span>
      </div>
    )
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      className="h-56 sm:h-64 w-full object-cover"
      onError={() => setHasError(true)}
    />
  )
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) return null

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const currentImage = images[currentIndex]

  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative overflow-hidden rounded-lg border bg-muted/30">
        <CarouselSlide key={currentIndex} image={currentImage} />

        {images.length > 1 && (
          <>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full opacity-90 shadow-md"
              onClick={goToPrevious}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full opacity-90 shadow-md"
              onClick={goToNext}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="size-4" />
            </Button>
          </>
        )}
      </div>

      <p className="text-sm text-muted-foreground text-center min-h-[2.5rem] px-2">
        {currentImage.caption}
      </p>

      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "size-2 rounded-full transition-colors",
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Ir a imagen ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  )
}
