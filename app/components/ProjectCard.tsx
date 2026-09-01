import Link from 'next/link'
import type { Project } from '@/lib/data'

type ProjectCardProps = {
  project: Project
  index: number
  detailsHref?: string
  anchor?: boolean
  headingLevel?: 2 | 3
}

export default function ProjectCard({
  project,
  index,
  detailsHref,
  anchor = false,
  headingLevel = 3,
}: ProjectCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <article
      id={anchor ? project.slug : undefined}
      className="scroll-mt-32 drawing-border p-6 flex h-full flex-col transform hover:scale-105 transition-transform animate-fade-delay-2"
      style={{ transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}
    >
      <div className="flex justify-between items-start gap-3 mb-3">
        <Heading className="text-2xl font-bold sketch-underline">{project.title}</Heading>
        <span className="shrink-0 text-[10px] px-2 py-0.5 drawing-border font-bold text-center">
          {project.period}
        </span>
      </div>

      <p className="mb-2 text-sm font-semibold hand-drawn">{project.role}</p>
      <p className="mb-4 opacity-80">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 drawing-border">{tag}</span>
        ))}
      </div>

      {detailsHref && (
        <Link href={detailsHref} className="pt-4 inline-block text-sm font-semibold sketch-nav-link">
          View details →
        </Link>
      )}
    </article>
  )
}
