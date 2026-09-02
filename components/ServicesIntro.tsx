import { siteConfig } from "@/lib/site-config"

export default function ServicesIntro() {
  return (
    <section className="bg-slate-dark py-24 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Local &amp; Nationwide</span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Based In Ilford, Ready To Help</h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
          AHS Recovery is based in {siteConfig.location} and covers local recovery work across{" "}
          {siteConfig.localCoverageArea}. We also provide breakdown recovery and vehicle transportation nationwide,
          with a fleet that ranges from 4x4 recovery trailers to 18-tonne recovery lorries.
        </p>
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">Ilford</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Base Location</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">~60mi</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Local Coverage</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">UK-Wide</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Breakdown &amp; Transport</span>
          </div>
        </div>
      </div>
    </section>
  )
}
