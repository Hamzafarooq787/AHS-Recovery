import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ChevronDown,
  PowerOff,
  ShoppingBag,
  HandCoins,
  Warehouse,
  Car,
  Sparkles,
  Truck,
  Boxes,
  Home,
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
  title: "Nationwide Vehicle Transport Service | AHS Recovery",
  description:
    "Nationwide vehicle transport for cars, vans and non-running vehicles. Call AHS Recovery on 07576 614651 to arrange collection and delivery.",
  path: "/services/vehicle-transportation-delivery",
})

const trustPoints = ["Nationwide UK Coverage", "Vehicle Collection and Delivery", "Running and Non-Running Vehicles", "Planned Long-Distance Transport"]

const situations = [
  {
    icon: PowerOff,
    title: "Non-Running Vehicle Transport",
    description: "We can transport many vehicles that do not start or cannot be driven. Tell us whether the vehicle rolls, steers and brakes so the loading requirements can be assessed.",
  },
  {
    icon: ShoppingBag,
    title: "Vehicle Purchases",
    description: "A vehicle purchased privately, through a dealer or from another approved source may require collection and delivery to its new owner.",
  },
  {
    icon: HandCoins,
    title: "Vehicle Sales",
    description: "We can transport a sold vehicle to an agreed buyer, dealership, storage location or another suitable destination.",
  },
  {
    icon: Warehouse,
    title: "Garage and Repair Transfers",
    description: "Vehicles can be moved between homes, garages, bodyshops, repair centres and specialist facilities.",
  },
  {
    icon: Car,
    title: "Classic Car Transportation",
    description: "Older and classic vehicles may require careful preparation because of their condition, ground clearance or mechanical limitations.",
  },
  {
    icon: Sparkles,
    title: "Luxury and Performance Cars",
    description: "Vehicle details, ground clearance and condition should be provided before transportation so the loading requirements can be assessed.",
  },
  {
    icon: Truck,
    title: "Van Transportation",
    description: "We can transport many small and medium-sized vans, subject to their dimensions, weight and condition.",
  },
  {
    icon: Boxes,
    title: "Storage Movements",
    description: "Vehicles can be collected from or delivered to suitable storage facilities, subject to access.",
  },
  {
    icon: Home,
    title: "Relocation Transport",
    description: "Vehicle transportation may be useful when moving home, changing business premises or relocating a vehicle elsewhere in the UK.",
  },
]

const vehicleTypes = [
  "Cars",
  "Small and medium-sized vans",
  "4x4s and SUVs",
  "Non-running vehicles",
  "Classic vehicles",
  "Luxury vehicles",
  "Performance vehicles",
  "Accident-damaged vehicles suitable for standard loading",
  "Vehicles requiring garage transfers",
  "Vehicles purchased or sold",
  "Vehicles moving into or out of storage",
]

const infoChecklist = [
  "Collection postcode",
  "Full collection address",
  "Delivery postcode",
  "Full delivery address",
  "Vehicle make and model",
  "Vehicle registration where available",
  "Approximate vehicle size and weight",
  "Whether the engine starts",
  "Whether the vehicle rolls",
  "Whether the steering and brakes work",
  "Whether keys are available",
  "Condition of the wheels and tyres",
  "Details of modifications",
  "Details of accident damage",
  "Access restrictions at either location",
  "Preferred collection or delivery timing",
  "Contact details for both locations",
]

const processSteps = [
  {
    number: "1",
    title: "Request Transportation",
    description: `Call ${siteConfig.phoneDisplay} or use the contact page to provide the initial journey details.`,
  },
  {
    number: "2",
    title: "Share Collection and Delivery Information",
    description: "Provide complete addresses, contact details and any access restrictions.",
  },
  {
    number: "3",
    title: "Confirm the Vehicle Condition",
    description: "Tell us whether the vehicle starts, rolls, steers and brakes and whether keys are available.",
  },
  {
    number: "4",
    title: "We Assess the Journey",
    description: "We review the vehicle, distance, access and loading requirements.",
  },
  {
    number: "5",
    title: "Vehicle Collection",
    description: "The vehicle is inspected, loaded and secured at the agreed collection point.",
  },
  {
    number: "6",
    title: "Nationwide Transportation",
    description: "The vehicle is transported to the confirmed delivery destination.",
  },
  {
    number: "7",
    title: "Vehicle Delivery",
    description: "The vehicle is unloaded at an accessible and suitable location.",
  },
]

