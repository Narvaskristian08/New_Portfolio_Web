'use client'

import Link from 'next/link'

type AboutProps = {
  compact?: boolean
}

const strengths = [
  {
    title: 'Full-stack engineering',
    description: 'Reliable web, mobile, and backend systems.',
  },
  {
    title: 'Learning AI & automation',
    description: 'Exploring AI, computer vision, NLP, and automation through practical projects.',
  },
  {
    title: 'Product-focused development',
    description: 'Building useful experiences that are clear, reliable, and easy to use.',
  },
]

export default function About({ compact = false }: AboutProps) {
  const intro = (
    <p className="text-lg md:text-xl leading-relaxed">
      I&apos;m Kristian Dave Narvas, an aspiring software engineer focused on building practical digital experiences across full-stack web, mobile, backend, automation, and AI. I enjoy turning complex ideas into clear, reliable products that solve real problems.
    </p>
  )

  const previewIntro = (
    <p className="text-lg md:text-xl leading-relaxed">
      I&apos;m Kristian Dave Narvas, an aspiring software engineer focused on building practical digital experiences across full-stack web, mobile, backend, and automation. I enjoy turning complex ideas into clear, reliable products that solve real problems.
    </p>
  )

  const learningStatement = (
    <p className="text-lg md:text-xl leading-relaxed">
      I&apos;m currently learning AI more deeply and exploring how machine learning, computer vision, natural language processing, and local AI can be used to build practical software products.
    </p>
  )

  return (
    <section id="about" className={`anchor-offset px-4 ${compact ? 'py-20' : 'py-24'} section-animate`}>
      <div className={`${compact ? 'max-w-4xl' : 'max-w-5xl'} mx-auto`}>
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] hand-drawn">
            {compact ? 'A little about me' : 'Background & direction'}
          </p>
          <h2 className="text-5xl md:text-6xl font-bold sketch-underline hand-drawn">
            {compact ? 'About Me' : 'My Story'}
          </h2>
        </div>

        <div className="drawing-border p-8 md:p-10 transform rotate-0.5 animate-fade-delay-2">
          {compact ? previewIntro : intro}

          {compact ? (
            <div className="mt-6">
              <Link href="/about" className="sketch-nav-link text-sm font-semibold">
                Read more about me →
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-8">
              <div className="border-t-2 border-dashed border-black/20 pt-8 dark:border-white/20">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] hand-drawn">What I&apos;m learning</p>
                {learningStatement}
              </div>

              <div className="border-t-2 border-dashed border-black/20 pt-8 dark:border-white/20">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] hand-drawn">How I work</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  I&apos;m driven by curiosity, ownership, and continuous learning. I like understanding how a product works end to end, collaborating with teams, and choosing the right tools to bring an idea to life.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-6 ${compact ? 'md:max-w-2xl md:mx-auto md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {(compact ? strengths.filter((strength) => strength.title !== 'Learning AI & automation') : strengths).map((strength, idx) => (
            <div
              key={strength.title}
              className="drawing-border p-6 text-center transform animate-fade-delay-3"
              style={{ transform: `rotate(${idx % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}
            >
              <h3 className="text-2xl font-bold mb-2">{strength.title}</h3>
              <p className="text-sm opacity-80">{strength.description}</p>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="mt-12 drawing-border p-8 md:p-10 transform -rotate-0.5">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] hand-drawn">What I&apos;m working toward</p>
            <p className="text-lg md:text-xl leading-relaxed">
              My goal is to keep growing as an engineer by building dependable software, learning from every project, and developing AI-enabled tools that are useful, understandable, and responsible.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="sketch-button">View my work</Link>
              <Link href="/#contact" className="sketch-button transform rotate-1">Get in touch</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
