import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Droplet,
  TrendingDown,
  Route,
  Trees,
  Sprout,
  Mountain,
  ParkingSquare,
  TriangleAlert,
  Cable,
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
  title: "Professional Winch-Out Recovery | AHS Recovery",
  description:
    "Winch recovery for vehicles stuck in mud, ditches, fields and verges. Call AHS Recovery on 07576 614651 for safe vehicle extraction.",
  path: "/services/winch-out-recovery",
})

const trustPoints = ["Cars, Vans and 4x4s", "Mud and Ditch Recovery", "Controlled Vehicle Extraction", "Difficult Vehicle Positions"]

const situations = [
  {
    icon: Droplet,
    title: "Vehicle Stuck in Mud",
    description: "Soft or deep mud can reduce tyre grip and cause a vehicle to sink. Continued wheel spinning may make the situation worse.",
  },
  {
    icon: TrendingDown,
    title: "Ditch Recovery",
    description: "A vehicle in a ditch may be at an unstable angle or have damage to its wheels, steering or suspension.",
  },
  {
    icon: Route,
    title: "Verge Recovery",
    description: "Roadside verges can be soft, steep or uneven. The vehicle's distance from the road and position must be assessed before extraction.",
  },
  {
    icon: Trees,
    title: "Field Recovery",
    description: "Wet fields and soft ground can leave cars and vans unable to regain traction without assistance.",
  },
  {
    icon: Sprout,
    title: "Vehicle Stuck on Grass",
    description: "Wet grass can provide very little grip, especially on slopes or when the ground underneath is soft.",
  },
  {
    icon: Mountain,
    title: "Embankment Recovery",
    description: "A vehicle on an embankment may be unstable and require careful control during extraction.",
  },
  {
    icon: ParkingSquare,
    title: "Difficult Parking Positions",
    description: "A non-running vehicle in a restricted or awkward position may require winching to reach a suitable loading area.",
  },
  {
    icon: TriangleAlert,
    title: "Accident-Related Extraction",
    description: "Some accident-damaged vehicles may require controlled movement before they can be loaded. Complex cases may need specialist accident recovery.",
    linkHref: "/services/specialist-accident-recovery",
    linkText: "specialist accident recovery",
  },
]

const safetySteps = [
  "Stop accelerating if the wheels are spinning without progress.",
  "Switch off the engine if the vehicle is unstable.",
  "Ask passengers to leave the vehicle when it is safe.",
  "Keep people away from traffic, slopes and unstable ground.",
  "Do not attach ropes or straps to unsuitable vehicle parts.",
  "Never stand between the vehicle and the recovery vehicle.",
  "Stay clear of cables, straps and the planned recovery path.",
  "Do not attempt self-recovery near water, steep drops or moving traffic.",
  "Share accurate location and access information.",
  "Take photographs only from a safe and stable position.",
]

