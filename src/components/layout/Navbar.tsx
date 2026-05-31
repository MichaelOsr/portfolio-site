import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navItems, sectionIds } from '@/config/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const navListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
}

export function Navbar() {
  const activeId = useActiveSection(sectionIds)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault()
      setMobileOpen(false)

      const el = document.getElementById(id)
      if (!el) return

      let frames = 0
      const scrollWhenUnlocked = () => {
        if (document.body.hasAttribute('data-scroll-locked') && frames++ < 60) {
          requestAnimationFrame(scrollWhenUnlocked)
          return
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', `#${id}`)
      }
      requestAnimationFrame(scrollWhenUnlocked)
    },
    [],
  )

  return (
    <motion.header
      className="bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur-sm"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <motion.a
          href="#top"
          className="text-primary rounded-sm text-lg font-bold tracking-tight"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
        </motion.a>

        {/* Desktop links */}
        <motion.ul
          className="hidden items-center gap-1 md:flex"
          variants={navListVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map(({ id, label }) => (
            <motion.li key={id} variants={navItemVariants}>
              <a
                href={`#${id}`}
                aria-current={activeId === id ? 'true' : undefined}
                className={cn(
                  'hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  activeId === id ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader>
              <SheetTitle className="text-primary">{profile.name}</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-2">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleMobileNavClick(e, id)}
                    aria-current={activeId === id ? 'true' : undefined}
                    className={cn(
                      'hover:bg-accent block rounded-md px-3 py-2 text-base font-medium transition-colors',
                      activeId === id ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
