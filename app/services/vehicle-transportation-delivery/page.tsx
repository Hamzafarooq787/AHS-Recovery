import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "vehicle-transportation-delivery")!

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
    question: "Do you transport vehicles that don't run?",
    answer:
      "Yes, non-runners can be loaded and transported using our recovery fleet, so a vehicle doesn't need to be driveable to be moved.",
  },
  {
    question: "How far can you transport a vehicle?",
    answer:
      "Our vehicle transportation and delivery service is nationwide, so we can arrange transport across the UK, not just around our Ilford, Essex base.",
  },
  {
    question: "Can you deliver a vehicle to a dealership or auction?",
    answer:
      "Yes, we regularly handle vehicle transportation for dealership transfers, private sales and auction purchases, delivering to the address you specify.",
  },
  {
    question: "What size of vehicle can you transport?",
    answer:
      "Our fleet ranges from 4x4 recovery trailers up to 18-tonne recovery lorries, so we can transport anything from a small car to a larger commercial vehicle.",
  },
]

export default function VehicleTransportationDeliveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Vehicle Transportation & Delivery",
    areaServed: "United Kingdom",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Vehicle Transportation",
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
        name: "Vehicle Transportation & Delivery",
        item: `${siteConfig.siteUrl}/services/vehicle-transportation-delivery`,
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
        badge="Nationwide Vehicle Transportation"
        title="Vehicle Transportation"
        titleHighlight="& Delivery"
        intro="Need a vehicle moved across the country? AHS Recovery provides nationwide vehicle transportation and delivery for cars, vans and larger vehicles."
        image={service.image}
        imageAlt="Recovery lorry transporting a vehicle for nationwide delivery"
        coverageNote="Vehicle transportation and delivery from AHS Recovery is available nationwide across the UK."
        paragraphs={[
          "Not every vehicle move is an emergency. Whether it's a dealership transfer, a private sale, an auction purchase or a relocation, our nationwide transportation service moves your vehicle securely from A to B.",
          "Every vehicle is loaded and secured for the full journey, and our fleet — from 4x4 recovery trailers to 18-tonne recovery lorries — means we can take on cars, vans and larger vehicles alike.",
        ]}
        examples={[
          "Delivering a car bought privately or at auction",
          "Transferring vehicles between dealership sites",
          "Moving a non-runner that needs transporting, not driving",
          "Relocating a vehicle when you move house or job",
        ]}
        features={[
          { title: "Nationwide Delivery", description: "Transportation across the UK, not just our local area." },
          { title: "Secure Loading", description: "Vehicles loaded and secured for the full journey." },
          { title: "Runner & Non-Runner", description: "We transport vehicles whether they drive or not." },
          { title: "Mixed Fleet", description: "From 4x4 recovery trailers to 18-tonne recovery lorries." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
