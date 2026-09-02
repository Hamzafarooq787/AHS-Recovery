import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "vehicle-recovery")!

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
    question: "What's the difference between vehicle recovery and towing?",
    answer:
      "Towing generally means pulling a vehicle on its wheels, while vehicle recovery can include loading a vehicle fully onto a trailer or recovery lorry, which is often safer for vehicles that can't be towed conventionally.",
  },
  {
    question: "What vehicles can you recover?",
    answer:
      "We recover cars, vans and light commercial vehicles, using a fleet ranging from 4x4 recovery trailers to 18-tonne recovery lorries, so we can match the right vehicle to the job.",
  },
  {
    question: "My vehicle won't move at all — can you still recover it?",
    answer:
      "In most cases, yes. If your vehicle is seized, has no power, or can't be safely towed, we can use loading equipment to recover it without needing to move it under its own power.",
  },
  {
    question: "Do you recover vehicles from private land, like a driveway or field?",
    answer:
      "In many cases yes, depending on access. Let us know the situation when you call, including any access restrictions, so we can bring the right equipment.",
  },
]

export default function VehicleRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Recovery",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Vehicle Recovery",
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
        name: "Vehicle Recovery",
        item: `${siteConfig.siteUrl}/services/vehicle-recovery`,
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
        badge="Vehicle Recovery"
        title="Vehicle"
        titleHighlight="Recovery"
        intro="When a vehicle can't be driven or safely towed, AHS Recovery provides full vehicle recovery, loading and transporting it to wherever it needs to go."
        image={service.image}
        imageAlt="Car being loaded onto a recovery vehicle"
        coverageNote={`Vehicle recovery is available across ${siteConfig.localCoverageArea}, with nationwide options for certain jobs. Call ${siteConfig.phoneDisplay} to check.`}
        paragraphs={[
          "Some vehicles simply can't be towed safely — whether due to mechanical failure, a locked steering wheel, or damage from an incident. Our vehicle recovery service uses loading equipment to move your vehicle without relying on its own wheels or power.",
          "We keep a fleet that ranges from 4x4 recovery trailers to 18-tonne recovery lorries, giving us the flexibility to handle different vehicles and recovery situations, from a small hatchback to a larger commercial vehicle.",
        ]}
        examples={[
          "A vehicle with a mechanical fault that prevents towing",
          "A car recovered after being immobilised or seized up",
          "Recovery from a driveway, field or private access point",
          "Moving a non-runner bought privately or at auction",
        ]}
        features={[
          { title: "Mixed Fleet", description: "From 4x4 recovery trailers to 18-tonne recovery lorries." },
          { title: "Full Loading Recovery", description: "Suitable for vehicles that can't be towed conventionally." },
          { title: "Local Coverage", description: `Serving ${siteConfig.localCoverageArea}.` },
          { title: "Careful Handling", description: "Equipment matched to your vehicle and its condition." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
