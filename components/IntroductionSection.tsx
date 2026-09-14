import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function IntroductionSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Local Vehicle Recovery</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Local Vehicle Recovery Service in Ilford
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                When your vehicle cannot continue its journey, you need a recovery team with suitable equipment and
                a careful approach. AHS Recovery provides a dependable local vehicle recovery service in Ilford for
                breakdowns, accidents, non-starting vehicles and planned transportation.
              </p>
              <p>
                We can collect your vehicle from your home, workplace, roadside location, car park or another
                accessible place. Once we understand the problem, we arrange the appropriate recovery vehicle and
                transport your car or van to an agreed garage, home, storage facility or another destination.
              </p>
              <p>
                Our Ilford location allows us to serve drivers throughout Redbridge, East London and nearby parts of
                Essex. For longer journeys, we also provide nationwide breakdown recovery and vehicle transportation.
              </p>
            </div>
            <Link
              href="/services/vehicle-recovery"
              className="inline-flex items-center gap-2 text-primary font-bold mt-6 hover:gap-3 transition-all"
            >
              Explore Our Vehicle Recovery Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/van-recovery-cloudy-yard.webp"
              alt="AHS Recovery van loaded on a flatbed recovery truck in Ilford"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
