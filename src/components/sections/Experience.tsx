import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { experience } from '@/data/experience'
import { slideLeft, stagger } from '@/lib/animations'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="04" title="Experience" />

      <motion.ol
        className="mx-auto mt-10 max-w-2xl space-y-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {experience.map((item) => {
          const Icon = item.type === 'education' ? GraduationCap : Briefcase
          return (
            <motion.li
              key={`${item.role}-${item.organization}`}
              variants={slideLeft}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <motion.span
                  className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </motion.span>
                <span className="bg-border mt-2 w-px flex-1" aria-hidden="true" />
              </div>

              <div className="pb-2">
                <p className="text-muted-foreground text-sm">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
                <p className="text-primary text-sm font-medium">{item.organization}</p>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            </motion.li>
          )
        })}
      </motion.ol>
    </Section>
  )
}
