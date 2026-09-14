import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const previewImages = [
  {
    src: "/images/motorway-breakdown-jaguar.webp",
    alt: "Jaguar XE saloon loaded on a flatbed recovery truck on the motorway hard shoulder",
  },
  {
    src: "/images/accident-recovery-honda-accord.webp",
    alt: "Damaged Honda Accord loaded on a flatbed recovery truck after an accident",
  },
  {
    src: "/images/4x4-recovery-g-wagon.webp",
    alt: "Mercedes G-Wagon 4x4 loaded on a flatbed recovery truck on a residential street",
  },
  {
    src: "/images/specialist-accident-recovery-lamborghini.webp",
    alt: "Crash-damaged Lamborghini Huracan loaded on a flatbed recovery truck",
  },
  {
    src: "/images/van-recovery-motorway-hardshoulder.webp",
    alt: "Mercedes Sprinter van loaded on a flatbed recovery truck on the motorway hard shoulder",
  },
  {
    src: "/images/plant-machinery-transport-excavators.webp",
    alt: "Two mini excavators loaded on a flatbed lorry at a filling station",
  },
]

export default function GalleryPreviewSection() {
  return (
    <section className="bg-navy-accent py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Recent Work</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">Recent Vehicle Recovery Jobs</h2>
          <p className="text-slate-400 text-base md:text-lg">
            View recent examples of vehicles recovered and transported by AHS Recovery. Our work includes roadside
            vehicle recovery, accident recovery, 4x4 recovery, non-running vehicle collection and planned
            transportation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {previewImages.map((image) => (
            <Link
              key={image.src}
              href="/gallery"
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-black hover:scale-[1.02] transition-transform"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
