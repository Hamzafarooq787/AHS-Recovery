import Image from "next/image"
import { Phone, MapPin, Truck, Route } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import EmergencyRequestForm from "./EmergencyRequestForm"

const trustSignals = [
  { icon: MapPin, label: "Based In Ilford, Essex" },
  { icon: Route, label: "Local Coverage ~60 Miles" },
  { icon: Truck, label: "4x4 Trailers to 18-Tonne Lorries" },
]

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[80vh] flex items-center">
      <Image
        src="/images/breakdown-recovery-night.webp"
        alt="AHS Recovery breakdown recovery tow truck at night"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-background-dark/50" />

      <div className="relative z-10 w-full px-6 md:px-20 lg:px-40 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Vehicle Recovery &amp; Transportation
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white leading-[1.2] md:leading-[1.1] tracking-tight">
              Vehicle Recovery{" "}
              <span className="block mt-2 md:inline md:mt-0">
                You Can <span className="text-primary">Rely On</span>
              </span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed pt-2 md:pt-0">
              AHS Recovery is based in Ilford, Essex, covering local towing and vehicle recovery within around 60
              miles, plus breakdown recovery and vehicle transportation nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-primary text-white px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href="/services"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
              >
                View Services
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 md:pt-4 border-t border-white/10">
              {trustSignals.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <EmergencyRequestForm />
          </div>
        </div>
      </div>
    </section>
  )
}
