import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ProjectCard } from '@/components/common/ProjectCard'
import type { Project } from '@/types'

const sampleProject: Project = {
  title: 'Test Project',
  description: 'A project used in tests.',
  tech: ['React', 'TypeScript'],
  image: '/projects/test.svg',
  demoUrl: 'https://demo.example.com',
  repoUrl: 'https://github.com/example/repo',
}

describe('ProjectCard', () => {
  it('renders the project title, description and tech badges', () => {
    render(<ProjectCard project={sampleProject} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A project used in tests.')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('links to the demo and repo, opening them safely in a new tab', () => {
    render(<ProjectCard project={sampleProject} />)

    const demo = screen.getByRole('link', { name: /live demo/i })
    expect(demo).toHaveAttribute('href', 'https://demo.example.com')
    expect(demo).toHaveAttribute('rel', 'noopener noreferrer')

    const repo = screen.getByRole('link', { name: /code/i })
    expect(repo).toHaveAttribute('href', 'https://github.com/example/repo')
  })

  it('omits the demo button when no demo url is provided', () => {
    render(<ProjectCard project={{ ...sampleProject, demoUrl: undefined }} />)
    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument()
  })
})
