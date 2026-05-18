'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Layers } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-indigo-100/80'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 cursor-pointer" aria-label="ArchIdent home">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
            <Layers className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <span className="font-cinzel font-semibold text-indigo-900 text-lg tracking-wide">
            Arch<span className="text-indigo-500">Ident</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-josefin text-sm font-medium text-indigo-600 hover:text-indigo-900 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="font-josefin text-sm font-medium text-indigo-600 hover:text-indigo-900 transition-colors duration-200 cursor-pointer"
          >
            Sign in
          </a>
          <a
            href="#"
            className="font-josefin px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200 cursor-pointer shadow-sm shadow-orange-200"
          >
            Get started free
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-indigo-700 hover:bg-indigo-50 transition-colors duration-200 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-indigo-100 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-josefin text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="font-josefin mt-2 px-5 py-3 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200 text-center cursor-pointer"
          >
            Get started free
          </a>
        </div>
      )}
    </header>
  )
}
