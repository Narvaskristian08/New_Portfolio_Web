'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaArrowUp } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { socialLinks, quickLinks, footerContent } from '@/lib/footer-data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 animate-gradient" />
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">{footerContent.brand}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {footerContent.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <HiCode className="w-4 h-4" />
              <span>{footerContent.builtWith}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Follow me on social media and let&apos;s stay connected
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-lg glass-card hover:scale-110 transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>© {currentYear} {footerContent.copyright.name}. Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>{footerContent.copyright.text}</span>
          </motion.p>

          <motion.div
            className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={footerContent.links.privacy} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href={footerContent.links.terms} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-glow z-50 hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Floating gradient orbs */}
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  )
}
