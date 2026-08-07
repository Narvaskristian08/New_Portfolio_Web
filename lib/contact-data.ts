import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { IconType } from 'react-icons'

export type SocialLink = {
  icon: IconType
  href: string
  label: string
  color: string
}

export type ContactInfo = {
  icon: IconType
  label: string
  value: string
  href?: string
}

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: '#181717' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
  { icon: FaEnvelope, href: 'mailto:hello@example.com', label: 'Email', color: '#EA4335' },
]

export const contactInfo: ContactInfo[] = [
  { icon: HiMail, label: 'Email', value: 'hello@kdbn.dev', href: 'mailto:hello@kdbn.dev' },
  { icon: HiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: HiLocationMarker, label: 'Location', value: 'San Francisco, CA' },
]

export const contactContent = {
  title: 'Get In Touch',
  subtitle: "Have a project in mind or want to collaborate? Let's create something amazing together",
  ctaTitle: "Let's Work Together",
  ctaDescription: "I'm always interested in hearing about new projects and opportunities",
  ctaEmail: 'hello@kdbn.dev',
  successMessage: "Thanks for reaching out! I'll get back to you soon.",
  connectTitle: 'Connect With Me'
} as const

export const formLabels = {
  name: 'Your Name',
  email: 'Email Address',
  subject: 'Subject',
  message: 'Your Message',
  submit: 'Send Message',
  sending: 'Sending...',
  success: 'Message Sent!'
} as const

export const formValidation = {
  name: {
    minLength: 2,
    errorMessage: 'Name must be at least 2 characters'
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: 'Invalid email address'
  },
  subject: {
    minLength: 3,
    errorMessage: 'Subject must be at least 3 characters'
  },
  message: {
    minLength: 10,
    errorMessage: 'Message must be at least 10 characters'
  }
} as const
