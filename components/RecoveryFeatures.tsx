import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ServiceCard from "./ServiceCard"
import { siteConfig, services as serviceConfig } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"

const featuredSlugs = [
  "towing",
  "breakdown-assistance",
  "accident-recovery",
  "roadside-assistance",
  "4x4-off-road-recovery",
  "vehicle-transportation-delivery",
]

export default function RecoveryFeatures() {
  const featured = featuredSlugs.map((slug) => serviceConfig.find((s) => s.slug === slug)!)

  return (
    <>
      <section className="bg-white py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Professional Recovery Services</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14">
            {featured.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                image={service.image}
                icon={serviceIcons[service.slug]}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-black hover:scale-[1.02] transition-transform"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-24 relative overflow-hidden flex items-center justify-center text-center px-6 bg-navy-accent">
        <Image
          src="/images/Recovery to Dealership.webp"
          alt="AHS Recovery vehicle transportation and delivery"
          fill
          loading="lazy"
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/70" />
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white">A Fleet Built For Any Recovery Situation</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            From 4x4 recovery trailers to 18-tonne recovery lorries, AHS Recovery brings the right vehicle for the
            job, whether that&apos;s a local roadside callout or a longer-distance breakdown recovery.
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="bg-primary text-background-dark px-10 py-4 rounded-lg font-black text-xl hover:scale-105 transition-transform"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 lg:px-40 py-24 bg-white">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">The Process</h2>
          <p className="text-slate-500">Simple and straightforward, from call to recovery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-primary/30 -z-10"></div>
          {[
            {
              icon: "phone_callback",
              number: "1",
              title: "Call Us",
              description: "Call our team. Give us your location and vehicle details.",
            },
            {
              icon: "verified",
              number: "2",
              title: "Confirm",
              description: "We confirm the details and what to expect before we set off.",
            },
            {
              icon: "local_shipping",
              number: "3",
              title: "Dispatch",
              description: "A suitable recovery vehicle is dispatched to your location.",
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center relative">
                <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                <div className="absolute -top-2 -right-2 bg-primary text-background-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-500 max-w-[250px]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
