'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={true}>
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
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="glass-card p-3 rounded-xl hover:scale-110 transition-all duration-300 group relative overflow-hidden"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative z-10">
        {theme === 'dark' ? (
          <HiSun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
        ) : (
          <HiMoon className="w-5 h-5 text-purple-600 group-hover:text-purple-500 transition-colors duration-300" />
        )}
      </div>
      
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md ${
          theme === 'dark' ? 'bg-yellow-500/20' : 'bg-purple-500/20'
        }`} 
      />
    </motion.button>
  )
}
