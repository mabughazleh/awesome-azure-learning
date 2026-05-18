import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for freelancers and independent brand designers.',
    features: [
      '1 brand system',
      '3 team members',
      'Core identity engine',
      'CSS & JSON token export',
      'Email support',
    ],
    cta: 'Start free trial',
    popular: false,
  },
  {
    name: 'Studio',
    price: '149',
    description: 'For design studios and growing brand teams.',
    features: [
      '5 brand systems',
      '15 team members',
      'Full identity engine',
      'All export formats',
      'Component library gen',
      'Brand guidelines PDF',
      'Priority support',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For agencies and enterprises with advanced requirements.',
    features: [
      'Unlimited brands',
      'Unlimited members',
      'Custom reasoning rules',
      'Private deployment',
      'SSO & advanced security',
      'Dedicated CSM',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-josefin text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-josefin text-lg text-indigo-400 max-w-lg mx-auto">
            Start free for 14 days. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-indigo-600 bg-indigo-900 shadow-2xl shadow-indigo-200'
                  : 'border-indigo-100 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full font-josefin tracking-wide shadow-sm">
                    <Zap className="w-3 h-3" aria-hidden="true" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex-1">
                <div
                  className={`font-cinzel text-xl font-semibold mb-3 ${
                    plan.popular ? 'text-white' : 'text-indigo-900'
                  }`}
                >
                  {plan.name}
                </div>

                <div className="flex items-end gap-1 mb-3">
                  {plan.price !== 'Custom' && (
                    <span
                      className={`font-josefin text-base font-medium mt-2 ${
                        plan.popular ? 'text-indigo-300' : 'text-indigo-400'
                      }`}
                    >
                      $
                    </span>
                  )}
                  <span
                    className={`font-cinzel text-5xl font-bold leading-none ${
                      plan.popular ? 'text-white' : 'text-indigo-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span
                      className={`font-josefin text-sm mb-1.5 ${
                        plan.popular ? 'text-indigo-300' : 'text-indigo-400'
                      }`}
                    >
                      /mo
                    </span>
                  )}
                </div>

                <p
                  className={`font-josefin text-sm leading-relaxed mb-8 ${
                    plan.popular ? 'text-indigo-300' : 'text-indigo-400'
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
                          plan.popular ? 'bg-indigo-700' : 'bg-indigo-100'
                        }`}
                        aria-hidden="true"
                      >
                        <Check
                          className={`w-3 h-3 ${plan.popular ? 'text-indigo-200' : 'text-indigo-600'}`}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span
                        className={`font-josefin text-sm ${
                          plan.popular ? 'text-indigo-200' : 'text-indigo-600'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`block w-full py-3.5 rounded-2xl text-sm font-semibold text-center transition-colors duration-200 cursor-pointer font-josefin ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm'
                    : 'border border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
