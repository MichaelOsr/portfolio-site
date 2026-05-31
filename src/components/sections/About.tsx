import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { profile } from '@/data/profile'
import { fadeUp, stagger } from '@/lib/animations'

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01" title="About me" />

      <motion.div
        className="mx-auto mt-10 max-w-2xl space-y-4 text-lg leading-relaxed"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {profile.bio.map((paragraph, index) => (
          <motion.p key={index} variants={fadeUp} className="text-muted-foreground">
            {paragraph}
          </motion.p>
        ))}

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground flex items-center gap-2 pt-2"
        >
          <MapPin className="text-primary size-5" aria-hidden="true" />
          {profile.location}
        </motion.p>
      </motion.div>
    </Section>
  )
}
