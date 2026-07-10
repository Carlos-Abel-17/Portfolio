import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Experience } from "@/types/experience"

interface ExperienceModalProps {
  experience: Experience | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExperienceModal({
  experience,
  open,
  onOpenChange,
}: ExperienceModalProps) {
  if (!experience) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Experiencia en {experience.company}
          </DialogTitle>
          <DialogDescription className="text-base">
            {experience.role}
            {experience.companySubtitle && ` · ${experience.companySubtitle}`}
            {" · "}
            {experience.period}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-foreground/90">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          {experience.images.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Galería</h4>
                <ImageCarousel images={experience.images} />
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
