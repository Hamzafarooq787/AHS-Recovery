import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function EmergencyCTAStrip() {
  return (
    <section className="bg-primary py-10 md:py-12">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-background-dark text-xl md:text-2xl font-black mb-1">
            Need Emergency Vehicle Recovery in Ilford?
          </h2>
          <p className="text-background-dark/80 text-sm md:text-base max-w-2xl">
            If you are currently stranded, call AHS Recovery on {siteConfig.phoneDisplay}. Provide your exact
            location, vehicle details, current condition and destination. This information helps us identify the
            right recovery equipment for the job.
          </p>
        </div>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex-shrink-0 flex items-center justify-center gap-3 bg-background-dark text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
        >
          <Phone className="w-5 h-5" />
          Call AHS Recovery
        </a>
      </div>
    </section>
  )
}
