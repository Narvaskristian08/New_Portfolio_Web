'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiDownload } from 'react-icons/hi'
import { stats, journey, techStack, aboutContent } from '@/lib/about-data'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = end
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(start)
              return newCounts
            })
          }
        }, 16)
      })
    }
  }, [isInView])

  return (
    <section id="about" className="anchor-offset py-20 px-4 section-animate relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        {/* Main Introduction */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {aboutContent.introduction.paragraph1}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {aboutContent.introduction.paragraph2}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={aboutContent.resumePath}
                  download
                  className="group px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-glow"
                >
                  <HiDownload className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl glass-card font-semibold hover:scale-105 transition-all duration-300"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300 card-hover"
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            {aboutContent.journeyTitle}
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="flex-1 w-full">
                      <div className="glass-card p-6 rounded-xl group hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                            <item.icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <span className="text-2xl font-bold gradient-text">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block relative">
                      <motion.div
                        className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-glow"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12">
            {aboutContent.techStackTitle}
          </h3>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="glass-card p-4 rounded-xl flex flex-col items-center gap-3 group hover:scale-110 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <tech.icon 
                  className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
