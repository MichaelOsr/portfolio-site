import type { Project } from '@/types'

/*
  EDIT ME — replace these with your real projects. The first card is wider
  when `featured: true`. Add a screenshot in /public and set `image`.
*/
export const projects: Project[] = [
  {
    title: 'Senja Coffee House',
    description:
      'Bilingual (EN/ID) landing page for a specialty coffee shop in Blitar, East Java. ' +
      'Features dark mode, accessible UI, animated sections, a reservation form, and full SEO with JSON-LD structured data.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    image: '/projects/senja-cafe.png',
    demoUrl: 'https://senja-cafe.vercel.app/',
    featured: true,
  },
]
