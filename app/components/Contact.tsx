'use client'

export default function Contact() {
  return (
    <section id="contact" className="anchor-offset py-16 px-4 section-animate">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center sketch-underline hand-drawn animate-fade-delay-1">Get in Touch</h2>
        <div className="drawing-border p-6 animate-fade-delay-2">
          <form className="space-y-5 animate-fade-delay-3">
            <div>
              <label htmlFor="name" className="block mb-2 font-bold">Name</label>
              <input id="name" type="text" className="w-full px-4 py-2 drawing-border bg-transparent focus:outline-none focus:ring-2 focus:ring-current" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-bold">Email</label>
              <input id="email" type="email" className="w-full px-4 py-2 drawing-border bg-transparent focus:outline-none focus:ring-2 focus:ring-current" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-bold">Message</label>
              <textarea id="message" rows={6} className="w-full px-4 py-2 drawing-border bg-transparent focus:outline-none focus:ring-2 focus:ring-current resize-none" />
            </div>
            <button type="submit" className="sketch-button w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
