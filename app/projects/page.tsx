import { projects } from '@/lib/data'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 font-semibold">Selected work</p>
          <h1 className="text-5xl md:text-6xl font-black gradient-text mb-2">Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300">
            A curated collection of builds spanning design systems, dashboards, and creative web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="glass-card p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-gray-800 dark:text-gray-200 border border-purple-500/20">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm font-semibold hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-sm font-semibold hover:scale-105 transition-all duration-300 border border-purple-500/30"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-glow">
            Let&apos;s build together
          </Link>
        </div>
      </div>
    </main>
  )
}
