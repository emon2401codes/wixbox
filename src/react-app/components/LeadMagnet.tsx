import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from './ui/button'

export default function LeadMagnet() {
  const scrollToSubscribe = () => {
    document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="guide" className="bg-stone-100 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid items-center gap-10 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:grid-cols-[1fr_1.5fr] md:p-12"
        >
          {/* Mock guide cover */}
          <div className="mx-auto">
            <div className="relative h-72 w-52 -rotate-2 rounded-lg bg-gradient-to-b from-stone-900 to-stone-700 p-6 shadow-2xl">
              <div className="flex h-full flex-col justify-between border border-stone-500/40 p-4">
                <div>
                  <div className="mb-3 h-1 w-8 bg-amber-500" />
                  <p className="font-serif text-xl font-bold leading-snug text-stone-50">
                    The Stoic Operating System
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-stone-300">
                    A 20-page field guide to running your day with discipline and calm
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">Modern Stoic</p>
                  <p className="text-[9px] text-stone-500">Sample cover</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <BookOpen className="h-4 w-4" /> Free guide
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              The Stoic Operating System
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              A short, practical field guide to designing a deliberate day: a morning
              framework you can run in ten minutes, a simple rule for deciding what
              deserves your attention, and an evening review that takes less time than
              scrolling your phone. Free when you join the newsletter.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600" />
                The 10-minute morning framework for unshakeable focus
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600" />
                One question that filters 90% of distractions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600" />
                A 5-minute evening review you'll actually keep doing
              </li>
            </ul>
            <Button
              onClick={scrollToSubscribe}
              className="mt-7 h-auto rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-stone-50 hover:bg-stone-700 border-0"
            >
              Get the free guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
