import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "ArchIdent transformed how we manage our brand. What used to take weeks of back-and-forth now takes an afternoon. Our entire team works from the same system.",
    name: 'Sarah Chen',
    role: 'Brand Director',
    company: 'Velocity Studio',
    initials: 'SC',
    bg: 'bg-indigo-600',
  },
  {
    quote:
      "The systematic approach to identity is exactly what modern agencies need. I used to dread brand handoff. Now I share a link and it's done.",
    name: 'Marcus Okonkwo',
    role: 'Creative Director',
    company: 'Obsidian Creative',
    initials: 'MO',
    bg: 'bg-violet-600',
  },
  {
    quote:
      "Our brand is finally consistent across every touchpoint — website, app, print, social. ArchIdent made that possible without a full rebrand budget.",
    name: 'Priya Sharma',
    role: 'CMO',
    company: 'TechFlow',
    initials: 'PS',
    bg: 'bg-orange-500',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-josefin text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-indigo-900">
            Trusted by Brand Builders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 cursor-default flex flex-col"
            >
              <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="font-josefin text-indigo-600 leading-relaxed mb-8 text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${t.bg} flex items-center justify-center flex-shrink-0`}
                  aria-hidden="true"
                >
                  <span className="font-cinzel text-sm font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="font-josefin font-semibold text-indigo-900 text-sm">{t.name}</div>
                  <div className="font-josefin text-xs text-indigo-400 mt-0.5">
                    {t.role} &middot; {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
