import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function ClientResultsGallery() {
  const clientResults = [{
    id: 1,
    name: "Sample Client — Marcus",
    message: "The new site feels so calm and clear. We started getting inquiries within the first week of launch!",
    detail: "Sample feedback about website improvements"
  }, {
    id: 2,
    name: "Sample Client — Elena",
    message: "We're finally showing up on the first page. Bookings are up and the site basically runs itself.",
    detail: "Sample feedback about SEO results and rankings"
  }, {
    id: 3,
    name: "Sample Client — Aurelius Co.",
    message: "Clean, fast, and exactly on brand. Our customers keep complimenting the new design.",
    detail: "Sample feedback about the new website design"
  }, {
    id: 4,
    name: "Sample Client — Seneca Spa",
    message: "Professional from start to finish. Everything was handled for us — we just watched the leads come in.",
    detail: "Sample feedback about professional website work"
  }];

  const FeedbackCard = ({ result }: { result: typeof clientResults[0] }) => (
    <div className="relative h-full rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-full bg-green-900/40 border border-green-800/40">
            <MessageCircle className="h-4 w-4 text-green-400" />
          </div>
          <span className="text-xs font-medium text-slate-300">{result.name}</span>
        </div>
        <div className="rounded-2xl rounded-tl-sm bg-slate-800/80 border border-slate-600/50 p-4 mb-4">
          <p className="text-sm text-slate-200 leading-relaxed">"{result.message}"</p>
        </div>
        <p className="mt-auto text-xs text-slate-400">{result.detail}</p>
      </div>
    </div>
  );

  return (
    <section id="results" className="py-16 md:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Feedback from Clients
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Sample messages showing the kind of feedback a Modern Stoic website earns.
          </p>
        </motion.div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clientResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeedbackCard result={result} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4">
            {clientResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-60"
              >
                <FeedbackCard result={result} />
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-700/50 px-3 py-2 rounded-full">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span>Swipe to see more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
