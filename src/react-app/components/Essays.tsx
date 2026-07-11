import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

type Essay = {
  tag: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

const featured: Essay[] = [
  {
    tag: 'Discipline',
    title: 'The Discipline of Subtraction',
    excerpt: 'Most people try to add their way to a better life. The Stoics did the opposite — and it works better today than ever.',
    date: 'Jul 6, 2026',
    readTime: '4 min read'
  },
  {
    tag: 'Focus',
    title: 'Your Attention Is the Whole Game',
    excerpt: 'Marcus Aurelius never saw a push notification, but he wrote the manual for handling them anyway.',
    date: 'Jun 29, 2026',
    readTime: '5 min read'
  },
  {
    tag: 'Career',
    title: 'Ambition Without Anxiety',
    excerpt: "You can want more without needing more. The distinction sounds small — it changes everything about how you work.",
    date: 'Jun 22, 2026',
    readTime: '4 min read'
  }
]

const recent: Essay[] = [
  {
    tag: 'Habits',
    title: 'The Evening Review',
    excerpt: 'Five minutes before bed that quietly compound into a different life. Here is the exact template.',
    date: 'Jun 15, 2026',
    readTime: '3 min read'
  },
  {
    tag: 'Money',
    title: 'Enough Is a Decision',
    excerpt: 'The number that finally satisfies you does not exist — unless you set it yourself, on purpose, in writing.',
    date: 'Jun 8, 2026',
    readTime: '5 min read'
  },
  {
    tag: 'Mindset',
    title: 'Obstacles, Reframed',
    excerpt: 'A practical walkthrough of turning this week\'s worst problem into this month\'s best decision.',
    date: 'Jun 1, 2026',
    readTime: '4 min read'
  }
]

function EssayCard({ essay, index }: { essay: Essay; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex h-full cursor-pointer flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <span className="mb-4 inline-block w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
        {essay.tag}
      </span>
      <h3 className="font-serif text-xl font-bold leading-snug text-stone-900 group-hover:text-amber-700 transition-colors">
        {essay.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
        {essay.excerpt}
      </p>
      <div className="mt-5 flex items-center gap-3 text-xs text-stone-400">
        <span>{essay.date}</span>
        <span className="h-1 w-1 rounded-full bg-stone-300" />
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {essay.readTime}
        </span>
      </div>
    </motion.article>
  )
}

export default function Essays() {
  return (
    <section id="essays" className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Featured essays
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Start here — sample essays readers return to most.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((essay, i) => (
            <EssayCard key={essay.title} essay={essay} index={i} />
          ))}
        </div>

        {/* Recent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 mt-16 md:mb-12 md:mt-20"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Recent essays
          </h2>
          <p className="mt-3 text-base text-stone-600">
            The latest from the newsletter, one every Sunday.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {recent.map((essay, i) => (
            <EssayCard key={essay.title} essay={essay} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
