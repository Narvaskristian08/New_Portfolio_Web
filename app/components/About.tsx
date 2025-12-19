'use client'

export default function About() {
  return (
    <section id="about" className="anchor-offset py-20 px-4 section-animate">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center sketch-underline hand-drawn animate-fade-delay-1">About Me</h2>
        <div className="drawing-border p-8 transform rotate-0.5 animate-fade-delay-2">
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            I&apos;m a developer who loves creating beautiful, functional web experiences.
            My work combines technical expertise with creative design thinking.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me sketching ideas, exploring new technologies,
            and bringing concepts to life through code.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Design', 'Development', 'Innovation'].map((skill, idx) => (
            <div
              key={skill}
              className="drawing-border p-6 text-center transform animate-fade-delay-3"
              style={{ transform: `rotate(${idx % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}
            >
              <h3 className="text-2xl font-bold mb-2">{skill}</h3>
              <p className="text-sm opacity-80">Creative solutions</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
