import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { EditorMockup } from '@/components/EditorMockup'
import { ComparisonSection } from '@/components/ComparisonSection'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { CampaignFlowSection } from '@/components/CampaignFlowSection'
import { BentoSection } from '@/components/BentoSection'
import { TestimonialsFan } from '@/components/TestimonialsFan'
import { PricingTable } from '@/components/PricingTable'
import { PricingCTA } from '@/components/PricingCTA'
import { Footer } from '@/components/Footer'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { JsonLd } from '@/components/JsonLd'

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Handshake',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Multi-Account LinkedIn Automation Platform for agencies and B2B sales teams.',
  url: 'https://byhandshake.com',
}

export default function Home() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <Hero />
      <EditorMockup />
      <ComparisonSection />
      <FeaturesGrid />
      <CampaignFlowSection />
      <BentoSection />
      <TestimonialsFan />
      <PricingTable />
      <PricingCTA />
      <Footer />
    </>
  )
}
