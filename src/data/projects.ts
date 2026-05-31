import type { Project } from '@/types'

/*
  EDIT ME — replace these with your real projects. The first card is wider
  when `featured: true`. Add a screenshot in /public and set `image`.
*/
export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short, punchy description of what this project does and the problem it solves. ' +
      'Mention your role and the impact.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/projects/project-one.svg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-one',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'Describe the second project. Keep it to one or two sentences so the cards stay tidy.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: '/projects/project-two.svg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description: 'Another project that shows a different skill or domain.',
    tech: ['Vue', 'Vitest', 'Node.js'],
    image: '/projects/project-three.svg',
    repoUrl: 'https://github.com/yourusername/project-three',
  },
]
