export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
}

export const projects: Project[] = [
  { title: 'Placeholder 1', description: 'WIP: Project details coming soon.', tags:['Upcoming'], href: '#' },
  { title: 'Placeholder 2', description: 'WIP: Project details coming soon..', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 3', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 4', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 5', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 6', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 7', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 8', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 9', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
  { title: 'Placeholder 10', description: 'WIP: Project details coming soon.', tags: ['Upcoming'], href: '#' },
]

export type BlogPost = {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  href?: string
}

export const blogPosts: BlogPost[] = [
  { title: 'Designing with Imperfection', excerpt: 'Embracing hand-drawn aesthetics to make interfaces feel human.', date: 'Dec 02, 2025', readTime: '5 min', tags: ['Design', 'UI'], href: '#' },
  { title: 'Micro-interactions that Matter', excerpt: 'Small animations that guide users without getting in the way.', date: 'Nov 18, 2025', readTime: '6 min', tags: ['Animation', 'UX'], href: '#' },
  { title: 'Shipping Fast with Next.js 14', excerpt: 'How the app router simplifies data and layout composition.', date: 'Oct 28, 2025', readTime: '4 min', tags: ['Next.js', 'Dev'], href: '#' },
  { title: 'Dark Mode that Feels Intentional', excerpt: 'Tips to balance contrast, shadows, and textures for dark themes.', date: 'Oct 10, 2025', readTime: '7 min', tags: ['Design', 'Theme'], href: '#' },
]