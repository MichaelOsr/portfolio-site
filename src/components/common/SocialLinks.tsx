import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { SocialLink } from '@/types'

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

/** Row of icon buttons linking to social/contact profiles. */
export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {links.map(({ label, href, icon: Icon }) => {
        const isExternal = href.startsWith('http')
        return (
          <li key={label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={href}
                    aria-label={label}
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </li>
        )
      })}
    </ul>
  )
}
