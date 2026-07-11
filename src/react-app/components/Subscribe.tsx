import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Mail } from 'lucide-react'
import { Button } from './ui/button'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <section id="subscribe" className="bg-stone-900 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 border border-stone-700">
            <Mail className="h-5 w-5 text-amber-500" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-50 md:text-4xl">
            One calm essay, every Sunday
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-400">
            Join 12,000+ readers (sample figure) building deliberate lives.
            Five minutes a week. No spam, no noise — unsubscribe anytime.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            {subscribed ? (
              <div className="flex items-center justify-center gap-3 rounded-xl border border-emerald-800 bg-emerald-950/60 px-5 py-4 text-emerald-300">
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
                  className="w-full rounded-full border border-stone-700 bg-stone-800 px-5 py-3 text-sm text-stone-100 placeholder-stone-500 outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-700"
                />
                <Button
                  type="submit"
                  className="h-auto rounded-full bg-amber-600 px-7 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-500 border-0"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
