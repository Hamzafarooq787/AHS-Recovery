import { coverageHighlights, siteConfig } from "@/lib/site-config"

export default function ContactServiceArea() {
  return (
    <section className="relative bg-navy-accent/30 py-24 overflow-hidden border-y border-white/5">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Service Area</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            AHS Recovery is based in <strong>{siteConfig.location}</strong> and covers local recovery work across{" "}
            {siteConfig.localCoverageArea}. Breakdown recovery and vehicle transportation are available nationwide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
            {coverageHighlights.map((item) => (
              <div key={item.title} className="border-l-2 border-primary/30 pl-3">
                <div className="text-slate-200 font-medium">{item.title}</div>
                <div className="text-slate-500 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
