import Link from 'next/link'
import ProjectCard from '@/app/components/ProjectCard'
import { projects } from '@/lib/data'

const PROJECTS_PER_PAGE = 9

type ProjectsPageProps = {
  searchParams?: {
    page?: string | string[]
  }
}

function getPageNumber(page: string | string[] | undefined, totalPages: number) {
  const pageValue = Array.isArray(page) ? page[0] : page
  const parsedPage = pageValue && /^\d+$/.test(pageValue) ? Number(pageValue) : 1
  const safePage = Number.isSafeInteger(parsedPage) ? parsedPage : 1

  return Math.min(Math.max(safePage, 1), totalPages)
}

function getPageHref(page: number) {
  return page === 1 ? '/projects' : `/projects?page=${page}`
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const totalPages = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE))
  const currentPage = getPageNumber(searchParams?.page, totalPages)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const visibleProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 paper-texture">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-sm uppercase tracking-[0.2em] hand-drawn">Selected work</p>
          <h1 className="text-5xl md:text-6xl font-black hand-drawn sketch-underline">Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-80">
            Full-stack, mobile, AI, blockchain, and game builds shaped around practical problems,
            local-first systems, and interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={startIndex + index}
              anchor
              headingLevel={2}
            />
          ))}
        </div>

        <nav
          aria-label="Projects pagination"
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {currentPage > 1 ? (
            <Link href={getPageHref(currentPage - 1)} className="sketch-button">
              Previous
            </Link>
          ) : (
            <span className="sketch-button cursor-not-allowed opacity-40" aria-disabled="true">
              Previous
            </span>
          )}

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Link
              key={page}
              href={getPageHref(page)}
              className={`sketch-button min-w-12 text-center ${
                page === currentPage
                  ? '!bg-black !text-white dark:!bg-white dark:!text-black'
                  : ''
              }`}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </Link>
          ))}

          {currentPage < totalPages ? (
            <Link href={getPageHref(currentPage + 1)} className="sketch-button">
              Next
            </Link>
          ) : (
            <span className="sketch-button cursor-not-allowed opacity-40" aria-disabled="true">
              Next
            </span>
          )}
        </nav>

        <div className="mt-12 flex justify-center">
          <Link href="/#contact" className="sketch-button">Let&apos;s build together</Link>
        </div>
      </div>
    </main>
  )
}
