'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const features = [
  {
    category: 'Accounts & Team',
    items: [
      { name: 'LinkedIn sender accounts', solo: '2', growth: '5', business: '10', agency: '20', scale: '50', infinity: 'Unlimited' },
      { name: 'Team Seats', solo: 'Unlimited', growth: 'Unlimited', business: 'Unlimited', agency: 'Unlimited', scale: 'Unlimited', infinity: 'Unlimited' },
      { name: 'Workspaces', solo: 'Unlimited', growth: 'Unlimited', business: 'Unlimited', agency: 'Unlimited', scale: 'Unlimited', infinity: 'Unlimited' },
      { name: 'Unified Inbox', solo: true, growth: true, business: true, agency: true, scale: true, infinity: true },
    ],
  },
  {
    category: 'Core Features',
    items: [
      { name: 'Premium Handshake Proxy', solo: true, growth: true, business: true, agency: true, scale: true, infinity: true },
      { name: 'Analytics', solo: 'Basic', growth: 'Advanced', business: 'Advanced', agency: 'Advanced', scale: 'Advanced', infinity: 'Advanced' },
      { name: 'Support', solo: 'Email', growth: 'Priority', business: 'Priority', agency: 'Priority', scale: 'Priority', infinity: 'Priority' },
      { name: 'Campaign templates', solo: false, growth: true, business: true, agency: true, scale: true, infinity: true },
      { name: 'A/B testing', solo: false, growth: false, business: true, agency: true, scale: true, infinity: true },
      { name: 'Smart scheduling', solo: false, growth: false, business: false, agency: true, scale: true, infinity: true },
      { name: 'Team collaboration tools', solo: false, growth: false, business: false, agency: false, scale: true, infinity: true },
    ],
  },
  {
    category: 'Enterprise',
    items: [
      { name: 'Enterprise security', solo: false, growth: false, business: false, agency: false, scale: false, infinity: true },
      { name: 'SSO & SAML', solo: false, growth: false, business: false, agency: false, scale: false, infinity: true },
    ],
  },
  {
    category: 'Coming Soon',
    items: [
      { name: 'Webhooks', solo: 'Soon', growth: 'Soon', business: 'Soon', agency: 'Soon', scale: 'Soon', infinity: 'Soon' },
      { name: 'API', solo: 'Soon', growth: 'Soon', business: 'Soon', agency: 'Soon', scale: 'Soon', infinity: 'Soon' },
    ],
  },
]

const plans = [
  { name: 'Solo', key: 'solo', color: 'emerald' },
  { name: 'Growth', key: 'growth', color: 'blue', popular: true },
  { name: 'Business', key: 'business', color: 'purple' },
  { name: 'Agency', key: 'agency', color: 'indigo' },
  { name: 'Scale', key: 'scale', color: 'blue' },
  { name: 'Infinity', key: 'infinity', color: 'purple' },
]

export function PricingComparison() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:table" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Feature Comparison
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            Compare All Features
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist">
            Detailed breakdown of what's included in each plan
          </p>
        </div>

        <div
          className="group spotlight-card overflow-x-auto bg-[#0A0A0A] border border-white/5 rounded-[32px] shadow-2xl [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll"
          onMouseMove={handleMouseMove}
          style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
        >
          {/* Spotlight Effects */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.08), transparent 40%)',
              zIndex: 1,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
              zIndex: 50,
            }}
          />

          <div className="min-w-[800px] relative z-10">
            {/* Header */}
            <div className="grid grid-cols-7 border-b border-white/5 bg-gradient-to-br from-white/5 to-white/0">
              <div className="col-span-1 p-6">
                <span className="text-sm font-semibold text-gray-400 font-geist">Features</span>
              </div>
              {plans.map((plan) => (
                <div key={plan.key} className="p-6 text-center border-l border-white/5">
                  <div className="text-sm font-bold text-white font-jakarta">{plan.name}</div>
                  {plan.popular && (
                    <span className="inline-block mt-1 text-[9px] font-semibold tracking-wide uppercase text-blue-400 font-geist">
                      Popular
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Features */}
            {features.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="bg-gradient-to-r from-white/5 to-transparent p-4 border-b border-white/5">
                  <h3 className="text-xs font-bold tracking-wide uppercase text-blue-400 font-geist">{category.category}</h3>
                </div>
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="grid grid-cols-7 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="col-span-1 p-4 flex items-center">
                      <span className="text-sm text-gray-300 font-geist">{item.name}</span>
                    </div>
                    {plans.map((plan) => (
                      <div key={plan.key} className="p-4 flex items-center justify-center border-l border-white/5">
                        {typeof item[plan.key as keyof typeof item] === 'boolean' ? (
                          item[plan.key as keyof typeof item] ? (
                            <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500" />
                          ) : (
                            <Icon icon="mdi:close" className="w-5 h-5 text-gray-700" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-white font-geist">
                            {item[plan.key as keyof typeof item] as string}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

