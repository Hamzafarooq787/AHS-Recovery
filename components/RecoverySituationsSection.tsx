import Image from "next/image"
import { Check } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const situations = [
  "Cars that will not start",
  "Vans affected by mechanical faults",
  "Accident-damaged vehicles",
  "Vehicles requiring garage transportation",
  "Cars stuck in mud, fields or verges",
  "4x4s requiring off-road recovery",
  "Non-running vehicle collection",
  "Local vehicle towing",
  "Motorway breakdown recovery",
  "Planned vehicle delivery",
]

export default function RecoverySituationsSection() {
  return (
    <section className="bg-navy-accent py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/rtc-recovery-multiple-vehicles.webp"
              alt="AHS Recovery flatbed truck recovering accident-damaged vehicles"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">
              Prepared for Different Situations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Car and Van Recovery for Breakdowns and Accidents
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              A car or van can become immobile for many reasons. It may suffer a mechanical fault, develop a flat
              battery, become damaged in an accident or get stuck in a difficult position.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">AHS Recovery provides car and van recovery in Ilford for:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {situations.map((situation) => (
                <li key={situation} className="flex items-start gap-2 text-slate-300 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {situation}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 leading-relaxed">
              If you are unsure which service you need, call {siteConfig.phoneDisplay} and explain the situation. We
              will use the details you provide to identify the most suitable recovery option.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
