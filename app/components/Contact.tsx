'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { 
  socialLinks, 
  contactInfo, 
  contactContent, 
  formLabels, 
  formValidation 
} from '@/lib/contact-data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < formValidation.name.minLength ? formValidation.name.errorMessage : ''
      case 'email':
        return !formValidation.email.pattern.test(value) ? formValidation.email.errorMessage : ''
      case 'subject':
        return value.length < formValidation.subject.minLength ? formValidation.subject.errorMessage : ''
      case 'message':
        return value.length < formValidation.message.minLength ? formValidation.message.errorMessage : ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }))
    }
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) newErrors[key] = error
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section id="contact" className="anchor-offset py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
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
            {contactContent.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {contactContent.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="glass-card p-4 rounded-xl group hover:scale-[1.02] transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                          <p className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                          <info.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 gradient-text">{contactContent.connectTitle}</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-4 rounded-xl glass-card hover:scale-110 transition-all duration-300 group"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <social.icon 
                        className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                        style={{ color: social.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <motion.div
                className="glass-card p-6 rounded-xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{contactContent.ctaTitle}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {contactContent.ctaDescription}
                  </p>
                  <a
                    href={`mailto:${contactContent.ctaEmail}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-glow"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl outline-none transition-all duration-300 text-gray-900 dark:text-white ${
                    errors.name 
                      ? 'border-red-500' 
                      : focusedField === 'name' || formData.name
                      ? 'border-purple-500'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? '-top-3 text-sm bg-white dark:bg-[#0a0a0f] px-2 text-purple-600 dark:text-purple-400'
                      : 'top-4 text-gray-600 dark:text-gray-500'
                  }`}
                >
                  {formLabels.name}
                </label>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl outline-none transition-all duration-300 text-gray-900 dark:text-white ${
                    errors.email 
                      ? 'border-red-500' 
                      : focusedField === 'email' || formData.email
                      ? 'border-purple-500'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? '-top-3 text-sm bg-white dark:bg-[#0a0a0f] px-2 text-purple-600 dark:text-purple-400'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  {formLabels.email}
                </label>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl outline-none transition-all duration-300 text-gray-900 dark:text-white ${
                    errors.subject 
                      ? 'border-red-500' 
                      : focusedField === 'subject' || formData.subject
                      ? 'border-purple-500'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'subject' || formData.subject
                      ? '-top-3 text-sm bg-white dark:bg-[#0a0a0f] px-2 text-purple-600 dark:text-purple-400'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  {formLabels.subject}
                </label>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={handleBlur}
                  rows={5}
                  className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white ${
                    errors.message 
                      ? 'border-red-500' 
                      : focusedField === 'message' || formData.message
                      ? 'border-purple-500'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? '-top-3 text-sm bg-white dark:bg-[#0a0a0f] px-2 text-purple-600 dark:text-purple-400'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  {formLabels.message}
                </label>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-white ${
                  isSuccess
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-glow hover:scale-[1.02]'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>{formLabels.sending}</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <FaCheckCircle className="w-5 h-5" />
                    <span>{formLabels.success}</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    <span>{formLabels.submit}</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                >
                  {contactContent.successMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
