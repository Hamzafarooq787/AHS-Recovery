import Image from "next/image"
import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import EmergencyRequestForm from "./EmergencyRequestForm"

const trustPoints = ["Based in Ilford", "Cars, Vans and 4x4s", "Local Coverage Within 60 Miles", "Nationwide Transport Available"]

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/5 min-h-[85vh] flex items-center">
      <Image
        src="/images/motorway-breakdown-jaguar.webp"
        alt="AHS Recovery vehicle recovery in Ilford"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/95 via-background-dark/85 to-background-dark" />

      <div className="relative z-10 w-full px-6 md:px-20 lg:px-40 py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Ilford-Based Recovery Specialists
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Vehicle Recovery
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Broken down, involved in an accident or unable to move your vehicle? AHS Recovery provides professional
              vehicle recovery for cars, vans, 4x4s and non-running vehicles. Based in Ilford, we cover nearby areas
              across Essex and East London, with nationwide assistance available for breakdown recovery and vehicle
              transportation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex-1 whitespace-nowrap bg-primary text-background-dark px-6 py-4 rounded-lg font-black text-base flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href="/services"
                className="flex-1 whitespace-nowrap bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 rounded-lg font-bold text-base transition-colors text-center flex items-center justify-center"
              >
                View Recovery Services
              </a>
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

          <div className="w-full lg:w-1/2">
            <EmergencyRequestForm />
          </div>
        </div>
      </div>
    </section>
  )
}
