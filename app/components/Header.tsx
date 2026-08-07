'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggleButton } from './ThemeToggle'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '/', label: 'Home', section: 'home' },
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/#projects', label: 'Projects', section: 'projects' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
  { href: '/blog', label: 'Blog', section: null },
]

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  
  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 50)

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true) // Scrolling down
      } else {
        setHidden(false) // Scrolling up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Track active section
  useEffect(() => {
    const sections = links.filter(link => link.section).map(link => link.section as string)
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHomeClick = (closeMenu: boolean) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      router.push('/')
    }
    if (closeMenu) close()
  }

  const handleSectionClick = (section: string | null, href: string, closeMenu: boolean) => (e: React.MouseEvent) => {
    if (section && pathname === '/') {
      e.preventDefault()
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (closeMenu) close()
    } else if (closeMenu) {
      close()
    }
  }

  const isLinkActive = (link: typeof links[0]) => {
    if (link.section) {
      return pathname === '/' && activeSection === link.section
    }
    return pathname === link.href
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 transition-transform duration-300"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className={`mt-4 px-6 py-4 rounded-full transition-all duration-300 ${
              scrolled
                ? 'glass-header shadow-premium'
                : 'bg-transparent'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link
                href="/"
                className="text-xl font-bold tracking-tighter gradient-text hover:scale-105 transition-transform"
                onClick={handleHomeClick(true)}
              >
                kdbn.dev
              </Link>

              {/* Mobile Controls */}
              <div className="flex items-center gap-3 md:hidden">
                <ThemeToggleButton />
                <motion.button
                  onClick={toggle}
                  aria-label="Toggle navigation"
                  className="glass-card p-2 rounded-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  {open ? (
                    <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <HiMenuAlt3 className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  )}
                </motion.button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-2 md:flex">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`sketch-nav-link relative ${isLinkActive(link) ? 'active' : ''}`}
                    onClick={link.section ? handleSectionClick(link.section, link.href, false) : undefined}
                  >
                    {link.label}
                    {isLinkActive(link) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                <div className="h-6 w-px bg-gray-700 mx-2" />
                <ThemeToggleButton />
              </div>
            </nav>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-24 left-4 right-4 z-40 md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="glass-card rounded-2xl p-6 shadow-premium-lg">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300 dark:border-gray-700">
                  <h3 className="text-lg font-bold gradient-text">Navigation</h3>
                </div>
                
                <div className="flex flex-col gap-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={link.section ? handleSectionClick(link.section, link.href, true) : close}
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          isLinkActive(link)
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-900 dark:text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.label}</span>
                          {isLinkActive(link) && (
                            <motion.div
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                              layoutId="activeMobile"
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
