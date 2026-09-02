import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "breakdown-assistance")!

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
    question: "Does AHS Recovery cover breakdowns outside Essex?",
    answer:
      "Yes. While our base is Ilford, Essex, our breakdown assistance service is available nationwide, so we can help wherever in the UK your vehicle has broken down.",
  },
  {
    question: "What kind of breakdowns do you deal with?",
    answer:
      "We assist with a wide range of breakdowns, including engine problems, electrical faults, flat batteries and vehicles that won't start or won't move safely.",
  },
  {
    question: "Will you try to fix my vehicle at the roadside?",
    answer:
      "Where a quick, safe fix is possible — such as a jump start — we'll try that first. If your vehicle can't be made roadworthy on the spot, we'll recover it to a safe location of your choice.",
  },
  {
    question: "How do I get help for a breakdown?",
    answer: `Call ${siteConfig.phoneDisplay} with your location, vehicle details and a brief description of the problem, and we'll arrange assistance from there.`,
  },
]

export default function BreakdownAssistancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Breakdown Assistance",
    areaServed: "United Kingdom",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Breakdown Assistance",
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
        name: "Breakdown Assistance",
        item: `${siteConfig.siteUrl}/services/breakdown-assistance`,
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
        badge="Nationwide Breakdown Assistance"
        title="Breakdown"
        titleHighlight="Assistance"
        intro="Vehicle broken down and won't start or move? AHS Recovery provides breakdown assistance nationwide from our Ilford, Essex base, helping you get off the road safely."
        image={service.image}
        imageAlt="Breakdown recovery vehicle assisting a car on a tow ramp"
        coverageNote="Breakdown assistance from AHS Recovery is available nationwide across the UK."
        paragraphs={[
          "A breakdown is stressful, especially when it happens somewhere unfamiliar. AHS Recovery provides breakdown assistance across the UK, dispatching a suitable recovery vehicle to your exact location.",
          "Our fleet ranges from 4x4 recovery trailers to 18-tonne recovery lorries, so whatever you're driving, we aim to bring the right equipment for a safe, careful recovery.",
        ]}
        examples={[
          "A car that won't start due to an engine or electrical fault",
          "A vehicle stopped in an unsafe location that needs moving",
          "A breakdown while travelling away from home",
          "A vehicle that needs recovering to a garage for repair",
        ]}
        features={[
          { title: "Nationwide Availability", description: "Breakdown assistance anywhere in the UK." },
          { title: "Mixed Fleet", description: "Vehicles from 4x4 trailers to 18-tonne recovery lorries." },
          { title: "All Common Faults", description: "Engine, electrical and starting problems assessed on arrival." },
          { title: "Safe Recovery", description: "Vehicle moved to a safe location or your chosen destination." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
