export const siteConfig = {
  name: "AHS Recovery",
  shortName: "AHS Recovery",
  phoneDisplay: "07462 486149",
  phoneIntlDisplay: "+44 7462 486149",
  phoneTel: "+447462486149",
  email: "AHSRECOVERY@OUTLOOK.COM",
  location: "Ilford, Essex",
  localCoverageArea: "Ilford, Essex and surrounding areas within approximately 60 miles",
  country: "United Kingdom",
  fleetNote: "a fleet ranging from 4x4 recovery trailers to 18-tonne recovery lorries",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ahsrecovery.co.uk",
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
      "AHS Recovery offers professional towing across Ilford, Essex and within approximately 60 miles. Call 07462 486149 for a tow truck near you.",
    image: "/images/car-towing-highway-recovery-with-blue-hatchback-1459x1078.webp",
    coverage: "local",
  },
  {
    slug: "breakdown-assistance",
    title: "Breakdown Assistance",
    shortDescription: "Nationwide breakdown assistance to get you off the road and moving again safely.",
    metaTitle: "Breakdown Assistance | Nationwide | AHS Recovery",
    metaDescription:
      "Vehicle broken down? AHS Recovery provides breakdown assistance nationwide, based in Ilford, Essex. Call 07462 486149 now.",
    image: "/images/breakdown-recovery-blue-sedan-on-highway-tow-ramp-1448x1086.webp",
    coverage: "nationwide",
  },
  {
    slug: "rtc-recovery",
    title: "RTC Recovery",
    shortDescription: "Professional road traffic collision recovery, handled with care and clear communication.",
    metaTitle: "RTC Recovery (Road Traffic Collision) | AHS Recovery",
    metaDescription:
      "AHS Recovery provides professional road traffic collision (RTC) recovery from our Ilford, Essex base, with nationwide availability. Call 07462 486149.",
    image: "/images/Reflective-Warning-Triangle-by-Roadside-Assistance.webp",
    coverage: "local",
  },
  {
    slug: "jump-starts",
    title: "Jump Starts (12V & 24V)",
    shortDescription: "On-the-spot jump starts for both 12V and 24V vehicles and light commercial fleets.",
    metaTitle: "12V & 24V Jump Starts | AHS Recovery Ilford, Essex",
    metaDescription:
      "Flat battery? AHS Recovery offers 12V and 24V jump starts across Ilford, Essex and within around 60 miles. Call 07462 486149.",
    image: "/images/jumpstart-battery-service.webp",
    coverage: "local",
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery",
    shortDescription: "General vehicle recovery for cars, vans and light commercial vehicles that can't be driven.",
    metaTitle: "Vehicle Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery provides vehicle recovery across Ilford, Essex and within approximately 60 miles, with nationwide options available. Call 07462 486149.",
    image: "/images/car-recovery-loading.webp",
    coverage: "local",
  },
  {
    slug: "winch-out-recovery",
    title: "Winch-Out Recovery",
    shortDescription: "Specialist winching for vehicles stuck in mud, ditches, verges or off-road terrain.",
    metaTitle: "Winch-Out Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "Stuck in a ditch, field or verge? AHS Recovery provides winch-out recovery across Ilford, Essex and within around 60 miles. Call 07462 486149.",
    image: "/images/towing-service-sunset.webp",
    coverage: "local",
  },
  {
    slug: "accident-recovery",
    title: "Accident Recovery",
    shortDescription: "Prompt, professional recovery of vehicles involved in road accidents.",
    metaTitle: "Accident Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery handles accident recovery from our Ilford, Essex base, with nationwide availability for longer-distance recoveries. Call 07462 486149.",
    image: "/images/accident-recovery-image-in-birmingham-1448x1086.webp",
    coverage: "local",
  },
  {
    slug: "motorway-breakdown-recovery",
    title: "Motorway Breakdown Recovery",
    shortDescription: "Nationwide motorway breakdown recovery, handled with attention to safety.",
    metaTitle: "Motorway Breakdown Recovery | Nationwide | AHS Recovery",
    metaDescription:
      "Broken down on the motorway? AHS Recovery provides nationwide motorway breakdown recovery. Call 07462 486149 for assistance.",
    image: "/images/breakdown-recovery-for-birmingham-website-1448x1086.webp",
    coverage: "nationwide",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    shortDescription: "Roadside help for common faults, so you can often avoid a full recovery.",
    metaTitle: "Roadside Assistance | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery offers roadside assistance across Ilford, Essex and within approximately 60 miles. Call 07462 486149 for help now.",
    image: "/images/Roadside Assistance (1).webp",
    coverage: "local",
  },
  {
    slug: "4x4-off-road-recovery",
    title: "4x4 & Off-Road Recovery",
    shortDescription: "Recovery for 4x4s and vehicles stuck off-road, using suitable trailers and equipment.",
    metaTitle: "4x4 & Off-Road Recovery | AHS Recovery Ilford, Essex",
    metaDescription:
      "AHS Recovery provides 4x4 and off-road recovery across Ilford, Essex and within around 60 miles, using our 4x4 recovery trailers. Call 07462 486149.",
    image: "/images/Commercial Vehicle Towing.webp",
    coverage: "local",
  },
  {
    slug: "specialist-accident-recovery",
    title: "Specialist Accident Recovery",
    shortDescription: "Specialist recovery for more complex accident scenes and larger or awkward vehicles.",
    metaTitle: "Specialist Accident Recovery | AHS Recovery",
    metaDescription:
      "For complex or large-vehicle accident scenes, AHS Recovery provides specialist accident recovery from Ilford, Essex, with nationwide availability. Call 07462 486149.",
    image: "/images/flatbed-recovery-handover.webp",
    coverage: "local",
  },
  {
    slug: "vehicle-transportation-delivery",
    title: "Nationwide Vehicle Transportation & Delivery",
    shortDescription: "Secure nationwide transportation and delivery for cars, vans and larger vehicles.",
    metaTitle: "Nationwide Vehicle Transportation & Delivery | AHS Recovery",
    metaDescription:
      "AHS Recovery provides nationwide vehicle transportation and delivery for cars, vans and larger vehicles. Call 07462 486149 to arrange transport.",
    image: "/images/Luxury Exotic Car Towing.webp",
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
