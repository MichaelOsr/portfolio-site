import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/common/SocialLinks'
import { profile } from '@/data/profile'
import { fadeUp, heroContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const stats = [
  { value: '3+',  label: 'Years Experience' },
  { value: '10+', label: 'Projects Built'   },
  { value: '15+', label: 'Technologies'     },
]

function CodeCard() {
  return (
    <div className="bg-card border-border w-full max-w-md rounded-xl border shadow-2xl">
      {/* Window chrome */}
      <div className="border-border flex items-center gap-2 border-b px-4 py-3">
        <span className="size-3 rounded-full bg-red-500/70" />
        <span className="size-3 rounded-full bg-yellow-500/70" />
        <span className="size-3 rounded-full bg-green-500/70" />
        <span className="text-muted-foreground ml-3 font-mono text-xs">portfolio.ts</span>
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
        <code>
          <span className="text-muted-foreground">{'// About me\n'}</span>
          <span className="text-primary">{'const '}</span>
          <span className="text-foreground">{'developer'}</span>
          <span className="text-muted-foreground">{' = '}</span>
          <span className="text-foreground">{'{\n'}</span>
          <span className="text-foreground">{'  name'}</span>
          <span className="text-muted-foreground">{': '}</span>
          <span className="text-primary/80">{'"Michael Octavian"'}</span>
          <span className="text-foreground">{',\n'}</span>
          <span className="text-foreground">{'  role'}</span>
          <span className="text-muted-foreground">{': '}</span>
          <span className="text-primary/80">{'"Full Stack Developer"'}</span>
          <span className="text-foreground">{',\n'}</span>
          <span className="text-foreground">{'  stack'}</span>
          <span className="text-muted-foreground">{': '}</span>
          <span className="text-foreground">{'['}</span>
          <span className="text-primary/80">{'"React"'}</span>
          <span className="text-foreground">{', '}</span>
          <span className="text-primary/80">{'"Node.js"'}</span>
          <span className="text-foreground">{',\n'}</span>
          <span className="text-foreground">{'           '}</span>
          <span className="text-primary/80">{'"PostgreSQL"'}</span>
          <span className="text-foreground">{', '}</span>
          <span className="text-primary/80">{'"TypeScript"'}</span>
          <span className="text-foreground">{'],\n'}</span>
          <span className="text-foreground">{'  available'}</span>
          <span className="text-muted-foreground">{': '}</span>
          <span className="text-primary">{'true'}</span>
          <span className="text-foreground">{',\n'}</span>
          <span className="text-foreground">{'}'}</span>
        </code>
      </pre>

      {/* Status bar */}
      <div className="border-border bg-secondary/40 flex items-center gap-2 rounded-b-xl border-t px-4 py-2">
        <span className="size-2 animate-pulse rounded-full bg-green-400" />
        <span className="text-muted-foreground text-xs">Open to new opportunities</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-5xl grid-cols-1 items-center gap-8 px-4 py-20 sm:px-6 md:grid-cols-2"
    >
      {/* Animated background glow */}
      <motion.div
        aria-hidden="true"
        className="bg-primary/8 pointer-events-none absolute -top-32 -left-16 -z-10 size-120 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* ── Left column — staggered entrance ── */}
      <motion.div variants={heroContainer} initial="hidden" animate="visible">
        <motion.span
          variants={fadeUp}
          className="text-primary mb-6 block text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Full Stack Web Developer
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2.75rem,13vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
        >
          Michael
          <br />
          <span className="text-primary">Octavian.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground mt-7 max-w-md text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              View my work
              <ArrowDown aria-hidden="true" />
            </a>
          </Button>
          {profile.resumeUrl && (
            <Button asChild size="lg" variant="outline">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText aria-hidden="true" />
                Download CV
              </a>
            </Button>
          )}
          <SocialLinks links={profile.socials} className="ml-2" />
        </motion.div>

        {/* Stats — grid keeps columns within the viewport at any width. */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-3 border-t pt-8 sm:mt-16 sm:pt-10"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={cn('px-3 sm:px-5', i === 0 ? 'pl-0' : 'border-l')}
            >
              <p className="text-2xl font-bold tabular-nums sm:text-4xl">{value}</p>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right column — floating CodeCard ── */}
      <motion.div
        className="hidden items-center justify-center md:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <CodeCard />
        </motion.div>
      </motion.div>
    </section>
  )
}
