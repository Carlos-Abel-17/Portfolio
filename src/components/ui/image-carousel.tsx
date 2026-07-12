import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  onImageError?: (src: string) => void
}

function CarouselSlide({
  image,
  onImageError,
}: {
  image: CarouselImage
  onImageError?: (src: string) => void
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) return null

  return (
    <img
      src={image.src}
      alt={image.alt}
      className="h-56 sm:h-64 w-full object-contain bg-muted"
      onError={() => {
        setHasError(true)
        onImageError?.(image.src)
      }}
    />
  )
}

export function ImageCarousel({ images, className, onImageError }: ImageCarouselProps) {
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
      <div className="relative overflow-hidden rounded-lg border border-border bg-muted">
        <CarouselSlide
          key={currentIndex}
          image={currentImage}
          onImageError={onImageError}
        />

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

      <p
        className={cn(
          "text-sm text-muted-foreground text-center px-2",
          currentImage.caption ? "min-h-[2.5rem]" : "hidden"
        )}
      >
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
