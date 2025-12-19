'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="anchor-offset min-h-[calc(100vh-120px)] pt-6 flex items-center justify-center px-4 relative section-animate"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border-2 border-black/70 px-4 py-2 text-sm font-semibold tracking-tight shadow-[3px_3px_0px_rgba(0,0,0,0.65)] dark:border-white/70 animate-fade-delay-1">
          <span className="animate-pulse-slow">✦</span> Frontend & Backend Developer
        </p>
        <h1 className="text-6xl md:text-8xl font-bold hand-drawn sketch-underline animate-fade-delay-2">
          Hello, I&apos;m <span className="inline-block transform rotate-1">Kristian Dave</span>
        </h1>
        <p className="text-xl md:text-2xl transform -rotate-1 opacity-90 animate-fade-delay-3">
          A Creative Developer
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-delay-4">
          <a href="/projects" className="sketch-button">View Work</a>
          <a href="/#contact" className="sketch-button transform rotate-1">Get in Touch</a>
        </div>
      </div>
      <svg className="absolute top-20 left-10 w-20 h-20 opacity-20 dark:opacity-10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="draw-line" />
      </svg>
      <svg className="absolute bottom-20 right-10 w-32 h-32 opacity-20 dark:opacity-10" viewBox="0 0 100 100">
        <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="2" className="draw-line" />
      </svg>
    </section>
  )
}
