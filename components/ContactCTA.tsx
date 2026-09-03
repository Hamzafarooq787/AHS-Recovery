import { Mail, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function ContactCTA() {
  return (
    <section className="bg-background-dark py-24 md:py-32 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-sm">Immediate Assistance</p>
        <h2 className="text-white text-3xl md:text-5xl font-black mb-5">Don&apos;t wait on the roadside. Call now.</h2>
        <p className="text-slate-500 font-medium text-lg mb-10">
          Our team is ready to help with local and nationwide recovery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center justify-center gap-3 bg-primary text-background-dark px-6 py-4 rounded-xl font-black text-lg hover:brightness-110 hover:scale-[1.02] transition-all"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="tabular-nums">{siteConfig.phoneDisplay}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneAltTel}`}
            className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/15 px-6 py-4 rounded-xl font-black text-lg hover:bg-white/10 hover:scale-[1.02] transition-all"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="tabular-nums">{siteConfig.phoneAltDisplay}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/25 px-6 py-3 rounded-xl font-bold hover:bg-[#25D366]/15 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
            <span className="tabular-nums text-sm">WhatsApp {siteConfig.phoneDisplay}</span>
          </a>
          <a
            href={siteConfig.whatsappAlt}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/25 px-6 py-3 rounded-xl font-bold hover:bg-[#25D366]/15 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
            <span className="tabular-nums text-sm">WhatsApp {siteConfig.phoneAltDisplay}</span>
          </a>
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 mt-10 text-slate-400 hover:text-primary transition-colors text-sm font-medium break-all"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          {siteConfig.email}
        </a>
      </div>
    </section>
  )
}
