import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiMysql,
  SiDocker, SiGit, SiGithub, SiFigma,
  SiVuedotjs, SiGraphql, SiFirebase
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { IconType } from 'react-icons'

export type Skill = {
  name: string
  icon: IconType
  level: number
  color: string
}

export type SkillCategory = {
  name: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, level: 92, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
      { name: 'Vue.js', icon: SiVuedotjs, level: 75, color: '#4FC08D' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
      { name: 'Express', icon: SiExpress, level: 85, color: '#000000' },
      { name: 'Python', icon: SiPython, level: 82, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, level: 78, color: '#092E20' },
      { name: 'FastAPI', icon: SiFastapi, level: 80, color: '#009688' },
      { name: 'GraphQL', icon: SiGraphql, level: 75, color: '#E10098' },
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, level: 75, color: '#DC382D' },
      { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 82, color: '#2496ED' },
      { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 88, color: '#181717' },
      { name: 'AWS', icon: FaAws, level: 70, color: '#FF9900' },
      { name: 'Figma', icon: SiFigma, level: 85, color: '#F24E1E' },
      { name: 'Firebase', icon: SiFirebase, level: 78, color: '#FFCA28' },
    ]
  }
]

export const learningTechnologies = [
  'Rust',
  'Go',
  'Kubernetes',
  'WebAssembly',
  'AI/ML'
] as const

export const skillsContent = {
  title: 'Skills & Expertise',
  subtitle: 'Technologies and tools I use to bring ideas to life',
  learningNote: 'Always learning and exploring new technologies to stay ahead'
} as const
