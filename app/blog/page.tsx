import { blogPosts } from '@/lib/data'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-4 paper-texture">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-sm uppercase tracking-[0.2em] hand-drawn">Writing</p>
          <h1 className="text-5xl md:text-6xl font-black hand-drawn sketch-underline">Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-80">
            Notes on design systems, creative coding, and the process behind shipping playful experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post, idx) => (
            <article
              key={post.title}
              className="drawing-border p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1"
              style={{ transform: `rotate(${idx % 2 === 0 ? '-0.4deg' : '0.4deg'})` }}
            >
              <div className="flex items-center justify-between text-sm opacity-75">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold sketch-underline">{post.title}</h2>
              <p className="opacity-80 text-sm md:text-base">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 drawing-border">{tag}</span>
                ))}
              </div>
              {post.href && (
                <Link href={post.href} className="sketch-nav-link text-sm font-semibold">
                  Read more →
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/#contact" className="sketch-button">Request a topic</Link>
        </div>
      </div>
    </main>
  )
}


