import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen pt-24 space-y-20 md:space-y-28 paper-texture">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
