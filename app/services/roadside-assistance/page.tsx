import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  BatteryWarning,
  PowerOff,
  AlertTriangle,
  Gauge,
  Volume2,
  Thermometer,
  PlugZap,
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
  title: "Professional Roadside Assistance | AHS Recovery",
  description:
    "Roadside assistance for cars and vans affected by common vehicle problems. Call AHS Recovery on 07576 614651 for help.",
  path: "/services/roadside-assistance",
})

const trustPoints = ["Cars and Vans", "Vehicle Assessment", "Battery Jump Starts", "Recovery When Required"]

const situations = [
  {
    icon: BatteryWarning,
    title: "Flat or Discharged Battery",
    description: "A flat battery can prevent a vehicle from starting. Our jump-start service may help suitable 12V and 24V vehicles.",
    linkHref: "/services/jump-starts",
    linkText: "jump-start service",
  },
  {
    icon: PowerOff,
    title: "Vehicle Will Not Start",
    description: "Starting problems may be caused by the battery, starter motor, electrical system or another fault. If the issue cannot be resolved safely, recovery may be required.",
  },
  {
    icon: AlertTriangle,
    title: "Warning Lights",
    description: "A serious dashboard warning light can indicate an engine, electrical, braking or safety problem. Stop driving when continuing may be unsafe.",
  },
  {
    icon: Gauge,
    title: "Loss of Power",
    description: "A sudden loss of engine power can leave a vehicle unable to keep moving safely. The vehicle may need assessment and recovery.",
  },
  {
    icon: Volume2,
    title: "Unusual Noise or Vibration",
    description: "New or severe noises and vibrations can indicate mechanical, wheel or suspension problems. Continuing the journey may cause further damage.",
  },
  {
    icon: Thermometer,
    title: "Overheating",
    description: "An overheating engine should be switched off once the vehicle is in a safe position. Do not remove the coolant cap while the engine is hot.",
  },
  {
    icon: PlugZap,
    title: "Electrical Faults",
    description: "Electrical problems can affect starting, lighting, battery charging and other important vehicle systems.",
  },
  {
    icon: Route,
    title: "Vehicle Cannot Continue",
    description: "If roadside help does not make the vehicle safe to drive, a roadside recovery service can transport it to an agreed destination.",
  },
]

const safetySteps = [
  "Move the vehicle away from moving traffic if it is safe to do so.",
  "Switch on the hazard warning lights.",
  "Use sidelights when visibility is poor.",
  "Leave the vehicle from the side furthest from traffic when safe.",
  "Keep passengers away from the road.",
  "Use a safety barrier where one is available.",
  "Do not attempt repairs in a dangerous position.",
  "Call emergency services if the vehicle creates an immediate danger.",
  "Contact AHS Recovery once you are in a safe place.",
]

const infoChecklist = [
  "Exact vehicle location",
  "Road name or nearby landmark",
  "Direction of travel where relevant",
  "Vehicle make and model",
  "Vehicle size",
  "Dashboard warning lights",
  "Unusual sounds or smells",
  "What happened before the vehicle stopped",
  "Whether the engine starts",
  "Whether the vehicle rolls",
  "Whether the steering and brakes work",
  "Any visible damage",
  "Number of passengers",
  "Access restrictions",
]

const processSteps = [
  {
    number: "1",
    title: "Move to Safety",
    description: "Move yourself and your passengers away from danger where possible.",
  },
  {
    number: "2",
    title: "Call AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain the problem.`,
  },
  {
    number: "3",
    title: "Share Your Details",
    description: "Provide your location, vehicle information and the symptoms you noticed.",
  },
  {
    number: "4",
    title: "We Assess the Situation",
    description: "We determine whether roadside help, a jump start or vehicle recovery may be appropriate.",
  },
  {
    number: "5",
    title: "Assistance or Recovery",
    description: "If the vehicle cannot continue safely, we can arrange transportation to an agreed destination.",
  },
]

const recoveryReasons = [
  "The engine will not run",
  "A serious mechanical fault is suspected",
  "The vehicle has damaged wheels or suspension",
  "The steering or brakes are affected",
  "The vehicle cannot be repaired safely at the roadside",
  "Continuing the journey may cause further damage",
]

const benefits = [
  {
    icon: Search,
    title: "Vehicle Problem Assessment",
    description: "We ask about the symptoms, warning signs and vehicle condition before arranging assistance.",
  },
  {
    icon: ClipboardList,
    title: "Suitable Service Selection",
    description: "The information provided helps determine whether roadside help or full recovery is required.",
  },
  {
    icon: MessageSquare,
    title: "Support for Cars and Vans",
    description: "Roadside assistance is available for many cars, vans and other suitable vehicles.",
  },
  {
    icon: HeartHandshake,
    title: "Recovery When Needed",
    description: "If the vehicle cannot continue safely, transportation to an agreed destination can be arranged.",
  },
]

const relatedServices = [
  {
    slug: "jump-starts",
    title: "Jump Starts",
    description: "Battery jump-start assistance for suitable 12V and 24V vehicles.",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Recovery when a mechanical or electrical problem prevents the vehicle from continuing.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Transportation for broken-down, damaged or non-running vehicles.",
  },
]

