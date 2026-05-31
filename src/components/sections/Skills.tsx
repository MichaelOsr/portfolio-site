import { motion } from 'framer-motion'
import { Code2, Database, Server } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { skillCategories } from '@/data/skills'
import { fadeUp, stagger } from '@/lib/animations'

const serviceCards = [
  { icon: Code2,    title: 'Frontend',         categoryName: 'Frontend'       },
  { icon: Server,   title: 'Backend',          categoryName: 'Backend'        },
  { icon: Database, title: 'Database & Tools', categoryName: 'Database & ORM' },
]

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="03"
        title="Skills & tools"
        description="Technologies I work with day to day."
      />

      <div className="mx-auto mt-10 max-w-4xl">
        {/* Main service cards */}
        <motion.div
          className="grid gap-5 sm:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {serviceCards.map(({ icon: Icon, title, categoryName }) => {
            const category = skillCategories.find((c) => c.name === categoryName)
            return (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group bg-card border-border hover:border-primary/50 hover:bg-primary/5 rounded-xl border p-6 transition-colors duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              >
                <Icon
                  className="text-primary mb-4 size-8 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mb-4 text-lg font-bold">{title}</h3>
                {category && (
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Badge
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground border-0"
                        >
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Remaining skill categories */}
        <motion.div
          className="mt-6 grid gap-4 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skillCategories
            .filter((c) => !serviceCards.some((s) => s.categoryName === c.name))
            .map((category) => (
              <motion.div
                key={category.name}
                variants={fadeUp}
                className="group bg-card border-border hover:border-primary/50 hover:bg-primary/5 rounded-xl border p-5 transition-colors duration-300"
                whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
              >
                <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                  {category.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="outline" className="text-sm font-normal">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </Section>
  )
}
