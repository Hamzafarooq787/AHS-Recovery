import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import ServicesOverview from "@/components/ServicesOverview"
import RecoveryFeatures from "@/components/RecoveryFeatures"
import LocationSection from "@/components/LocationSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Vehicle Recovery Ilford, Essex | Nationwide Breakdown & Transport | AHS Recovery",
  description:
    "AHS Recovery is based in Ilford, Essex, offering towing, breakdown assistance, accident recovery and roadside assistance locally within 60 miles, plus nationwide breakdown recovery and vehicle transportation. Call 07462 486149.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <RecoveryFeatures />
      <LocationSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
