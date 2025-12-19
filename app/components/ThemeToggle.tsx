'use client'

import MoonOutlined from '@ant-design/icons/lib/icons/MoonOutlined'
import SunOutlined from '@ant-design/icons/lib/icons/SunOutlined'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </NextThemesProvider>
  )
}

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="sketch-button flex items-center justify-center p-2 w-10 h-10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        // Sun icon (24x24, outline + center) for reliability across browsers
        <SunOutlined />
      ) : (
        // Moon icon (24x24) for reliability across browsers
<MoonOutlined />
      )}
    </button>
  )
}