const faqs = [
  {
    question: "What roadside assistance do you provide?",
    answer: "We assess common vehicle problems and determine whether roadside help, a battery jump start or complete vehicle recovery is appropriate.",
  },
  {
    question: "Can you help if my car will not start?",
    answer: "Yes. Tell us what happens when you try to start the vehicle and whether any warning lights appear. The vehicle may require a jump start or recovery.",
  },
  {
    question: "Can you jump-start a flat battery?",
    answer: "Our jump-start service can assist many suitable 12V and 24V vehicles with discharged batteries.",
  },
  {
    question: "What happens if the vehicle cannot be fixed at the roadside?",
    answer: "If the vehicle cannot continue safely, we can arrange recovery to an agreed garage, home or another accessible destination.",
  },
  {
    question: "What details should I provide?",
    answer: "Provide your exact location, vehicle make and model, warning lights, symptoms, visible damage and what happened before the vehicle stopped.",
  },
  {
    question: "Can you help with vans?",
    answer: "We can provide roadside assistance for many small and medium-sized vans. Provide the vehicle's size and approximate weight when calling.",
  },
  {
    question: "Should I remain inside my vehicle?",
    answer: "This depends on where the vehicle has stopped. Move away from traffic when it is safe and follow official road-safety instructions.",
  },
  {
    question: "What is the difference between roadside assistance and vehicle recovery?",
    answer: "Roadside assistance assesses the problem at the vehicle's location. Vehicle recovery transports the vehicle when it cannot continue safely.",
  },
]

const roadsideService = services.find((s) => s.slug === "roadside-assistance")!

export default function RoadsideAssistancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roadside Assistance",
    serviceType: "Roadside Assistance",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/roadside-assistance`,
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
        name: "Roadside Assistance",
        item: `${siteConfig.siteUrl}/services/roadside-assistance`,
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
          src={roadsideService.image ?? "/images/roadside-assistance-petrol-station-night.webp"}
          alt="AHS Recovery professional roadside assistance"
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
              Help When Your Vehicle Stops
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Roadside Assistance
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Stranded with a vehicle that will not start or continue safely? AHS Recovery provides professional
              roadside assistance for cars, vans and other suitable vehicles. We assess the problem and determine
              whether roadside help, a jump start or complete vehicle recovery is the most appropriate option.
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
                Request Roadside Help
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Roadside Vehicle Support</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Roadside Help for Common Vehicle Problems
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A vehicle problem can leave you stranded at home, at work, in a car park or beside the road.
                  Continuing to drive with a serious fault may cause further damage or put road users at risk.
                </p>
                <p>
                  AHS Recovery provides vehicle roadside assistance when a car or van cannot start or continue
                  safely. We use the information you provide to assess the problem and decide whether roadside
                  support may help.
                </p>
                <p>
                  If the vehicle cannot be made safe to continue, we can arrange recovery and transport it to an
                  agreed garage, home or another accessible destination.
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
                src="/images/recovery-truck-fleet-transport.webp"
                alt="AHS Recovery fleet attending a roadside assistance call"
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
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Stranded and Need Roadside Help?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Move to a safe position where possible and call AHS Recovery on {siteConfig.phoneDisplay}. Tell us
              your location, vehicle type, warning signs and what happened before the vehicle stopped.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for Roadside Assistance
          </a>
        </div>
      </section>

      {/* Roadside situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Roadside Assistance for Different Vehicle Problems
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              The correct response depends on the cause of the problem and the condition of the vehicle. Roadside
              assistance may be suitable for the following situations.
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
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Stay Safe While Waiting</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              What to Do When You Are Stranded
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Your first priority is protecting yourself, your passengers and other road users.
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
                This is general guidance. Always follow instructions from emergency services, police and road
                authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Assess the Problem</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Information to Provide When Requesting Roadside Assistance
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate details help us understand the situation and decide which service and equipment may be
              required.
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
              If it is safe, photographs of dashboard warnings or visible damage may help us assess the situation.
              Never place yourself near moving traffic to take photographs.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Our Roadside Assistance Process</h2>
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
              Request Roadside Help
            </a>
          </div>
        </div>
      </section>

      {/* Assistance vs recovery */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choosing the Right Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Do You Need Roadside Assistance or Breakdown Recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Roadside assistance is intended for vehicle problems that can be assessed at the vehicle&apos;s
              location. A flat battery or another straightforward issue may not always require full transportation.
              Breakdown recovery is required when the vehicle cannot be made safe to continue or needs to be taken
              to a garage, home or another destination.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-background-dark p-8 mb-8">
            <h3 className="text-lg font-bold text-white mb-5">You may need breakdown recovery if:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {recoveryReasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services/breakdown-assistance"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View Breakdown Recovery <ArrowRight className="w-4 h-4" />
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
              Clear Support When Your Vehicle Cannot Continue
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Being stranded can be stressful. Clear questions and accurate information help identify the right
              form of assistance.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Related Roadside and Recovery Services</h2>
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
              Frequently Asked Questions About Roadside Assistance
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Assistance</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Get Help with a Stranded Vehicle</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          If your vehicle will not start or cannot continue safely, call AHS Recovery. Provide your location,
          vehicle details and the symptoms you noticed so we can assess the appropriate next step.
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
