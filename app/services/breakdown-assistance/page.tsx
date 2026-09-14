import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Wrench,
  Zap,
  BatteryCharging,
  Thermometer,
  AlertTriangle,
  CircleAlert,
  PowerOff,
  Route,
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
  title: "Nationwide Breakdown Recovery | AHS Recovery",
  description:
    "Nationwide breakdown recovery for cars and vans unable to continue their journey. Call AHS Recovery on 07576 614651 for assistance.",
  path: "/services/breakdown-assistance",
})

const trustPoints = ["Nationwide UK Coverage", "Cars and Vans", "Motorway Breakdown Recovery", "Long-Distance Vehicle Transport"]

const situations = [
  {
    icon: Wrench,
    title: "Mechanical Failure",
    description:
      "Engine, gearbox, clutch and other mechanical problems may make it unsafe to continue driving. We can recover the vehicle to an agreed repairer or destination.",
  },
  {
    icon: Zap,
    title: "Electrical Problems",
    description:
      "Alternator faults, starter motor problems and other electrical failures can prevent a vehicle from starting or continuing its journey.",
  },
  {
    icon: BatteryCharging,
    title: "Flat or Failed Battery",
    description:
      "A discharged battery may only require a jump start. If the battery or charging system has failed, complete breakdown recovery may be required.",
    linkHref: "/services/jump-starts",
    linkText: "battery jump-start assistance",
  },
  {
    icon: Thermometer,
    title: "Overheating",
    description:
      "An overheating engine can suffer serious damage if the journey continues. Stop safely, switch off the engine and arrange assistance.",
  },
  {
    icon: AlertTriangle,
    title: "Warning Lights and Loss of Power",
    description:
      "A serious warning light, unusual noise or sudden loss of power may indicate a fault that requires professional assessment.",
  },
  {
    icon: CircleAlert,
    title: "Wheel or Suspension Damage",
    description:
      "Damage to a wheel, tyre, suspension or steering system may make the vehicle unsafe to drive and difficult to load.",
  },
  {
    icon: PowerOff,
    title: "Non-Starting Vehicle",
    description:
      "If a car or van will not start and roadside assistance cannot resolve the problem, we can transport it to an agreed destination.",
  },
  {
    icon: Route,
    title: "Motorway Breakdown",
    description:
      "Vehicles that stop on a motorway or major road require careful recovery because of the increased traffic risk.",
    linkHref: "/services/motorway-breakdown-recovery",
    linkText: "motorway breakdown recovery",
  },
]

const safetySteps = [
  "Move the vehicle to a safe location if it can be done without risk.",
  "Switch on the hazard warning lights.",
  "Use sidelights when visibility is poor.",
  "Leave the vehicle from the side furthest from moving traffic when safe.",
  "Keep passengers away from the road and behind a safety barrier where available.",
  "Do not attempt repairs beside fast-moving traffic.",
  "Call emergency services if the vehicle is creating an immediate danger.",
  "Contact AHS Recovery once you are in a safe position.",
]

const vehicleTypes = [
  "Cars",
  "Small and medium-sized vans",
  "4x4s and SUVs",
  "Non-running vehicles",
  "Vehicles with mechanical faults",
  "Vehicles with electrical problems",
  "Vehicles with wheel or suspension damage",
  "Vehicles that cannot be repaired at the roadside",
  "Vehicles stranded during long-distance journeys",
]

const processSteps = [
  {
    number: "1",
    title: "Call AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} once you and your passengers are in a safe position.`,
  },
  {
    number: "2",
    title: "Share Your Location",
    description: "Provide the road name, direction of travel, nearby junction, postcode, landmark or another accurate location reference.",
  },
  {
    number: "3",
    title: "Explain the Breakdown",
    description: "Tell us what happened, which warning signs appeared and whether the vehicle starts, rolls, steers and brakes.",
  },
  {
    number: "4",
    title: "Confirm the Destination",
    description: "Provide the garage, home or other suitable destination where the vehicle needs to be taken.",
  },
  {
    number: "5",
    title: "Vehicle Recovery",
    description: "We arrange an appropriate recovery vehicle, load and secure your vehicle, and transport it to the agreed destination.",
  },
]

