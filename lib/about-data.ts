import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi'
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si'
import { IconType } from 'react-icons'

export type Stat = {
  label: string
  value: number
  suffix: string
}

export type JourneyItem = {
  year: string
  title: string
  description: string
  icon: IconType
}

export type TechStackItem = {
  icon: IconType
  name: string
  color: string
}

export const stats: Stat[] = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
]

export const journey: JourneyItem[] = [
  {
    year: '2021',
    title: 'Started My Journey',
    description: 'Began learning web development, focusing on HTML, CSS, and JavaScript fundamentals.',
    icon: HiSparkles,
  },
  {
    year: '2022',
    title: 'First Projects',
    description: 'Built my first full-stack applications and discovered my passion for creating user experiences.',
    icon: HiCode,
  },
  {
    year: '2023',
    title: 'Professional Growth',
    description: 'Expanded skills to modern frameworks and started working on complex, scalable applications.',
    icon: HiLightningBolt,
  },
  {
    year: '2024',
    title: 'Continuous Learning',
    description: 'Currently mastering advanced patterns, cloud technologies, and staying ahead of industry trends.',
    icon: HiSparkles,
  },
]

export const techStack: TechStackItem[] = [
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
]

export const aboutContent = {
  title: 'About Me',
  subtitle: 'Passionate developer crafting digital experiences that make a difference',
  journeyTitle: 'My Journey',
  techStackTitle: 'Tech Stack',
  introduction: {
    paragraph1: "I'm a Full Stack Developer who loves building beautiful, functional web applications. My work combines technical expertise with creative design thinking to deliver exceptional user experiences.",
    paragraph2: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and constantly learning to stay ahead in this ever-evolving field."
  },
  resumePath: '/resume.pdf'
} as const
