'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function A11yAnnouncer() {
  const pathname = usePathname()
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    // Announce route changes to screen readers
    const routeNames: Record<string, string> = {
      '/': 'Home page',
      '/projects': 'Projects page',
      '/blog': 'Blog page',
    }

    const pageName = routeNames[pathname] || 'Page'
    setAnnouncement(`Navigated to ${pageName}`)

    // Clear announcement after it's been read
    const timer = setTimeout(() => setAnnouncement(''), 1000)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  )
}
