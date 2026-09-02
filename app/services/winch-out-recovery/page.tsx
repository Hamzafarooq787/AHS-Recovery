import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "winch-out-recovery")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/${service.slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    question: "What is winch-out recovery?",
    answer:
      "Winch-out recovery uses a winch cable to carefully pull a vehicle out of a difficult position, such as a ditch, mud, sand or a soft verge, before it's loaded and recovered as normal.",
  },
  {
    question: "Can you winch out a car stuck in a ditch or field?",
    answer:
      "Yes, this is one of the most common winch-out situations we deal with. We assess the ground and the vehicle's position before winching to avoid causing further damage.",
  },
  {
    question: "Is winching safe for my vehicle?",
    answer:
      "Our team uses appropriate winching points and equipment for the vehicle type, aiming to recover it without additional damage. We'll always explain the approach before starting.",
  },
  {
    question: "What if my vehicle is stuck somewhere with difficult access?",
    answer:
      "Let us know the situation, including how the vehicle got stuck and what the ground is like, so we can bring suitable equipment for the winch-out.",
  },
]

export default function WinchOutRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Winch-Out Recovery",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Winch-Out Recovery",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Winch-Out Recovery",
        item: `${siteConfig.siteUrl}/services/winch-out-recovery`,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate
        badge="Winch-Out Recovery"
        title="Winch-Out"
        titleHighlight="Recovery"
        intro="Stuck in mud, a ditch, a verge or soft ground? AHS Recovery provides winch-out recovery to carefully free your vehicle and get it back on solid ground."
        image={service.image}
        imageAlt="Recovery vehicle winching a car at sunset"
        coverageNote={`Winch-out recovery covers ${siteConfig.localCoverageArea}. Call ${siteConfig.phoneDisplay} and describe the situation so we bring the right equipment.`}
        paragraphs={[
          "Getting stuck off the hard surface — in a ditch, a muddy field entrance or a soft verge — is more common than you'd think, and it usually isn't something you can fix alone. AHS Recovery's winch-out service is built for exactly this.",
          "Using a winch and appropriate rigging, we carefully pull your vehicle free before assessing whether it can continue on its own or needs further recovery. We always take the ground conditions and vehicle position into account before we start.",
        ]}
        examples={[
          "A car stuck in a muddy field entrance or verge",
          "A vehicle that has slid into a ditch",
          "A car stuck in snow or on an icy incline",
          "A vehicle bogged down on soft or uneven ground",
        ]}
        features={[
          { title: "Winching Equipment", description: "Suitable cable and rigging for different ground conditions." },
          { title: "Careful Assessment", description: "Ground and vehicle position checked before winching begins." },
          { title: "Follow-On Recovery", description: "Vehicle towed or transported on once freed, if needed." },
          { title: "Local Response", description: `Covering ${siteConfig.localCoverageArea}.` },
        ]}
        faqs={faqs}
      />
    </>
  )
}
