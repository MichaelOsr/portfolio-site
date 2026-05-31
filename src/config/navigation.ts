/** Single source of truth for the in-page sections and their nav links. */
export interface NavItem {
  /** Matches the section element's `id` and the anchor href (`#id`). */
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

/** Stable list of section ids for scroll-spy (see useActiveSection). */
export const sectionIds: readonly string[] = navItems.map((item) => item.id)
