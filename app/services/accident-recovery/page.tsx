import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  TriangleAlert,
  PowerOff,
  CircleAlert,
  Car,
  CarFront,
  Warehouse,
  AlertTriangle,
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
  title: "Professional Accident Recovery Service | AHS Recovery",
  description:
    "Accident recovery for damaged cars and vans. Call AHS Recovery on 07576 614651 for careful vehicle collection and transportation.",
  path: "/services/accident-recovery",
})

const trustPoints = ["Cars and Vans", "Damaged Vehicle Recovery", "Careful Loading", "Garage Transportation"]

const situations = [
  {
    icon: TriangleAlert,
    title: "Minor Accident Damage",
    description: "A vehicle may look driveable after a minor collision but still have hidden wheel, suspension or steering damage. Recovery may be safer than continuing the journey.",
  },
  {
    icon: PowerOff,
    title: "Non-Running Vehicles",
    description: "Impact damage may prevent the engine from starting or cause electrical and mechanical faults. We can transport the vehicle for professional assessment.",
  },
  {
    icon: CircleAlert,
    title: "Damaged Wheels or Suspension",
    description: "A vehicle with damaged wheels, tyres, steering or suspension may need additional preparation and careful loading.",
  },
  {
    icon: Car,
    title: "Bodywork Damage",
    description: "Loose panels, broken bumpers and damaged bodywork can make normal driving unsafe. Tell us about any loose or dragging parts before collection.",
  },
  {
    icon: CarFront,
    title: "Single-Vehicle Accidents",
    description: "We can assist with suitable vehicles damaged in single-vehicle incidents once the location is safe and accessible.",
  },
  {
    icon: Warehouse,
    title: "Post-Accident Garage Transport",
    description: "The damaged vehicle can be transported to an agreed repair centre, garage, storage facility or other suitable destination.",
  },
]

const safetySteps = [
  "Stop the vehicle as soon as it is safe.",
  "Switch off the engine and activate the hazard warning lights.",
  "Check yourself and your passengers for injuries.",
  "Call emergency services if anyone is injured or the incident creates an immediate danger.",
  "Move away from moving traffic when it is safe to do so.",
  "Do not stand between damaged vehicles or near unstable debris.",
  "Follow instructions from the police, emergency services or road authorities.",
  "Arrange vehicle recovery only when the scene is safe and removal is permitted.",
]

const infoChecklist = [
  "Exact vehicle location",
  "Vehicle make and model",
  "Vehicle size and approximate weight",
  "Number of vehicles involved",
  "Visible accident damage",
  "Condition of the wheels and tyres",
  "Whether the vehicle rolls",
  "Whether the steering works",
  "Whether the brakes operate",
  "Whether the engine starts",
  "Whether the keys are available",
  "Any fluids leaking from the vehicle",
  "Access restrictions at the scene",
  "Intended recovery destination",
]

const processSteps = [
  {
    number: "1",
    title: "Make Sure the Scene Is Safe",
    description: "Contact emergency services where necessary and follow their instructions.",
  },
  {
    number: "2",
    title: "Call AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and provide the important details about the accident and vehicle.`,
  },
  {
    number: "3",
    title: "Share the Vehicle Condition",
    description: "Explain the visible damage and whether the vehicle rolls, steers, brakes or starts.",
  },
  {
    number: "4",
    title: "We Assess the Recovery",
    description: "We identify the suitable recovery vehicle, equipment and loading method.",
  },
  {
    number: "5",
    title: "Vehicle Collection",
    description: "Once permitted, the damaged vehicle is carefully loaded and secured.",
  },
  {
    number: "6",
    title: "Vehicle Transportation",
    description: "We transport the vehicle to the destination agreed before recovery begins.",
  },
]

const specialistReasons = [
  "The vehicle is severely damaged",
  "Multiple wheels are locked or missing",
  "The vehicle is overturned",
  "The vehicle is in a difficult position",
  "Specialist lifting or extraction is required",
  "The vehicle cannot be loaded normally",
  "A larger or heavier vehicle is involved",
]

const benefits = [
  {
    icon: Search,
    title: "Vehicle Condition Assessment",
    description: "We ask about visible damage and whether the vehicle can roll, steer and brake.",
  },
  {
    icon: ClipboardList,
    title: "Suitable Loading Method",
    description: "The recovery method is selected according to the position and condition of the vehicle.",
  },
  {
    icon: MessageSquare,
    title: "Clear Destination Planning",
    description: "The collection and delivery details are confirmed before transportation begins.",
  },
  {
    icon: HeartHandshake,
    title: "Careful Vehicle Handling",
    description: "The damaged vehicle is loaded, secured and transported according to the assessed requirements.",
  },
]

const relatedServices = [
  {
    slug: "rtc-recovery",
    title: "RTC Recovery",
    description: "Recovery support following road traffic collisions and incidents involving an active road scene.",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    description: "Recovery for severely damaged vehicles and complex loading or extraction situations.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "General recovery for broken-down, damaged and non-running vehicles.",
  },
]

