import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Wrench,
  Car,
  ShieldAlert,
  Warehouse,
  MapPinned,
  PackageCheck,
  Search,
  ClipboardList,
  MessageSquare,
  HeartHandshake,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { siteConfig, services } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Professional Vehicle Towing Service | AHS Recovery",
  description:
    "Professional towing for broken-down and non-running vehicles. Call AHS Recovery on 07576 614651 to arrange safe transport.",
  path: "/services/towing",
})

const trustPoints = ["Cars, Vans and 4x4s", "Breakdown Towing", "Garage Transportation", "Careful Vehicle Handling"]

const situations = [
  {
    icon: Wrench,
    title: "Breakdown Towing",
    description:
      "A mechanical or electrical problem may make your car or van unsafe to drive. Our breakdown towing service can transport it to an agreed garage, home or another suitable destination.",
  },
  {
    icon: Car,
    title: "Non-Running Vehicle Towing",
    description:
      "We can assist with vehicles that will not start or have been standing for some time. Tell us whether the vehicle rolls, steers and brakes before collection.",
  },
  {
    icon: ShieldAlert,
    title: "Damaged Vehicle Towing",
    description:
      "A damaged vehicle may need careful assessment before it can be loaded. Explain any damage to the wheels, suspension, steering or bodywork when requesting help.",
  },
  {
    icon: Warehouse,
    title: "Garage Transportation",
    description:
      "We can transport a vehicle to or from a garage for inspection, repairs, servicing or further mechanical assessment.",
  },
  {
    icon: MapPinned,
    title: "Planned Vehicle Movement",
    description:
      "Our towing service can help move vehicles between homes, garages, storage facilities and other agreed locations.",
  },
  {
    icon: PackageCheck,
    title: "Vehicle Collection",
    description:
      "We can collect suitable vehicles that have been purchased, sold or moved from storage, subject to access and vehicle condition.",
  },
]

const vehicleTypes = [
  "Cars",
  "Small and medium-sized vans",
  "4x4s and SUVs",
  "Non-running vehicles",
  "Breakdown vehicles",
  "Accident-damaged vehicles",
  "Vehicles with flat batteries",
  "Vehicles requiring garage transport",
  "Vehicles purchased or sold",
  "Vehicles requiring planned relocation",
]

