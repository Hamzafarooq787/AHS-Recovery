import ServicesHero from "@/components/ServicesHero"
import ServicesGrid from "@/components/ServicesGrid"
import ServicesIntro from "@/components/ServicesIntro"
import ServicesCTA from "@/components/ServicesCTA"
import { siteConfig } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Vehicle Recovery & Transportation Services | AHS Recovery",
  description:
    "Towing, breakdown assistance, RTC recovery, jump starts, winch-out recovery, accident recovery, motorway recovery, 4x4 off-road recovery and nationwide vehicle transportation from AHS Recovery.",
  path: "/services",
})

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.siteUrl}/services`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesIntro />
        <ServicesCTA />
      </main>
    </>
  )
}
