'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skillCategories, learningTechnologies, skillsContent } from '@/lib/skills-data'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const allSkills = skillCategories.flatMap(cat => cat.skills)
  
  const displayedSkills = activeCategory === 'All' 
    ? allSkills 
    : skillCategories.find(cat => cat.name === activeCategory)?.skills || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {skillsContent.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {skillsContent.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All', ...skillCategories.map(cat => cat.name)].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-glow'
                  : 'glass-card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
        >
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 group hover:scale-110 transition-all duration-300 cursor-pointer relative overflow-hidden"
              whileHover={{ y: -8 }}
              layout
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent)` 
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative">
                  <skill.icon 
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  {/* Circular progress indicator */}
                  <svg className="absolute inset-0 -m-2 w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.level / 100)}`}
                      className="transition-all duration-1000 opacity-0 group-hover:opacity-100"
                    />
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.level}%
                  </p>
                </div>
              </div>

              {/* Skill level bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` 
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl inline-block">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {skillsContent.learningNote}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {learningTechnologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-gray-700 dark:text-gray-400 border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
