import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import DeveloperJourney from './components/DeveloperJourney'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen pt-24 space-y-20 md:space-y-28">
        <Hero />
        <About />
        <Skills />
        <DeveloperJourney />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
