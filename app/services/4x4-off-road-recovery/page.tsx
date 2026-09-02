import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "4x4-off-road-recovery")!

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
    question: "Do you recover 4x4s as well as recovering vehicles off-road?",
    answer:
      "Yes, both. We recover 4x4 vehicles that have broken down or been involved in an incident, and we also recover other vehicles that have become stuck off-road using our 4x4 recovery trailers.",
  },
  {
    question: "What kind of off-road situations can you help with?",
    answer:
      "We help with vehicles stuck on tracks, in fields, on beaches, in car parks with soft ground, or anywhere off the standard road surface where access is more difficult.",
  },
  {
    question: "Can your equipment reach difficult or remote locations?",
    answer:
      "Our 4x4 recovery trailers are built for exactly this kind of access. Let us know as much detail as possible about the location and ground conditions when you call.",
  },
  {
    question: "Is off-road recovery available outside the local area?",
    answer:
      "Our 4x4 and off-road recovery service is based around Ilford, Essex and locations within approximately 60 miles. Call us to check availability for locations further afield.",
  },
]

export default function FourByFourOffRoadRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "4x4 & Off-Road Recovery",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Off-Road Vehicle Recovery",
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
        name: "4x4 & Off-Road Recovery",
        item: `${siteConfig.siteUrl}/services/4x4-off-road-recovery`,
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
        badge="4x4 & Off-Road Recovery"
        title="4x4 & Off-Road"
        titleHighlight="Recovery"
        intro="Whether it's a 4x4 that's broken down or a vehicle stuck off the beaten track, AHS Recovery uses purpose-built 4x4 recovery trailers to reach difficult locations."
        image={service.image}
        imageAlt="4x4 recovery vehicle handling an off-road recovery"
        coverageNote={`4x4 and off-road recovery covers ${siteConfig.localCoverageArea}. Call ${siteConfig.phoneDisplay} with details of your location.`}
        paragraphs={[
          "Off-road situations call for different equipment than a standard roadside recovery, whether that's a 4x4 that's broken down on a track or a car that's ended up somewhere it shouldn't be. Our 4x4 recovery trailers are built for this kind of access.",
          "We assess the terrain and vehicle position before starting, so recovery is carried out safely without causing extra damage to the vehicle or the land it's on.",
        ]}
        examples={[
          "A 4x4 broken down on a rural track or farm access road",
          "A vehicle stuck on soft ground, sand or a beach car park",
          "Recovery from a field, campsite or off-road event",
          "A vehicle that has left the road surface in poor conditions",
        ]}
        features={[
          { title: "4x4 Recovery Trailers", description: "Suited to difficult terrain and off-road access." },
          { title: "Terrain Assessment", description: "Ground and vehicle checked before recovery begins." },
          { title: "4x4 & Standard Vehicles", description: "Recovers 4x4s as well as vehicles stuck off-road." },
          { title: "Local Coverage", description: `Serving ${siteConfig.localCoverageArea}.` },
        ]}
        faqs={faqs}
      />
    </>
  )
}
