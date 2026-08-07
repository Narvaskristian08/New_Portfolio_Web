import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { IconType } from 'react-icons'

export type SocialLink = {
  icon: IconType
  href: string
  label: string
}

export type QuickLink = {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:hello@kdbn.dev', label: 'Email' },
]

export const quickLinks: QuickLink[] = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

export const footerContent = {
  brand: 'kdbn.dev',
  description: "Crafting beautiful digital experiences with passion and precision. Let's build something amazing together.",
  builtWith: 'Built with Next.js & Framer Motion',
  copyright: {
    name: 'Kristian Dave',
    text: 'and lots of coffee'
  },
  links: {
    privacy: '/privacy',
    terms: '/terms'
  }
} as const