const prepSteps = [
  "Remove personal belongings and valuable items.",
  "Check that the collection and delivery details are correct.",
  "Make sure suitable keys are available.",
  "Tell us about mechanical faults and visible damage.",
  "Explain whether the vehicle rolls, steers and brakes.",
  "Remove loose external accessories where possible.",
  "Check that alarms or immobilisers will not prevent loading.",
  "Confirm that the collection point is accessible.",
  "Provide the contact person's details for both locations.",
  "Take dated photographs of the vehicle before collection.",
  "Do not place prohibited, dangerous or undeclared items inside the vehicle.",
  "Inform us about lowered suspension or modifications.",
]

const transportChoices = [
  "The journey is planned",
  "The collection and delivery points are far apart",
  "A purchased or sold vehicle needs moving",
  "A vehicle is being relocated",
  "A vehicle needs transferring between distant facilities",
  "Nationwide collection and delivery is required",
]

const towingChoices = [
  "The vehicle has recently broken down",
  "It requires a shorter recovery journey",
  "It needs moving to a nearby garage",
  "Immediate vehicle removal is required",
]

const benefits = [
  {
    icon: Search,
    title: "Nationwide UK Service",
    description: "We provide planned vehicle collection and delivery across the UK.",
  },
  {
    icon: ClipboardList,
    title: "Running and Non-Running Vehicles",
    description: "Transportation is available for many roadworthy and non-running vehicles, subject to assessment.",
  },
  {
    icon: MessageSquare,
    title: "Journey Planning",
    description: "Collection, delivery, access and vehicle information are reviewed before transportation.",
  },
  {
    icon: HeartHandshake,
    title: "Careful Loading and Delivery",
    description: "The vehicle is loaded, secured, transported and unloaded according to the assessed requirements.",
  },
]

const relatedServices = [
  {
    slug: "towing",
    title: "Towing Service",
    description: "Vehicle towing for breakdowns, garage transfers and shorter vehicle movements.",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Recovery",
    description: "Nationwide recovery when a vehicle breaks down and cannot continue its journey.",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    description: "Recovery for broken-down, damaged and non-running vehicles.",
  },
]

const faqs = [
  {
    question: "Do you provide nationwide vehicle transport?",
    answer: "Yes. We provide vehicle collection and delivery between suitable locations throughout the UK.",
  },
  {
    question: "What types of vehicles can you transport?",
    answer: "We can transport many cars, vans, 4x4s, non-running vehicles, classic cars and other suitable vehicles. Size, weight and condition must be confirmed first.",
  },
  {
    question: "Can you transport a non-running car?",
    answer: "Yes. We can transport many non-running vehicles. Tell us whether the vehicle rolls, steers and brakes and whether keys are available.",
  },
  {
    question: "What information is needed for a quote?",
    answer: "Provide the collection and delivery postcodes, vehicle make and model, condition, key availability and any access restrictions.",
  },
  {
    question: "Can you transport a vehicle to a garage?",
    answer: "Yes. Vehicles can be transported to an agreed garage, repair centre, storage facility, home or another suitable destination.",
  },
  {
    question: "Can you collect a vehicle I have purchased?",
    answer: "Collection may be arranged for suitable purchased vehicles. Confirm that the seller or collection location has authorised release of the vehicle.",
  },
  {
    question: "Can personal belongings remain inside the vehicle?",
    answer: "Personal and valuable belongings should be removed before transportation. Do not leave dangerous, prohibited or undeclared items inside the vehicle.",
  },
  {
    question: "What is the difference between towing and vehicle transportation?",
    answer: "Towing is commonly used for shorter recovery journeys after a breakdown. Vehicle transportation is generally used for planned collection and delivery over longer distances.",
  },
]

const transportService = services.find((s) => s.slug === "vehicle-transportation-delivery")!

