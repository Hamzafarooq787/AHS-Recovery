import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import ConsentGatedMap from "@/components/cookies/ConsentGatedMap"

export default function CoverageSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 items-start">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Areas We Cover</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Vehicle Recovery Across Ilford, Essex and East London
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                AHS Recovery provides vehicle recovery across Ilford and surrounding areas within approximately 60
                miles. Our local coverage includes Ilford town centre, Gants Hill, Seven Kings, Goodmayes, Newbury
                Park, Barkingside, Redbridge, Chadwell Heath, Barking, Dagenham and Romford.
              </p>
              <p>
                We also assist drivers on major routes around Ilford and East London, including the A12, A406 North
                Circular, A118, M11 and sections of the M25, offering{" "}
                <Link href="/services/motorway-breakdown-recovery" className="text-primary font-semibold hover:underline">
                  motorway breakdown recovery
                </Link>{" "}
                subject to safe access and availability.
              </p>
              <p>
                For incidents outside our local recovery area, nationwide assistance is available for{" "}
                <Link href="/services/breakdown-assistance" className="text-primary font-semibold hover:underline">
                  breakdown recovery
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/vehicle-transportation-delivery"
                  className="text-primary font-semibold hover:underline"
                >
                  vehicle transportation and delivery
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="w-full h-[320px] lg:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <ConsentGatedMap src={siteConfig.googleMapsEmbedUrl} title="AHS Recovery location map" />
          </div>
        </div>
      </div>
    </section>
  )
}
