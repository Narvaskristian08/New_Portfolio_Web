'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <section id="projects" className="anchor-offset py-20 px-4 section-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center sketch-underline hand-drawn animate-fade-delay-1">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/projects" className="sketch-button">See all projects</Link>
        </div>
      </div>
    </section>
  )
}
