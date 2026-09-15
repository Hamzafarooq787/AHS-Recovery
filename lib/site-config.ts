export const siteConfig = {
  name: "AHS Recovery",
  shortName: "AHS Recovery",
  phoneDisplay: "07576 614651",
  phoneIntlDisplay: "+44 7576 614651",
  phoneTel: "+447576614651",
  phoneAltDisplay: "07883 546955",
  phoneAltIntlDisplay: "+44 7883 546955",
  phoneAltTel: "+447883546955",
  whatsapp: "https://wa.me/447576614651",
  whatsappAlt: "https://wa.me/447883546955",
  email: "AHSRECOVERY@OUTLOOK.COM",
  emailSecondary: "contact@ahsrecovery.co.uk",
  location: "Ilford, Essex",
  localCoverageArea: "Ilford, Essex and surrounding areas within approximately 60 miles",
  country: "United Kingdom",
  addressStreet: "203 Tiptree Cres",
  addressLocality: "Ilford",
  addressRegion: "Essex",
  addressPostcode: "IG5 0ST",
  addressCountryCode: "GB",
  fullAddress: "203 Tiptree Cres, Ilford IG5 0ST, United Kingdom",
  fleetNote: "a fleet ranging from 4x4 recovery trailers to 18-tonne recovery lorries",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ahsrecovery.co.uk",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.806465426483!2d0.06434237566336311!3d51.590110304658964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a70acaba3835%3A0xc1376bcac5af5795!2sAHS%20recovery!5e0!3m2!1sen!2s!4v1789374682046!5m2!1sen!2s",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=AHS+Recovery+Ilford",
}

export interface ServiceInfo {
  slug: string
  title: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  image?: string
  coverage: "local" | "nationwide"
}

export const services: ServiceInfo[] = [
  {
    slug: "towing",
    title: "Towing",
    shortDescription: "Careful, professional towing for cars, vans and light commercial vehicles.",
    metaTitle: "Towing Services | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery offers professional towing across Ilford, Essex and within approximately 60 miles. Call 07576 614651 for a tow truck near you.",
    image: "/images/van-recovery-cloudy-yard.webp",
    coverage: "local",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    shortDescription: "Nationwide breakdown assistance to get you off the road and moving again safely.",
    metaTitle: "Breakdown Assistance | Nationwide | AHS Recovery",
    metaDescription:
      "Vehicle broken down? AHS Recovery provides breakdown assistance nationwide, based in Ilford, Essex. Call 07576 614651 now.",
    image: "/images/motorway-breakdown-recovery-van.webp",
    coverage: "nationwide",
  },
  {
    slug: "rtc-recovery",
    title: "RTC Recovery",
    shortDescription: "Professional road traffic collision recovery, handled with care and clear communication.",
    metaTitle: "RTC Recovery (Road Traffic Collision) | AHS Recovery",
    metaDescription:
      "AHS Recovery provides professional road traffic collision (RTC) recovery from our Ilford, Essex base, with nationwide availability. Call 07576 614651.",
    image: "/images/rtc-recovery-multiple-vehicles.webp",
    coverage: "local",
  },
  {
    slug: "jump-starts",
    title: "Jump Starts (12V & 24V)",
    shortDescription: "On-the-spot jump starts for both 12V and 24V vehicles and light commercial fleets.",
    metaTitle: "12V & 24V Jump Starts | AHS Recovery Ilford, Essex",
    metaDescription:
      "Flat battery? AHS Recovery offers 12V and 24V jump starts across Ilford, Essex and within around 60 miles. Call 07576 614651.",
    image: "/images/roadside-assistance-petrol-station-night.webp",
    coverage: "local",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    shortDescription: "General vehicle recovery for cars, vans and light commercial vehicles that can't be driven.",
    metaTitle: "Vehicle Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery provides vehicle recovery across Ilford, Essex and within approximately 60 miles, with nationwide options available. Call 07576 614651.",
    image: "/images/dropside-truck-recovery-residential.webp",
    coverage: "local",
  },
  {
    slug: "winch-out-recovery",
    title: "Winch-Out Recovery",
    shortDescription: "Specialist winching for vehicles stuck in mud, ditches, verges or off-road terrain.",
    metaTitle: "Winch-Out Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "Stuck in a ditch, field or verge? AHS Recovery provides winch-out recovery across Ilford, Essex and within around 60 miles. Call 07576 614651.",
    image: "/images/off-road-plant-recovery-rural.webp",
    coverage: "local",
  },
  {
    slug: "accident-recovery",
    title: "Accident Recovery",
    shortDescription: "Prompt, professional recovery of vehicles involved in road accidents.",
    metaTitle: "Accident Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery handles accident recovery from our Ilford, Essex base, with nationwide availability for longer-distance recoveries. Call 07576 614651.",
    image: "/images/rtc-recovery-scrapyard.webp",
    coverage: "local",
  },
  {
    slug: "motorway-breakdown-recovery",
    title: "Motorway Breakdown Recovery",
    shortDescription: "Nationwide motorway breakdown recovery, handled with attention to safety.",
    metaTitle: "Motorway Breakdown Recovery | Nationwide | AHS Recovery",
    metaDescription:
      "Broken down on the motorway? AHS Recovery provides nationwide motorway breakdown recovery. Call 07576 614651 for assistance.",
    image: "/images/motorway-breakdown-jaguar.webp",
    coverage: "nationwide",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    shortDescription: "Roadside help for common faults, so you can often avoid a full recovery.",
    metaTitle: "Roadside Assistance | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery offers roadside assistance across Ilford, Essex and within approximately 60 miles. Call 07576 614651 for help now.",
    image: "/images/van-recovery-motorway-crafter.webp",
    coverage: "local",
  },
  {
    slug: "4x4-off-road-recovery",
    title: "4x4 & Off-Road Recovery",
    shortDescription: "Recovery for 4x4s and vehicles stuck off-road, using suitable trailers and equipment.",
    metaTitle: "4x4 & Off-Road Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery provides 4x4 and off-road recovery across Ilford, Essex and within around 60 miles, using our 4x4 recovery trailers. Call 07576 614651.",
    image: "/images/4x4-recovery-g-wagon.webp",
    coverage: "local",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    shortDescription: "Specialist recovery for more complex accident scenes and larger or awkward vehicles.",
    metaTitle: "Specialist Accident Recovery | AHS Recovery",
    metaDescription:
      "For complex or large-vehicle accident scenes, AHS Recovery provides specialist accident recovery from Ilford, Essex, with nationwide availability. Call 07576 614651.",
    image: "/images/specialist-accident-recovery-lamborghini.webp",
    coverage: "local",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Nationwide Vehicle Transportation & Delivery",
    shortDescription: "Secure nationwide transportation and delivery for cars, vans and larger vehicles.",
    metaTitle: "Nationwide Vehicle Transportation & Delivery | AHS Recovery",
    metaDescription:
      "AHS Recovery provides nationwide vehicle transportation and delivery for cars, vans and larger vehicles. Call 07576 614651 to arrange transport.",
    image: "/images/luxury-car-transport-rolls-royce.webp",
    coverage: "nationwide",
  },
]

export interface CoverageHighlight {
  title: string
  description: string
}

export const coverageHighlights: CoverageHighlight[] = [
  { title: "Ilford & Essex", description: "Our base, for the fastest local dispatch." },
  { title: "Within ~60 Miles", description: "Local recovery across the wider surrounding area." },
  { title: "Nationwide Breakdown", description: "Breakdown recovery anywhere in the UK." },
  { title: "Nationwide Transport", description: "Vehicle delivery and transportation across the country." },
]
