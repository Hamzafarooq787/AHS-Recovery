import HeroSection from "@/components/HeroSection"
import ServicesOverview from "@/components/ServicesOverview"
import RecoveryFeatures from "@/components/RecoveryFeatures"
import PhotoMarquee from "@/components/PhotoMarquee"
import LocationSection from "@/components/LocationSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Vehicle Recovery Ilford, Essex | Nationwide Breakdown & Transport | AHS Recovery",
  description:
    "AHS Recovery is based in Ilford, Essex, offering towing, breakdown assistance, accident recovery and roadside assistance locally within 60 miles, plus nationwide breakdown recovery and vehicle transportation. Call 07576 614651.",
})

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <RecoveryFeatures />
      <PhotoMarquee />
      <LocationSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
