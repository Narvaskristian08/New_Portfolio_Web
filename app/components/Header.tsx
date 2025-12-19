'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggleButton } from './ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  
  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  const handleHomeClick = (closeMenu: boolean) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      router.push('/')
    }
    if (closeMenu) close()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        {/* Swapped glass-header for drawing-border + paper-texture */}
        <div className="mt-4 px-5 py-3 animate-header paper-texture drawing-border bg-[#fffdf8] dark:bg-[#11141c] shadow-[6px_6px_0_rgba(0,0,0,0.2)] dark:shadow-[6px_6px_0_rgba(255,255,255,0.1)]">
          <nav className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-lg md:text-xl font-bold tracking-tighter hover:scale-105 transition-transform hand-drawn"
              onClick={handleHomeClick(true)}
            >
              kdbn.dev
            </Link>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggleButton />
              <button
                onClick={toggle}
                aria-label="Toggle navigation"
                className="sketch-button !px-3 !py-1 text-sm font-bold"
              >
                {open ? 'CLOSE' : 'MENU'}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-2 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="sketch-nav-link"
                  onClick={link.href === '/' ? handleHomeClick(false) : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-6 w-px bg-black/20 dark:bg-white/20 mx-2 rotate-12" />
              <ThemeToggleButton />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Nav aligned with your CSS mobile-nav-card */}
      <div className={`mobile-nav ${open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-3'}`}>
        <div className="mobile-nav-card paper-texture">
          <div className="flex items-center justify-between mb-4 border-b-2 border-dashed border-black/20 dark:border-white/20 pb-2">
            <p className="text-lg font-bold hand-drawn uppercase tracking-widest">Navigation</p>
            <ThemeToggleButton />
          </div>
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === '/' ? handleHomeClick(true) : close}
                className="sketch-nav-link w-full text-lg italic"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}