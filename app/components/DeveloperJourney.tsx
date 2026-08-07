'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import { projects, journeyContent } from '@/lib/data'

export default function DeveloperJourney() {
  const containerRef = useRef<HTMLDivElement>(null)

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
          {/* Simple vertical line - always visible */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-purple-500/20 via-pink-500/30 to-purple-500/20" />

          {/* Projects */}
          <div className="space-y-24 md:space-y-40 relative py-20">
            {projects.map((project, index) => (
              <ProjectMilestone
                key={index}
                project={project}
                index={index}
                isLeft={index % 2 === 0}
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
}

function ProjectMilestone({ project, index, isLeft }: ProjectMilestoneProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })
  const [showCheckmark, setShowCheckmark] = useState(false)

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
      {/* Flag Marker - appears when project is in view */}
      <div className="absolute left-8 md:left-1/2 top-4 md:top-8 md:-translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0, y: -20 }}
          animate={isInView ? { scale: 1, y: 0 } : { scale: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        >
          {/* Flag SVG */}
          <svg width="32" height="40" viewBox="0 0 32 40" className="drop-shadow-lg">
            {/* Flag pole */}
            <rect x="2" y="0" width="2" height="40" fill="url(#flagPoleGradient-{index})" />
            {/* Flag */}
            <motion.path
              d="M 4 4 Q 16 0 24 4 Q 16 8 24 12 Q 16 16 4 12 Z"
              fill="url(#flagGradient-{index})"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />
            <defs>
              <linearGradient id={`flagGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#f093fb" />
              </linearGradient>
              <linearGradient id={`flagPoleGradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
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
