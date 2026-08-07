'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiDownload } from 'react-icons/hi'
import { roles, socialLinks, heroContent } from '@/lib/hero-data'

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timer = setTimeout(() => {
      setDisplayedRole(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)))
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  // Particle animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section
      id="home"
      className="anchor-offset relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border border-pink-500/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg blur-sm"
        animate={{
          rotate: [0, -360],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
          <div className="glass-card px-4 py-2 rounded-full">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Available for work</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 font-medium"
        >
          {heroContent.greeting}
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text"
        >
          {heroContent.name}
        </motion.h1>

        {/* Typing effect role */}
        <motion.div
          variants={itemVariants}
          className="h-16 md:h-20 flex items-center justify-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-300">
            I&apos;m a <span className="gradient-text-accent">{displayedRole}</span>
            <span className="animate-pulse">|</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {heroContent.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl glass-card font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>

          <a
            href={heroContent.resumePath}
            download
            className="px-8 py-4 rounded-xl glass-card font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <HiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="glass-card p-3 rounded-lg hover:scale-110 transition-all duration-300 group"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
