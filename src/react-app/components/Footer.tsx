import { Mail } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-stone-950 py-12 text-stone-400 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-50 font-serif text-sm font-bold text-stone-900">
                MS
              </div>
              <span className="font-serif text-lg font-bold text-stone-50">Modern Stoic</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              A weekly newsletter on discipline, clarity, and deliberate living.
              This is a sample website — all names, testimonials, and figures
              are fictional placeholders.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-stone-200">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection('essays')} className="hover:text-stone-100 transition-colors">
                  Essays
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('guide')} className="hover:text-stone-100 transition-colors">
                  Free Guide
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-stone-100 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('subscribe')} className="hover:text-stone-100 transition-colors">
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-stone-200">Connect</h4>
            <a
              href="mailto:hello@modernstoic.example"
              className="inline-flex items-center gap-2 text-sm hover:text-stone-100 transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@modernstoic.example
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-stone-800 pt-6 text-center md:mt-12 md:pt-8">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Modern Stoic. All rights reserved.
            This is a sample website for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
