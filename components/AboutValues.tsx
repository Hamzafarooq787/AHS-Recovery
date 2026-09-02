export default function AboutValues() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent/30 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">01.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Clear Communication</h3>
            <p className="text-slate-400 leading-relaxed">
              From the first call, we talk you through what to expect, including where your vehicle will be taken
              and what happens next.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">02.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">The Right Vehicle</h3>
            <p className="text-slate-400 leading-relaxed">
              A fleet ranging from 4x4 recovery trailers to 18-tonne recovery lorries means we can match the
              equipment to your vehicle and situation.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">03.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Local & Nationwide</h3>
            <p className="text-slate-400 leading-relaxed">
              Local recovery around Ilford, Essex, backed up by nationwide breakdown recovery and vehicle
              transportation when you need to go further.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
