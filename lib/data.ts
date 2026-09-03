export type Project = {
  slug: string
  title: string
  description: string
  period: string
  role: string
  tags: string[]
  githubLinks?: GithubProjectLink[]
  highlights?: string[]
}

export type GithubProjectLink = {
  label: string
  url: string
  private?: boolean
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
    githubLinks: [
      { label: 'swarm-architecture', url: 'https://github.com/Narvaskristian08/swarm-architecture' },
    ],
    highlights: [
      'Built an orchestration system for eight specialized agents covering planning, coding, review, research, testing, memory, reflection, and framework installation.',
      'Implemented three-layer memory with runtime context, SQLite persistence, and ChromaDB semantic retrieval.',
      'Connected local Ollama models to workflow orchestration and development tools for files, terminals, Git, web research, and project analysis.',
    ],
  },
  {
    slug: 'noir',
    title: 'NOIR',
    description:
      'An automated QA platform that runs browser-based checks against deployed websites and streams results into a real-time testing dashboard.',
    period: 'Aug 2026 – Sep 2026',
    role: 'Full-Stack Developer & QA Automation Engineer',
    tags: ['React', 'TypeScript', 'Express.js', 'Playwright', 'Socket.IO', 'Supabase'],
    highlights: [
      'Built a Playwright test engine for availability, links, forms, buttons, responsive layouts, console and network errors, accessibility, security checks, screenshots, and traces.',
      'Connected the React dashboard to REST APIs and Socket.IO for live run progress, history, detailed results, cancellation, and artifact management.',
      'Implemented Supabase authentication, server-enforced guest and daily usage limits, URL validation, SSRF protection, and rate limiting.',
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
    githubLinks: [
      { label: 'Hell-University', url: 'https://github.com/Narvaskristian08/Hell-University' },
    ],
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
    githubLinks: [
      {
        label: 'biotrack-healthcare',
        url: 'https://github.com/Narvaskristian08/biotrack-healthcare',
        private: true,
      },
    ],
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
    githubLinks: [
      { label: 'likha', url: 'https://github.com/k1nguofficial/likha' },
      { label: 'HabiScan AI model', url: 'https://github.com/bennybun29/HabiScan_AI_CNN_Model_Prototype' },
      { label: 'Likha AI', url: 'https://github.com/Azure-Defiant/Likha-AI' },
    ],
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
    githubLinks: [
      { label: 'MedExplain-AI', url: 'https://github.com/Narvaskristian08/MedExplain-AI' },
    ],
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
    githubLinks: [
      { label: 'hotel-haven-app', url: 'https://github.com/Narvaskristian08/hotel-haven-app' },
    ],
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
    githubLinks: [
      { label: 'ladon-webservice', url: 'https://github.com/Narvaskristian08/ladon-webservice' },
      { label: 'ladon-supplies-app', url: 'https://github.com/Xyzhie-Dacanay/ladon-supplies-app' },
    ],
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
