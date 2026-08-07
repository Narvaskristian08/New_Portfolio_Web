'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiAcademicCap, HiCode } from 'react-icons/hi'

type ExperienceItem = {
  type: 'work' | 'education' | 'certification'
  title: string
  organization: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    organization: 'Tech Innovations Inc.',
    location: 'Remote',
    period: '2023 - Present',
    description: [
      'Led development of scalable microservices architecture serving 100K+ users',
      'Mentored junior developers and conducted code reviews',
      'Reduced application load time by 40% through optimization',
      'Implemented CI/CD pipelines and automated testing workflows'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Digital Solutions Co.',
    location: 'San Francisco, CA',
    period: '2021 - 2023',
    description: [
      'Built and maintained customer-facing web applications',
      'Collaborated with design team to implement responsive UI/UX',
      'Integrated third-party APIs and payment gateways',
      'Optimized database queries improving performance by 35%'
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Stripe']
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    organization: 'University of Technology',
    location: 'Boston, MA',
    period: '2017 - 2021',
    description: [
      'Graduated with Honors (GPA: 3.8/4.0)',
      'Specialized in Software Engineering and Web Development',
      'Led university hackathon team to 1st place',
      'Teaching Assistant for Data Structures and Algorithms'
    ]
  },
  {
    type: 'certification',
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    location: 'Online',
    period: '2022',
    description: [
      'Demonstrated expertise in designing distributed systems on AWS',
      'Proficient in AWS services including EC2, S3, RDS, Lambda',
      'Understanding of architectural best practices and cost optimization'
    ]
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    organization: 'StartUp Labs',
    location: 'New York, NY',
    period: '2020 - 2021',
    description: [
      'Developed responsive web interfaces using React and TypeScript',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Participated in agile development process and daily standups',
      'Contributed to open-source projects and documentation'
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Git']
  }
]

const getIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work':
      return HiBriefcase
    case 'education':
      return HiAcademicCap
    case 'certification':
      return HiCode
  }
}

const getColor = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work':
      return { primary: '#667eea', secondary: '#764ba2' }
    case 'education':
      return { primary: '#f093fb', secondary: '#f5576c' }
    case 'certification':
      return { primary: '#4facfe', secondary: '#00f2fe' }
  }
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="anchor-offset py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My professional journey and educational background
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

type ExperienceCardProps = {
  experience: ExperienceItem
  index: number
  isInView: boolean
}

function ExperienceCard({ experience, index, isInView }: ExperienceCardProps) {
  const Icon = getIcon(experience.type)
  const colors = getColor(experience.type)
  const isLeft = index % 2 === 0

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <div className="flex-1 ml-16 md:ml-0">
          <motion.div
            className={`glass-card rounded-2xl p-5 md:p-8 group hover:scale-[1.02] transition-all duration-300 shadow-lg ${
              isLeft ? 'md:mr-8' : 'md:ml-8'
            }`}
            whileHover={{ y: -4 }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {experience.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold text-base">{experience.organization}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{experience.period}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{experience.location}</p>
              </div>
            </div>

            {/* Description */}
            <ul className="space-y-3 mb-6">
              {experience.description.map((desc, i) => (
                <motion.li
                  key={i}
                  className="text-gray-700 dark:text-gray-300 flex items-start gap-3 text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                >
                  <span className="text-purple-500 dark:text-purple-400 mt-1.5 text-xs flex-shrink-0">▹</span>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>

            {/* Technologies */}
            {experience.technologies && (
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-gray-800 dark:text-gray-200 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.4 + i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Type badge */}
            <div className="absolute top-4 md:top-6 right-4 md:right-6">
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                  border: `1px solid ${colors.primary}40`,
                }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: colors.primary }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline dot */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          >
            <motion.div
              className="w-5 h-5 md:w-6 md:h-6 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                boxShadow: `0 0 20px ${colors.primary}80`,
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${colors.primary}60`,
                  `0 0 30px ${colors.primary}80`,
                  `0 0 20px ${colors.primary}60`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${colors.primary}40`,
                scale: 1.8,
              }}
              animate={{
                scale: [1.8, 2.2, 1.8],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
