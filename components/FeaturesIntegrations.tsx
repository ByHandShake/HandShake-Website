'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'
import Image from 'next/image'

type ImageIntegration = { name: string; image: string }
type IconIntegration = { name: string; icon: string; color: string }
type Integration = ImageIntegration | IconIntegration

const integrations: Integration[] = [
  { name: 'Clay', image: '/logos/clay.svg' },
  { name: 'n8n', icon: 'simple-icons:n8n', color: '#EA4B71' },
  { name: 'Instantly', image: '/logos/instantly.svg' },
  { name: 'RB2B', image: '/logos/rb2b.svg' },
  { name: 'Zapier', icon: 'simple-icons:zapier', color: '#FF4A00' },
  { name: 'Make', icon: 'simple-icons:make', color: '#6D00CC' },
  { name: 'Slack', icon: 'simple-icons:slack', color: '#4A154B' },
  { name: 'HubSpot', icon: 'simple-icons:hubspot', color: '#FF7A59' },
  { name: 'Go High Level', image: '/logos/gohighlevel.svg' },
  { name: 'Pipedrive', image: '/logos/pipedrive.svg' },
  { name: 'Close', image: '/logos/close.svg' },
  { name: 'Weezly', image: '/logos/weezly.svg' },
]

export function FeaturesIntegrations() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:puzzle" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Integrations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            Connects With Your
            <span className="text-blue-500 font-jakarta font-medium"> Favorite Tools</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
            Seamlessly integrate with your existing tech stack for a unified workflow
          </p>
        </div>

        <div
          className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-[32px] p-12 sm:p-16 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll"
          onMouseMove={handleMouseMove}
          style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
        >
          {/* Spotlight Effects */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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

          <div className="relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {integrations.map((integration, idx) => {
                const isImage = 'image' in integration
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-6 bg-black/30 border border-white/5 rounded-2xl hover:border-white/10 hover:scale-105 transition-all duration-300 group/int"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-3 shadow-lg group-hover/int:scale-110 transition-transform duration-300 overflow-hidden"
                    >
                      {isImage ? (
                        <Image 
                          src={(integration as ImageIntegration).image} 
                          alt={integration.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <Icon 
                          icon={(integration as IconIntegration).icon} 
                          className="w-8 h-8" 
                          style={{ color: (integration as IconIntegration).color }}
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-300 font-geist">{integration.name}</span>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <p className="text-gray-400 font-geist mb-6">
                Plus hundreds more through Zapier, webhooks, and our REST API
              </p>
              <span className="inline-flex items-center gap-2 text-blue-400 font-semibold font-geist">
                <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                Integrations coming soon
              </span>
            </div>
          </div>
        </div>

        {/* API Access */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <Icon icon="mdi:api" className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white font-jakarta mb-3">RESTful API</h3>
            <p className="text-gray-400 font-geist text-sm mb-4">
              Build custom integrations with our comprehensive REST API. Full documentation and SDKs available.
            </p>
            <span className="inline-flex items-center gap-2 text-blue-400/60 font-semibold font-geist text-sm">
              <Icon icon="mdi:clock-outline" className="w-4 h-4" />
              Coming soon
            </span>
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
              <Icon icon="mdi:webhook" className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white font-jakarta mb-3">Webhooks</h3>
            <p className="text-gray-400 font-geist text-sm mb-4">
              Get real-time notifications for campaign events, new messages, and more with custom webhooks.
            </p>
            <span className="inline-flex items-center gap-2 text-purple-400/60 font-semibold font-geist text-sm">
              <Icon icon="mdi:clock-outline" className="w-4 h-4" />
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

