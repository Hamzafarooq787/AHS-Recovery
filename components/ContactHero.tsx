import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[45vh] flex items-center overflow-hidden bg-navy-accent">
      <Image
        src="/images/roadside-fuel-closeup.webp"
        alt="AHS Recovery roadside assistance close-up"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to bottom, rgba(10, 12, 18, 0.75) 0%, rgba(10, 12, 18, 0.95) 100%)" }}
      ></div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 py-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Ilford, Essex
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
          Contact <span className="text-primary">AHS Recovery</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          If you need towing, breakdown assistance or vehicle recovery, get in touch. We&apos;re ready to help
          across Ilford, Essex, and nationwide for breakdown recovery and transportation.
        </p>
      </div>
    </section>
  )
}
