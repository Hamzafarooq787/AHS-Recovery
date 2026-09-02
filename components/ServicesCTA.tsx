import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function ServicesCTA() {
  return (
    <section className="bg-background-dark border-t border-white/5 py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-white">Need immediate recovery assistance?</h3>
          <p className="text-slate-400 mt-1">Our dispatchers are standing by to send help your way.</p>
        </div>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="bg-primary text-white px-6 md:px-10 py-4 rounded-xl font-black text-lg md:text-xl lg:text-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20 flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center whitespace-nowrap"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
          <span className="block">Call {siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </section>
  )
}
