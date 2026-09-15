import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  PowerOff,
  CircleAlert,
  ArrowLeftRight,
  MoveDiagonal,
  TriangleAlert,
  Layers,
  Car,
  PackageX,
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
  title: "Specialist Accident Recovery | AHS Recovery",
  description:
    "Specialist accident recovery for severely damaged, non-rolling and difficult vehicles. Call AHS Recovery on 07576 614651.",
  path: "/services/specialist-accident-recovery",
})

const trustPoints = ["Severely Damaged Vehicles", "Difficult Loading Situations", "Non-Rolling Vehicles", "Controlled Vehicle Recovery"]

const situations = [
  {
    icon: PowerOff,
    title: "Non-Rolling Vehicles",
    description: "Damage to the wheels, axles, suspension or brakes may prevent the vehicle from rolling normally.",
  },
  {
    icon: CircleAlert,
    title: "Locked or Missing Wheels",
    description: "A vehicle with locked, collapsed or missing wheels may require additional preparation before it can be loaded.",
  },
  {
    icon: ArrowLeftRight,
    title: "Severe Front or Rear Damage",
    description: "Major impact damage may affect the engine compartment, cooling system, boot, chassis or other structural areas.",
  },
  {
    icon: MoveDiagonal,
    title: "Side-Impact Damage",
    description: "Side damage can affect doors, pillars, wheels, suspension and the vehicle's balance during loading.",
  },
  {
    icon: TriangleAlert,
    title: "Difficult Vehicle Positions",
    description: "Vehicles close to barriers, walls, trees, ditches, slopes or other obstacles may require a carefully planned extraction.",
  },
  {
    icon: Layers,
    title: "Multi-Vehicle Incidents",
    description: "Collisions involving several vehicles may create restricted access and require individual recovery assessments.",
  },
  {
    icon: Car,
    title: "Low or Modified Vehicles",
    description: "Lowered vehicles, sports cars and modified vehicles may require additional clearance and careful loading.",
  },
  {
    icon: PackageX,
    title: "Vehicles with Loose Components",
    description: "Broken panels, wheels, suspension parts or other loose components must be identified before the vehicle is moved.",
  },
]

const safetyPoints = [
  "Stay away from moving traffic.",
  "Follow instructions from emergency services.",
  "Do not enter a vehicle that appears unstable.",
  "Avoid contact with leaking fluids.",
  "Do not touch exposed wiring or damaged electrical components.",
  "Keep away from loose bodywork and broken glass.",
  "Do not attempt to move the vehicle yourself.",
  "Keep passengers and bystanders outside the recovery area.",
  "Do not stand near cables, straps or recovery equipment.",
  "Take photographs only from a safe position.",
]

const infoChecklist = [
  "Exact incident location",
  "Vehicle make and model",
  "Vehicle size and approximate weight",
  "Number of vehicles involved",
  "Position and angle of the vehicle",
  "Visible accident damage",
  "Condition of each wheel",
  "Condition of the steering and suspension",
  "Whether the vehicle rolls",
  "Whether the brakes operate",
  "Whether keys are available",
  "Details of loose vehicle parts",
  "Details of leaking fluids",
  "Nearby barriers, walls, trees or ditches",
  "Width and height of the access route",
  "Whether emergency services are present",
  "Whether vehicle removal has been authorised",
  "Intended recovery destination",
  "Clear photographs where safe",
]

