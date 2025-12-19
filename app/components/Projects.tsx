'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'

export default function Projects() {
  // Only take the first 3 projects from your data
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="anchor-offset py-20 px-4 section-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center sketch-underline hand-drawn animate-fade-delay-1">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx} // Using index as key since titles are now placeholders
              className="drawing-border p-6 transform hover:scale-105 transition-transform animate-fade-delay-2"
              style={{ transform: `rotate(${idx % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}
            >
              <div className="flex justify-between items-start mb-3">
                {/* Title updated to Placeholder */}
                <h3 className="text-2xl font-bold sketch-underline">
                  Placeholder {idx + 1}
                </h3>
                {/* WIP Badge added */}
                <span className="text-[10px] px-2 py-0.5 drawing-border font-bold bg-yellow-50">
                  WIP
                </span>
              </div>

              <p className="mb-4 opacity-80">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 drawing-border">{tag}</span>
                ))}
              </div>
              
              {project.href && (
                <Link href={project.href} className="mt-4 inline-block text-sm font-semibold sketch-nav-link">
                  View details →
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/projects" className="sketch-button">See all projects</Link>
        </div>
      </div>
    </section>
  )
}