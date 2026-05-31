import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful API', 'JWT Auth', 'Role-Based Access Control'],
  },
  {
    name: 'Database & ORM',
    skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Schema Design', 'Query Optimization'],
  },
  {
    name: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'AI-Assisted Dev'],
  },
  {
    name: 'Other Languages',
    skills: ['Python', 'Java', 'PHP', 'Laravel'],
  },
]
