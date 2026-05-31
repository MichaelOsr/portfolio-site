import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

/** Shared section shell: centered max-width container with vertical rhythm. */
export function Section({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section
      className={cn('mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24', className)}
      {...props}
    >
      {children}
    </section>
  )
}
