import { ExternalLink } from 'lucide-react'

import { GitHubIcon } from '@/components/icons/brand'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, tech, image, demoUrl, repoUrl } = project

  return (
    <Card
      className={cn(
        'overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10',
        className,
      )}
    >
      {image && (
        <div className="bg-muted aspect-video w-full overflow-hidden border-b">
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item}>
              <Badge variant="secondary">{item}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="gap-2">
        {demoUrl && (
          <Button asChild size="sm">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" />
              Live demo
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button asChild size="sm" variant="outline">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
