import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProviderWrapper } from './components/ThemeToggle'
import AppShell from './components/AppShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Drawing Style',
  description: 'A hand-drawn style portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          <AppShell>{children}</AppShell>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
