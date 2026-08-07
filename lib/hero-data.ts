import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { IconType } from 'react-icons'

export type SocialLink = {
  icon: IconType
  href: string
  label: string
}

export const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'Backend Developer',
  'UI/UX Enthusiast',
  'Problem Solver'
] as const

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:hello@example.com', label: 'Email' },
]

export const heroContent = {
  greeting: 'Hi, my name is',
  name: 'Kristian Dave',
  description: "I craft beautiful, functional web experiences that combine technical expertise with creative design thinking. Let's build something amazing together.",
  availableForWork: true,
  resumePath: '/resume.pdf'
} as const
