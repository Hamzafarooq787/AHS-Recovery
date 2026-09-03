import Image from "next/image"
import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function AboutHero() {
  return (
    <section className="flex flex-col lg:flex-row w-full overflow-hidden border-b border-white/5 min-h-[70vh]">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:pl-40 lg:pr-16 py-20 bg-background-dark">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            {siteConfig.location}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f8f7f6] leading-[1.1] tracking-tight">
            About <span className="text-primary">AHS Recovery</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed">
            Based in {siteConfig.location}, we handle local vehicle recovery within around 60 miles, alongside
            nationwide breakdown recovery and vehicle transportation.
          </p>
          <div className="pt-4">
            <a
              className="inline-flex items-center justify-center gap-3 bg-primary text-background-dark px-10 py-5 rounded-lg font-black text-xl hover:scale-[1.02] transition-transform w-full sm:w-auto"
              href={`tel:${siteConfig.phoneTel}`}
            >
              <Phone className="w-6 h-6" />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0 relative bg-navy-accent overflow-hidden">
        <Image
          src="/images/highway-maintenance-truck-recovery.webp"
          alt="AHS Recovery flatbed truck loaded with a highway maintenance vehicle"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-transparent to-transparent lg:from-background-dark lg:to-transparent"></div>
      </div>
    </section>
  )
}
