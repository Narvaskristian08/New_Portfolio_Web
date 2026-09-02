export type Project = {
  slug: string
  title: string
  description: string
  period: string
  role: string
  tags: string[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: 'nora-local-swarm',
    title: 'NORA Local Swarm',
    description:
      'A local, privacy-focused multi-agent AI assistant that coordinates specialized agents to plan, code, review, research, test, and complete user-defined goals.',
    period: 'Jul 2026 – Sep 2026',
    role: 'Solo AI Systems Developer',
    tags: ['Python', 'Ollama', 'Multi-Agent AI', 'ChromaDB', 'SQLite', 'Pydantic'],
    highlights: [
      'Built an orchestration system for eight specialized agents covering planning, coding, review, research, testing, memory, reflection, and framework installation.',
      'Implemented three-layer memory with runtime context, SQLite persistence, and ChromaDB semantic retrieval.',
      'Connected local Ollama models to workflow orchestration and development tools for files, terminals, Git, web research, and project analysis.',
    ],
  },
  {
    slug: 'hell-university',
    title: 'Hell University',
    description:
      'A Unity horror-adventure game with blockchain-backed purchases, inventory ownership, quest items, and account-based storage.',
    period: 'Dec 2025 – Mar 2026',
    role: 'Lead Game & Blockchain Developer',
    tags: ['Unity 6', 'C#', 'Solidity', 'Ganache', 'Nethereum', 'Truffle'],
    highlights: [
      'Developed horror gameplay systems including enemy AI, chase behavior, jump scares, navigation, tutorials, and interactive inventory mechanics.',
      'Integrated Ganache and Nethereum for ETH vending purchases, account balances, top-ups, and blockchain-backed item ownership.',
      'Created Solidity contracts for vending transactions, quest items, and account-tied persistent storage.',
    ],
  },
  {
    slug: 'biotrack-healthcare',
    title: 'BioTrack Healthcare',
    description:
      'A cross-platform healthcare monitoring platform connecting patient, provider, and administrator workflows across web and mobile.',
    period: 'Capstone Project · 2025',
    role: 'Full-Stack & AI Developer',
    tags: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Flutter', 'OpenAI API', 'Solidity'],
    highlights: [
      'Built responsive, role-based dashboards for health monitoring, vitals history, medical records, analytics, reports, and AI advisory workflows.',
      'Developed secure REST APIs for authentication, sessions, RBAC, provider verification, patients, health centers, alerts, and audit logs.',
      'Connected OpenAI health insights, Flutter vital-scanning and PPG workflows, and blockchain proof logging across the platform.',
    ],
  },
  {
    slug: 'likha-ai',
    title: 'Likha AI',
    description:
      'A computer-vision web and mobile application for analyzing cultural relics and textiles to identify visual patterns and materials.',
    period: 'Sep 2025 – Nov 2025',
    role: 'Project Manager & AI Developer',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'JavaScript', 'MySQL', 'PHP', 'Kotlin'],
    highlights: [
      'Implemented origin and provenance analysis with confidence scoring.',
      'Managed the mobile rebuild by coordinating project scope and delivery while contributing to the AI implementation.',
    ],
  },
  {
    slug: 'medexplain',
    title: 'MedExplain',
    description:
      'An AI-powered web and mobile application that uses natural language processing to simplify medical terms, diagnoses, and prescriptions for non-medical users.',
    period: 'Sep 2025 – Nov 2025',
    role: 'Software & AI Developer',
    tags: ['JavaScript', 'Python', 'NLP', 'MySQL', 'PHP', 'Jetpack Compose'],
    highlights: [
      'Built real-time response and data-processing features across the web and mobile experiences.',
      'Focused the application on making complex medical information clearer and more accessible to non-medical users.',
    ],
  },
  {
    slug: 'hotel-haven',
    title: 'HotelHaven',
    description:
      'A cross-platform mobile hotel room reservation application designed to make finding and booking accommodations simple and secure.',
    period: '2024',
    role: 'Assistant Developer',
    tags: ['Expo', 'React Native', 'TypeScript', 'NativeWind', 'Laravel API', 'Stripe'],
    highlights: [
      'Supports secure account authentication and profile management through the mobile experience.',
      'Lets guests browse available rooms, filter by room type, and review room details and amenities.',
      'Checks reservation dates for availability, calculates the total stay price, and processes payments with Stripe.',
    ],
  },
  {
    slug: 'ladon-photocopies',
    title: 'Ladon Photocopies',
    description:
      'A database-backed web and mobile e-commerce application created for a local photocopying and supplies business.',
    period: 'Feb 2025 – Mar 2025',
    role: 'Full-Stack Developer',
    tags: ['JavaScript', 'PHP', 'MySQL', 'Jetpack Compose', 'Stripe'],
    highlights: [
      'Collaborated with a development team to deliver the web and mobile shopping experiences.',
      'Implemented real-time product data display and integrated Stripe payment functionality.',
    ],
  },
  {
    slug: 'edugrade',
    title: 'EduGrade',
    description:
      'A Java and Kotlin project delivered with responsibility for leading its development.',
    period: 'Additional Project',
    role: 'Lead Developer',
    tags: ['Java', 'Kotlin'],
  },
  {
    slug: 'shoevenier',
    title: 'Shoevenier',
    description:
      'An HTML and CSS project delivered with responsibility for leading its development.',
    period: 'Additional Project',
    role: 'Lead Developer',
    tags: ['HTML', 'CSS'],
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
