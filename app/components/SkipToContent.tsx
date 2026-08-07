'use client'

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-purple-600 focus:to-pink-600 focus:text-white focus:rounded-xl focus:font-semibold focus:shadow-glow"
    >
      Skip to main content
    </a>
  )
}
