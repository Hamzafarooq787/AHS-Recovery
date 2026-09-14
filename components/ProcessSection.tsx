import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const steps = [
  {
    number: "1",
    title: "Call AHS Recovery",
    description: `Call ${siteConfig.phoneDisplay} and explain what has happened to your vehicle.`,
  },
  {
    number: "2",
    title: "Share Your Details",
    description: "Tell us where the vehicle is located, its make and model, its condition and where you want it transported.",
  },
  {
    number: "3",
    title: "We Assess the Recovery",
    description: "We determine which recovery vehicle, loading method and equipment are suitable.",
  },
  {
    number: "4",
    title: "We Transport Your Vehicle",
    description: "Your vehicle is loaded, secured and transported to the agreed destination.",
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
            How Our Vehicle Recovery Process Works
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            We keep the recovery process clear and straightforward from the first call to the final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative mb-16">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-primary/30 -z-10"></div>
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center relative flex-shrink-0">
                <span className="text-primary font-black text-2xl">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-500 text-sm max-w-[240px]">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Request Vehicle Recovery
          </a>
        </div>
      </div>
    </section>
  )
}