const processSteps = [
  {
    number: "1",
    title: "Scene Safety",
    description: "Recovery begins only after the incident scene has been made safe.",
  },
  {
    number: "2",
    title: "Removal Permission",
    description: "The vehicle must be permitted to move by the relevant authority where required.",
  },
  {
    number: "3",
    title: "Contact AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain the accident and vehicle condition.`,
  },
  {
    number: "4",
    title: "Share Detailed Information",
    description: "Provide vehicle, damage, access and location details.",
  },
  {
    number: "5",
    title: "Send Safe Photographs",
    description: "Where possible, send images of the vehicle, wheels, damage and surrounding space.",
  },
  {
    number: "6",
    title: "Recovery Assessment",
    description: "We assess the likely equipment, loading method and recovery approach.",
  },
  {
    number: "7",
    title: "Secure the Recovery Area",
    description: "Bystanders are kept clear of the vehicle and recovery equipment.",
  },
  {
    number: "8",
    title: "Controlled Vehicle Movement",
    description: "The vehicle is repositioned or prepared for loading where required and possible.",
  },
  {
    number: "9",
    title: "Loading and Securing",
    description: "The damaged vehicle is loaded and secured according to its condition.",
  },
  {
    number: "10",
    title: "Transportation",
    description: "The vehicle is transported to the agreed garage, repair centre, storage facility or another suitable destination.",
  },
]

const serviceComparison = [
  {
    title: "Accident Recovery",
    description: "Suitable for the standard collection and transportation of accident-damaged cars or vans once the incident has been managed.",
    href: "/services/accident-recovery",
  },
  {
    title: "RTC Recovery",
    description: "Suitable for road traffic collision scenes that may involve multiple vehicles, road obstructions or additional scene assessment.",
    href: "/services/rtc-recovery",
  },
  {
    title: "Specialist Accident Recovery",
    description: "Suitable for severely damaged, non-rolling, unstable or difficult-to-load vehicles that may require additional recovery planning.",
    href: null,
  },
]

const benefits = [
  {
    icon: Search,
    title: "Detailed Vehicle Assessment",
    description: "We ask about visible damage, wheel condition and vehicle movement before recovery.",
  },
  {
    icon: ClipboardList,
    title: "Access Assessment",
    description: "The available space, obstacles and route to the vehicle are considered.",
  },
  {
    icon: MessageSquare,
    title: "Suitable Recovery Planning",
    description: "The loading and recovery approach is selected according to the information provided.",
  },
  {
    icon: HeartHandshake,
    title: "Agreed Transportation",
    description: "The vehicle is transported to a suitable destination confirmed before recovery begins.",
  },
]

const relatedServices = [
  {
    slug: "accident-recovery",
    title: "Accident Recovery",
    description: "Standard recovery and transportation for suitable accident-damaged vehicles.",
  },
  {
    slug: "rtc-recovery",
    title: "RTC Recovery",
    description: "Vehicle recovery following road traffic collisions and complex road incidents.",
  },
  {
    slug: "winch-out-recovery",
    title: "Winch-Out Recovery",
    description: "Controlled extraction for vehicles stuck in ditches, verges or difficult positions.",
  },
]

const faqs = [
  {
    question: "What is specialist accident recovery?",
    answer: "It is the recovery of severely damaged, unstable, non-rolling or difficult-to-load vehicles that may not be suitable for standard recovery methods.",
  },
  {
    question: "When is specialist recovery required?",
    answer: "It may be required when wheels are locked or damaged, the vehicle is unstable, access is restricted or standard loading is not possible.",
  },
  {
    question: "Can you recover a vehicle with damaged wheels?",
    answer: "Many vehicles with damaged or locked wheels can be recovered, but the damage and loading requirements must be assessed first.",
  },
  {
    question: "What information should I provide?",
    answer: "Provide the vehicle type, exact location, visible damage, wheel condition, position, access restrictions and intended destination.",
  },
  {
    question: "Where can the recovered vehicle be taken?",
    answer: "It can be transported to an agreed garage, repair centre, storage facility or another suitable destination.",
  },
  {
    question: "What is the difference between accident and specialist accident recovery?",
    answer: "Accident recovery covers standard collection of damaged vehicles. Specialist recovery is intended for severe damage, difficult access or vehicles that cannot be loaded normally.",
  },
  {
    question: "When can recovery begin?",
    answer: "Recovery begins only after the scene is safe and the relevant emergency services or authorities have permitted the vehicle to be moved.",
  },
]

