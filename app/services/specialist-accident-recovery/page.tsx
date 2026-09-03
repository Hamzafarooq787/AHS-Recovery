import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

const service = services.find((s) => s.slug === "specialist-accident-recovery")!

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
})

const faqs = [
  {
    question: "What makes accident recovery 'specialist'?",
    answer:
      "Specialist accident recovery covers more complex situations, such as larger or heavier vehicles, vehicles on their side, multi-vehicle incidents, or scenes requiring extra equipment and planning beyond a standard collection.",
  },
  {
    question: "Can you recover larger commercial vehicles after an accident?",
    answer:
      "Yes, our fleet includes vehicles up to 18-tonne recovery lorries, which allows us to handle larger and heavier vehicles that a standard recovery truck couldn't manage.",
  },
  {
    question: "Do you work with the police or other agencies at complex accident scenes?",
    answer:
      "Yes, we're happy to work alongside the police, highways agencies or other emergency services to recover vehicles safely once a scene is cleared for us to proceed.",
  },
  {
    question: "What if a vehicle is on its side or in an awkward position?",
    answer:
      "We assess the situation and use appropriate equipment, such as winching and specialist rigging, to right and recover the vehicle as safely as possible.",
  },
]

export default function SpecialistAccidentRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Specialist Accident Recovery",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Specialist Accident Recovery",
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
        name: "Specialist Accident Recovery",
        item: `${siteConfig.siteUrl}/services/specialist-accident-recovery`,
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
        badge="Specialist Accident Recovery"
        title="Specialist Accident"
        titleHighlight="Recovery"
        intro="For larger vehicles, complex scenes or awkward vehicle positions, AHS Recovery provides specialist accident recovery with the equipment such situations demand."
        image={service.image}
        imageAlt="Recovery lorry handling a complex accident recovery"
        coverageNote={`Specialist accident recovery is based around ${siteConfig.localCoverageArea}, with nationwide availability for larger or more complex jobs. Call ${siteConfig.phoneDisplay} to discuss.`}
        paragraphs={[
          "Not every accident recovery is straightforward. Larger commercial vehicles, multi-vehicle incidents and vehicles left in awkward positions all call for more planning, heavier equipment and a more experienced approach.",
          "Our fleet ranges up to 18-tonne recovery lorries, giving us the capacity to take on specialist accident recovery work that a standard car recovery service couldn't handle, while still working carefully around the scene.",
        ]}
        examples={[
          "A larger commercial vehicle or van involved in a collision",
          "A vehicle left on its side or in an awkward position",
          "A multi-vehicle incident requiring careful planning",
          "An accident scene needing heavier recovery equipment",
        ]}
        features={[
          { title: "Heavy Recovery Capability", description: "Fleet capacity up to 18-tonne recovery lorries." },
          { title: "Complex Scene Handling", description: "Suited to multi-vehicle or larger-vehicle incidents." },
          { title: "Specialist Rigging", description: "Winching and rigging for awkward vehicle positions." },
          { title: "Agency Coordination", description: "Happy to work alongside police or other emergency services." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
