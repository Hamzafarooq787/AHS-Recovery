import HeroSection from "@/components/HeroSection"
import EmergencyCTAStrip from "@/components/EmergencyCTAStrip"
import FeaturedServicesSection from "@/components/FeaturedServicesSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection"
import RecoverySituationsSection from "@/components/RecoverySituationsSection"
import ProcessSection from "@/components/ProcessSection"
import CoverageSection from "@/components/CoverageSection"
import GalleryPreviewSection from "@/components/GalleryPreviewSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const metadata = {
  ...buildMetadata({
    title: "Vehicle Recovery Ilford & Essex | AHS Recovery",
    description:
      "Vehicle recovery in Ilford for cars and vans. AHS Recovery covers Essex and East London. Call 07576 614651.",
    path: "/",
  }),
  // Next.js normalizes a root canonical to strip the trailing slash; render it
  // directly so it matches the exact required value (https://ahsrecovery.co.uk/).
  alternates: { canonical: null },
}

const featuredServiceSlugs = [
  "vehicle-recovery",
  "towing",
  "breakdown-assistance",
  "roadside-assistance",
  "accident-recovery",
  "vehicle-transportation-delivery",
]

export default function HomePage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: featuredServiceSlugs.map((slug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        url: `${siteConfig.siteUrl}/services/${slug}`,
        areaServed: [siteConfig.location, "Essex", "East London"],
        provider: {
          "@type": "AutomotiveBusiness",
          name: siteConfig.name,
          telephone: siteConfig.phoneTel,
        },
      },
    })),
  }

  return (
    <main>
      <link rel="canonical" href={`${siteConfig.siteUrl}/`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <HeroSection />
      <EmergencyCTAStrip />
      <FeaturedServicesSection />
      <WhyChooseUsSection />
      <RecoverySituationsSection />
      <ProcessSection />
      <CoverageSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
