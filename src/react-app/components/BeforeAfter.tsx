export default function BeforeAfter() {
  const comparisons = [
    {
      title: "Stillwater Coaching",
      before: { label: "Before", traffic: "120 visits/mo", leads: "2 leads/mo" },
      after: { label: "After", traffic: "2,400 visits/mo", leads: "48 leads/mo" }
    },
    {
      title: "The Quiet Grove Retreat",
      before: { label: "Before", traffic: "300 visits/mo", leads: "5 bookings/mo" },
      after: { label: "After", traffic: "3,100 visits/mo", leads: "62 bookings/mo" }
    },
    {
      title: "Seneca Spa",
      before: { label: "Before", traffic: "80 visits/mo", leads: "1 inquiry/mo" },
      after: { label: "After", traffic: "1,900 visits/mo", leads: "35 inquiries/mo" }
    },
    {
      title: "Iron Temple Fitness",
      before: { label: "Before", traffic: "210 visits/mo", leads: "4 sign-ups/mo" },
      after: { label: "After", traffic: "2,800 visits/mo", leads: "57 sign-ups/mo" }
    }
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dramatic <span className="text-black">Before & After</span> Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sample data showing how a single website transformation changes the way clients attract and convert customers online.
          </p>
        </div>

        {/* 2x2 Grid of Before/After Comparisons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                  {comparison.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                      {comparison.before.label}
                    </span>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Traffic</p>
                        <p className="text-lg font-bold text-gray-500">{comparison.before.traffic}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Conversions</p>
                        <p className="text-lg font-bold text-gray-500">{comparison.before.leads}</p>
                      </div>
                      <div className="space-y-1.5 pt-2">
                        <div className="h-1.5 rounded-full bg-gray-200 w-1/4" />
                        <div className="h-1.5 rounded-full bg-gray-200 w-1/3" />
                      </div>
                    </div>
                  </div>
                  {/* After */}
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
                    <span className="inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white mb-4">
                      {comparison.after.label}
                    </span>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-emerald-700">Traffic</p>
                        <p className="text-lg font-bold text-emerald-800">{comparison.after.traffic}</p>
                      </div>
                      <div>
                        <p className="text-xs text-emerald-700">Conversions</p>
                        <p className="text-lg font-bold text-emerald-800">{comparison.after.leads}</p>
                      </div>
                      <div className="space-y-1.5 pt-2">
                        <div className="h-1.5 rounded-full bg-emerald-300 w-full" />
                        <div className="h-1.5 rounded-full bg-emerald-400 w-5/6" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-gray-400">Sample figures for demonstration</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-black mb-2">95%+</div>
              <div className="text-gray-700 font-medium">Website Traffic Increase</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-black mb-2">86%+</div>
              <div className="text-gray-700 font-medium">Booking Increase</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-700 font-medium">Inquiry Increase</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer"
          >
            <span>Get Your Website</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
