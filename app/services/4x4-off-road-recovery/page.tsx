import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Droplet,
  Trees,
  TrendingDown,
  Sprout,
  Route,
  Mountain,
  CarFront,
  TriangleAlert,
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
  title: "4x4 & Off-Road Recovery Specialist | AHS Recovery",
  description:
    "Specialist 4x4 recovery for vehicles stuck in mud, fields, ditches or difficult ground. Call AHS Recovery on 07576 614651.",
  path: "/services/4x4-off-road-recovery",
})

const trustPoints = ["4x4s and SUVs", "Mud and Field Recovery", "Difficult Vehicle Positions", "Careful Vehicle Extraction"]

const situations = [
  {
    icon: Droplet,
    title: "Mud Recovery",
    description: "Deep or soft mud can reduce tyre grip and cause a vehicle to sink. Continued wheel spinning may make the situation worse.",
  },
  {
    icon: Trees,
    title: "Field Recovery",
    description: "Vehicles can become stranded in fields because of wet ground, steep gradients, hidden ruts or loss of traction.",
  },
  {
    icon: TrendingDown,
    title: "Ditch Recovery",
    description: "A vehicle in a ditch may be positioned at an unsafe angle or have damaged wheels and suspension. The recovery direction must be assessed carefully.",
  },
  {
    icon: Sprout,
    title: "Grass and Soft Ground",
    description: "Wet grass and soft soil can become difficult for heavy vehicles to cross, especially when the ground beneath is uneven.",
  },
  {
    icon: Route,
    title: "Track and Rural Access Recovery",
    description: "Narrow tracks, uneven surfaces and restricted access can affect which recovery vehicle and equipment can reach the stranded vehicle.",
  },
  {
    icon: Mountain,
    title: "Sloped Ground",
    description: "Vehicles stuck on slopes require careful assessment to reduce unwanted movement during recovery.",
  },
  {
    icon: CarFront,
    title: "4x4 and SUV Recovery",
    description: "Although 4x4s are designed for difficult surfaces, they can still become stuck when ground clearance, traction or tyre grip is lost.",
  },
  {
    icon: TriangleAlert,
    title: "Difficult Vehicle Positions",
    description: "A vehicle close to trees, fencing, walls, water or other obstacles may require a controlled recovery plan.",
  },
]

const safetySteps = [
  "Stop accelerating if the wheels are spinning without progress.",
  "Switch off the engine if the vehicle is in an unstable position.",
  "Ask passengers to leave the vehicle when it is safe.",
  "Keep everyone clear of slopes, ditches and moving recovery equipment.",
  "Do not attach ropes or straps to unsuitable parts of the vehicle.",
  "Do not stand between the vehicle and a fixed recovery point.",
  "Note the condition of the ground and possible access routes.",
  "Share accurate location information.",
  "Take photographs only from a safe position.",
  "Wait for the recovery situation to be assessed.",
]

const infoChecklist = [
  "Exact vehicle location",
  "Vehicle make and model",
  "Approximate size and weight",
  "Whether the vehicle is a 4x4 or two-wheel-drive",
  "Ground type and condition",
  "Depth of mud or soft ground",
  "Position and angle of the vehicle",
  "Condition of wheels and tyres",
  "Whether the engine starts",
  "Whether the vehicle rolls, steers and brakes",
  "Nearby obstacles",
  "Width and height of the access route",
  "Distance from a firm road surface",
  "Any visible damage",
  "Clear photographs or video where safe",
]

