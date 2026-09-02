import { siteConfig } from "@/lib/site-config"

export default function CTASection() {
  return (
    <section className="bg-primary py-12 md:py-20 text-center px-4 md:px-6">
      <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 px-2">
        Need Vehicle Recovery Now?
      </h2>
      <a
        className="inline-block bg-background-dark text-white px-6 md:px-12 py-4 md:py-6 rounded-xl font-black text-2xl md:text-4xl lg:text-6xl hover:scale-105 transition-transform border-4 border-white/10 shadow-2xl break-all"
        href={`tel:${siteConfig.phoneTel}`}
      >
        {siteConfig.phoneDisplay}
      </a>
      <p className="mt-6 md:mt-8 text-white/80 font-bold text-sm md:text-lg uppercase tracking-wide md:tracking-widest px-4">
        24 Hours a Day • 7 Days a Week
      </p>
    </section>
  )
}
