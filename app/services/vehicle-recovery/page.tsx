import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Wrench,
  Zap,
  PowerOff,
  TriangleAlert,
  CircleAlert,
  Warehouse,
  Home,
  MapPinned,
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
  title: "Professional Car Recovery Service | AHS Recovery",
  description:
    "Car recovery for broken-down, damaged and non-running vehicles. Call AHS Recovery on 07576 614651 to arrange safe transportation.",
  path: "/services/vehicle-recovery",
})

const trustPoints = ["Cars, Vans and 4x4s", "Breakdown Vehicle Recovery", "Non-Running Vehicles", "Careful Vehicle Transportation"]

const situations = [
  {
    icon: Wrench,
    title: "Mechanical Breakdown",
    description: "Engine, clutch, gearbox, cooling-system and other mechanical faults may leave a vehicle unsafe or unable to continue.",
  },
  {
    icon: Zap,
    title: "Electrical Failure",
    description: "Alternator, starter motor, battery and other electrical problems can cause a vehicle to lose power or stop starting.",
  },
  {
    icon: PowerOff,
    title: "Non-Starting Vehicles",
    description: "If a car or van will not start and roadside assistance cannot resolve the issue, full vehicle recovery may be required.",
  },
  {
    icon: TriangleAlert,
    title: "Accident-Damaged Vehicles",
    description: "Vehicles with suitable levels of accident damage can be recovered once the incident scene is safe and removal is permitted.",
    linkHref: "/services/accident-recovery",
    linkText: "accident recovery",
  },
  {
    icon: CircleAlert,
    title: "Wheel or Suspension Damage",
    description: "Damaged wheels, tyres, steering or suspension can prevent a vehicle from rolling normally and may require a different loading method.",
  },
  {
    icon: Warehouse,
    title: "Vehicles Requiring Garage Transport",
    description: "We can transport vehicles to an agreed garage for repairs, inspection or mechanical assessment.",
  },
  {
    icon: Home,
    title: "Vehicles Collected from Home",
    description: "A vehicle that will not start at home may require recovery to a garage, repair facility or another destination.",
  },
  {
    icon: MapPinned,
    title: "Roadside Vehicle Recovery",
    description: "Vehicles stranded in accessible roadside locations can be collected when they cannot continue safely.",
  },
]

const vehicleTypes = [
  "Cars",
  "Small and medium-sized vans",
  "4x4s and SUVs",
  "Non-running vehicles",
  "Vehicles with flat batteries",
  "Mechanically damaged vehicles",
  "Vehicles with electrical faults",
  "Accident-damaged vehicles",
  "Vehicles with wheel or suspension damage",
  "Vehicles requiring garage transportation",
  "Vehicles purchased or sold",
  "Vehicles requiring planned movement",
]