export default function VehicleTransportationDeliveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nationwide Vehicle Transport Service",
    serviceType: "Vehicle Transportation",
    areaServed: "United Kingdom",
    provider: { "@type": "AutomotiveBusiness", name: siteConfig.name, telephone: siteConfig.phoneTel },
    url: `${siteConfig.siteUrl}/services/vehicle-transportation-delivery`,
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
        name: "Vehicle Transportation & Delivery",
        item: `${siteConfig.siteUrl}/services/vehicle-transportation-delivery`,
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
          src={transportService.image ?? "/images/luxury-car-transport-rolls-royce.webp"}
          alt="AHS Recovery nationwide vehicle transport service"
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
              UK-Wide Collection and Delivery
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Nationwide Vehicle Transport Service
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Need a vehicle collected and delivered elsewhere in the UK? AHS Recovery provides nationwide vehicle
              transport for cars, vans, 4x4s and non-running vehicles. We arrange careful collection and
              transportation to an agreed home, garage, storage facility, dealership or another accessible
              destination.
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
                Request a Transport Quote
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
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Professional Vehicle Transportation</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                Secure Vehicle Collection and Delivery Across the UK
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Driving a vehicle to its destination is not always possible or practical. It may be non-running,
                  awaiting repairs, recently purchased, sold to a new owner or required at another location.
                </p>
                <p>
                  AHS Recovery provides planned vehicle transportation throughout the UK. We collect suitable
                  vehicles from accessible locations and deliver them to an agreed destination.
                </p>
                <p>
                  Before arranging transport, we ask for the collection and delivery details, vehicle make and
                  model, condition, key availability and any issues that may affect loading. This information helps
                  us select suitable equipment and plan the journey correctly.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
              >
                Request Nationwide Vehicle Transport <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/bugatti-veyron-transport.webp"
                alt="Vehicle secured for nationwide transport by AHS Recovery"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport enquiry CTA */}
      <section className="bg-primary py-10 md:py-12">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">
              Need a Vehicle Collected and Delivered?
            </h2>
            <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
              Call AHS Recovery on {siteConfig.phoneDisplay} with the collection postcode, delivery postcode and
              vehicle details. Tell us whether the vehicle starts, rolls, steers and brakes.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Discuss Your Vehicle Transport
          </a>
        </div>
      </section>

      {/* Transportation situations */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">When We Can Help</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Vehicle Transport for Planned and Non-Running Vehicles
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Our nationwide car transport service can assist with many planned vehicle movements.
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

      {/* Vehicle types */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Vehicle Types</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
              Nationwide Car and Van Transportation
            </h2>
            <p className="text-slate-500 text-base md:text-lg">
              The correct transportation method depends on the type, size, weight and condition of the vehicle.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-5">We may be able to transport:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {vehicleTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border-2 border-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5">
              Provide accurate details before booking. Modified, lowered, severely damaged or unusually large
              vehicles may require additional assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Information required */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Plan Your Transport</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Information Needed for a Vehicle Transport Quote
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Accurate collection, delivery and vehicle information helps us assess the journey and loading
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
              Photographs may be requested for non-running, modified, lowered or damaged vehicles. Do not hide
              known loading or access problems when requesting transportation.
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
              How Nationwide Vehicle Transport Works
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
              Arrange Vehicle Transportation
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle preparation checklist */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Before Collection</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              How to Prepare Your Vehicle for Transportation
            </h2>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-background-dark p-8 md:p-10">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {prepSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-background-dark font-black flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                  <span className="text-slate-300 text-sm leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Towing vs transportation */}
      <section className="bg-white py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Choose the Right Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Vehicle Transportation or Towing Service?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Vehicle transportation is intended for planned collection and delivery, particularly when a vehicle
              needs to travel between distant locations. Towing is generally more suitable when a broken-down or
              non-running vehicle needs to be moved to a nearby garage, home or another local destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose vehicle transportation when:</h3>
              <ul className="space-y-3">
                {transportChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose towing when:</h3>
              <ul className="space-y-3">
                {towingChoices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services/towing"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Explore Our Towing Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-accent py-20 md:py-28">
        <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">AHS Recovery</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Careful Nationwide Vehicle Transportation
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Vehicle transportation requires clear planning before collection. The vehicle&apos;s condition, access
              at both locations and journey details must all be understood.
            </p>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Related Vehicle Recovery Services</h2>
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
              Frequently Asked Questions About Vehicle Transportation
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
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Plan Your Vehicle Movement</span>
        <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
          Arrange Nationwide Vehicle Collection and Delivery
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Call AHS Recovery with your collection postcode, delivery postcode and vehicle details. We will assess
          the journey, vehicle condition and loading requirements before arranging transportation.
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
            Request Transportation
          </Link>
        </div>
      </section>
    </main>
  )
}
