import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Volume2,
  Gauge,
  Power,
  LightbulbOff,
  ZapOff,
  BatteryWarning,
  MoonStar,
  Lightbulb,
  Car,
  Truck,
  Search,
  ClipboardList,
  MessageSquare,
  HeartHandshake,
  AlertTriangle,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { siteConfig, services } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "12V & 24V Jump Start Service | AHS Recovery",
  description:
    "Professional jump starts for suitable 12V and 24V vehicles with flat batteries. Call AHS Recovery on 07576 614651 for assistance.",
  path: "/services/jump-starts",
})

const trustPoints = ["12V Battery Jump Starts", "24V Battery Jump Starts", "Cars and Vans", "Battery-System Assessment"]

const symptoms = [
  {
    icon: Volume2,
    title: "Clicking When Starting",
    description: "A repeated clicking sound may mean the battery does not have enough power to operate the starter motor.",
  },
  {
    icon: Gauge,
    title: "Slow Engine Cranking",
    description: "If the engine turns more slowly than normal, the battery may be weak or discharged.",
  },
  {
    icon: Power,
    title: "No Engine Response",
    description: "The dashboard may light up while the engine does not turn when the key or start button is used.",
  },
  {
    icon: LightbulbOff,
    title: "Dim Interior or Dashboard Lights",
    description: "Lights that appear unusually dim may indicate low battery power.",
  },
  {
    icon: ZapOff,
    title: "Electrical Systems Not Working",
    description: "Central locking, dashboard displays or other electrical features may stop working when the battery is fully discharged.",
  },
  {
    icon: BatteryWarning,
    title: "Battery Warning Light",
    description: "A battery warning light while the engine is running can indicate a charging-system problem rather than a simple flat battery.",
  },
  {
    icon: MoonStar,
    title: "Vehicle Left Unused",
    description: "A battery can gradually lose charge when a vehicle remains unused for an extended period.",
  },
  {
    icon: Lightbulb,
    title: "Lights Left On",
    description: "Headlights, interior lights or other electrical equipment left running can discharge the battery while the engine is off.",
  },
]

const voltageSystems = [
  {
    icon: Car,
    voltage: "12V",
    title: "Cars, Vans and 4x4s",
    description: "Most cars and many smaller vans use a 12V electrical system.",
  },
  {
    icon: Truck,
    voltage: "24V",
    title: "Larger Vans and Commercial Vehicles",
    description: "Some larger vans and commercial vehicles may use a 24V system.",
  },
]

const suitableVehicles = [
  "Cars using suitable 12V systems",
  "Small and medium-sized vans",
  "Suitable 4x4s and SUVs",
  "Certain commercial vehicles using 24V systems",
  "Vehicles with discharged batteries",
  "Vehicles that have been left unused",
  "Vehicles affected by electrical drain",
  "Vehicles with enough access to the battery or approved connection points",
]

