import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ServiceCard from "./ServiceCard"
import { services as serviceConfig } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"

const featuredServices = [
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description:
      "Safe recovery for broken-down, damaged and non-running cars or vans across Ilford and surrounding areas.",
    linkText: "Vehicle Recovery Service",
  },
  {
    slug: "towing",
    title: "Towing Services",
    description: "Professional vehicle towing in Ilford for breakdowns, garage drop-offs and planned local journeys.",
    linkText: "Towing Services",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Dependable breakdown assistance for local incidents and longer-distance recovery across the UK.",
    linkText: "Breakdown Assistance",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    description: "Practical roadside help for common vehicle problems across Ilford, Essex and East London.",
    linkText: "Roadside Assistance",
  },
  {
    slug: "accident-recovery",
    title: "Accident Recovery",
    description: "Careful recovery and transportation for damaged vehicles following road accidents.",
    linkText: "Accident Recovery",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Vehicle Transportation",
    description: "Secure nationwide collection and delivery for cars, vans, 4x4s and non-running vehicles.",
    linkText: "Vehicle Transportation",
  },
]

export default function FeaturedServicesSection() {
  return (
    <section className="bg-navy-accent py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How We Can Help</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
            Recovery Services in Ilford and Surrounding Areas
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            AHS Recovery offers professional recovery services in Ilford for roadside problems, accident-damaged
            vehicles and planned vehicle movements. Explore our six featured services or visit the complete services
            page for more specialist options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((featured) => {
            const service = serviceConfig.find((s) => s.slug === featured.slug)!
            return (
              <ServiceCard
                key={featured.slug}
                title={featured.title}
                description={featured.description}
                href={`/services/${featured.slug}`}
                image={service.image}
                icon={serviceIcons[featured.slug]}
                linkText={featured.linkText}
              />
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-black hover:scale-[1.02] transition-transform"
          >
            View More Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
