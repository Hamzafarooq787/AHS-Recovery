import { Phone } from "lucide-react"
import Image from "next/image"
import { coverageHighlights, siteConfig } from "@/lib/site-config"

interface Feature {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServicePageTemplateProps {
  badge: string
  title: string
  titleHighlight: string
  intro: string
  paragraphs: string[]
  features: Feature[]
  examples: string[]
  coverageNote: string
  faqs: FAQ[]
  image?: string
  imageAlt: string
}

export default function ServicePageTemplate({
  badge,
  title,
  titleHighlight,
  intro,
  paragraphs,
  features,
  examples,
  coverageNote,
  faqs,
  image,
  imageAlt,
}: ServicePageTemplateProps) {
  return (
    <main>
      {/* Hero Split Section */}
      <section className="flex flex-col lg:flex-row w-full overflow-hidden border-b border-white/5">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:pl-40 lg:pr-12 py-20 bg-background-dark">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              {title} <span className="text-primary">{titleHighlight}</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">{intro}</p>
            <div className="pt-4">
              <a
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-lg font-black text-xl hover:scale-[1.02] transition-transform w-full sm:w-auto"
                href={`tel:${siteConfig.phoneTel}`}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-0 relative bg-navy-accent flex items-center justify-center overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent lg:block hidden z-10"></div>
        </div>
      </section>

      {/* Service Description & Features */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white">About This Service</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mb-8"></div>
            <div className="text-slate-400 text-lg space-y-4 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {examples.length > 0 && (
              <div className="pt-4">
                <h3 className="text-white font-bold mb-3">Typical situations we help with</h3>
                <ul className="space-y-2">
                  {examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">arrow_right</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="bg-navy-accent p-10 rounded-2xl border border-white/5 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span>
              Service Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <div>
                    <span className="text-white font-semibold">{feature.title}</span>
                    <p className="text-slate-500 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent/20 border-y border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">How It Works</h2>
            <p className="text-slate-500">Simple, straightforward recovery in three steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-primary/20 -z-10"></div>
            {[
              {
                icon: "call",
                number: "01",
                title: "Contact Us",
                description: `Call ${siteConfig.phoneDisplay} and share your location and vehicle details.`,
              },
              {
                icon: "local_shipping",
                number: "02",
                title: "We Dispatch",
                description: "A recovery vehicle suited to your situation is sent to your location.",
              },
              {
                icon: "home",
                number: "03",
                title: "Safe Recovery",
                description: "Your vehicle is safely recovered to your home, garage or preferred location.",
              },
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-background-dark border border-primary flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                  <div className="absolute -top-1 -right-1 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-black text-xs">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 max-w-[250px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4">Common Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-navy-accent/40 open:border-primary/40 open:bg-primary/5"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 font-bold text-white text-base md:text-lg">
                    {faq.question}
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-background-dark py-20 md:py-32 text-center border-t border-white/5 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 text-xs md:text-sm">
            {badge}
          </p>
          <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black mb-8 md:mb-12 px-2">
            Need Help? Call Now
          </h2>
          <a
            className="block bg-transparent text-primary hover:text-white transition-colors duration-300 break-all px-4"
            href={`tel:${siteConfig.phoneTel}`}
          >
            <span className="text-4xl md:text-6xl lg:text-8xl font-black tabular-nums">
              {siteConfig.phoneDisplay}
            </span>
          </a>
          <p className="mt-8 md:mt-12 text-slate-500 font-medium text-base md:text-lg italic px-4">
            {coverageNote}
          </p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-background-dark py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="bg-navy-accent rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-white/5">
            <div className="w-full md:w-1/2 p-12 lg:p-20">
              <h2 className="text-3xl font-black text-white mb-4">Where We Cover</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">{coverageNote}</p>
              <div className="grid grid-cols-2 gap-4">
                {coverageHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>
                      <span className="text-white font-semibold block text-sm">{item.title}</span>
                      <span className="text-xs text-slate-500">{item.description}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative w-full md:w-1/2 h-80 md:h-[450px] overflow-hidden bg-background-dark/40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(217,51,63,0.14), transparent 45%), radial-gradient(circle at 75% 70%, rgba(217,51,63,0.09), transparent 50%)",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
