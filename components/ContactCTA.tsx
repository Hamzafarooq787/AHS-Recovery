import { Mail } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function ContactCTA() {
  return (
    <section className="bg-background-dark py-32 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-sm">Immediate Assistance</p>
        <h2 className="text-white text-3xl md:text-5xl font-black mb-12">Don&apos;t wait on the roadside. Call now.</h2>
        <a
          className="inline-block bg-transparent text-primary hover:text-white transition-colors duration-300"
          href={`tel:${siteConfig.phoneTel}`}
        >
          <span className="text-5xl md:text-8xl font-black tabular-nums tracking-tighter break-all">
            {siteConfig.phoneDisplay}
          </span>
        </a>
        <p className="mt-12 text-slate-500 font-medium text-lg italic">
          Our team is ready to help with local and nationwide recovery.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 mt-6 text-slate-400 hover:text-primary transition-colors text-sm font-medium break-all"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          {siteConfig.email}
        </a>
      </div>
    </section>
  )
}
