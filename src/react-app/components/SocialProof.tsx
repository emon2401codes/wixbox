import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function SocialProof() {
  const quotes = [
    {
      quote: "The rare newsletter I actually finish. Every issue leaves me a little calmer and a lot more focused.",
      name: "Elena Voss",
      role: "Author of the (fictional) book Quiet Ambition"
    },
    {
      quote: "Cuts against the hustle-culture grain. Practical stoicism without the toga cosplay.",
      name: "Diogo Reyes",
      role: "Writer & podcast host (sample testimonial)"
    },
    {
      quote: "I forward this to my whole team every Sunday. It's become our unofficial operating manual.",
      name: "Priya Sharma",
      role: "Founder, Meridian Labs (fictional)"
    }
  ]

  return (
    <section className="border-y border-stone-200 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {quotes.map((item, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Quote className="mb-3 h-5 w-5 text-amber-600" />
              <blockquote className="text-sm leading-relaxed text-stone-700">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                <p className="text-xs text-stone-500">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
