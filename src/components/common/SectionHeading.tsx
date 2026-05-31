import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { fadeUp, stagger } from '@/lib/animations'

interface SectionHeadingProps {
  /** Small label above the title, e.g. "01" or "Work". */
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn('mx-auto max-w-2xl text-center', className)}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-muted-foreground mt-4 text-base">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
