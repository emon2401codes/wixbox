import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Marcus A.",
      role: "Founder, Stillwater Coaching",
      quote: "They stripped away everything that didn't matter. What's left is a site that quietly does its job — and my calendar has never been fuller."
    },
    {
      id: 2,
      name: "Elena V.",
      role: "Owner, Seneca Spa",
      quote: "I stopped worrying about my website entirely. It loads fast, looks beautiful, and bookings come in every single day."
    },
    {
      id: 3,
      name: "Diogo R.",
      role: "Manager, Iron Temple Fitness",
      quote: "The process was simple and calm — one call, a clear plan, and a launch in two weeks. Sign-ups jumped almost immediately."
    },
    {
      id: 4,
      name: "Priya S.",
      role: "Director, Meridian Consulting",
      quote: "Our old site confused people. The new one explains what we do in seconds, and prospects arrive at calls already convinced."
    },
    {
      id: 5,
      name: "Tom H.",
      role: "Host, The Quiet Grove Retreat",
      quote: "Guests tell us the website felt like the retreat itself — calm and effortless. That first impression is why they book."
    }
  ]

  // Auto-scroll functionality for mobile only
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    return (
      <div className="relative h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-600">
        <div className="flex h-full flex-col p-5">
          <Quote className="h-6 w-6 text-blue-400/60 mb-3" />
          <p className="text-slate-200 text-sm leading-relaxed mb-4">
            "{testimonial.quote}"
          </p>
          <div className="mt-auto">
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white font-medium text-xs">{testimonial.name}</p>
            <p className="text-slate-400 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Straight From Our Clients
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Sample testimonials showing the kind of stories clients share after launch
          </p>
        </div>

        {/* Mobile: Single Card with Navigation */}
        <div className="block sm:hidden">
          <div className="relative max-w-sm mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentSlide]} />
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: All Cards in Single Row */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-xs text-slate-400">
            <span className="sm:hidden">Swipe or tap arrows to see more testimonials</span>
            <span className="hidden sm:inline">Sample testimonials for demonstration purposes</span>
          </p>
        </div>
      </div>
    </section>
  )
}
