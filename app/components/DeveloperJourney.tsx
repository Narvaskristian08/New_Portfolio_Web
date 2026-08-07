'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import { projects, journeyContent } from '@/lib/data'

export default function DeveloperJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)
  const [visibleFlags, setVisibleFlags] = useState<boolean[]>(new Array(projects.length).fill(false))

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Generate path segments between each checkpoint
  const generatePathSegments = () => {
    const spacing = windowWidth >= 768 ? 400 : 320
    const centerX = 50
    const amplitude = windowWidth >= 768 ? 15 : 10
    const segments: string[] = []

    for (let i = 0; i < projects.length - 1; i++) {
      const y1 = 20 + (i * spacing) // Start from first checkpoint
      const y2 = 20 + ((i + 1) * spacing) // End at next checkpoint
      const xOffset1 = i % 2 === 0 ? amplitude : -amplitude
      const xOffset2 = (i + 1) % 2 === 0 ? amplitude : -amplitude
      
      const midY = (y1 + y2) / 2

      // Create smooth curve from checkpoint to checkpoint
      let segment = `M ${centerX} ${y1}`
      segment += ` Q ${centerX + xOffset1} ${y1 + (y2 - y1) * 0.25}, ${centerX} ${midY}`
      segment += ` Q ${centerX + xOffset2} ${y2 - (y2 - y1) * 0.25}, ${centerX} ${y2}`
      
      segments.push(segment)
    }

    return segments
  }

  const svgHeight = projects.length * (windowWidth >= 768 ? 400 : 320)
  const pathSegments = generatePathSegments()

  return (
    <section
      id="projects"
      ref={containerRef}
      className="anchor-offset relative py-20 px-4 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {journeyContent.title}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {journeyContent.subtitle}
          </motion.p>
        </div>

        {/* Journey Container */}
        <div className="relative">
          {/* Mobile simple line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-pink-500/30 to-purple-500/20 md:hidden" />

          {/* Desktop SVG curved path segments */}
          <svg
            className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:block"
            width="100"
            height={svgHeight}
            style={{ 
              overflow: 'visible',
              width: '100px',
              height: `${svgHeight}px`
            }}
            viewBox={`0 0 100 ${svgHeight}`}
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="50%" stopColor="#764ba2" />
                <stop offset="100%" stopColor="#f093fb" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Draw each segment - only colored if both flags are visible */}
            {pathSegments.map((segment, index) => {
              const bothFlagsVisible = visibleFlags[index] && visibleFlags[index + 1]
              return (
                <motion.path
                  key={index}
                  d={segment}
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ 
                    pathLength: bothFlagsVisible ? 1 : 0,
                    opacity: bothFlagsVisible ? 1 : 0.2
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              )
            })}
          </svg>

          {/* Projects */}
          <div className="space-y-24 md:space-y-40 relative py-20">
            {projects.map((project, index) => (
              <ProjectMilestone
                key={index}
                project={project}
                index={index}
                isLeft={index % 2 === 0}
                onVisibilityChange={(isVisible) => {
                  setVisibleFlags(prev => {
                    const newState = [...prev]
                    newState[index] = isVisible
                    return newState
                  })
                }}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={journeyContent.viewAllHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-glow"
          >
            <span>{journeyContent.viewAllText}</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

type ProjectMilestoneProps = {
  project: {
    title: string
    description: string
    tags: string[]
    href?: string
    github?: string
    demo?: string
  }
  index: number
  isLeft: boolean
  onVisibilityChange: (isVisible: boolean) => void
}

function ProjectMilestone({ project, index, isLeft, onVisibilityChange }: ProjectMilestoneProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    onVisibilityChange(isInView)
  }, [isInView, onVisibilityChange])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowCheckmark(true), 600)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className="relative min-h-[200px]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Circle checkpoint marker */}
      <div className="absolute left-8 md:left-1/2 top-4 md:top-8 md:-translate-x-1/2 z-20">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        >
          {/* Main glowing circle */}
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(147, 51, 234, 0.5)',
                '0 0 30px rgba(147, 51, 234, 0.8)',
                '0 0 20px rgba(147, 51, 234, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Inner white circle with number */}
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-purple-600 font-bold text-xs md:text-sm">{index + 1}</span>
            </div>
          </motion.div>
          
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-400/60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Second outer ring for more depth */}
          <motion.div
            className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-pink-400/40"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>

      <div className={`flex items-stretch gap-4 md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <div className="flex-1 ml-16 md:ml-0 md:max-w-xl">
          <motion.div
            className={`glass-card rounded-2xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300 shadow-lg h-full ${
              isLeft ? 'md:mr-12' : 'md:ml-12'
            }`}
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
          >
            {/* Card glow effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              {/* Project number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-gray-600 dark:text-gray-500">
                  PROJECT {String(index + 1).padStart(2, '0')}
                </span>
                {showCheckmark && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <FaCheckCircle className="w-6 h-6 text-green-400" />
                  </motion.div>
                )}
              </div>

              {/* Project title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-gray-700 dark:text-gray-300 border border-purple-500/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + tagIndex * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Action buttons */}
              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-sm font-semibold hover:scale-105 transition-all duration-300 border border-purple-500/30"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Spacer for alternating layout on desktop */}
        <div className="hidden md:block flex-1 max-w-xl" />
      </div>
    </motion.div>
  )
}
