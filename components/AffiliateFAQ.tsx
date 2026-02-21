'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { faqs } from '@/lib/affiliate-faqs'

export function AffiliateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between gap-4 p-6 text-left group"
          >
            <span className="text-base sm:text-lg font-semibold text-white font-geist group-hover:text-blue-400 transition-colors">
              {faq.question}
            </span>
            <Icon
              icon="mdi:chevron-down"
              className={`w-6 h-6 text-gray-400 transition-transform duration-300 shrink-0 ${
                openIndex === idx ? 'rotate-180 text-blue-400' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-6 text-sm sm:text-base text-gray-400 font-geist leading-relaxed border-t border-white/5 pt-6">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
