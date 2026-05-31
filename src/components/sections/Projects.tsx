import { motion } from 'framer-motion'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectCard } from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'
import { scaleIn, stagger } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <Section id="projects" className="bg-card/40 max-w-none">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="02"
          title="Projects"
          description="A selection of things I've built. Each one taught me something new."
        />

        <motion.ul
          className="mt-10 grid gap-6 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.li
              key={project.title}
              className={cn(project.featured && 'sm:col-span-2')}
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            >
              <ProjectCard project={project} className="h-full" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
