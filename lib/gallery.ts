export interface GalleryCategory {
  id: string
  label: string
}

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "All Photos" },
  { id: "breakdown", label: "Breakdown & Motorway Recovery" },
  { id: "accident", label: "Accident & RTC Recovery" },
  { id: "luxury", label: "Luxury & Supercar Transport" },
  { id: "4x4", label: "4x4 & Off-Road" },
  { id: "plant", label: "Plant & Large Vehicle Transport" },
]

export interface GalleryImage {
  src: string
  alt: string
  category: Exclude<GalleryCategory["id"], "all">
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/breakdown-recovery-motorway-sunset.webp",
    alt: "Recovery van loaded on a flatbed truck on the motorway hard shoulder at sunset",
    category: "breakdown",
  },
  {
    src: "/images/van-recovery-motorway-hardshoulder.webp",
    alt: "Mercedes Sprinter van loaded on a flatbed recovery truck on the motorway hard shoulder",
    category: "breakdown",
  },
  {
    src: "/images/van-recovery-motorway-crafter.webp",
    alt: "Volkswagen Crafter van loaded on a flatbed recovery truck on the motorway hard shoulder",
    category: "breakdown",
  },
  {
    src: "/images/motorway-breakdown-recovery-van.webp",
    alt: "Mercedes Vito van being loaded onto a flatbed recovery truck on the motorway",
    category: "breakdown",
  },
  {
    src: "/images/motorway-breakdown-jaguar.webp",
    alt: "Jaguar XE saloon loaded on a flatbed recovery truck on the motorway hard shoulder",
    category: "breakdown",
  },
  {
    src: "/images/roadside-assistance-petrol-station-night.webp",
    alt: "Recovery truck with a car loaded on the flatbed at a petrol station at night",
    category: "breakdown",
  },
  {
    src: "/images/luton-van-recovery-yard.webp",
    alt: "Luton box van loaded on a flatbed recovery truck in a vehicle yard",
    category: "breakdown",
  },
  {
    src: "/images/van-recovery-cloudy-yard.webp",
    alt: "Long-wheelbase van loaded on a flatbed recovery truck under a cloudy sky",
    category: "breakdown",
  },
  {
    src: "/images/tipper-van-recovery-rainy-yard.webp",
    alt: "Crew-cab tipper van loaded on a flatbed recovery truck in the rain",
    category: "breakdown",
  },
  {
    src: "/images/dropside-truck-recovery-residential.webp",
    alt: "Dropside truck loaded on a flatbed recovery truck on a residential street",
    category: "breakdown",
  },
  {
    src: "/images/van-recovery-rural-road.webp",
    alt: "Van loaded on a flatbed recovery truck on a rural road",
    category: "breakdown",
  },
  {
    src: "/images/scaffolding-truck-motorway-recovery.webp",
    alt: "Scaffolding-laden truck loaded on a flatbed recovery vehicle on the motorway",
    category: "breakdown",
  },
  {
    src: "/images/classic-car-recovery-lincoln.webp",
    alt: "Classic American saloon car loaded on a flatbed recovery truck",
    category: "breakdown",
  },
  {
    src: "/images/curtain-side-truck-recovery.webp",
    alt: "Curtain-side lorry loaded on a flatbed recovery truck",
    category: "plant",
  },
  {
    src: "/images/minibus-recovery-yard.webp",
    alt: "Minibus loaded on a flatbed recovery truck in a vehicle yard",
    category: "plant",
  },
  {
    src: "/images/highway-maintenance-truck-recovery.webp",
    alt: "Highway maintenance truck with scaffolding loaded on a flatbed recovery vehicle",
    category: "plant",
  },
  {
    src: "/images/large-vehicle-recovery-hookloader.webp",
    alt: "Hookloader truck loaded on a flatbed recovery vehicle",
    category: "plant",
  },
  {
    src: "/images/recovery-truck-fleet-transport.webp",
    alt: "Heavy-duty recovery truck itself being transported on a larger flatbed",
    category: "plant",
  },
  {
    src: "/images/plant-machinery-transport-excavators.webp",
    alt: "Two mini excavators loaded on a flatbed lorry at a filling station",
    category: "plant",
  },
  {
    src: "/images/forklift-plant-transport-night.webp",
    alt: "Forklift truck loaded on a flatbed recovery vehicle at night",
    category: "plant",
  },
  {
    src: "/images/tractor-plant-transport.webp",
    alt: "Vintage tractor loaded on a flatbed recovery truck in a yard",
    category: "plant",
  },
  {
    src: "/images/motorhome-transport-sunset.webp",
    alt: "Motorhome loaded on a flatbed recovery truck at sunset",
    category: "plant",
  },
  {
    src: "/images/accident-recovery-honda-accord.webp",
    alt: "Damaged Honda Accord loaded on a flatbed recovery truck after an accident",
    category: "accident",
  },
  {
    src: "/images/rtc-recovery-scrapyard.webp",
    alt: "Crash-damaged hatchback loaded on a flatbed recovery truck at a vehicle recycling yard",
    category: "accident",
  },
  {
    src: "/images/rtc-recovery-multiple-vehicles.webp",
    alt: "Two crash-damaged vehicles loaded on a flatbed recovery truck at a vehicle recycling yard",
    category: "accident",
  },
  {
    src: "/images/accident-recovery-scrapyard-crane.webp",
    alt: "Crane loading a crash-damaged vehicle onto a flatbed recovery truck",
    category: "accident",
  },
  {
    src: "/images/van-accident-recovery-iveco.webp",
    alt: "Van with front-end collision damage loaded on a flatbed recovery truck",
    category: "accident",
  },
  {
    src: "/images/specialist-accident-recovery-lamborghini.webp",
    alt: "Crash-damaged Lamborghini Huracan loaded on a flatbed recovery truck",
    category: "accident",
  },
  {
    src: "/images/luxury-car-transport-rolls-royce.webp",
    alt: "Rolls-Royce Phantom loaded on a flatbed recovery truck on a residential street",
    category: "luxury",
  },
  {
    src: "/images/supercar-recovery-ferrari-night.webp",
    alt: "Ferrari sports car loaded on a flatbed recovery truck on a city street at night",
    category: "luxury",
  },
  {
    src: "/images/cybertruck-recovery-night.webp",
    alt: "Tesla Cybertruck loaded on a flatbed recovery truck at night",
    category: "luxury",
  },
  {
    src: "/images/lamborghini-airport-transport.webp",
    alt: "Lamborghini supercar loaded on a flatbed recovery truck outside an airport terminal",
    category: "luxury",
  },
  {
    src: "/images/bugatti-veyron-transport.webp",
    alt: "Bugatti Veyron loaded on a flatbed recovery truck",
    category: "luxury",
  },
  {
    src: "/images/supercar-transport-stansted-airport.webp",
    alt: "Ferrari sports car loaded on a flatbed recovery truck at an airport",
    category: "luxury",
  },
  {
    src: "/images/ferrari-suv-transport-city.webp",
    alt: "Ferrari Purosangue SUV loaded on a flatbed recovery truck on a city street",
    category: "luxury",
  },
  {
    src: "/images/corvette-vehicle-recovery.webp",
    alt: "Chevrolet Corvette loaded on a flatbed recovery truck on a residential street",
    category: "luxury",
  },
  {
    src: "/images/gtr-vehicle-recovery-residential.webp",
    alt: "Nissan GT-R loaded on a flatbed recovery truck on a residential street",
    category: "luxury",
  },
  {
    src: "/images/4x4-recovery-g-wagon.webp",
    alt: "Mercedes G-Wagon 4x4 loaded on a flatbed recovery truck on a residential street",
    category: "4x4",
  },
  {
    src: "/images/off-road-plant-recovery-rural.webp",
    alt: "Mini excavator loaded on a flatbed recovery trailer in a rural, hilly location",
    category: "4x4",
  },
]