const coverageReasons = [
  "Your vehicle cannot be repaired at the roadside",
  "A nearby garage cannot complete the required repair",
  "You need the vehicle returned closer to home",
  "The vehicle requires specialist assessment",
  "A van carrying important equipment cannot continue",
  "The breakdown happens during a long-distance journey",
  "The vehicle needs transportation between distant locations",
]

const benefits = [
  {
    icon: Search,
    title: "Nationwide Recovery",
    description: "Breakdown recovery is available for suitable vehicles across the UK.",
  },
  {
    icon: ClipboardList,
    title: "Clear Assessment",
    description: "We ask for the important location, vehicle and fault details before arranging recovery.",
  },
  {
    icon: MessageSquare,
    title: "Suitable Recovery Equipment",
    description: "The recovery method is selected according to the vehicle's size, condition and position.",
  },
  {
    icon: HeartHandshake,
    title: "Agreed Destination",
    description: "Your vehicle is transported to a suitable destination agreed before the journey begins.",
  },
]

const relatedServices = [
  {
    slug: "motorway-breakdown-recovery",
    title: "Motorway Breakdown Recovery",
    description: "Dedicated recovery for vehicles unable to continue on motorways and other high-speed roads.",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    description: "Practical help for common roadside problems that may not require complete vehicle recovery.",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Vehicle Transportation",
    description: "Planned nationwide collection and delivery for non-running and roadworthy vehicles.",
  },
]

const faqs = [
  {
    question: "Do you provide nationwide breakdown recovery?",
    answer: "Yes. Nationwide breakdown recovery is available for suitable cars, vans and other vehicles across the UK.",
  },
  {
    question: "Where can you take my vehicle?",
    answer: "We can transport your vehicle to an agreed garage, home, storage facility or another accessible destination.",
  },
  {
    question: "What information should I provide?",
    answer: "Tell us your exact location, direction of travel, vehicle make and model, the nature of the fault and your preferred destination.",
  },
  {
    question: "Can you recover a van?",
    answer: "We can recover many small and medium-sized vans. Provide the vehicle's dimensions, weight and condition so the correct equipment can be assessed.",
  },
  {
    question: "What if I break down on a motorway?",
    answer: "Move to a safe location where possible and follow official motorway safety guidance. Our motorway breakdown recovery service may then assist with vehicle removal.",
  },
  {
    question: "Can you help if my battery is flat?",
    answer: "Our jump-start service may help if the problem is limited to a discharged battery. Full breakdown recovery may be required if the battery or charging system has failed.",
  },
  {
    question: "Can you recover a vehicle that does not roll?",
    answer: "Some vehicles with locked or damaged wheels can be recovered, but additional equipment may be required. Explain the condition and provide photographs if possible.",
  },
  {
    question: "Do you provide long-distance breakdown recovery?",
    answer: "Yes. Long-distance recovery can transport a broken-down vehicle to an agreed destination elsewhere in the UK.",
  },
]

const breakdownAssistanceService = services.find((s) => s.slug === "breakdown-assistance")!