const infoChecklist = [
  "Exact vehicle location",
  "Vehicle make and model",
  "Approximate size and weight",
  "Vehicle position and angle",
  "Type and condition of the ground",
  "Depth of mud or ditch",
  "Distance from a firm surface",
  "Whether the engine starts",
  "Whether the vehicle rolls",
  "Whether the steering works",
  "Whether the brakes operate",
  "Condition of the wheels and tyres",
  "Visible accident damage",
  "Nearby trees, walls, fences or water",
  "Width and height of the access route",
  "Clear photographs where safe",
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain how and where the vehicle became stuck.`,
  },
  {
    number: "2",
    title: "Provide Vehicle Details",
    description: "Share the vehicle type, size, condition and whether it rolls, steers and brakes.",
  },
  {
    number: "3",
    title: "Describe the Location",
    description: "Explain the ground conditions, access route, slope and nearby obstacles.",
  },
  {
    number: "4",
    title: "Send Safe Photographs",
    description: "Provide clear photographs of the vehicle and surrounding area where it is safe to do so.",
  },
  {
    number: "5",
    title: "Recovery Assessment",
    description: "We determine whether winching is suitable and plan the recovery direction and equipment.",
  },
  {
    number: "6",
    title: "Secure the Recovery Area",
    description: "People are kept clear of the equipment and planned vehicle path.",
  },
  {
    number: "7",
    title: "Controlled Extraction",
    description: "The vehicle is carefully pulled towards stable and accessible ground.",
  },
  {
    number: "8",
    title: "Vehicle Condition Check",
    description: "The vehicle is assessed for visible damage that may prevent safe driving.",
  },
  {
    number: "9",
    title: "Transportation if Required",
    description: "If the vehicle cannot continue safely, complete vehicle recovery can be arranged.",
  },
]

const winchChoices = [
  "The vehicle is close to an accessible road",
  "A recovery vehicle can remain on stable ground",
  "A controlled pull may return the vehicle to a safe position",
  "The vehicle is stuck in a verge, ditch or mud",
]

const offRoadChoices = [
  "The vehicle is far from a firm road",
  "Access requires off-road capability",
  "The ground is deeply muddy or uneven",
  "The vehicle is stranded on a remote track, field or slope",
]

const benefits = [
  {
    icon: Search,
    title: "Vehicle Position Assessment",
    description: "We review the angle, condition and movement of the stuck vehicle.",
  },
  {
    icon: ClipboardList,
    title: "Ground and Access Assessment",
    description: "The surrounding surface, slope, obstacles and access route are considered.",
  },
  {
    icon: MessageSquare,
    title: "Controlled Recovery Planning",
    description: "The extraction direction and equipment are selected before the pull begins.",
  },
  {
    icon: HeartHandshake,
    title: "Further Recovery if Required",
    description: "If the vehicle cannot continue safely after extraction, transportation can be arranged.",
  },
]

const relatedServices = [
  {
    slug: "4x4-off-road-recovery",
    title: "4x4 and Off-Road Recovery",
    description: "Recovery for vehicles stranded away from firm roads or on difficult terrain.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Transportation for broken-down, damaged and non-running vehicles.",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    description: "Recovery for severely damaged or difficult-to-access vehicles.",
  },
]

const faqs = [
  {
    question: "What is winch-out recovery?",
    answer: "Winch-out recovery uses controlled pulling equipment to move a stuck vehicle towards a stable and accessible position.",
  },
  {
    question: "Can you recover a car stuck in mud?",
    answer: "Yes, many vehicles stuck in mud can be recovered. The mud depth, vehicle position and recovery access must be assessed first.",
  },
  {
    question: "Can you recover a vehicle from a ditch?",
    answer: "Ditch recovery may be possible depending on its depth, the vehicle's angle, visible damage and available access.",
  },
  {
    question: "Can you recover a van using a winch?",
    answer: "Many vans can be recovered, subject to their size, weight, condition and position.",
  },
  {
    question: "Should I keep trying to drive out?",
    answer: "Stop if the wheels are spinning without progress. Repeated attempts may cause the vehicle to sink deeper or suffer damage.",
  },
  {
    question: "What photographs should I provide?",
    answer: "Where safe, provide photographs of the complete vehicle, ground, access route, nearby obstacles and distance from a firm surface.",
  },
  {
    question: "What happens after the vehicle is extracted?",
    answer: "The vehicle is moved to stable ground. If damage prevents safe driving, further vehicle transportation can be arranged.",
  },
  {
    question: "What is the difference between winch recovery and off-road recovery?",
    answer: "Winch recovery is often used when equipment can operate from nearby stable ground. Off-road recovery may be required when difficult terrain must be crossed to reach the vehicle.",
  },
]

const winchOutService = services.find((s) => s.slug === "winch-out-recovery")!

export default function WinchOutRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Winch-Out Recovery",
    serviceType: "Winch Recovery",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/winch-out-recovery`,
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
        name: "Winch-Out Recovery",
        item: `${siteConfig.siteUrl}/services/winch-out-recovery`,
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
          src={winchOutService.image ?? "/images/off-road-plant-recovery-rural.webp"}
          alt="AHS Recovery professional winch recovery service"
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
              Controlled Vehicle Extraction
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Winch-Out Recovery
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Is your car, van or 4x4 stuck in mud, a ditch, field, verge or another difficult position? AHS
              Recovery provides professional winch recovery using a controlled approach based on the vehicle&apos;s
              position, condition, ground stability and available access.
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
                Request Winch Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Winching Service</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Controlled Winch Recovery for Stuck Vehicles
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  A vehicle can become stuck after leaving the road, losing traction or entering soft and unstable
                  ground. Attempting to drive out repeatedly may cause the wheels to dig deeper, damage the vehicle
                  or make the recovery more difficult.
                </p>
                <p>
                  AHS Recovery assesses the vehicle, ground, surrounding obstacles and available recovery points
                  before any winching begins. The direction and method of extraction must be planned carefully to
                  reduce unwanted movement and avoid further damage.
                </p>
                <p>
                  Winch-out recovery may be suitable when a recovery vehicle can reach a stable position close
                  enough to perform a controlled extraction.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request Professional Winch Recovery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/van-recovery-rural-road.webp"
                alt="Vehicle recovered from a rural roadside by AHS Recovery"
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
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Is Your Vehicle Stuck?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Stop repeated attempts to drive out and call AHS Recovery on {siteConfig.phoneDisplay}. Provide your
              exact location, vehicle details, ground conditions and safe photographs of the surrounding area.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for Winch-Out Recovery
          </a>
        </div>
      </section>

      {/* Recovery situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When Winching May Be Required</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Winch Recovery for Difficult Vehicle Positions
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              The correct recovery method depends on the position of the vehicle, ground conditions, nearby
              obstacles and access for recovery equipment.
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

      {/* Safety */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Before Recovery Begins</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              What to Do When Your Vehicle Is Stuck
            </h2>
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
              <Cable className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm leading-relaxed">
                A winch cable or recovery strap can cause serious injury if used incorrectly. Keep everyone outside
                the recovery area and follow the recovery operator&apos;s instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Help Us Assess the Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Details to Provide for Vehicle Winching
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate information helps us understand whether standard winch-out recovery is suitable and which
              equipment may be required.
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
              Do not place yourself in danger to collect information or photographs. Images should only be taken
              from safe and stable ground.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Our Winch-Out Recovery Process</h2>
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
              Request Vehicle Winching
            </a>
          </div>
        </div>
      </section>

      {/* Winch-out vs off-road comparison */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choose the Correct Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Do You Need Winch-Out or 4x4 Recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Winch-out recovery is generally suitable when the stuck vehicle can be reached from a firm and stable
              position. It may be used for cars or vans in verges, shallow ditches, mud or other difficult
              positions near an accessible surface. 4x4 and off-road recovery may be required when the stranded
              vehicle is farther from a firm road or when recovery equipment must travel across difficult terrain
              to reach it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose winch-out recovery when:</h3>
              <ul className="space-y-3">
                {winchChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose 4x4 and off-road recovery when:</h3>
              <ul className="space-y-3">
                {offRoadChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services/4x4-off-road-recovery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Explore 4x4 and Off-Road Recovery <ArrowRight className="w-4 h-4" />
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
              A Planned Approach to Vehicle Extraction
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Winch recovery should never begin without considering ground stability, the vehicle&apos;s position
              and the direction in which it will move.
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
              Frequently Asked Questions About Winch Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Vehicle Extraction</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange Professional Winch-Out Recovery</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery with your vehicle details, exact location, ground conditions and safe photographs. We
          will assess the situation and identify the appropriate recovery approach.
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
