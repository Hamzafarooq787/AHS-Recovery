import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "motorway-breakdown-recovery")!

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
    question: "What should I do if I break down on the motorway?",
    answer:
      "If possible, pull onto the hard shoulder or into a refuge area, put your hazard lights on, and get yourself and any passengers behind the barrier away from traffic before calling us.",
  },
  {
    question: "Do you recover vehicles from smart motorways?",
    answer:
      "Yes, we can recover vehicles from smart motorways and standard motorways alike. Let us know your exact location, including the nearest sign or marker post if you can see one.",
  },
  {
    question: "Is motorway breakdown recovery available outside Essex?",
    answer:
      "Yes, our motorway breakdown recovery service is available nationwide across the UK, not just around our Ilford, Essex base.",
  },
  {
    question: "How quickly should I expect help after calling?",
    answer:
      "We dispatch a suitable recovery vehicle as soon as we have your location and vehicle details. Exact timing depends on your location, traffic and vehicle type, so call us directly for the clearest picture.",
  },
]

export default function MotorwayBreakdownRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Motorway Breakdown Recovery",
    areaServed: "United Kingdom",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Motorway Breakdown Recovery",
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
        name: "Motorway Breakdown Recovery",
        item: `${siteConfig.siteUrl}/services/motorway-breakdown-recovery`,
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
        badge="Nationwide Motorway Recovery"
        title="Motorway Breakdown"
        titleHighlight="Recovery"
        intro="Broken down on the motorway? Motorways carry extra risk, and AHS Recovery treats motorway breakdown recovery with the care and urgency it needs, nationwide."
        image={service.image}
        imageAlt="Breakdown recovery vehicle assisting a car on a motorway"
        coverageNote="Motorway breakdown recovery from AHS Recovery is available nationwide across the UK."
        paragraphs={[
          "A motorway breakdown puts you closer to fast-moving traffic than almost any other situation, so getting help quickly and safely matters. AHS Recovery provides motorway breakdown recovery across the UK.",
          "We're familiar with the safety procedures around motorway recovery, including hard shoulders, refuge areas and smart motorway sections, and we work carefully to recover your vehicle without adding to the risk.",
        ]}
        examples={[
          "A vehicle stopped on the hard shoulder",
          "A breakdown in a smart motorway refuge area",
          "A vehicle that has broken down in a live lane",
          "Recovery needed following a warning light or sudden fault",
        ]}
        features={[
          { title: "Nationwide Motorway Cover", description: "Available across the UK motorway network." },
          { title: "Safety-Led Approach", description: "Familiar with hard shoulder and smart motorway procedures." },
          { title: "Mixed Fleet", description: "Vehicles from 4x4 trailers to 18-tonne recovery lorries." },
          { title: "Clear Instructions", description: "Guidance on staying safe while you wait." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
