import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="relative w-full py-24 flex items-center justify-center overflow-hidden border-b border-white/5 bg-navy-accent">
      <Image
        src="/images/recovery-truck-fleet-transport.webp"
        alt="AHS Recovery heavy recovery truck being transported on a larger flatbed"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to bottom, rgba(10,12,18,0.6) 0%, rgba(10,12,18,0.9) 100%)" }}
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Our Recovery Services</h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Local recovery around Ilford, Essex, plus nationwide breakdown and vehicle transportation services.
        </p>
      </div>
    </section>
  )
}