const checklistItems = [
  "Vehicle make and model",
  "Approximate vehicle size",
  "Collection location",
  "Intended destination",
  "Whether the vehicle starts",
  "Whether it rolls, steers and brakes",
  "Condition of the wheels and tyres",
  "Details of any accident damage",
  "Whether keys are available",
  "Any access restrictions",
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain why the vehicle requires towing.`,
  },
  {
    number: "2",
    title: "Share the Vehicle Details",
    description: "Provide the vehicle type, condition, collection point and intended destination.",
  },
  {
    number: "3",
    title: "We Assess the Requirements",
    description: "We determine the suitable recovery vehicle, loading method and equipment.",
  },
  {
    number: "4",
    title: "The Vehicle Is Loaded",
    description: "The vehicle is carefully loaded and secured for transportation.",
  },
  {
    number: "5",
    title: "The Vehicle Is Delivered",
    description: "We transport the vehicle to the destination agreed before collection.",
  },
]

const benefits = [
  {
    icon: Search,
    title: "Careful Assessment",
    description: "We collect important vehicle and location details before deciding how the vehicle should be moved.",
  },
  {
    icon: ClipboardList,
    title: "Suitable Loading Method",
    description: "The loading process is selected according to the vehicle's size, condition and position.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "We confirm the collection details and intended destination before transportation begins.",
  },
  {
    icon: HeartHandshake,
    title: "Support for Different Situations",
    description: "Our towing service covers breakdowns, non-running vehicles, garage transfers and planned vehicle movements.",
  },
]

const relatedServices = [
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Recovery for vehicles that have broken down, become damaged or cannot be driven safely.",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Support when mechanical or electrical problems leave a vehicle unable to continue.",
  },
  {
    slug: "accident-recovery",
    title: "Accident Recovery",
    description: "Careful recovery for vehicles damaged during accidents and road traffic incidents.",
  },
]

const faqs = [
  {
    question: "What types of vehicles can you tow?",
    answer:
      "We can assist with many cars, vans, 4x4s, non-running vehicles and certain damaged vehicles. The vehicle's size, weight and condition must be confirmed before collection.",
  },
  {
    question: "Can you tow a car that will not start?",
    answer:
      "Yes. We can tow many non-starting vehicles. Tell us whether the vehicle rolls, steers and brakes so we can assess the loading requirements.",
  },
  {
    question: "Can you tow my vehicle to a garage?",
    answer: "Yes. We can transport your vehicle to an agreed garage, home, storage facility or another accessible destination.",
  },
  {
    question: "Can you tow a van?",
    answer:
      "We can tow many small and medium-sized vans. Provide the van's make, model, dimensions and approximate weight when requesting the service.",
  },
  {
    question: "Do you tow accident-damaged vehicles?",
    answer:
      "We can assist with certain accident-damaged vehicles. More complex damage may require our accident recovery or specialist accident recovery service.",
  },
  {
    question: "What details should I provide when requesting a tow?",
    answer:
      "Provide the vehicle make and model, its condition, exact collection point, intended destination and any known access restrictions.",
  },
  {
    question: "Can you tow a vehicle without keys?",
    answer:
      "Some vehicles can be recovered without keys, but this can affect loading. Tell us in advance if the keys are missing or the steering is locked.",
  },
  {
    question: "What if my vehicle has damaged wheels?",
    answer:
      "Explain which wheels are damaged and whether the vehicle can roll. Photographs may help us understand the condition and equipment required.",
  },
]

export default function TowingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Towing Service",
    serviceType: "Vehicle Towing",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/towing`,
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
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[75vh] flex items-center">
        <Image
          src="/images/van-recovery-cloudy-yard.webp"
          alt="AHS Recovery professional vehicle towing service"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/95 via-background-dark/85 to-background-dark" />

        <div className="relative z-10 w-full px-6 md:px-20 lg:px-40 py-16 md:py-20">
          <div className="max-w-3xl mx-auto lg:mx-0 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Safe and Careful Vehicle Transport
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Vehicle Towing
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Need to move a broken-down, damaged or non-running vehicle? AHS Recovery provides a professional towing
              service for cars, vans, 4x4s and other suitable vehicles. We can collect your vehicle and transport it
              carefully to an agreed garage, home, storage facility or another accessible destination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex-1 whitespace-nowrap bg-primary text-background-dark px-6 py-4 rounded-lg font-black text-base flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex-1 whitespace-nowrap bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 rounded-lg font-bold text-base transition-colors text-center flex items-center justify-center"
              >
                Request a Tow
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10">
              {trustPoints.map((label) => (
                <div key={label} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Towing</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Dependable Towing for Broken-Down and Non-Running Vehicles
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  When a vehicle cannot be driven safely, towing provides a practical way to move it to the required
                  destination. AHS Recovery assists with mechanical breakdowns, non-starting vehicles, accident
                  damage, garage transfers and planned vehicle movements.
                </p>
                <p>
                  Before arranging the tow, we ask for the vehicle&apos;s make, model, approximate size, condition,
                  collection point and destination. These details help us identify the suitable recovery vehicle,
                  equipment and loading method.
                </p>
                <p>
                  We can collect vehicles from accessible roads, homes, workplaces, garages, storage facilities and
                  car parks. Access restrictions, vehicle damage and wheel or steering problems should be explained
                  before collection.
                </p>
              </div>
              <Link
                href="/services/vehicle-recovery"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Learn About Our Vehicle Recovery Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/van-recovery-motorway-crafter.webp"
                alt="Van being towed on a flatbed recovery truck"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immediate CTA strip */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Need a Tow for Your Vehicle?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Call AHS Recovery on {siteConfig.phoneDisplay} and tell us where the vehicle is located, what condition
              it is in and where it needs to go. We will assess the towing requirements and explain the next step.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call AHS Recovery
          </a>
        </div>
      </section>

      {/* Towing situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When You May Need Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Towing Services for Different Vehicle Situations
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              A vehicle may require towing for many reasons. Our service covers urgent recovery needs and planned
              vehicle movements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {situations.map((situation) => (
              <div key={situation.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{situation.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{situation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle types + checklist */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicles We Tow</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Professional Towing for a Range of Vehicles
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              The correct towing method depends on the vehicle&apos;s size, weight, condition and position. Providing
              accurate details helps us prepare suitable equipment before collection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-5">We may be able to assist with:</h3>
              <ul className="space-y-3">
                {vehicleTypes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-5">Important information to provide:</h3>
              <ul className="space-y-3 mb-6">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5">
                Providing this information before collection helps us understand the job and select the appropriate
                towing equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Our Vehicle Towing Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-[220px]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Arrange Vehicle Towing
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Why Choose Our Professional Towing Service?
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Vehicle towing requires careful preparation. The condition of the vehicle, access at the collection
              point and method of securing it must all be considered before transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Towing vs vehicle transportation */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choosing the Right Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Do You Need Towing or Vehicle Transportation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Towing</h3>
              <p className="text-slate-400 leading-relaxed">
                Towing is generally suitable when a broken-down, damaged or non-running vehicle needs to be moved
                from its current location to a garage, home or another nearby destination.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Vehicle Transportation</h3>
              <p className="text-slate-400 leading-relaxed">
                Vehicle transportation is intended for planned collection and delivery, including longer journeys and
                vehicles that need to be moved between distant locations.
              </p>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-3xl mb-6">
            If you are unsure which service is suitable, call us with the collection point, destination and vehicle
            details. We will help identify the correct service.
          </p>

          <Link
            href="/services/vehicle-transportation-delivery"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Explore Vehicle Transportation and Delivery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Other Recovery Options</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Related Vehicle Recovery Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                title={related.title}
                description={related.description}
                href={`/services/${related.slug}`}
                image={services.find((s) => s.slug === related.slug)?.image}
                icon={serviceIcons[related.slug]}
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

      {/* FAQ */}
      <section className="bg-navy-accent py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Frequently Asked Questions About Vehicle Towing
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-background-dark/60 open:border-primary/40 open:bg-primary/5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-white text-base md:text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-dark py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Arrange a Tow</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Request a Professional Vehicle Towing Service
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery and provide your vehicle details, collection point and destination. We will assess the
          towing requirements and explain the appropriate next step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
          >
            Contact AHS Recovery
          </Link>
        </div>
      </section>
    </main>
  )
}
