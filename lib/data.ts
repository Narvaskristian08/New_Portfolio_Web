export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  { 
    title: 'E-Commerce Platform', 
    description: 'A full-stack e-commerce application with real-time inventory management, secure payment processing, and admin dashboard. Features include product search, cart management, order tracking, and customer reviews.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Task Management Dashboard', 
    description: 'Collaborative project management tool with drag-and-drop task boards, team collaboration features, real-time updates, and analytics. Supports multiple workspaces and role-based access control.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Social Media Analytics', 
    description: 'Analytics platform that tracks social media metrics across multiple platforms. Features include automated reporting, sentiment analysis, competitor tracking, and customizable dashboards with data visualization.',
    tags: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Real-Time Chat Application', 
    description: 'Modern messaging platform with real-time communication, file sharing, group chats, and video calls. Includes message encryption, user presence indicators, and message search functionality.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB', 'WebRTC'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Fitness Tracking App', 
    description: 'Mobile-responsive fitness tracker with workout logging, progress visualization, nutrition tracking, and personalized workout plans. Integrates with wearable devices and provides AI-powered recommendations.',
    tags: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'TensorFlow'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Weather Forecast Dashboard', 
    description: 'Interactive weather application providing detailed forecasts, historical data, and severe weather alerts. Features location-based weather, interactive maps, and customizable widgets for personalized views.',
    tags: ['Next.js', 'TypeScript', 'OpenWeather API', 'Mapbox', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Blog CMS Platform', 
    description: 'Content management system for bloggers with markdown support, SEO optimization, media management, and analytics. Includes draft management, scheduled publishing, and multi-author support with role permissions.',
    tags: ['Next.js', 'Sanity', 'React', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Recipe Sharing Community', 
    description: 'Social platform for food enthusiasts to share recipes, cooking tips, and meal plans. Features include recipe rating, ingredient substitution suggestions, shopping list generation, and cooking timers.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Portfolio Website Builder', 
    description: 'Drag-and-drop website builder allowing users to create professional portfolios without coding. Includes customizable templates, domain connection, analytics integration, and responsive design options.',
    tags: ['React', 'DnD Kit', 'Firebase', 'Stripe', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  { 
    title: 'Expense Tracker', 
    description: 'Personal finance management tool with expense categorization, budget planning, recurring transaction tracking, and financial insights. Includes data visualization, export features, and multi-currency support.',
    tags: ['Vue.js', 'Express', 'MongoDB', 'Chart.js', 'JWT'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
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

export const journeyContent = {
  title: 'Developer Journey',
  subtitle: 'Follow the path of my completed projects and milestones',
  viewAllText: 'View All Projects',
  viewAllHref: '/projects'
} as const