const faqs = [
  {
    question: "When should an accident-damaged vehicle be recovered?",
    answer: "A vehicle should be recovered when it cannot be driven safely because of mechanical, electrical, steering, suspension, wheel or bodywork damage.",
  },
  {
    question: "Can you move a vehicle before the police finish at the scene?",
    answer: "No vehicle should be moved until emergency services or other relevant authorities have permitted its removal.",
  },
  {
    question: "Where can you take my damaged vehicle?",
    answer: "We can transport it to an agreed garage, repair centre, storage facility, home or another suitable destination.",
  },
  {
    question: "What information should I provide?",
    answer: "Provide the vehicle type, exact location, visible damage, wheel condition, access details and intended destination.",
  },
  {
    question: "Can you recover a vehicle with damaged wheels?",
    answer: "Many vehicles with damaged or locked wheels can be recovered, but additional equipment may be required. Provide clear details and photographs where possible.",
  },
  {
    question: "Can you recover a car that will not start after an accident?",
    answer: "Yes. We can assist with many non-running accident-damaged vehicles once the scene is safe and accessible.",
  },
  {
    question: "What is the difference between accident recovery and RTC recovery?",
    answer: "Accident recovery focuses on collecting and transporting an accident-damaged vehicle. RTC recovery is intended for road traffic collision situations that may involve a more complex scene or multiple vehicles.",
  },
  {
    question: "When is specialist accident recovery required?",
    answer: "It may be required when a vehicle is severely damaged, overturned, difficult to access or unable to be loaded through standard recovery methods.",
  },
]

const accidentRecoveryService = services.find((s) => s.slug === "accident-recovery")!

export default function AccidentRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accident Recovery Service",
    serviceType: "Accident Recovery",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/accident-recovery`,
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
        name: "Accident Recovery",
        item: `${siteConfig.siteUrl}/services/accident-recovery`,
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
          src={accidentRecoveryService.image ?? "/images/accident-recovery-honda-accord.webp"}
          alt="AHS Recovery professional accident recovery service"
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
              Careful Post-Accident Vehicle Recovery
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Accident Recovery
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              If your car or van has been damaged in an accident and cannot be driven safely, AHS Recovery can help.
              Our accident recovery service provides careful collection and transportation to an agreed garage,
              storage facility, home or another suitable destination.
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
                Request Accident Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Post-Accident Assistance</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Careful Recovery for Accident-Damaged Vehicles
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A road accident can leave a vehicle unsafe, difficult to move or unable to roll normally. Even
                  when damage appears minor, steering, suspension, wheels and other important components may have
                  been affected.
                </p>
                <p>
                  AHS Recovery provides car accident recovery for vehicles that should not be driven after an
                  incident. Before arranging collection, we ask about the vehicle, visible damage, its position,
                  access to the scene and the intended destination.
                </p>
                <p>
                  Recovery can begin once the incident area is safe, emergency services have completed any
                  necessary work and the vehicle has been permitted to move.
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
                src="/images/accident-recovery-scrapyard-crane.webp"
                alt="Accident-damaged vehicle recovered by AHS Recovery"
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
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">
              Has Your Vehicle Been Damaged in an Accident?
            </h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Move yourself and your passengers to a safe position where possible. Once the scene is secure, call
              AHS Recovery on {siteConfig.phoneDisplay} and explain the vehicle&apos;s condition and location.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for Accident Recovery
          </a>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Before Recovery Begins</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              What to Do After a Road Accident
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Your safety and the safety of other road users should come before arranging vehicle recovery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-primary/30 bg-background-dark p-8 md:p-10">
            <ol className="space-y-4">
              {safetySteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-slate-300 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 text-sm leading-relaxed">
                This is general safety guidance. Instructions from emergency services and road authorities must
                always take priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accident situations (cards) */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Accident Recovery for Different Vehicle Conditions
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              The recovery method depends on the type of vehicle, extent of the damage and whether it can roll,
              steer and brake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((situation) => (
              <div key={situation.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{situation.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{situation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Assess the Job</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Details to Provide When Requesting Accident Recovery
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate information helps us understand the condition of the vehicle and select appropriate recovery
              equipment.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-background-dark rounded-2xl border border-white/10 p-8 md:p-10">
            <h3 className="text-lg font-bold text-white mb-5">Provide the following details:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {infoChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-5">
              Photographs of the vehicle and surrounding area can help us assess difficult loading situations. Do
              not place yourself in danger to take photographs.
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
              Our Accident Vehicle Recovery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
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
              Request Accident Vehicle Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Standard vs specialist */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choosing the Correct Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Does Your Vehicle Need Specialist Accident Recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              This accident recovery service is intended for suitable cars and vans that can be collected using
              standard recovery procedures after an accident.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-background-dark p-8 mb-8">
            <h3 className="text-lg font-bold text-white mb-5">Specialist accident recovery may be required when:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {specialistReasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 leading-relaxed border-t border-white/10 pt-5 mb-4">
              For complex incidents, use our specialist accident recovery service.
            </p>
            <Link
              href="/services/specialist-accident-recovery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Explore Specialist Accident Recovery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-background-dark p-8">
            <p className="text-slate-400 leading-relaxed mb-4">
              For an active road traffic collision involving multiple vehicles or a complex road scene, review our
              RTC recovery service.
            </p>
            <Link
              href="/services/rtc-recovery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Explore RTC Recovery <ArrowRight className="w-4 h-4" />
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
              Responsible Handling After an Accident
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              An accident-damaged vehicle may have hidden faults and unstable components. It must be assessed
              carefully before loading and transportation.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Related Accident and Vehicle Recovery Services
            </h2>
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
              Frequently Asked Questions About Accident Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Recovery</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Arrange Recovery for an Accident-Damaged Vehicle
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Once the accident scene is safe and vehicle removal is permitted, call AHS Recovery. Provide the vehicle
          details, visible damage, exact location and intended destination so we can assess the recovery
          requirements.
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
