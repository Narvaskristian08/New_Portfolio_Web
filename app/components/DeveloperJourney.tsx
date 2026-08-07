'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import { projects, journeyContent } from '@/lib/data'

export default function DeveloperJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathProgress = useTransform(scrollYProgress, [0.1, 1], [0, 1])

  // Handle window resize for responsive path
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize() // Set initial width
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [windowWidth]) // Re-calculate when window width changes

  // Generate smooth curved path with truly responsive dimensions
  const generatePath = () => {
    const points = projects.length
    // Use viewport-based spacing instead of fixed pixels
    const spacing = windowWidth ? Math.max(300, Math.min(400, windowWidth * 0.3)) : 400
    const centerX = 50
    // Make amplitude responsive to screen width
    const amplitude = windowWidth ? Math.max(8, Math.min(15, windowWidth * 0.012)) : 15

    let path = `M ${centerX} 0`

    for (let i = 0; i < points; i++) {
      const y = (i + 1) * spacing
      const xOffset = i % 2 === 0 ? amplitude : -amplitude
      const controlY1 = y - spacing * 0.5
      const controlY2 = y - spacing * 0.25

      path += ` Q ${centerX + xOffset} ${controlY1}, ${centerX} ${y - spacing * 0.25}`
      path += ` Q ${centerX - xOffset} ${controlY2}, ${centerX} ${y}`
    }

    return path
  }

  // Calculate responsive SVG dimensions
  const svgHeight = windowWidth ? projects.length * Math.max(300, Math.min(400, windowWidth * 0.3)) : projects.length * 400

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
          {/* CSS Fallback Timeline for extreme screen sizes */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:block xl:hidden">
            <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/30 via-pink-500/50 to-purple-500/30" />
          </div>
          {/* Mobile Timeline Line - Enhanced responsive */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 md:hidden">
            {/* Mobile progress indicator */}
            <motion.div
              className="w-full bg-gradient-to-b from-purple-400 to-pink-400 origin-top"
              style={{
                scaleY: scrollYProgress,
              }}
            />
          </div>

          {/* Desktop SVG Path */}
          <svg
            className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden xl:block"
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
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#764ba2" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f093fb" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background path */}
            <motion.path
              ref={pathRef}
              d={generatePath()}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              style={{ pathLength: pathProgress }}
            />

            {/* Glowing path overlay */}
            <motion.path
              d={generatePath()}
              fill="none"
              stroke="#667eea"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              style={{ pathLength: pathProgress }}
            />
          </svg>

          {/* Traveling Orb - Desktop */}
          <motion.div
            className="absolute left-1/2 hidden xl:block pointer-events-none z-20"
            style={{
              top: useTransform(scrollYProgress, [0.1, 1], ['0%', '100%']),
              x: '-50%',
            }}
          >
            <div className="relative">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                    '0 0 40px rgba(147, 51, 234, 0.8)',
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Orb trail effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16 md:space-y-32 relative" style={{ 
            marginTop: windowWidth ? Math.max(300, Math.min(400, windowWidth * 0.3)) * 0.25 : 100 
          }}>
            {projects.map((project, index) => (
              <ProjectMilestone
                key={index}
                project={project}
                index={index}
                isLeft={index % 2 === 0}
                spacing={windowWidth ? Math.max(300, Math.min(400, windowWidth * 0.3)) : 400}
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
  spacing: number
}

function ProjectMilestone({ project, index, isLeft, spacing }: ProjectMilestoneProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsCompleted(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{ 
        marginBottom: `${spacing * 0.6}px`,
        minHeight: `${spacing * 0.8}px`
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Project Card */}
        <motion.div
          className="flex-1 w-full max-w-full md:max-w-xl ml-12 md:ml-0"
          initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              {/* Project number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-gray-600 dark:text-gray-500">
                  PROJECT {String(index + 1).padStart(2, '0')}
                </span>
                {isCompleted && (
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
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + tagIndex * 0.1 }}
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
          </div>
        </motion.div>

        {/* Mobile Timeline Marker */}
        <div className="absolute left-8 md:hidden">
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={isCompleted ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Mobile marker */}
            <motion.div
              className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
              animate={
                isCompleted
                  ? {
                      boxShadow: [
                        '0 0 0 0 rgba(147, 51, 234, 0.7)',
                        '0 0 0 10px rgba(147, 51, 234, 0)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Desktop Milestone marker */}
        <div className="hidden md:block relative">
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={isCompleted ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Outer ring */}
            <motion.div
              className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full border-2 md:border-4 border-purple-500/30 flex items-center justify-center"
              animate={
                isCompleted
                  ? {
                      boxShadow: [
                        '0 0 0 0 rgba(147, 51, 234, 0.7)',
                        '0 0 0 20px rgba(147, 51, 234, 0)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {/* Inner circle */}
              <div className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </motion.div>

            {/* Completion particles */}
            {isCompleted && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-purple-400"
                    initial={{ scale: 0, x: '-50%', y: '-50%' }}
                    animate={{
                      scale: [0, 1, 0],
                      x: ['-50%', `${Math.cos((i * Math.PI) / 3) * 40 - 50}%`],
                      y: ['-50%', `${Math.sin((i * Math.PI) / 3) * 40 - 50}%`],
                    }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                ))}
              </>
            )}
          </motion.div>
        </div>

        {/* Spacer for alternating layout - Desktop only */}
        <div className="hidden md:block flex-1 max-w-xl" />
      </div>
    </motion.div>
  )
}
