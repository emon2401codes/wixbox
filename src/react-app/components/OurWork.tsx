import { motion } from 'framer-motion'

export default function OurWork() {
  const projects = [
    { name: "Stillwater Coaching", tagline: "Coaching that cuts through the noise", gradient: "from-blue-900 via-slate-800 to-slate-900", accent: "bg-blue-400" },
    { name: "Iron Temple Fitness", tagline: "Discipline equals freedom", gradient: "from-emerald-900 via-slate-800 to-slate-900", accent: "bg-emerald-400" },
    { name: "Meridian Consulting", tagline: "Clarity for growing teams", gradient: "from-purple-900 via-slate-800 to-slate-900", accent: "bg-purple-400" },
    { name: "The Quiet Grove Retreat", tagline: "Rest well, live well", gradient: "from-amber-900 via-slate-800 to-slate-900", accent: "bg-amber-400" }
  ]

  return (
    <section id="our-work" className="py-16 md:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Sample projects — calm, high-converting websites that drive real business results.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-700/50 backdrop-blur-sm border border-slate-600 mx-auto" style={{ width: '80%' }}>
                  <div className={`aspect-[9/16] overflow-hidden bg-gradient-to-b ${project.gradient} transition-transform duration-500 group-hover:scale-105`}>
                    {/* Mock browser chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                    </div>
                    {/* Mock page content */}
                    <div className="p-5 space-y-4">
                      <div className={`w-10 h-1 rounded-full ${project.accent}`} />
                      <div>
                        <p className="text-white font-bold text-lg leading-snug">{project.name}</p>
                        <p className="text-slate-300 text-xs mt-1">{project.tagline}</p>
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="h-2 rounded-full bg-white/20 w-full" />
                        <div className="h-2 rounded-full bg-white/15 w-4/5" />
                        <div className="h-2 rounded-full bg-white/10 w-3/5" />
                      </div>
                      <div className="pt-3">
                        <div className="inline-block rounded-full bg-white px-4 py-1.5 text-[10px] font-semibold text-slate-900">
                          Sample CTA
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-4">
                        <div className="h-16 rounded-lg bg-white/10 border border-white/10" />
                        <div className="h-16 rounded-lg bg-white/10 border border-white/10" />
                        <div className="h-16 rounded-lg bg-white/10 border border-white/10" />
                        <div className="h-16 rounded-lg bg-white/10 border border-white/10" />
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="h-2 rounded-full bg-white/15 w-full" />
                        <div className="h-2 rounded-full bg-white/10 w-2/3" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
