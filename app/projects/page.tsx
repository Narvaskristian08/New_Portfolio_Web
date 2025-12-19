import { projects } from '@/lib/data'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-4 paper-texture">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-sm uppercase tracking-[0.2em] hand-drawn">Selected work</p>
          <h1 className="text-5xl md:text-6xl font-black hand-drawn sketch-underline">Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-80">
            A curated collection of builds spanning design systems, dashboards, and creative web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="drawing-border p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              style={{ transform: `rotate(${idx % 2 === 0 ? '-0.4deg' : '0.4deg'})` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-bold sketch-underline">{project.title}</h2>
                <span className="text-xs px-3 py-1 drawing-border">Case study</span>
              </div>
              <p className="opacity-80 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 drawing-border">{tag}</span>
                ))}
              </div>
              {project.href && (
                <Link href={project.href} className="sketch-nav-link text-sm font-semibold">
                  View project →
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/#contact" className="sketch-button">Let&apos;s build together</Link>
        </div>
      </div>
    </main>
  )
}


