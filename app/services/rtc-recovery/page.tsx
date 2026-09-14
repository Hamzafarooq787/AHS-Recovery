import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  CarFront,
  Layers,
  ArrowLeftRight,
  MoveDiagonal,
  CircleAlert,
  PowerOff,
  OctagonAlert,
  Truck,
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
  title: "Professional RTC Recovery Service | AHS Recovery",
  description:
    "RTC recovery for vehicles damaged in road traffic collisions. Call AHS Recovery on 07576 614651 for careful vehicle removal.",
  path: "/services/rtc-recovery",
})

const trustPoints = ["Collision-Damaged Vehicles", "Careful Scene Assessment", "Vehicle Removal", "Garage or Storage Transport"]

const situations = [
  {
    icon: CarFront,
    title: "Single-Vehicle Collisions",
    description:
      "A vehicle may leave the road, hit an object or suffer damage without another vehicle being involved. Its position and stability must be assessed before movement.",
  },
  {
    icon: Layers,
    title: "Multi-Vehicle Collisions",
    description: "Incidents involving several vehicles require clear access and coordination before recovery can begin.",
  },
  {
    icon: ArrowLeftRight,
    title: "Front or Rear Impact Damage",
    description: "Impact damage may affect the engine, cooling system, bodywork, lights and structural components.",
  },
  {
    icon: MoveDiagonal,
    title: "Side-Impact Damage",
    description: "Side damage can affect doors, wheels, suspension and vehicle stability during loading.",
  },
  {
    icon: CircleAlert,
    title: "Wheel and Suspension Damage",
    description: "Broken or locked wheels may prevent a vehicle from rolling normally and require a different loading method.",
  },
  {
    icon: PowerOff,
    title: "Non-Starting Vehicles",
    description: "Electrical, mechanical or impact damage may prevent a vehicle from starting after a collision.",
  },
  {
    icon: OctagonAlert,
    title: "Vehicles Blocking the Road",
    description: "A damaged vehicle creating an obstruction can only be moved after the scene is safe and removal is authorised.",
  },
  {
    icon: Truck,
    title: "Post-Collision Transportation",
    description: "Once recovered, the vehicle can be transported to an agreed garage, repair facility, storage location or another suitable destination.",
  },
]

const safetySteps = [
  "Stop in a safe position where possible.",
  "Switch off the engine and activate the hazard warning lights.",
  "Check yourself, your passengers and others for injuries.",
  "Contact emergency services when anyone is injured or the scene is dangerous.",
  "Move away from traffic when it is safe.",
  "Do not stand between damaged vehicles.",
  "Stay clear of leaking fluids, broken glass and loose vehicle parts.",
  "Follow instructions from emergency services and road authorities.",
  "Do not move a vehicle until permission has been given where required.",
  "Contact AHS Recovery when recovery can begin safely.",
]

const infoChecklist = [
  "Exact incident location",
  "Number of vehicles involved",
  "Vehicle make and model",
  "Approximate vehicle size and weight",
  "Position of the damaged vehicle",
  "Visible bodywork damage",
  "Condition of the wheels and tyres",
  "Whether the vehicle rolls",
  "Whether the steering works",
  "Whether the brakes operate",
  "Whether the engine starts",
  "Whether keys are available",
  "Details of leaking fluids",
  "Nearby debris or obstacles",
  "Access restrictions",
  "Whether emergency services are present",
  "Whether removal has been authorised",
  "Intended recovery destination",
]

