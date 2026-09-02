import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "towing")!

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
    question: "What vehicles can AHS Recovery tow?",
    answer:
      "We tow cars, vans and light commercial vehicles using equipment matched to the vehicle in question, from standard trailers up to our larger recovery lorries for bigger loads.",
  },
  {
    question: "Do you tow vehicles that won't start or roll?",
    answer:
      "Yes. If your vehicle is jammed in gear, has a seized brake or simply won't move, let us know when you call so we bring the right equipment for a safe tow.",
  },
  {
    question: "How far do you tow vehicles?",
    answer:
      "Our towing service is based around Ilford, Essex and covers locations within approximately 60 miles. For longer distances, ask about our nationwide vehicle transportation service.",
  },
  {
    question: "Can you tow a vehicle to a specific garage or address?",
    answer:
      "Yes, just let us know the destination when you book. We can take your vehicle to your home, a garage, a dealership or another address of your choosing.",
  },
]

export default function TowingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Towing",
    areaServed: siteConfig.localCoverageArea,
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    serviceType: "Vehicle Towing",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Towing", item: `${siteConfig.siteUrl}/services/towing` },
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
        badge="Towing"
        title="Towing"
        titleHighlight="Services"
        intro="Need a vehicle towed safely to a garage, home or dealership? AHS Recovery provides careful, professional towing across Ilford, Essex and the surrounding area."
        image={service.image}
        imageAlt="AHS Recovery tow truck towing a car on the road"
        coverageNote={`Towing is available across ${siteConfig.localCoverageArea}. Call ${siteConfig.phoneDisplay} to check availability for your location.`}
        paragraphs={[
          "Whether your car has failed its MOT, been involved in a minor incident, or simply needs moving from one place to another, our towing service gets it there safely and without fuss.",
          "We use suitable towing equipment for the vehicle and situation, from standard car trailers to larger recovery vehicles for bigger jobs, and we keep you informed from the first call to drop-off.",
        ]}
        examples={[
          "Moving a car that has failed its MOT to a garage",
          "Towing a vehicle after a minor mechanical issue",
          "Relocating a vehicle between addresses",
          "Towing a non-runner purchased privately or at auction",
        ]}
        features={[
          { title: "Local Coverage", description: "Serving Ilford, Essex and locations within approximately 60 miles." },
          { title: "Suitable Equipment", description: "Trailers and recovery vehicles matched to your vehicle type." },
          { title: "Flexible Destinations", description: "Towed to your home, a garage, dealership or address of choice." },
          { title: "Clear Communication", description: "Kept informed from booking through to drop-off." },
        ]}
        faqs={faqs}
      />
    </>
  )
}
