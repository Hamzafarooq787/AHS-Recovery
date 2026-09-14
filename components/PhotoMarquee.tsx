import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { galleryImages } from "@/lib/gallery"

const featuredSrcs = [
  "/images/breakdown-recovery-motorway-sunset.webp",
  "/images/4x4-recovery-g-wagon.webp",
  "/images/specialist-accident-recovery-lamborghini.webp",
  "/images/luxury-car-transport-rolls-royce.webp",
  "/images/motorway-breakdown-jaguar.webp",
  "/images/rtc-recovery-multiple-vehicles.webp",
  "/images/plant-machinery-transport-excavators.webp",
  "/images/supercar-recovery-ferrari-night.webp",
  "/images/van-recovery-motorway-crafter.webp",
  "/images/gtr-vehicle-recovery-residential.webp",
  "/images/large-vehicle-recovery-hookloader.webp",
  "/images/accident-recovery-honda-accord.webp",
  "/images/lamborghini-airport-transport.webp",
  "/images/off-road-plant-recovery-rural.webp",
  "/images/motorhome-transport-sunset.webp",
  "/images/recovery-truck-fleet-transport.webp",
]

const featured = featuredSrcs
  .map((src) => galleryImages.find((image) => image.src === src))
  .filter((image): image is (typeof galleryImages)[number] => Boolean(image))

export default function PhotoMarquee() {
  return (
    <section className="bg-background-dark py-24 border-y border-white/5 overflow-hidden">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Real Jobs</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4">Recent Recovery Jobs</h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="group relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background-dark to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background-dark to-transparent z-10" />
        <div className="flex w-max gap-5 animate-[marquee_70s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...featured, ...featured].map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative w-64 h-44 md:w-80 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden border border-white/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
