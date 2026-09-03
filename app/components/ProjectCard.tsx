import type { Project } from '@/lib/data'

type ProjectCardProps = {
  project: Project
  index: number
  anchor?: boolean
  headingLevel?: 2 | 3
}

export default function ProjectCard({
  project,
  index,
  anchor = false,
  headingLevel = 3,
}: ProjectCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const [primaryGithubLink, ...relatedGithubLinks] = project.githubLinks ?? []

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

      {primaryGithubLink ? (
        <div className="pt-4 space-y-2">
          <a
            href={primaryGithubLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold sketch-nav-link"
            aria-label={`View ${project.title} on GitHub${primaryGithubLink.private ? ' (private repository)' : ''} (opens in a new tab)`}
          >
            View details ↗{primaryGithubLink.private ? ' · Private repo' : ''}
          </a>

          {relatedGithubLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs opacity-75">
              <span className="font-semibold">Related repos:</span>
              {relatedGithubLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-70"
                  aria-label={`Open ${link.label} for ${project.title} (opens in a new tab)`}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <span
          className="pt-4 inline-block text-sm font-semibold opacity-45 cursor-not-allowed"
          aria-disabled="true"
        >
          No GitHub repo
        </span>
      )}
    </article>
  )
}