const infoChecklist = [
  "Exact vehicle location",
  "Vehicle make and model",
  "Vehicle year where known",
  "Whether it uses a 12V or 24V system",
  "What happens when you try to start it",
  "Whether dashboard lights appear",
  "Whether a clicking sound is present",
  "Whether the engine turns slowly",
  "Whether lights or accessories were left on",
  "How long the vehicle has been unused",
  "Whether warning lights appeared before the problem",
  "Whether the battery is damaged, leaking or swollen",
  "Whether the vehicle has been in an accident",
  "Whether battery access is restricted",
  "Any previous battery or alternator problems",
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain the starting problem.`,
  },
  {
    number: "2",
    title: "Share Vehicle Details",
    description: "Provide the make, model, year and battery voltage where known.",
  },
  {
    number: "3",
    title: "Describe the Symptoms",
    description: "Tell us whether the engine clicks, cranks slowly or does not respond.",
  },
  {
    number: "4",
    title: "Battery-System Assessment",
    description: "The battery condition, voltage system and approved connection points are considered.",
  },
  {
    number: "5",
    title: "Controlled Jump Start",
    description: "Suitable equipment is connected using the correct procedure for the vehicle.",
  },
  {
    number: "6",
    title: "Starting Check",
    description: "The vehicle is started where possible and checked for clear signs that further assistance may be required.",
  },
  {
    number: "7",
    title: "Recovery When Necessary",
    description: "If the vehicle cannot start or continue safely, complete vehicle recovery can be arranged.",
  },
]

const recoveryReasons = [
  "The engine does not start after an appropriate attempt",
  "The battery appears damaged",
  "The battery warning light remains on",
  "The engine stops again",
  "The alternator is not charging",
  "A starter motor fault is suspected",
  "Serious dashboard warnings are displayed",
  "The vehicle has another mechanical problem",
  "Continuing the journey may be unsafe",
]

const benefits = [
  {
    icon: Search,
    title: "12V and 24V Assistance",
    description: "We can assist with suitable vehicles using 12V and 24V battery systems.",
  },
  {
    icon: ClipboardList,
    title: "Vehicle Assessment",
    description: "We ask about the vehicle, battery and starting symptoms before assistance.",
  },
  {
    icon: MessageSquare,
    title: "Controlled Connections",
    description: "Suitable connection points and battery-system requirements are considered before equipment is attached.",
  },
  {
    icon: HeartHandshake,
    title: "Recovery When Required",
    description: "If a jump start does not resolve the problem, vehicle recovery may be arranged.",
  },
]

const relatedServices = [
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    description: "Support for common vehicle problems that leave a car or van unable to continue.",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Recovery when a mechanical or electrical fault prevents the vehicle from continuing.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Transportation for non-starting, broken-down or damaged vehicles.",
  },
]

const faqs = [
  {
    question: "Do you provide 12V battery jump starts?",
    answer: "Yes. We can assist many suitable cars, vans and 4x4s using 12V battery systems.",
  },
  {
    question: "Do you provide 24V jump starts?",
    answer: "We can assist certain suitable commercial vehicles using 24V systems. Provide the vehicle details before assistance is arranged.",
  },
  {
    question: "How do I know if my battery is flat?",
    answer: "Common signs include clicking, slow cranking, dim lights or no response when attempting to start. These symptoms can also be caused by other faults.",
  },
  {
    question: "Can a jump start damage my vehicle?",
    answer: "Incorrect voltage, polarity or connection points can damage electrical components. The correct vehicle procedure and equipment must be used.",
  },
  {
    question: "Can you jump-start a vehicle with a damaged battery?",
    answer: "A battery that is cracked, leaking, swollen, frozen or producing a strong smell should not be jump-started.",
  },
  {
    question: "Will a jump start fix my battery permanently?",
    answer: "No. A jump start only provides enough power to start the vehicle. A failing battery or charging-system fault requires further assessment.",
  },
  {
    question: "What if my vehicle still does not start?",
    answer: "If a suitable jump-start attempt does not work, the vehicle may require breakdown recovery and transportation to a garage.",
  },
  {
    question: "What vehicle details should I provide?",
    answer: "Provide the make, model, year, battery voltage where known and a clear description of what happens when you attempt to start the vehicle.",
  },
]

const jumpStartsService = services.find((s) => s.slug === "jump-starts")!

export default function JumpStartsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "12V & 24V Jump Start Service",
    serviceType: "Battery Jump Start",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/jump-starts`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Jump Starts", item: `${siteConfig.siteUrl}/services/jump-starts` },
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
          src={jumpStartsService.image ?? "/images/roadside-assistance-petrol-station-night.webp"}
          alt="AHS Recovery 12V and 24V jump start service"
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
              Flat Battery Assistance
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Jump Start Service 12V &amp; 24V
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Has a flat or discharged battery left your vehicle unable to start? AHS Recovery provides a
              professional jump start service for suitable 12V and 24V cars, vans and commercial vehicles. We
              assess the vehicle and battery system before attempting a controlled jump start.
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
                Request a Jump Start
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Roadside Battery Assistance</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Professional Help for a Flat Vehicle Battery
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A vehicle battery can lose its charge because of cold weather, age, electrical use while the
                  engine is off or a fault in the charging system. When the battery does not hold enough power, the
                  engine may turn slowly, make a clicking sound or fail to start.
                </p>
                <p>
                  AHS Recovery provides car battery assistance for suitable vehicles with discharged 12V and 24V
                  batteries. Before attempting a jump start, we ask about the vehicle, symptoms and events that
                  happened before it stopped starting.
                </p>
                <p>
                  A jump start may get the engine running, but it does not repair a damaged battery, faulty
                  alternator, starter motor problem or other electrical fault. If the vehicle still cannot start or
                  continue safely, complete recovery may be required.
                </p>
              </div>
              <Link
                href="/services/jump-starts"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Explore Our Jump Start Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/roadside-assistance-petrol-station-night.webp"
                alt="AHS Recovery attending a vehicle with a flat battery"
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
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Need Help with a Flat Battery?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Call AHS Recovery on {siteConfig.phoneDisplay} and provide your vehicle make, model, battery voltage
              and the symptoms you notice when trying to start the engine.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for a Jump Start
          </a>
        </div>
      </section>

      {/* Battery symptoms */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Warning Signs</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Signs Your Vehicle May Need a Battery Jump Start
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              A flat battery can cause several clear symptoms, but similar signs may also result from other
              electrical or mechanical faults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
            {symptoms.map((symptom) => (
              <div key={symptom.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <symptom.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{symptom.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{symptom.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto text-center text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-8">
            These signs do not confirm that the battery is the only problem. The vehicle may still require recovery
            or mechanical assessment.
          </p>
        </div>
      </section>

      {/* 12V and 24V comparison */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Different Battery Systems</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Jump Starts for Suitable 12V and 24V Vehicles
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto">
              The correct voltage and connection procedure must be identified before jump-start equipment is
              attached. Using unsuitable equipment or an incorrect connection can damage the battery, electrical
              system or vehicle electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {voltageSystems.map((system) => (
              <div key={system.voltage} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <system.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-primary font-black text-3xl">{system.voltage}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{system.title}</h3>
                <p className="text-slate-500 leading-relaxed">{system.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-5">We may be able to assist with:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {suitableVehicles.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5">
              Provide the vehicle make, model, year and battery-system details where available. Some vehicles have
              specific manufacturer procedures that must be followed.
            </p>
          </div>
        </div>
      </section>

      {/* Information checklist */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Assess the Vehicle</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Details to Provide When Requesting a Jump Start
            </h2>
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
            <div className="border-t border-white/10 pt-6 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm leading-relaxed">
                Do not attempt a jump start if the battery is cracked, leaking, swollen, frozen or giving off a
                strong unusual smell. Move away from the vehicle and seek professional advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Our Vehicle Jump Start Process</h2>
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
              Request Battery Assistance
            </a>
          </div>
        </div>
      </section>

      {/* When a jump start is not enough */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Further Assistance</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              When Your Vehicle May Need Recovery
            </h2>
            <p className="text-slate-400 leading-relaxed">
              A jump start only supplies temporary electrical power. It cannot repair a failed battery, damaged
              alternator, faulty starter motor or another mechanical or electrical problem.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="text-lg font-bold text-white mb-5 text-center md:text-left">
              Vehicle recovery may be required when:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {recoveryReasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-x-8 gap-y-3">
            <Link href="/services/vehicle-recovery" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View Our Vehicle Recovery Service <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/breakdown-assistance" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Explore Our Breakdown Recovery Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              A Careful Approach to Vehicle Jump Starts
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Modern vehicles contain sensitive electrical systems. Battery voltage, connection points and visible
              battery condition should be considered before attempting a jump start.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Related Breakdown and Recovery Services</h2>
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
              Frequently Asked Questions About Jump Starts
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
                <p className="text-slate-600 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background-dark py-20 md:py-28 text-center px-6">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Flat Battery Help</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Request a Professional Battery Jump Start</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery and explain the vehicle&apos;s starting symptoms. Provide the make, model, location and
          battery voltage where known so we can assess the appropriate next step.
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
