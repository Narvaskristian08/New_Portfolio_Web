'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from './Header'
import Preloader from './Preloader'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const finish = () => setShowSplash(false)
    const timer = setTimeout(finish, 1400)
    window.addEventListener('load', finish)
    document.body.classList.toggle('splash-lock', showSplash)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', finish)
      document.body.classList.remove('splash-lock')
    }
  }, [showSplash])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.section-animate'))
    if (!elements.length) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    // Reset on navigation so animations can replay
    elements.forEach((el) => el.classList.remove('is-visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add('is-visible')
          } else {
            target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    // Immediately reveal elements already in view (e.g., after navigation)
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('is-visible')
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <Preloader visible={showSplash} />
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Header />
        {children}
      </div>
    </>
  )
}