const specialistService = services.find((s) => s.slug === "specialist-accident-recovery")!

export default function SpecialistAccidentRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Specialist Accident Recovery",
    serviceType: "Specialist Accident Recovery",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/specialist-accident-recovery`,
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
        name: "Specialist Accident Recovery",
        item: `${siteConfig.siteUrl}/services/specialist-accident-recovery`,
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
          src={specialistService.image ?? "/images/specialist-accident-recovery-lamborghini.webp"}
          alt="AHS Recovery specialist accident recovery service"
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
              Complex Vehicle Recovery
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Specialist Accident Recovery Service
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Severely damaged, unstable or difficult-to-load vehicles require more than standard recovery. AHS
              Recovery provides specialist accident recovery for suitable vehicles affected by serious collisions,
              locked wheels, difficult positions and complex loading conditions.
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
                Request Specialist Recovery
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Advanced Accident Recovery</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Specialist Recovery for Complex Accident Situations
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Accident damage can affect a vehicle&apos;s structure, wheels, suspension, steering and braking
                  systems. In more serious cases, the vehicle may be unstable, unable to roll or positioned where
                  standard loading is not possible.
                </p>
                <p>
                  AHS Recovery assesses the vehicle, accident scene, visible damage, access and surrounding hazards
                  before deciding how recovery should proceed. The equipment and loading method depend on the
                  specific condition and position of the vehicle.
                </p>
                <p>
                  Recovery only begins after the scene has been made safe and the relevant emergency services or
                  authorities have permitted the vehicle to be removed.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request Specialist Accident Recovery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/large-vehicle-recovery-hookloader.webp"
                alt="AHS Recovery vehicle handling a complex vehicle recovery"
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
              Does the Vehicle Require Specialist Recovery?
            </h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Once the accident scene is safe, call AHS Recovery on {siteConfig.phoneDisplay}. Explain the
              vehicle&apos;s position, visible damage, wheel condition and any access problems that could affect
              recovery.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call for Specialist Recovery
          </a>
        </div>
      </section>

      {/* Specialist recovery situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When Specialist Recovery Is Needed</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Complex Recovery for Severely Damaged Vehicles
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Standard recovery methods may not be suitable when a vehicle is heavily damaged, unstable or
              difficult to access.
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

      {/* Safety */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Before Recovery Begins</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Safety Around a Severely Damaged Vehicle
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              A badly damaged vehicle may contain sharp materials, leaking fluids, unstable components and hidden
              electrical or mechanical hazards.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 md:p-10">
            <ol className="space-y-4">
              {safetyPoints.map((step, index) => (
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
                Emergency services, police and road authorities control the incident scene. Their instructions must
                always take priority.
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
              Details Needed for Specialist Vehicle Recovery
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Clear information helps determine whether specialist recovery is required and what equipment may be
              suitable.
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
              Never enter a dangerous area to take photographs. Images should only be collected from a safe
              position after following instructions from emergency services.
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
              Our Specialist Accident Recovery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
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
              Request Specialist Vehicle Recovery
            </a>
          </div>
        </div>
      </section>

      {/* Three-service comparison */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Accident Recovery Options</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Standard, RTC or Specialist Accident Recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              AHS Recovery provides separate services for different accident and collision situations.
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

          <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto text-center">
            If you are unsure which service is appropriate, provide clear details and safe photographs when
            contacting us.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              A Planned Approach to Complex Vehicle Recovery
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              Complex accident recovery requires careful preparation. The vehicle&apos;s damage, position,
              stability and surrounding access must be understood before it is moved.
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
              Frequently Asked Questions About Specialist Accident Recovery
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Complex Recovery Support</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">Request Specialist Accident Recovery</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Once the incident scene is safe and removal is permitted, call AHS Recovery. Provide detailed information
          about the vehicle&apos;s damage, position, access and intended destination so the recovery requirements
          can be assessed.
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
