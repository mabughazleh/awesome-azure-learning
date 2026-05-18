import { Search, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Define Your Foundation',
    description:
      'Tell ArchIdent about your brand — industry, values, target audience, and aesthetic direction. The more context, the sharper your identity.',
    detail: 'Takes less than 5 minutes',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Architects Your System',
    description:
      'Our reasoning engine analyzes 161 industry-specific design rules and generates a complete identity: colors, typography, spacing, components, and tone of voice.',
    detail: 'Generated in seconds',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy Everywhere',
    description:
      'Export as design tokens, CSS variables, Figma libraries, or full component code. Your brand is consistent from day one across every platform.',
    detail: 'Ship-ready output',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-josefin text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            From Idea to Identity
          </h2>
          <p className="font-josefin text-lg text-indigo-300 max-w-xl mx-auto leading-relaxed">
            A systematic three-step process that turns brand thinking into a deployable design system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-indigo-800/80 border border-indigo-700 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-indigo-300" strokeWidth={1} aria-hidden="true" />
                  </div>
                  <span
                    className="absolute -top-4 -right-4 font-cinzel text-6xl font-bold text-indigo-800/70 leading-none select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="font-josefin text-indigo-300 leading-relaxed mb-6 text-[15px]">
                  {step.description}
                </p>
                <span className="font-josefin text-xs font-semibold text-orange-400 tracking-widest uppercase">
                  {step.detail}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
