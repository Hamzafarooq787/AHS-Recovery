import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Wrench,
  Zap,
  BatteryWarning,
  Thermometer,
  CircleAlert,
  AlertTriangle,
  Truck,
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
  title: "Nationwide Motorway Breakdown Recovery | AHS Recovery",
  description:
    "Nationwide motorway recovery for cars and vans unable to continue safely. Call AHS Recovery on 07576 614651 for assistance.",
  path: "/services/motorway-breakdown-recovery",
})

const trustPoints = ["Nationwide UK Coverage", "Cars and Vans", "Motorway Breakdown Recovery", "Long-Distance Transportation"]

const safeSteps = [
  "Move left into an emergency area or another safe place where possible.",
  "Stop as far left as you safely can.",
  "Switch on your hazard warning lights.",
  "Leave the vehicle through a door away from moving traffic when it is safe.",
  "Keep passengers away from the carriageway and behind a safety barrier where available.",
  "Do not attempt repairs beside fast-moving traffic.",
  "Contact the relevant road authority where required.",
  "Call AHS Recovery with your location and vehicle details.",
]

const liveLaneSteps = [
  "Keep your seat belt fastened.",
  "Switch on the hazard warning lights.",
  "Call 999 immediately.",
  "Tell the operator that you are stopped in a live motorway lane.",
  "Follow the emergency operator's instructions.",
  "Do not leave the vehicle unless instructed or remaining inside creates a greater danger.",
]

const situations = [
  {
    icon: Wrench,
    title: "Mechanical Failure",
    description: "Engine, gearbox, clutch and cooling-system faults can leave a vehicle unable to continue.",
  },
  {
    icon: Zap,
    title: "Electrical Failure",
    description: "Alternator, starter motor and other electrical problems may cause sudden power loss or prevent restarting.",
  },
  {
    icon: BatteryWarning,
    title: "Battery Problems",
    description: "A discharged or failed battery can leave a vehicle stranded. Motorway conditions may make full recovery safer than attempting assistance at the roadside.",
  },
  {
    icon: Thermometer,
    title: "Overheating",
    description: "An overheating engine should not be driven further. Continuing may cause serious damage.",
  },
  {
    icon: CircleAlert,
    title: "Wheel or Suspension Damage",
    description: "Wheel, tyre, steering or suspension damage can make a vehicle unsafe and affect the loading method.",
  },
  {
    icon: AlertTriangle,
    title: "Warning Lights",
    description: "Serious warning lights, unusual noises or sudden loss of power may indicate a fault requiring recovery.",
  },
  {
    icon: Truck,
    title: "Van Breakdown",
    description: "We can recover many suitable vans, subject to their dimensions, weight and condition.",
  },
  {
    icon: Route,
    title: "Long-Distance Breakdown",
    description: "If the vehicle breaks down far from its intended destination, long-distance motorway recovery can be arranged.",
  },
]

const infoChecklist = [
  "Motorway or major road name",
  "Direction of travel",
  "Nearest junction",
  "Nearest marker post where available",
  "Emergency-area number where relevant",
  "Nearby signs or landmarks",
  "Accurate phone location if available",
  "Vehicle make and model",
  "Vehicle registration",
  "Vehicle size and approximate weight",
  "Nature of the fault",
  "Whether the vehicle starts",
  "Whether it rolls, steers and brakes",
  "Number of passengers",
  "Current vehicle position",
  "Intended recovery destination",
]

