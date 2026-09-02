'use client'

import { FormEvent, useState } from 'react'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

type ContactResponse = {
  ok?: boolean
  message?: string
}

const fieldClassName =
  'w-full px-4 py-2 drawing-border bg-transparent focus:outline-none focus:ring-2 focus:ring-current disabled:cursor-not-allowed disabled:opacity-60'

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = () => {
    if (status === 'success' || status === 'error') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (status === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          website: formData.get('website'),
        }),
      })

      const result = (await response.json().catch(() => null)) as ContactResponse | null

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || 'Your message could not be sent. Please try again.')
      }

      form.reset()
      setStatus('success')
      setStatusMessage('Message sent! I’ll get back to you as soon as I can.')
    } catch (error) {
      setStatus('error')
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Your message could not be sent. Please try again.',
      )
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id="contact" className="anchor-offset py-16 px-4 section-animate">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center sketch-underline hand-drawn animate-fade-delay-1">
          Get in Touch
        </h2>
        <p className="mb-10 text-center opacity-75 animate-fade-delay-2">
          Have a project in mind? Tell me a little about it and I&apos;ll reply by email.
        </p>

        <div className="drawing-border p-6 animate-fade-delay-2">
          <form
            className="space-y-5 animate-fade-delay-3"
            onSubmit={handleSubmit}
            onChange={handleChange}
            aria-busy={isSubmitting}
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-bold">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={80}
                required
                disabled={isSubmitting}
                className={fieldClassName}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-bold">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                maxLength={254}
                required
                disabled={isSubmitting}
                className={fieldClassName}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-bold">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                minLength={3}
                maxLength={120}
                required
                disabled={isSubmitting}
                className={fieldClassName}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                minLength={10}
                maxLength={3000}
                required
                disabled={isSubmitting}
                className={`${fieldClassName} resize-y`}
              />
            </div>

            <div hidden>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="sketch-button w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p
                role="status"
                className="drawing-border border-green-700 p-3 text-sm font-semibold text-green-800 dark:border-green-400 dark:text-green-300"
              >
                {statusMessage}
              </p>
            )}

            {status === 'error' && (
              <p
                role="alert"
                className="drawing-border border-red-700 p-3 text-sm font-semibold text-red-800 dark:border-red-400 dark:text-red-300"
              >
                {statusMessage}
              </p>
            )}

            <p className="text-xs text-center opacity-65">
              Your details are used only to reply to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
