import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

const service = services.find((s) => s.slug === "accident-recovery")!

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
})

const faqs = [
  {
    question: "What should I do immediately after an accident, before recovery arrives?",
    answer:
      "Your safety comes first — move away from traffic if it's safe to do so and contact the emergency services if needed. Once things are safe, call us and we'll arrange recovery of the vehicle.",
  },
  {
    question: "Can you recover a vehicle that's blocking the road?",
    answer:
      "Yes, we prioritise clearing vehicles that are causing an obstruction or hazard, working alongside the police or other emergency services where they're in attendance.",
  },
  {
    question: "Do you take photos or notes for insurance purposes?",
    answer:
      "We can note the vehicle's condition and location on collection, which may support your insurance claim, though we'd always recommend documenting the scene yourself where it's safe to do so.",
  },
  {
    question: "Where will my vehicle be taken after accident recovery?",
    answer:
      "Wherever you or your insurer instructs — a garage, a storage facility, your home or another address. Just confirm the destination with us when you call.",
  },
]

export default function AccidentRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accident Recovery",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Accident Recovery",
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
        name: "Accident Recovery",
        item: `${siteConfig.siteUrl}/services/accident-recovery`,
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
        badge="Accident Recovery"
        title="Accident"
        titleHighlight="Recovery"
        intro="After an accident, getting your vehicle recovered safely and without added stress matters. AHS Recovery attends the scene to remove your vehicle and take it where it needs to go."
        image={service.image}
        imageAlt="Vehicle recovery at the scene of a road accident"
        coverageNote={`Accident recovery is primarily based around ${siteConfig.localCoverageArea}, with nationwide recovery available on request. Call ${siteConfig.phoneDisplay} for assistance.`}
        paragraphs={[
          "An accident is unsettling enough without worrying about what happens to your vehicle afterwards. AHS Recovery handles accident recovery with a professional, considerate approach, working around the scene safely.",
          "We assess the damage before moving your vehicle, using suitable equipment so it's not made worse in transit, and we're happy to work with your instructions or your insurer's.",
        ]}
        examples={[
          "A vehicle left undriveable after a collision",
          "A car blocking a road or junction after an accident",
          "Recovery requested by police or another emergency service",
          "Moving a damaged vehicle to a repair garage or storage yard",
        ]}
        features={[
          { title: "Scene Attendance", description: "Prompt recovery once the accident scene is safe." },
          { title: "Damage-Aware Handling", description: "Approach adjusted to the vehicle's condition." },
          { title: "Flexible Destinations", description: "Vehicle taken to a garage, storage or address of choice." },
          { title: "Professional Approach", description: "Calm, clear communication throughout the recovery." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
