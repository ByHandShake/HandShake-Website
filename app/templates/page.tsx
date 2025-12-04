'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

type Category = 'all' | 'lead-gen' | 'sales' | 'networking' | 'recruiting' | 'abm'

interface Template {
  id: string
  name: string
  description: string
  category: Category
  categoryLabel: string
  steps: number
  uses: string
}

const templates: Template[] = [
  {
    id: '1',
    name: 'CEO Cold Outreach',
    description: 'Multi-touch sequence targeting C-level executives with personalized connection requests and value-driven follow-ups.',
    category: 'lead-gen',
    categoryLabel: 'Lead Generation',
    steps: 5,
    uses: '12.4k',
  },
  {
    id: '2',
    name: 'Agency Client Acquisition',
    description: 'Proven workflow for agencies to land retainer clients through strategic LinkedIn engagement and case study sharing.',
    category: 'sales',
    categoryLabel: 'Sales',
    steps: 6,
    uses: '8.7k',
  },
  {
    id: '3',
    name: 'SaaS Demo Booking',
    description: 'Optimized sequence to convert LinkedIn connections into booked product demos with qualifying questions built in.',
    category: 'sales',
    categoryLabel: 'Sales',
    steps: 4,
    uses: '15.2k',
  },
  {
    id: '4',
    name: 'Event Follow-Up Sequence',
    description: 'Post-conference outreach flow to nurture connections made at industry events into meaningful business relationships.',
    category: 'networking',
    categoryLabel: 'Networking',
    steps: 4,
    uses: '6.3k',
  },
  {
    id: '5',
    name: 'Recruiter Candidate Outreach',
    description: 'High-response recruiting sequence for sourcing passive candidates with personalized role pitches and company culture highlights.',
    category: 'recruiting',
    categoryLabel: 'Recruiting',
    steps: 5,
    uses: '9.8k',
  },
  {
    id: '6',
    name: 'ABM Decision Maker Campaign',
    description: 'Account-based marketing workflow targeting multiple stakeholders within a single organization with coordinated messaging.',
    category: 'abm',
    categoryLabel: 'Account-Based',
    steps: 7,
    uses: '4.2k',
  },
  {
    id: '7',
    name: 'Partnership Request Flow',
    description: 'Strategic sequence for initiating partnership conversations with complementary businesses and potential collaborators.',
    category: 'networking',
    categoryLabel: 'Networking',
    steps: 4,
    uses: '5.1k',
  },
  {
    id: '8',
    name: 'Investor Outreach Sequence',
    description: 'Founder-focused workflow for connecting with VCs and angel investors with traction highlights and meeting requests.',
    category: 'lead-gen',
    categoryLabel: 'Lead Generation',
    steps: 5,
    uses: '7.6k',
  },
  {
    id: '9',
    name: 'Warm Referral Introduction',
    description: 'Leverage mutual connections to open doors with warm intros and trust-building touchpoints before the ask.',
    category: 'networking',
    categoryLabel: 'Networking',
    steps: 3,
    uses: '11.9k',
  },
]

const categories = [
  { value: 'all', label: 'All Templates' },
  { value: 'lead-gen', label: 'Lead Generation' },
  { value: 'sales', label: 'Sales' },
  { value: 'networking', label: 'Networking' },
  { value: 'recruiting', label: 'Recruiting' },
  { value: 'abm', label: 'Account-Based' },
]