const processSteps = [
  {
    number: "1",
    title: "Secure the Scene",
    description: "Emergency services and road authorities manage immediate safety where required.",
  },
  {
    number: "2",
    title: "Confirm Removal Is Permitted",
    description: "Recovery begins only after the vehicle has been cleared for removal.",
  },
  {
    number: "3",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and provide details about the incident and vehicle.`,
  },
  {
    number: "4",
    title: "Share Damage Information",
    description: "Explain the vehicle's position, visible damage and whether it rolls, steers and brakes.",
  },
  {
    number: "5",
    title: "Recovery Assessment",
    description: "We identify the appropriate recovery vehicle, equipment and loading method.",
  },
  {
    number: "6",
    title: "Vehicle Removal",
    description: "The damaged vehicle is carefully loaded and secured.",
  },
  {
    number: "7",
    title: "Transportation",
    description: "The vehicle is transported to the agreed garage, storage facility or other suitable destination.",
  },
]

const serviceComparison = [
  {
    title: "Accident Recovery",
    description:
      "Suitable for the standard collection and transportation of an accident-damaged car or van after the immediate incident has been managed.",
    href: "/services/accident-recovery",
  },
  {
    title: "RTC Recovery",
    description:
      "Suitable for road traffic collision situations where the road scene, number of vehicles or vehicle position requires additional assessment before removal.",
    href: null,
  },
  {
    title: "Specialist Accident Recovery",
    description:
      "Suitable for severely damaged, overturned, inaccessible or difficult-to-load vehicles that may require specialist equipment or extraction.",
    href: "/services/specialist-accident-recovery",
  },
]

const benefits = [
  {
    icon: Search,
    title: "Scene and Access Assessment",
    description: "We consider the vehicle's location, position, surrounding obstacles and available recovery access.",
  },
  {
    icon: ClipboardList,
    title: "Damage Assessment",
    description: "Visible wheel, suspension, bodywork and mechanical damage is reviewed before loading.",
  },
  {
    icon: MessageSquare,
    title: "Suitable Recovery Method",
    description: "The recovery approach is selected according to the condition and position of the vehicle.",
  },
  {
    icon: HeartHandshake,
    title: "Agreed Transportation",
    description: "The recovered vehicle is transported to a destination confirmed before removal.",
  },
]

const relatedServices = [
  {
    slug: "accident-recovery",
    title: "Accident Recovery",
    description: "Standard recovery and transportation for suitable accident-damaged vehicles.",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    description: "Recovery for severely damaged vehicles and complex extraction situations.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Transportation for broken-down, damaged and non-running vehicles.",
  },
]

const faqs = [
  {
    question: "What does RTC recovery mean?",
    answer: "RTC recovery means removing and transporting vehicles involved in a road traffic collision after the scene is safe and removal is permitted.",
  },
  {
    question: "When can vehicle recovery begin?",
    answer: "Recovery can begin after emergency services and relevant authorities have completed their work and permitted the vehicle to be moved.",
  },
  {
    question: "Can you recover a vehicle with damaged wheels?",
    answer: "Many vehicles with damaged or locked wheels can be recovered, but additional equipment may be required. Provide clear information and photographs where possible.",
  },
  {
    question: "Can you recover more than one vehicle?",
    answer: "Multi-vehicle incidents require individual assessment. Tell us how many vehicles are involved and provide details about each one.",
  },
  {
    question: "Where can the damaged vehicle be taken?",
    answer: "The vehicle can be transported to an agreed garage, repair centre, storage facility, home or another suitable destination.",
  },
  {
    question: "What information should I provide?",
    answer: "Provide the location, vehicle type, visible damage, position, wheel condition, access details and intended destination.",
  },
  {
    question: "What is the difference between RTC recovery and accident recovery?",
    answer: "Accident recovery generally covers standard collection of an accident-damaged vehicle. RTC recovery focuses on vehicles involved in road traffic collision scenes that may require more detailed scene assessment.",
  },
  {
    question: "When is specialist accident recovery needed?",
    answer: "It may be required for severely damaged, overturned, inaccessible or difficult-to-load vehicles.",
  },
]

const rtcRecoveryService = services.find((s) => s.slug === "rtc-recovery")!

export default function RtcRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "RTC Recovery",
    serviceType: "Road Traffic Collision Recovery",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/rtc-recovery`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "RTC Recovery", item: `${siteConfig.siteUrl}/services/rtc-recovery` },
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
          src={rtcRecoveryService.image ?? "/images/rtc-recovery-multiple-vehicles.webp"}
          alt="AHS Recovery professional RTC recovery service"
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
              Road Traffic Collision Assistance
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Road Traffic Collision Recovery
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              AHS Recovery provides professional RTC recovery for cars, vans and other suitable vehicles damaged in
              road traffic collisions. Once the scene is safe and vehicle removal is permitted, we assess the
              damage, position and access before arranging careful recovery and transportation.
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
                Request RTC Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Collision Vehicle Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Professional Recovery After a Road Traffic Collision
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A road traffic collision can leave one or more vehicles damaged, unstable or unable to move
                  safely. Wheels may be locked, suspension components may be broken and loose bodywork may make
                  standard loading difficult.
                </p>
                <p>
                  RTC recovery begins only after emergency services have completed any necessary work and the
                  vehicle is permitted to be removed. AHS Recovery then assesses the vehicle&apos;s condition,
                  position and access before selecting the appropriate recovery method.
                </p>
                <p>
                  We can transport the recovered vehicle to an agreed garage, repair centre, storage facility, home
                  or another suitable destination.
                </p>
              </div>
              <Link
                href="/services/rtc-recovery"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Explore Our RTC Recovery Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rtc-recovery-scrapyard.webp"
                alt="Collision-damaged vehicle recovered by AHS Recovery"
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
              Need Recovery After a Road Traffic Collision?
            </h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Make sure you and your passengers are safe and follow instructions from emergency services. When
              vehicle removal is permitted, call AHS Recovery on {siteConfig.phoneDisplay} and provide the incident
              and vehicle details.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for RTC Recovery
          </a>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">At the Collision Scene</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              What to Do Following a Road Traffic Collision
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Personal safety must come before vehicle recovery. Do not attempt to move a damaged vehicle when
              doing so could create further danger.
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
                This is general safety information. Instructions from police, emergency services and road
                authorities must always take priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collision situations */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Recovery for Different Collision Situations
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              The recovery approach depends on the number of vehicles involved, extent of damage, road position and
              available access.
            </p>
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

      {/* Information required checklist */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Assess the Incident</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Details to Provide When Requesting RTC Recovery
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate information helps us understand the collision scene, vehicle damage and recovery
              requirements.
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
              Photographs may help us assess the damage and access. Only take photographs from a safe position and
              never enter a live traffic area.
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
              Our Road Traffic Collision Recovery Process
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
              Request Collision Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Choosing the correct service */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">RTC, Accident or Specialist Recovery?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Which Collision Recovery Service Do You Need?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              AHS Recovery has separate pages for standard accident recovery, RTC recovery and specialist accident
              recovery. Each page targets a different type of recovery situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {serviceComparison.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-8 ${
                  item.href ? "border-white/10 bg-background-dark" : "border-primary/40 bg-primary/5"
                }`}
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>
                {item.href && (
                  <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className="text-slate-400 leading-relaxed max-w-3xl">
            If you are unsure which service is required, provide complete incident details and photographs where it
            is safe to do so.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              A Careful Approach to Collision Vehicle Recovery
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Collision-damaged vehicles can contain unstable parts and hidden mechanical damage. Each vehicle must
              be assessed before it is moved.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Related Accident Recovery Services</h2>
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
              Frequently Asked Questions About RTC Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Collision Recovery</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange Professional RTC Recovery</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Once the collision scene is safe and vehicle removal is permitted, call AHS Recovery. Provide the incident
          location, vehicle condition and intended destination so we can assess the recovery requirements.
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
