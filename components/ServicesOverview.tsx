import { siteConfig } from "@/lib/site-config"

export default function ServicesOverview() {
  return (
    <section className="bg-navy-accent border-b border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
            {siteConfig.location}
          </span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Based Here</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl">~60 Miles</span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Local Coverage</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl">Nationwide</span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Breakdown Recovery</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl">Nationwide</span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Transportation</span>
        </div>
      </div>
    </section>
  )
}