export default function BreakdownAssistancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Breakdown Recovery",
    serviceType: "Breakdown Recovery",
    areaServed: "United Kingdom",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/breakdown-assistance`,
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
        name: "Breakdown Assistance",
        item: `${siteConfig.siteUrl}/services/breakdown-assistance`,
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
          src={breakdownAssistanceService.image ?? "/images/motorway-breakdown-recovery-van.webp"}
          alt="AHS Recovery nationwide breakdown recovery service"
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
              Breakdown Help Across the UK
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Nationwide Breakdown Recovery Service
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Broken down and unable to continue your journey? AHS Recovery provides nationwide breakdown recovery
              for cars, vans and other suitable vehicles. We assess the situation, arrange the appropriate recovery
              vehicle and transport your vehicle to an agreed garage, home or another accessible destination.
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
                Request Breakdown Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Professional Breakdown Assistance</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Breakdown Recovery When Your Vehicle Cannot Continue
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A vehicle breakdown can happen at home, at work or during a long journey. Mechanical faults,
                  electrical problems, overheating, battery failure and damaged components can all leave a vehicle
                  unable to move safely.
                </p>
                <p>
                  AHS Recovery provides car breakdown assistance when roadside repair is not possible or
                  appropriate. We collect the vehicle and transport it to an agreed destination using equipment
                  suited to its size, condition and position.
                </p>
                <p>
                  Before arranging recovery, we ask for your exact location, vehicle details, the symptoms of the
                  breakdown and your preferred destination. Clear information helps us assess the recovery
                  requirements before dispatch.
                </p>
              </div>
              <Link
                href="/services/vehicle-recovery"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Explore Our Vehicle Recovery Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/roadside-assistance-petrol-station-night.webp"
                alt="AHS Recovery vehicle providing roadside breakdown assistance"
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
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Broken Down and Need Recovery?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Move to a safe place where possible and call AHS Recovery on {siteConfig.phoneDisplay}. Tell us your
              location, vehicle type, direction of travel and what happened before the vehicle stopped.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for Breakdown Recovery
          </a>
        </div>
      </section>

      {/* Breakdown situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Vehicle Breakdown Assistance for Common Problems
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Different faults can leave a vehicle unsafe or unable to continue. Our breakdown recovery service can
              assist when full vehicle transportation is required.
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
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Your Safety Comes First</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              What to Do When Your Vehicle Breaks Down
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Your first priority after a breakdown should be moving yourself and your passengers away from danger.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 md:p-10">
            <ol className="space-y-4">
              {safetySteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-primary/20 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm leading-relaxed">
                Safety advice must be presented as general guidance. Do not replace instructions given by the
                police, emergency services or road authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles we recover (checklist) */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Types</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Breakdown Recovery for Cars and Vans
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Our nationwide vehicle recovery service can assist with various vehicle types, subject to their size,
              weight, condition and accessibility.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-background-dark rounded-2xl border border-white/10 p-8 md:p-10">
            <h3 className="text-lg font-bold text-white mb-5">We may be able to recover:</h3>
            <ul className="space-y-3 mb-6">
              {vehicleTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              Provide the vehicle make, model and approximate size when calling. Tell us about modifications,
              accident damage, locked wheels or access restrictions that may affect loading.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              How Nationwide Breakdown Recovery Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative mb-16">
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
              Request Breakdown Assistance
            </a>
          </div>
        </div>
      </section>

      {/* Nationwide coverage */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">UK-Wide Assistance</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Nationwide Car and Van Breakdown Recovery
            </h2>
            <p className="text-slate-400 leading-relaxed">
              AHS Recovery provides nationwide car recovery when a vehicle breaks down away from home or during a
              long journey. We can arrange transportation to an agreed repairer, home address, storage facility or
              another suitable destination in the UK.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-5 text-center md:text-left">
              Long-distance breakdown recovery may be suitable when:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {coverageReasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 leading-relaxed">
              Tell us the exact collection point and intended destination when requesting long-distance breakdown
              recovery. This allows the full journey to be assessed before recovery is arranged.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Professional Support During a Vehicle Breakdown
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              A breakdown can be stressful, especially when it happens during a long journey. Clear communication
              and proper preparation help make the recovery process easier.
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
              Frequently Asked Questions About Breakdown Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Nationwide Assistance</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Request Nationwide Breakdown Recovery
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          If your vehicle has broken down and cannot continue safely, call AHS Recovery. Provide your location,
          vehicle details and intended destination so we can assess the recovery requirements.
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
