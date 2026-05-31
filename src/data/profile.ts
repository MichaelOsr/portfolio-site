import { Mail } from 'lucide-react'

import { GitHubIcon } from '@/components/icons/brand'
import type { Profile } from '@/types'

/*
  ┌──────────────────────────────────────────────────────────────────┐
  │  EDIT ME — this is your personal info. Everything here is a        │
  │  placeholder. Replace with your real details.                     │
  └──────────────────────────────────────────────────────────────────┘
*/
export const profile: Profile = {
  name: 'Michael Octavian Satria Raharja',
  role: 'Full Stack Web Developer',
  tagline:
    'Informatics graduate (Cum Laude) turned full-stack developer — I build everything from database schema to pixel-perfect UI, and I leverage AI tools to ship quality code faster.',
  location: 'Blitar, East Java, Indonesia',
  email: 'michaeloctaviansr@gmail.com',
  bio: [
    "I'm a full-stack web developer with a Bachelor's in Informatics (GPA 3.92, Cum Laude) from Universitas Sanata Dharma and currently completing an intensive full-stack bootcamp at Purwadhika Digital Technology. " +
      'I build end-to-end applications with React, Node.js, Express, PostgreSQL, and Prisma ORM — from designing relational schemas to shipping responsive UIs.',
    'I actively leverage AI-assisted development (Claude, GitHub Copilot) to accelerate delivery without compromising code quality. ' +
      "I've also spent 2+ years teaching programming — from Python fundamentals to game logic — which has sharpened my technical communication and my ability to break down complex problems.",
    'I thrive in collaborative engineering environments and am looking for opportunities as a Junior Web Developer, open to remote, hybrid, or on-site roles.',
  ],
  // Put a file at public/resume.pdf and uncomment to show a "Download CV" button.
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/MichaelOsr', icon: GitHubIcon },
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=michaeloctaviansr@gmail.com', icon: Mail },
  ],
}