const processSteps = [
  {
    number: "1",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain where and how the vehicle became stuck.`,
  },
  {
    number: "2",
    title: "Share the Vehicle Details",
    description: "Provide the vehicle type, approximate size, weight and current condition.",
  },
  {
    number: "3",
    title: "Describe the Ground",
    description: "Explain whether the vehicle is in mud, a field, ditch, slope, track or another difficult location.",
  },
  {
    number: "4",
    title: "Send Safe Photographs",
    description: "Where possible, provide clear images of the vehicle, ground, access route and nearby obstacles.",
  },
  {
    number: "5",
    title: "We Assess the Recovery",
    description: "We determine the suitable recovery vehicle, equipment, direction and approach.",
  },
  {
    number: "6",
    title: "Controlled Vehicle Extraction",
    description: "The vehicle is carefully extracted and moved to stable ground.",
  },
  {
    number: "7",
    title: "Further Transportation",
    description: "If the vehicle has damage or cannot continue safely, transportation to an agreed destination can be arranged.",
  },
]

const fourByFourChoices = [
  "The vehicle is far from a firm road",
  "Access requires off-road capability",
  "The ground is deeply muddy or uneven",
  "A 4x4 or SUV is stranded on difficult terrain",
  "The vehicle is stuck on a track, field or slope",
]

const winchChoices = [
  "The vehicle is close to an accessible road",
  "A controlled pull may return it to firm ground",
  "The vehicle is stuck in a verge or ditch",
  "Standard recovery equipment can reach the location",
]

const benefits = [
  {
    icon: Search,
    title: "Ground Assessment",
    description: "We consider mud depth, surface stability, slopes and surrounding obstacles.",
  },
  {
    icon: ClipboardList,
    title: "Vehicle Assessment",
    description: "The vehicle's size, weight, position and condition are reviewed before recovery.",
  },
  {
    icon: MessageSquare,
    title: "Suitable Recovery Method",
    description: "The recovery approach is selected according to the location and information provided.",
  },
  {
    icon: HeartHandshake,
    title: "Further Transportation",
    description: "If the vehicle cannot continue safely after extraction, transportation can be arranged.",
  },
]

const relatedServices = [
  {
    slug: "winch-out-recovery",
    title: "Winch-Out Recovery",
    description: "Controlled extraction for vehicles stuck in mud, verges, ditches and difficult positions.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Transportation for broken-down, damaged and non-running vehicles.",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    description: "Recovery for severely damaged vehicles and complex extraction situations.",
  },
]

const faqs = [
  {
    question: "What vehicles can you recover off-road?",
    answer: "We may be able to recover 4x4s, SUVs, cars, vans and other suitable vehicles. The vehicle's size, weight, condition and location must be assessed first.",
  },
  {
    question: "Can you recover a vehicle stuck in mud?",
    answer: "Yes. Mud recovery may be possible depending on the depth, surface stability, vehicle position and access available for recovery equipment.",
  },
  {
    question: "Can you recover a vehicle from a field?",
    answer: "We can assist with many field recovery situations. Provide details about the ground, access route and distance from the nearest firm surface.",
  },
  {
    question: "Can you recover a vehicle from a ditch?",
    answer: "Ditch recovery may be possible, but the vehicle's angle, damage and surrounding space must be carefully assessed.",
  },
  {
    question: "What photographs should I send?",
    answer: "Where safe, send photographs showing the complete vehicle, ground conditions, access route, nearby obstacles and distance from a firm road.",
  },
  {
    question: "Should I keep trying to drive out?",
    answer: "Stop if the wheels are spinning without progress. Continued attempts may cause the vehicle to sink deeper or suffer damage.",
  },
  {
    question: "What happens after the vehicle is extracted?",
    answer: "The vehicle will be moved to stable ground. If it has damage or cannot continue safely, further transportation can be arranged.",
  },
  {
    question: "What is the difference between 4x4 recovery and winch-out recovery?",
    answer: "4x4 recovery is suited to difficult off-road access and terrain. Winch-out recovery is generally used when a vehicle can be reached from a stable and accessible position.",
  },
]

const fourByFourService = services.find((s) => s.slug === "4x4-off-road-recovery")!

export default function FourByFourOffRoadRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "4x4 & Off-Road Recovery Specialist",
    serviceType: "Off-Road Vehicle Recovery",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/4x4-off-road-recovery`,
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
        name: "4x4 & Off-Road Recovery",
        item: `${siteConfig.siteUrl}/services/4x4-off-road-recovery`,
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
          src={fourByFourService.image ?? "/images/4x4-recovery-g-wagon.webp"}
          alt="AHS Recovery specialist 4x4 recovery"
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
              Recovery Beyond the Road
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              4x4 &amp; Off-Road Recovery Specialist
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              When a 4x4, SUV or other suitable vehicle becomes stuck away from a normal road surface, safe
              recovery requires careful assessment and suitable equipment. AHS Recovery provides specialist 4x4
              recovery for vehicles stranded in mud, fields, ditches, tracks and other difficult locations.
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
                Request 4x4 Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Off-Road Vehicle Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Professional Recovery for Vehicles Stuck Off-Road
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Off-road recovery is different from standard roadside towing. Soft ground, slopes, limited access
                  and hidden obstacles can make a vehicle difficult to reach and move safely.
                </p>
                <p>
                  Before arranging recovery, AHS Recovery assesses the type of vehicle, ground conditions,
                  surrounding space and the position in which the vehicle is stuck. This information helps
                  determine the suitable recovery method and equipment.
                </p>
                <p>
                  Do not continue spinning the wheels or repeatedly attempt to drive out. This can cause the
                  vehicle to sink deeper, damage the ground and make recovery more difficult.
                </p>
              </div>
              <Link
                href="/services/4x4-off-road-recovery"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Explore Our 4x4 Recovery Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/off-road-plant-recovery-rural.webp"
                alt="AHS Recovery off-road vehicle recovery in a rural location"
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
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">Is Your Vehicle Stuck Off-Road?</h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Call AHS Recovery on {siteConfig.phoneDisplay}. Provide your exact location, vehicle details, ground
              conditions and clear photographs of the surrounding area where it is safe to do so.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for 4x4 Recovery
          </a>
        </div>
      </section>

      {/* Terrain and situation grid */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Where We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              4x4 Recovery for Difficult Ground and Vehicle Positions
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              The correct recovery method depends on the surface, access, slope and condition of the vehicle.
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

      {/* Safety checklist */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Before Help Arrives</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              What to Do When Your 4x4 Is Stuck
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
              <TriangleAlert className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm leading-relaxed">
                Do not attempt self-recovery if the vehicle is unstable, severely stuck or close to a dangerous
                edge, water or moving traffic.
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
              Details to Provide for Off-Road Recovery
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Off-road recovery often requires more information than standard vehicle towing. Accurate details help
              us understand access and ground conditions.
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
              Do not place yourself in danger to collect photographs. Images should only be taken from stable and
              safe ground.
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
              Our Off-Road Vehicle Recovery Process
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
              Request Off-Road Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Service comparison */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choosing the Correct Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Do You Need 4x4 Recovery or Winch-Out Recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              4x4 and off-road recovery is designed for suitable vehicles stranded away from normal road surfaces.
              It considers ground conditions, restricted access and the ability of recovery equipment to reach the
              vehicle. Winch-out recovery may be suitable when a car or van is stuck in a verge, shallow ditch, mud
              or another difficult position close to an accessible surface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-background-dark p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose 4x4 and off-road recovery when:</h3>
              <ul className="space-y-3">
                {fourByFourChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
          </div>

          <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto text-center mb-6">
            If you are unsure, provide photographs and location details so the situation can be assessed.
          </p>

          <div className="text-center">
            <Link
              href="/services/winch-out-recovery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View Winch-Out Recovery <ArrowRight className="w-4 h-4" />
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
              A Careful Approach to Specialist 4x4 Recovery
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              A rushed or poorly planned extraction can damage the vehicle, surrounding ground or recovery
              equipment. Each situation must be assessed before any pulling or lifting begins.
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
              Frequently Asked Questions About 4x4 Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Request Specialist Recovery</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Arrange 4x4 and Off-Road Vehicle Recovery</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery and provide your vehicle details, exact location, ground conditions and safe
          photographs. We will assess the situation and identify the appropriate recovery approach.
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
