import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="border-y border-stone-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid items-center gap-10 md:grid-cols-[auto_1fr]"
        >
          {/* Small portrait */}
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-stone-200 bg-stone-100">
            <svg viewBox="0 0 100 100" className="h-20 w-20 text-stone-300" fill="currentColor" aria-hidden="true">
              <circle cx="50" cy="34" r="18" />
              <path d="M50 56c-19 0-31 12-33 30h66c-2-18-14-30-33-30z" />
            </svg>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-700">
              About
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Hi, I'm Marcus Avery
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                I'm a fictional author invented for this sample website. In this
                imaginary bio, I spent a decade leading teams at fast-growing
                companies before burning out, discovering the Stoics, and
                rebuilding my work life around a simple idea: control what you
                can, release what you can't.
              </p>
              <p>
                Now I write The Modern Stoic — a Sunday newsletter read by a
                (sample) community of 12,000+ people who want ambition without
                anxiety and progress without the noise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
