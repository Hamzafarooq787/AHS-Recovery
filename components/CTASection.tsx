import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function CTASection() {
  return (
    <section className="bg-background-dark py-20 md:py-28 text-center px-6">
      <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Contact AHS Recovery</span>
      <h2 className="text-white text-3xl md:text-5xl font-black mt-4 mb-5">
        Contact AHS Recovery for Vehicle Recovery in Ilford
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Do not remain stranded with a broken-down, damaged or non-running vehicle. Call AHS Recovery and provide
        your location and vehicle details. We will assess the situation and explain the appropriate recovery option.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform w-full sm:w-auto"
        >
          <Phone className="w-5 h-5" />
          Call {siteConfig.phoneDisplay}
        </a>
        <a
          href="/contact"
          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors w-full sm:w-auto"
        >
          Contact AHS Recovery
        </a>
      </div>
    </section>
  )
}
