import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SocialLinks } from '@/components/common/SocialLinks'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { fadeUp, stagger } from '@/lib/animations'

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="05"
        title="Get in touch"
        description="I'm open to new opportunities and collaborations. Feel free to reach out — I'll get back to you."
      />

      <motion.div
        className="mt-8 flex flex-col items-center gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={fadeUp} whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}>
          <Button asChild size="lg">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail aria-hidden="true" />
              {profile.email}
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp}>
          <SocialLinks links={profile.socials} />
        </motion.div>
      </motion.div>
    </Section>
  )
}
