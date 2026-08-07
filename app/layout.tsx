import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProviderWrapper } from './components/ThemeToggle'
import AppShell from './components/AppShell'
import SkipToContent from './components/SkipToContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: 'Kristian Dave - Full Stack Developer Portfolio',
  description: 'Portfolio of Kristian Dave, a passionate full stack developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects, skills, and experience.',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'Portfolio', 'Kristian Dave'],
  authors: [{ name: 'Kristian Dave' }],
  openGraph: {
    title: 'Kristian Dave - Full Stack Developer',
    description: 'Portfolio showcasing projects and skills in modern web development',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          <SkipToContent />
          <AppShell>{children}</AppShell>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
