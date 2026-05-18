import { Palette, Type, Layers, BookOpen, Download, Zap, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Identity Engine',
    description:
      'Input your brand values and industry. Our AI architects a complete, coherent identity system in seconds — no blank canvas paralysis.',
    color: 'indigo',
    large: true,
  },
  {
    icon: Palette,
    title: 'Color System',
    description:
      'Semantically structured palettes with automatic WCAG accessibility compliance and dark mode variants built in.',
    color: 'violet',
  },
  {
    icon: Type,
    title: 'Typography Scale',
    description:
      'Curated font pairings and modular type scales that embody your brand voice across every medium.',
    color: 'indigo',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description:
      'Auto-generate UI components — buttons, cards, forms, navbars — that inherit your entire identity system and stay consistent everywhere.',
    color: 'orange',
    large: true,
  },
  {
    icon: BookOpen,
    title: 'Brand Guidelines',
    description:
      'Export publication-ready brand guidelines your team and partners can actually use.',
    color: 'violet',
  },
  {
    icon: Download,
    title: 'Multi-Platform Export',
    description:
      'Design tokens and assets for Web, iOS, Android, Figma, and Storybook — one source of truth.',
    color: 'indigo',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Real-time editing, comments, and version history so every designer works from the same system.',
    color: 'indigo',
  },
  {
    icon: Shield,
    title: 'Brand Governance',
    description:
      'Enforce consistency with usage rules, off-brand alerts, and approval workflows.',
    color: 'violet',
  },
]

const colorMap = {
  indigo: {
    card: 'bg-indigo-50 border-indigo-100 hover:shadow-indigo-100',
    icon: 'bg-indigo-600 text-white',
  },
  violet: {
    card: 'bg-violet-50 border-violet-100 hover:shadow-violet-100',
    icon: 'bg-violet-600 text-white',
  },
  orange: {
    card: 'bg-orange-50 border-orange-100 hover:shadow-orange-100',
    icon: 'bg-orange-500 text-white',
  },
}

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-josefin text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4 block">
            Everything You Need
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            The Complete Identity Stack
          </h2>
          <p className="font-josefin text-lg text-indigo-400 max-w-xl mx-auto leading-relaxed">
            Every tool you need to build, manage, and scale a professional brand identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature) => {
            const colors = colorMap[feature.color as keyof typeof colorMap]
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`${
                  feature.large ? 'md:col-span-2' : ''
                } group p-8 rounded-3xl border ${colors.card} hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-indigo-900 mb-3">
                  {feature.title}
                </h3>
                <p className="font-josefin text-indigo-500 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
