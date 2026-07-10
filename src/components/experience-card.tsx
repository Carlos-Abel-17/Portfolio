import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
  onClick: () => void
}

export function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onClick()
        }
      }}
      className={cn(
        "scroll-animate cursor-pointer transition-all duration-300",
        "hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        experience.animationDelay
      )}
      aria-label={`Ver detalles de experiencia en ${experience.company}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{experience.role}</CardTitle>
            <CardDescription className="text-lg">
              {experience.company}
              {experience.companySubtitle && ` - ${experience.companySubtitle}`}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{experience.summary}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-primary/70 mt-4">Clic para ver más detalles →</p>
      </CardContent>
    </Card>
  )
}
