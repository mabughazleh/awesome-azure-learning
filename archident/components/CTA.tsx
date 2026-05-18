import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-indigo-900 rounded-3xl px-8 py-20 md:px-20 text-center">
          {/* Background shapes */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-800/60"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-violet-800/40"
            aria-hidden="true"
          />
          <div
            className="absolute top-10 left-10 w-8 h-8 border border-indigo-600 rounded-sm rotate-45"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 right-10 w-5 h-5 border border-orange-500/50 rounded-sm rotate-12"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-8 w-2 h-2 bg-indigo-500/60 rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/3 right-16 w-2 h-2 bg-orange-400/50 rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Brand,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Architected.
              </span>
            </h2>
            <p className="font-josefin text-xl text-indigo-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Join 2,400+ brand teams building with systematic identity architecture.
              Start for free — no credit card needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white text-base font-semibold rounded-2xl hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-900/40 cursor-pointer font-josefin"
              >
                Build your identity system
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 text-indigo-300 text-base font-semibold rounded-2xl border border-indigo-700 hover:bg-indigo-800 hover:border-indigo-600 transition-colors duration-200 cursor-pointer font-josefin"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
