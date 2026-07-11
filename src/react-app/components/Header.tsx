import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Essays', id: 'essays' },
    { label: 'Free Guide', id: 'guide' },
    { label: 'About', id: 'about' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/95 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 font-serif text-base font-bold text-stone-50">
              MS
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-stone-900">
              Modern Stoic
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('subscribe')}
              size="default"
              className="rounded-full bg-stone-900 text-stone-50 hover:bg-stone-700 border-0"
            >
              Subscribe
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200 transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-stone-50/95 backdrop-blur-xl">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('subscribe')}
                  className="w-full rounded-full bg-stone-900 text-stone-50 hover:bg-stone-700 border-0"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
