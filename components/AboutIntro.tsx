import { siteConfig } from "@/lib/site-config"

export default function AboutIntro() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Our Identity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            A Local Team, Ready For The Road.
          </h2>
          <div className="text-slate-400 text-xl leading-relaxed space-y-8 font-light">
            <p>
              AHS Recovery is based in {siteConfig.location}, where we handle towing, breakdown assistance and
              vehicle recovery for the local area. A breakdown or an accident disrupts your day, and our focus is on
              getting you and your vehicle sorted with as little added stress as possible.
            </p>
            <p>
              Alongside our local work, we run breakdown recovery and vehicle transportation services nationwide.
              Our fleet — from 4x4 recovery trailers to 18-tonne recovery lorries — is put together so we can take
              on different vehicles and different recovery situations, whether that&apos;s a car outside your home or a
              larger vehicle further afield.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
