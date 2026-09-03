import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

const service = services.find((s) => s.slug === "roadside-assistance")!

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
})

const faqs = [
  {
    question: "What counts as roadside assistance rather than full recovery?",
    answer:
      "Roadside assistance covers problems that can often be resolved at the roadside, like a flat battery or a minor fault. If the issue can't be fixed on the spot, we'll switch to full vehicle recovery instead.",
  },
  {
    question: "Can you help if I have a flat tyre?",
    answer:
      "Yes, if you have a usable spare or the tyre can be repaired at the roadside, we can assist. If not, we can recover your vehicle to a garage instead.",
  },
  {
    question: "Do you offer roadside assistance for vans as well as cars?",
    answer:
      "Yes, our roadside assistance covers cars, vans and light commercial vehicles across our local coverage area.",
  },
  {
    question: "What information should I have ready when I call?",
    answer:
      "Your exact location, vehicle registration and make/model, and a brief description of the problem help us respond appropriately.",
  },
]

export default function RoadsideAssistancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roadside Assistance",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Roadside Assistance",
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
        name: "Roadside Assistance",
        item: `${siteConfig.siteUrl}/services/roadside-assistance`,
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
        badge="Roadside Assistance"
        title="Roadside"
        titleHighlight="Assistance"
        intro="Not every problem needs a full recovery. AHS Recovery offers roadside assistance for common issues, so you can often get back on the road without a tow."
        image={service.image}
        imageAlt="Roadside assistance technician attending a vehicle at the roadside"
        coverageNote={`Roadside assistance covers ${siteConfig.localCoverageArea}. Call ${siteConfig.phoneDisplay} for help now.`}
        paragraphs={[
          "Sometimes what feels like a major problem is something that can be sorted at the roadside. Our roadside assistance service covers flat tyres, flat batteries and other minor faults that don't necessarily need a full recovery.",
          "If we can't resolve the issue on the spot, we'll talk you through your options, including recovery to a nearby garage, so you're never left guessing what happens next.",
        ]}
        examples={[
          "A flat tyre that needs changing or a temporary fix",
          "A minor electrical or warning light issue",
          "A vehicle that needs checking over before continuing a journey",
          "A fault that may be resolved without a full tow",
        ]}
        features={[
          { title: "Local Response", description: `Covering ${siteConfig.localCoverageArea}.` },
          { title: "Tyre Assistance", description: "Help with flat or damaged tyres where possible." },
          { title: "On-the-Spot Checks", description: "Assessing minor faults before deciding next steps." },
          { title: "Backup Recovery", description: "Switches to full recovery if the issue can't be resolved roadside." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
