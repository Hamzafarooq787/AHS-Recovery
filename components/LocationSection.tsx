import { coverageHighlights, siteConfig } from "@/lib/site-config"

export default function LocationSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-background-dark">
      <div className="w-full lg:w-1/2 p-12 lg:p-40">
        <h2 className="text-4xl font-black text-white mb-6 leading-tight">Based In Ilford, Covering Essex &amp; Beyond</h2>
        <p className="text-slate-400 mb-8">
          AHS Recovery is based in {siteConfig.location} and handles local recovery work across{" "}
          {siteConfig.localCoverageArea}. For breakdown recovery and vehicle transportation, our coverage extends
          nationwide.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {coverageHighlights.map((item) => (
            <li key={item.title} className="flex items-start gap-2 text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
              <span>
                <span className="font-medium block">{item.title}</span>
                <span className="text-slate-500 text-sm">{item.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2 h-[500px] bg-navy-accent relative">
        <iframe
          src="https://www.google.com/maps?q=Ilford,Essex&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AHS Recovery coverage map"
          className="grayscale opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-primary/20 p-8 rounded-full border border-primary/30 animate-pulse">
            <div className="bg-primary p-4 rounded-full">
              <span className="material-symbols-outlined text-white text-3xl">my_location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
