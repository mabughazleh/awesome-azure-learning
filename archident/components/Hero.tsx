import { ArrowRight, Sparkles } from 'lucide-react'

const stats = [
  { value: '2,400+', label: 'Brand Systems Built' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10x', label: 'Faster Than Manual' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-indigo-50 pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-indigo-100/80 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-violet-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full bg-orange-50 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(to right, #4F46E5 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-28 right-16 w-28 h-28 border-2 border-indigo-200/60 rounded-2xl rotate-12" />
        <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-orange-200/60 rounded-xl -rotate-6" />
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-indigo-400/50 rounded-full" />
        <div className="absolute bottom-40 right-1/3 w-2.5 h-2.5 bg-orange-400/50 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-violet-400/40 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full mb-10">
          <Sparkles className="w-4 h-4 text-indigo-500" strokeWidth={1.5} aria-hidden="true" />
          <span className="font-josefin text-sm font-medium text-indigo-700 tracking-wide">
            AI-Powered Identity Architecture
          </span>
        </div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-[82px] font-bold text-indigo-900 leading-[1.1] mb-6">
          Architect Your
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500">
              Identity
            </span>
            <span
              className="absolute bottom-1 left-0 right-0 h-3 bg-orange-200/70 -z-0 -skew-x-1"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="font-josefin text-xl md:text-2xl text-indigo-500 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Transform scattered design decisions into a cohesive system.
          Colors, typography, components, and brand guidelines — unified.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white text-base font-semibold rounded-2xl hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-200 hover:shadow-orange-300 cursor-pointer font-josefin"
          >
            Start building free
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 text-base font-semibold rounded-2xl border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 cursor-pointer font-josefin"
          >
            See how it works
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 pt-10 border-t border-indigo-100">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-4xl font-bold text-indigo-900 mb-1">{stat.value}</div>
              <div className="font-josefin text-xs text-indigo-400 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
