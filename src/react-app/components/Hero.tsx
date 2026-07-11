import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'
import { Button } from './ui/button'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Left: headline + signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 inline-block rounded-full border border-stone-300 bg-white px-4 py-1 text-xs font-medium tracking-wide text-stone-600">
              THE MODERN STOIC — A WEEKLY NEWSLETTER
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Master yourself.
              <br />
              <span className="text-amber-700">The rest will follow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              One short essay every Sunday on discipline, clarity, and building a
              calm, deliberate life in a noisy world. Ancient principles,
              modern practice — read in under five minutes.
            </p>

            {/* Signup form */}
            <div className="mt-8 max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">
                    This is a sample website — no email was sent, but thanks for trying it!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
                  />
                  <Button
                    type="submit"
                    className="h-auto rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-stone-50 hover:bg-stone-700 border-0"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}

              {/* Social proof line */}
              <div className="mt-4 flex items-center gap-3 text-sm text-stone-500">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span>Join 12,000+ deliberate readers (sample figure)</span>
              </div>
            </div>
          </motion.div>

          {/* Right: portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber-200 via-stone-200 to-stone-100 rotate-3" />
              <div className="relative flex h-72 w-64 flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white shadow-lg md:h-80 md:w-72">
                {/* Bust silhouette */}
                <svg viewBox="0 0 100 100" className="h-32 w-32 text-stone-300" fill="currentColor" aria-hidden="true">
                  <circle cx="50" cy="34" r="18" />
                  <path d="M50 56c-19 0-31 12-33 30h66c-2-18-14-30-33-30z" />
                </svg>
                <p className="mt-4 font-serif text-lg font-semibold text-stone-800">Marcus Avery</p>
                <p className="text-xs text-stone-500">Fictional author — sample portrait</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