function WorkflowPreview({ steps, templateId }: { steps: number; templateId: string }) {
  // Generate different workflow layouts based on template
  const layouts: Record<string, React.ReactNode> = {
    '1': (
      // Linear sequence with branch
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-${templateId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path d="M20 50 L50 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M70 50 L100 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M120 50 L150 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M150 50 L170 30" stroke="#3f3f46" strokeWidth="2" />
        <path d="M150 50 L170 70" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="20" cy="50" r="8" fill={`url(#grad-${templateId})`} />
        <circle cx="60" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="110" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="150" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="180" cy="30" r="6" fill="#22c55e" />
        <circle cx="180" cy="70" r="6" fill="#ef4444" />
      </svg>
    ),
    '2': (
      // Complex multi-branch
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M20 50 L50 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M50 50 L80 25" stroke="#3f3f46" strokeWidth="2" />
        <path d="M50 50 L80 75" stroke="#3f3f46" strokeWidth="2" />
        <path d="M80 25 L120 25" stroke="#3f3f46" strokeWidth="2" />
        <path d="M80 75 L120 75" stroke="#3f3f46" strokeWidth="2" />
        <path d="M120 25 L150 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M120 75 L150 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M150 50 L180 50" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="20" cy="50" r="8" fill="#3b82f6" />
        <circle cx="50" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <rect x="72" y="17" width="16" height="16" rx="3" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <rect x="72" y="67" width="16" height="16" rx="3" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="120" cy="25" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="120" cy="75" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="150" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="180" cy="50" r="8" fill="#22c55e" />
      </svg>
    ),
    '3': (
      // Simple linear
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M25 50 L65 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M85 50 L125 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M145 50 L175 50" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="25" cy="50" r="10" fill="#3b82f6" />
        <rect x="65" y="40" width="20" height="20" rx="4" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <rect x="125" y="40" width="20" height="20" rx="4" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="175" cy="50" r="10" fill="#22c55e" />
      </svg>
    ),
    '4': (
      // Loop back
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M30 60 L60 60" stroke="#3f3f46" strokeWidth="2" />
        <path d="M80 60 L120 60" stroke="#3f3f46" strokeWidth="2" />
        <path d="M140 60 L170 60" stroke="#3f3f46" strokeWidth="2" />
        <path d="M100 48 L100 30 L60 30 L60 48" stroke="#3f3f46" strokeWidth="2" fill="none" strokeDasharray="4 2" />
        <circle cx="30" cy="60" r="8" fill="#3b82f6" />
        <circle cx="70" cy="60" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="130" cy="60" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="170" cy="60" r="8" fill="#22c55e" />
        <rect x="92" y="52" width="16" height="16" rx="3" fill="#f59e0b" />
      </svg>
    ),
    '5': (
      // Sequential with delay nodes
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M20 50 L45 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M65 50 L90 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M110 50 L135 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M155 50 L180 50" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="20" cy="50" r="8" fill="#3b82f6" />
        <circle cx="55" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <rect x="90" y="42" width="20" height="16" rx="2" fill="#27272a" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="145" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="180" cy="50" r="8" fill="#22c55e" />
        <text x="100" y="54" fill="#f59e0b" fontSize="8" textAnchor="middle">3d</text>
      </svg>
    ),
    '6': (
      // Multi-target ABM
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M30 50 L60 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M80 50 L100 20" stroke="#3f3f46" strokeWidth="2" />
        <path d="M80 50 L100 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M80 50 L100 80" stroke="#3f3f46" strokeWidth="2" />
        <path d="M115 20 L145 20" stroke="#3f3f46" strokeWidth="2" />
        <path d="M115 50 L145 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M115 80 L145 80" stroke="#3f3f46" strokeWidth="2" />
        <path d="M160 20 L180 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M160 50 L180 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M160 80 L180 50" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="30" cy="50" r="8" fill="#3b82f6" />
        <rect x="60" y="40" width="20" height="20" rx="4" fill="#27272a" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="107" cy="20" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="107" cy="50" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="107" cy="80" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="152" cy="20" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="152" cy="50" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="152" cy="80" r="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="180" cy="50" r="8" fill="#22c55e" />
      </svg>
    ),
    '7': (
      // Simple partnership
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M30 50 L70 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M90 50 L130 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M150 50 L170 50" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="30" cy="50" r="10" fill="#3b82f6" />
        <rect x="70" y="38" width="20" height="24" rx="4" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <rect x="130" y="38" width="20" height="24" rx="4" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="170" cy="50" r="10" fill="#22c55e" />
        <path d="M75 50 L85 50" stroke="#3f3f46" strokeWidth="1" />
        <path d="M135 50 L145 50" stroke="#3f3f46" strokeWidth="1" />
      </svg>
    ),
    '8': (
      // Investor funnel
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M25 50 L55 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M75 50 L105 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M125 50 L145 35" stroke="#3f3f46" strokeWidth="2" />
        <path d="M125 50 L145 65" stroke="#3f3f46" strokeWidth="2" />
        <path d="M155 35 L175 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M155 65 L175 50" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="25" cy="50" r="8" fill="#3b82f6" />
        <circle cx="65" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="115" cy="50" r="8" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="150" cy="35" r="6" fill="#22c55e" />
        <circle cx="150" cy="65" r="6" fill="#ef4444" />
        <circle cx="180" cy="50" r="8" fill="#f59e0b" />
      </svg>
    ),
    '9': (
      // Simple warm intro
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M35 50 L85 50" stroke="#3f3f46" strokeWidth="2" />
        <path d="M115 50 L165 50" stroke="#3f3f46" strokeWidth="2" />
        <circle cx="35" cy="50" r="10" fill="#3b82f6" />
        <rect x="85" y="35" width="30" height="30" rx="6" fill="#27272a" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="100" cy="50" r="8" fill="#8b5cf6" fillOpacity="0.3" />
        <circle cx="165" cy="50" r="10" fill="#22c55e" />
      </svg>
    ),
  }

  return layouts[templateId] || layouts['3']
}

function TemplateCard({ template }: { template: Template }) {
  const categoryColors: Record<Category, string> = {
    'all': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    'lead-gen': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'sales': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'networking': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'recruiting': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'abm': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  }

  return (
    <div className="group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col">
      {/* Workflow Preview */}
      <div className="h-32 bg-[#0f0f11] border-b border-white/5 p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
        <div className="relative z-10 h-full">
          <WorkflowPreview steps={template.steps} templateId={template.id} />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${categoryColors[template.category]}`}>
            {template.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">
          {template.name}
        </h3>
        <p className="text-sm text-gray-400 font-geist leading-relaxed mb-4 flex-grow">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-4 text-xs text-gray-500 font-geist">
            <span className="flex items-center gap-1">
              <Icon icon="solar:routing-2-bold-duotone" className="w-4 h-4" />
              {template.steps} steps
            </span>
            <span className="flex items-center gap-1">
              <Icon icon="solar:users-group-rounded-bold-duotone" className="w-4 h-4" />
              {template.uses} uses
            </span>
          </div>
          <a href="https://app.byhandshake.com/login" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors font-geist flex items-center gap-1 group/btn">
            Use Template
            <Icon icon="mdi:arrow-right" className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const templatesPerPage = 6

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory)

  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage)
  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * templatesPerPage,
    currentPage * templatesPerPage
  )

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                <Icon icon="solar:document-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
                  Campaign Templates
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
                Launch Campaigns in
                <br className="hidden sm:block" />
                <span className="text-blue-500">Minutes, Not Days</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
                Battle-tested workflows from top-performing outbound teams. Pick a template, customize your messaging, and start booking meetings.
              </p>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="pb-20 sm:pb-24 md:pb-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Filters */}
            <div className="mb-8 sm:mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => handleCategoryChange(category.value as Category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium font-geist transition-all duration-300 ${
                        selectedCategory === category.value
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-[#0A0A0A] text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-geist">
                  {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} available
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
              {paginatedTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-[#0A0A0A] border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium font-geist transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-[#0A0A0A] text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-[#0A0A0A] border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight font-jakarta mb-6">
                Can't Find What You Need?
              </h2>
              <p className="text-base sm:text-lg text-gray-400 font-geist mb-8 max-w-2xl mx-auto">
                Build custom workflows from scratch with our visual campaign builder. Or request a template and we'll build it for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://app.byhandshake.com/signup" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide group">
                  Start Building
                  <Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:templates@byhandshake.com" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] uppercase tracking-wide">
                  Request a Template
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
