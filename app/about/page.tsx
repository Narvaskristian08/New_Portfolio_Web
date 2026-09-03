import type { Metadata } from 'next'
import About from '../components/About'

export const metadata: Metadata = {
  title: 'About Kristian Dave | KDBN Portfolio',
  description: 'Learn about Kristian Dave Narvas, an aspiring software engineer focused on full-stack development and practical AI systems.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 paper-texture">
      <About />
    </main>
  )
}
