import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "jump-starts")!

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
    question: "What's the difference between 12V and 24V jump starts?",
    answer:
      "Most cars and small vans use a 12V electrical system, while larger commercial vehicles, HGVs and some plant equipment use a 24V system. We carry equipment suited to both, so let us know your vehicle type when you call.",
  },
  {
    question: "What if my battery won't hold charge after a jump start?",
    answer:
      "If a jump start gets you going but the battery isn't holding charge, it may need replacing rather than charging. We'll let you know what we find so you can plan your next step.",
  },
  {
    question: "Can you jump start a van or light commercial vehicle?",
    answer:
      "Yes, we carry jump-start equipment suited to cars, vans and light commercial vehicles, as well as 24V equipment for larger vehicles.",
  },
  {
    question: "Do I need to be present for a jump start?",
    answer:
      "Ideally yes, so we can confirm details and check the vehicle with you. If that's not possible, let us know when you call and we'll agree the best arrangement.",
  },
]

export default function JumpStartsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "12V & 24V Jump Starts",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Battery Jump Start",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Jump Starts", item: `${siteConfig.siteUrl}/services/jump-starts` },
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
        badge="12V & 24V Jump Starts"
        title="Jump Starts"
        titleHighlight="12V & 24V"
        intro="Flat battery? AHS Recovery provides jump starts for both 12V and 24V vehicles, from cars and vans to larger commercial vehicles."
        image={service.image}
        imageAlt="Technician using jump start equipment on a vehicle battery"
        coverageNote={`Jump start callouts are available across ${siteConfig.localCoverageArea}. Call ${siteConfig.phoneDisplay} for assistance.`}
        paragraphs={[
          "A flat battery is one of the most common reasons a vehicle won't start, and it's often the quickest problem to solve at the roadside. AHS Recovery carries jump-start equipment suited to both 12V and 24V electrical systems.",
          "If a jump start gets your engine running, we'll make sure you're safe to continue your journey. If the battery is beyond a simple charge, we'll be upfront about it so you can decide on repair or recovery.",
        ]}
        examples={[
          "A car that won't start after being left for a while",
          "A van or light commercial vehicle with a flat 12V battery",
          "Larger vehicles or plant using a 24V electrical system",
          "A battery that has drained after lights were left on",
        ]}
        features={[
          { title: "12V & 24V Equipment", description: "Suited to cars, vans and larger commercial vehicles." },
          { title: "On-the-Spot Diagnosis", description: "We check whether a jump start or a new battery is needed." },
          { title: "Local Callouts", description: `Covering ${siteConfig.localCoverageArea}.` },
          { title: "Honest Advice", description: "Clear information about your battery's condition." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
