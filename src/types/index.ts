import type { ComponentType, SVGProps } from 'react'

/** Any SVG icon component (lucide icons and our brand icons both satisfy this). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

/** A link to a social profile or contact channel, shown as an icon button. */
export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
}

/** Top-of-page identity and contact details. */
export interface Profile {
  name: string
  role: string
  /** Short one-liner shown under the name in the hero. */
  tagline: string
  location: string
  email: string
  /** About-section paragraphs. Each string is rendered as its own <p>. */
  bio: string[]
  /** Optional resume/CV file placed in /public (e.g. "/resume.pdf"). */
  resumeUrl?: string
  socials: SocialLink[]
}

/** A portfolio project card. */
export interface Project {
  title: string
  description: string
  /** Tech/tools used, rendered as badges. */
  tech: string[]
  /** Screenshot in /public. Provide width/height-friendly 16:9 images. */
  image?: string
  demoUrl?: string
  repoUrl?: string
  /** Featured projects render with a highlighted style. */
  featured?: boolean
}

/** A named group of skills (e.g. "Frontend", "Tooling"). */
export interface SkillCategory {
  name: string
  skills: string[]
}

/** A work or education entry on the timeline. */
export interface ExperienceItem {
  role: string
  organization: string
  /** Human-readable range, e.g. "2023 — Present". */
  period: string
  description: string
  type: 'work' | 'education'
}
