import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

const service = services.find((s) => s.slug === "rtc-recovery")!

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
})

const faqs = [
  {
    question: "What is RTC recovery?",
    answer:
      "RTC stands for Road Traffic Collision. RTC recovery is the safe removal of a vehicle involved in a road accident, clearing it from the scene and taking it to a garage, storage yard or address of your choice.",
  },
  {
    question: "Will AHS Recovery attend the scene directly after a collision?",
    answer:
      "Yes, once the scene is safe and, where relevant, once the police or emergency services have finished their work, we can attend to recover the vehicle involved.",
  },
  {
    question: "Do you work with insurers or fleet managers on RTC recovery?",
    answer:
      "Yes, we're happy to liaise with insurers, fleet managers or vehicle owners to confirm collection and delivery details for vehicles involved in a collision.",
  },
  {
    question: "Can you recover a vehicle that isn't driveable after a collision?",
    answer:
      "Yes, that's exactly what RTC recovery is for. We bring suitable equipment for vehicles that can't be driven, including those with damage that affects steering, wheels or brakes.",
  },
]

export default function RtcRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "RTC Recovery",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Road Traffic Collision Recovery",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "RTC Recovery", item: `${siteConfig.siteUrl}/services/rtc-recovery` },
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
        badge="RTC Recovery"
        title="RTC"
        titleHighlight="Recovery"
        intro="Been involved in a road traffic collision? AHS Recovery provides professional RTC recovery, removing your vehicle from the scene safely and taking it wherever it needs to go."
        image={service.image}
        imageAlt="Reflective warning triangle beside a vehicle after a road traffic collision"
        coverageNote={`RTC recovery is primarily based around ${siteConfig.localCoverageArea}, with nationwide recovery available for collisions requiring a longer-distance return. Call ${siteConfig.phoneDisplay} to discuss your situation.`}
        paragraphs={[
          "Being involved in a collision is stressful, and knowing your vehicle is being handled properly can make a real difference. AHS Recovery provides RTC recovery with a calm, professional approach, whatever the circumstances.",
          "We work carefully around damaged vehicles, using the right equipment to remove your car or van from the scene without causing further damage, and we're happy to liaise with your insurer if needed.",
        ]}
        examples={[
          "A vehicle no longer driveable after a collision",
          "A car left at the roadside following an accident",
          "Recovery instructed by an insurer or fleet manager",
          "Moving a damaged vehicle to a storage yard or garage",
        ]}
        features={[
          { title: "Scene Recovery", description: "Careful removal of vehicles involved in a road traffic collision." },
          { title: "Insurer Liaison", description: "Happy to coordinate with insurers or fleet managers where needed." },
          { title: "Damage-Aware Handling", description: "Equipment and technique matched to the vehicle's condition." },
          { title: "Flexible Drop-Off", description: "Vehicle taken to a garage, storage yard or address you choose." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