const processSteps = [
  {
    number: "1",
    title: "Move to Safety",
    description: "Reach an emergency area or another safe place where possible. Call 999 if stopped in a live lane or immediate danger.",
  },
  {
    number: "2",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} once you are in a safer position.`,
  },
  {
    number: "3",
    title: "Share Your Location",
    description: "Provide the road, direction of travel, nearest junction and any safe location references.",
  },
  {
    number: "4",
    title: "Describe the Vehicle",
    description: "Tell us the make, model, size, fault and whether the vehicle rolls, steers and brakes.",
  },
  {
    number: "5",
    title: "Confirm the Destination",
    description: "Provide the garage, home or another suitable destination.",
  },
  {
    number: "6",
    title: "Recovery Assessment",
    description: "We identify the appropriate recovery vehicle and equipment.",
  },
  {
    number: "7",
    title: "Vehicle Collection",
    description: "The vehicle is loaded and secured when it is safe and permitted to do so.",
  },
  {
    number: "8",
    title: "Nationwide Transportation",
    description: "The vehicle is transported to the agreed destination.",
  },
]

const vehicleTypes = [
  "Cars",
  "Small and medium-sized vans",
  "4x4s and SUVs",
  "Non-running vehicles",
  "Vehicles with mechanical faults",
  "Vehicles with electrical problems",
  "Vehicles with battery failure",
  "Vehicles with damaged wheels",
  "Vehicles that have overheated",
  "Vehicles unable to complete a long journey",
]

const coverageReasons = [
  "The vehicle cannot be repaired safely",
  "You are far from home",
  "A nearby garage cannot complete the repair",
  "The vehicle requires specialist assessment",
  "A van cannot continue an important journey",
  "The vehicle needs transporting between distant locations",
]

const benefits = [
  {
    icon: Search,
    title: "Nationwide Coverage",
    description: "Motorway breakdown recovery is available for suitable vehicles across the UK.",
  },
  {
    icon: ClipboardList,
    title: "Location Assessment",
    description: "We ask for accurate road, direction and junction information before arranging recovery.",
  },
  {
    icon: MessageSquare,
    title: "Vehicle Assessment",
    description: "The vehicle's type, size, condition and movement are considered.",
  },
  {
    icon: HeartHandshake,
    title: "Agreed Destination",
    description: "The recovery destination is confirmed before transportation begins.",
  },
]

const relatedServices = [
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Nationwide recovery for vehicles affected by mechanical or electrical faults.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Recovery for broken-down, damaged and non-running vehicles.",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Vehicle Transportation",
    description: "Planned nationwide collection and delivery for suitable vehicles.",
  },
]

const faqs = [
  {
    question: "What should I do if I break down on a motorway?",
    answer: "Move to the left into an emergency area or another safer place where possible. Switch on your hazards and move away from traffic when safe. Call 999 if you stop in a live lane.",
  },
  {
    question: "What information should I provide?",
    answer: "Provide the road name, direction of travel, nearest junction, safe location reference, vehicle details and intended destination.",
  },
  {
    question: "Can you recover a car from a motorway?",
    answer: "Yes. We can recover many suitable cars that cannot continue safely, subject to access and recovery conditions.",
  },
  {
    question: "Can you recover a van?",
    answer: "We can recover many small and medium-sized vans. Provide the van's dimensions, weight, load and condition.",
  },
  {
    question: "Where can you take my vehicle?",
    answer: "We can transport it to an agreed garage, home, storage facility or another accessible destination.",
  },
  {
    question: "Do you provide nationwide motorway recovery?",
    answer: "Yes. Nationwide motorway breakdown recovery is available for suitable vehicles across the UK.",
  },
  {
    question: "What if I am stopped in a live lane?",
    answer: "Keep your seat belt fastened, switch on the hazard lights, call 999 immediately and follow the emergency operator's instructions.",
  },
  {
    question: "Can you provide long-distance recovery?",
    answer: "Yes. Long-distance recovery can transport a broken-down vehicle to an agreed destination elsewhere in the UK.",
  },
]

const motorwayService = services.find((s) => s.slug === "motorway-breakdown-recovery")!

export default function MotorwayBreakdownRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Motorway Breakdown Recovery",
    serviceType: "Motorway Breakdown Recovery",
    areaServed: "United Kingdom",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/motorway-breakdown-recovery`,
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
        name: "Motorway Breakdown Recovery",
        item: `${siteConfig.siteUrl}/services/motorway-breakdown-recovery`,
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
          src={motorwayService.image ?? "/images/motorway-breakdown-jaguar.webp"}
          alt="AHS Recovery nationwide motorway recovery service"
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
              Motorway Assistance Across the UK
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Nationwide Motorway Breakdown Recovery
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Broken down on a motorway or major road? AHS Recovery provides nationwide motorway recovery for cars,
              vans and other suitable vehicles that cannot continue safely. Once you are in a safe position, call
              us with your location, direction of travel and vehicle details.
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
                Request Motorway Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Motorway Vehicle Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Professional Recovery When Your Vehicle Stops on a Motorway
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A breakdown on a motorway requires extra care because vehicles are travelling at high speeds.
                  Your first priority should be reaching the safest available position and following official
                  road-safety guidance.
                </p>
                <p>
                  AHS Recovery provides motorway breakdown recovery when a vehicle cannot continue its journey. We
                  can collect suitable cars and vans and transport them to an agreed garage, home, storage facility
                  or another accessible destination.
                </p>
                <p>
                  Before arranging recovery, we ask for your exact location, direction of travel, nearby junction
                  or marker, vehicle condition and intended destination.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request Nationwide Motorway Recovery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/van-recovery-motorway-hardshoulder.webp"
                alt="Vehicle recovered from a motorway hard shoulder by AHS Recovery"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Broken Down on a Motorway?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              If you are in immediate danger or stopped in a live traffic lane, call 999 first. When you are in a
              safer position, call AHS Recovery on {siteConfig.phoneDisplay} and provide your exact location and
              direction of travel.
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

      {/* Motorway safety panel */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Stay Safe</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              What to Do During a Motorway Breakdown
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Follow current official motorway safety guidance. The correct action depends on whether you can
              reach the left side of the road or an emergency area.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="rounded-2xl border-2 border-primary/30 bg-background-dark p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-5">If You Can Reach a Safer Place</h3>
              <ol className="space-y-4">
                {safeSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border-2 border-primary/30 bg-background-dark p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-5">If You Cannot Leave a Live Lane</h3>
              <ol className="space-y-4">
                {liveLaneSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm leading-relaxed">
                Official instructions from emergency services, police and road authorities must always take
                priority over general website guidance.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://www.gov.uk/if-you-break-down-on-a-motorway"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Read Official UK Motorway Breakdown Guidance <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown situations */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Motorway Recovery for Different Vehicle Problems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {situations.map((situation) => (
              <div key={situation.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{situation.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{situation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Find You</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Details to Provide for Motorway Recovery
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
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              Do not walk along the motorway or enter a live lane to find location information. Only gather details
              that can be obtained safely.
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
              Our Motorway Breakdown Recovery Process
            </h2>
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
              Request Motorway Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Vehicles we recover */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Types</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Motorway Breakdown Recovery for Cars and Vans
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              The recovery method depends on the vehicle&apos;s size, weight, condition and position.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-background-dark rounded-2xl border border-white/10 p-8 md:p-10">
            <h3 className="text-lg font-bold text-white mb-5">We may be able to recover:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {vehicleTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              Provide complete vehicle details when requesting assistance. Large, modified, heavily loaded or
              severely damaged vehicles may require additional assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Nationwide coverage */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">UK-Wide Motorway Assistance</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Nationwide Motorway Recovery Across the UK
            </h2>
            <p className="text-slate-600 leading-relaxed">
              AHS Recovery provides nationwide motorway recovery for suitable cars and vans unable to continue
              their journey. Recovery can be arranged to an agreed garage, home, storage facility or another
              accessible destination.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-5 text-center md:text-left">
              Long-distance motorway recovery may be suitable when:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {coverageReasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 leading-relaxed">
              Provide both the collection location and intended destination so the complete recovery journey can be
              assessed.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              A Clear Approach to Motorway Vehicle Recovery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Other Recovery Options</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Related Breakdown Recovery Services</h2>
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
              Frequently Asked Questions About Motorway Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Motorway Assistance</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Request Nationwide Motorway Recovery
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Once you are in a safe position, call AHS Recovery with your road, direction of travel, vehicle details
          and intended destination. If you are stopped in a live lane or immediate danger, call 999 first.
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