const infoChecklist = [
  "Exact vehicle location",
  "Vehicle make and model",
  "Vehicle registration where available",
  "Approximate size and weight",
  "Nature of the problem",
  "Visible vehicle damage",
  "Whether the engine starts",
  "Whether the vehicle rolls",
  "Whether the steering works",
  "Whether the brakes operate",
  "Condition of the wheels and tyres",
  "Whether keys are available",
  "Collection-point access",
  "Intended destination",
  "Any height, width or parking restrictions",
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain why the vehicle needs recovery.`,
  },
  {
    number: "2",
    title: "Share Your Location",
    description: "Provide an accurate collection point, road name, postcode or nearby landmark.",
  },
  {
    number: "3",
    title: "Provide Vehicle Details",
    description: "Tell us the make, model, condition and whether the vehicle rolls, steers, brakes or starts.",
  },
  {
    number: "4",
    title: "Confirm the Destination",
    description: "Provide the garage, home, storage facility or other suitable destination.",
  },
  {
    number: "5",
    title: "Recovery Assessment",
    description: "We identify the appropriate recovery vehicle, equipment and loading method.",
  },
  {
    number: "6",
    title: "Vehicle Collection",
    description: "The vehicle is loaded and secured according to its assessed condition.",
  },
  {
    number: "7",
    title: "Vehicle Transportation",
    description: "The vehicle is transported to the agreed destination.",
  },
]

const serviceComparison = [
  {
    title: "Vehicle Recovery",
    description: "Vehicle recovery is suitable when a broken-down, damaged or non-running vehicle needs to be collected and transported safely.",
    href: null,
  },
  {
    title: "Towing Service",
    description: "Towing is suitable for shorter movements, garage transfers and vehicles that need moving between accessible locations.",
    href: "/services/towing",
  },
  {
    title: "Roadside Assistance",
    description: "Roadside assistance may be suitable when a straightforward problem can be assessed without immediately transporting the vehicle.",
    href: "/services/roadside-assistance",
  },
  {
    title: "Breakdown Recovery",
    description: "Breakdown recovery is suitable when a mechanical or electrical fault leaves a vehicle unable to continue, including longer-distance journeys.",
    href: "/services/breakdown-assistance",
  },
]

const benefits = [
  {
    icon: Search,
    title: "Vehicle Assessment",
    description: "We ask about the vehicle's condition and movement before recovery is arranged.",
  },
  {
    icon: ClipboardList,
    title: "Suitable Equipment",
    description: "The loading method is selected according to the vehicle and situation.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Important collection and destination details are confirmed before recovery begins.",
  },
  {
    icon: HeartHandshake,
    title: "Support for Different Vehicles",
    description: "We can assist with many cars, vans, 4x4s and non-running vehicles.",
  },
]

const relatedServices = [
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Recovery when mechanical or electrical faults prevent a vehicle from continuing.",
  },
  {
    slug: "towing",
    title: "Towing Service",
    description: "Vehicle towing for garage transfers and shorter planned movements.",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    description: "Support for common roadside vehicle problems that may not require immediate recovery.",
  },
]

const faqs = [
  {
    question: "What vehicles can you recover?",
    answer: "We can recover many cars, vans, 4x4s, non-running vehicles and suitable damaged vehicles. Vehicle size, weight and condition must be confirmed.",
  },
  {
    question: "Can you recover a car that will not start?",
    answer: "Yes. We can assist with many non-starting vehicles. Tell us what happens when you attempt to start the engine.",
  },
  {
    question: "Where can you take my vehicle?",
    answer: "We can transport it to an agreed garage, home, storage facility or another accessible destination.",
  },
  {
    question: "Can you recover a damaged vehicle?",
    answer: "Many damaged vehicles can be recovered using suitable equipment. Severe accident damage may require specialist accident recovery.",
  },
  {
    question: "Can you recover a vehicle with locked wheels?",
    answer: "Some vehicles with locked or damaged wheels can be recovered, but additional equipment may be required. Provide full details and photographs where possible.",
  },
  {
    question: "What information should I provide?",
    answer: "Provide the vehicle make and model, exact location, condition, access details and intended destination.",
  },
  {
    question: "What is the difference between recovery and towing?",
    answer: "Recovery focuses on collecting a vehicle that cannot continue safely. Towing can also include shorter planned movements and garage transfers.",
  },
  {
    question: "What if my vehicle is stuck in mud or a ditch?",
    answer:
      "A stuck vehicle may require winch-out recovery or 4x4 and off-road recovery rather than standard vehicle recovery.",
    links: [
      { href: "/services/winch-out-recovery", text: "Winch-Out Recovery" },
      { href: "/services/4x4-off-road-recovery", text: "4x4 & Off-Road Recovery" },
    ],
  },
]

const vehicleRecoveryService = services.find((s) => s.slug === "vehicle-recovery")!

export default function VehicleRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Recovery Service",
    serviceType: "Vehicle Recovery",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/vehicle-recovery`,
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
        name: "Vehicle Recovery",
        item: `${siteConfig.siteUrl}/services/vehicle-recovery`,
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
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[75vh] flex items-center">
        <Image
          src={vehicleRecoveryService.image ?? "/images/dropside-truck-recovery-residential.webp"}
          alt="AHS Recovery professional car recovery service"
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
              Recovery for Cars and Vans
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Car Recovery
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Broken down, damaged or unable to move your vehicle? AHS Recovery provides a professional car recovery
              service for cars, vans, 4x4s and other suitable vehicles. We assess the situation, arrange the
              appropriate recovery equipment and transport your vehicle to an agreed destination.
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
                Request Vehicle Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Safe Recovery for Broken-Down and Non-Running Vehicles
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A vehicle may require recovery when it suffers a mechanical fault, develops an electrical
                  problem, becomes damaged or cannot be driven safely. Continuing the journey could cause more
                  damage or create a risk for other road users.
                </p>
                <p>
                  AHS Recovery provides car and van recovery for urgent and planned situations. We can collect
                  suitable vehicles from accessible roads, homes, workplaces, garages, car parks and storage
                  facilities.
                </p>
                <p>
                  Before arranging recovery, we ask about the vehicle&apos;s type, condition, position and intended
                  destination. These details help us choose a suitable recovery vehicle and loading method.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request Our Car Recovery Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/gtr-vehicle-recovery-residential.webp"
                alt="Vehicle loaded for recovery by AHS Recovery"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immediate assistance CTA */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Is Your Vehicle Unable to Continue?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Move to a safe position where possible and call AHS Recovery on {siteConfig.phoneDisplay}. Tell us
              what happened, where the vehicle is located and whether it rolls, steers, brakes or starts.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for Vehicle Recovery
          </a>
        </div>
      </section>

      {/* Recovery situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Vehicle Recovery for Different Situations
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              The appropriate recovery method depends on why the vehicle cannot move and whether it has mechanical
              or physical damage.
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
                  <p className="text-slate-400 leading-relaxed">
                    {situation.description}
                    {situation.linkHref && (
                      <>
                        {" "}
                        See our{" "}
                        <Link href={situation.linkHref} className="text-primary font-semibold hover:underline">
                          {situation.linkText}
                        </Link>{" "}
                        service.
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles we recover (checklist) */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Types</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Car and Van Recovery for Different Vehicles
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Recovery requirements vary according to the vehicle&apos;s size, weight, condition and position.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-5">We may be able to recover:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {vehicleTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5">
              Provide accurate vehicle information before recovery is arranged. Modified, lowered, severely damaged
              or unusually large vehicles may require additional assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Prepare</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Details to Provide When Requesting Vehicle Recovery
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate information allows the recovery requirements to be assessed before the vehicle is collected.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-background-dark rounded-2xl border border-white/10 p-8 md:p-10">
            <h3 className="text-lg font-bold text-white mb-5">Provide:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {infoChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              Photographs may help when the vehicle is damaged, lowered, modified or difficult to access. Only take
              photographs from a safe position.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Our Vehicle Recovery Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-navy-accent border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm max-w-[220px]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Request Car Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Service comparison */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choose the Right Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2 leading-tight">
              Which Vehicle Service Do You Need?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {serviceComparison.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-6 ${
                  item.href ? "border-white/10 bg-background-dark" : "border-primary/40 bg-primary/5"
                }`}
              >
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                {item.href && (
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto text-center">
            If you are unsure which service is appropriate, provide the vehicle, fault, collection and destination
            details when you call.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              A Careful Approach to Vehicle Recovery
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Recovering a vehicle requires proper preparation. Its size, condition, position and access must be
              considered before loading.
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

      {/* Related services */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Other Recovery Options</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Related Vehicle Recovery Services</h2>
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
      <section className="bg-white py-24">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Frequently Asked Questions About Car Recovery
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-primary/40 open:bg-primary/5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-slate-900 text-base md:text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-4 md:pb-5">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  {faq.links && (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                      {faq.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-primary font-semibold text-sm hover:underline"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-dark py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Recovery</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange Professional Car Recovery</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery and provide your vehicle details, exact location, condition and intended destination.
          We will assess the requirements and identify the appropriate recovery method.
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
