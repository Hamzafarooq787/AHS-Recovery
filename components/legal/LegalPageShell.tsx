import type { ReactNode } from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { legalConfig } from "@/lib/legal-config"

interface TocEntry {
  id: string
  label: string
}

const LEGAL_PAGES = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
]

export default function LegalPageShell({
  title,
  intro,
  toc,
  currentPath,
  children,
}: {
  title: string
  intro: string
  toc: TocEntry[]
  currentPath: string
  children: ReactNode
}) {
  const otherLegalPages = LEGAL_PAGES.filter((page) => page.href !== currentPath)

  return (
    <main className="bg-background-dark">
      <section className="border-b border-white/5 bg-navy-accent/60 px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[820px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">{title}</h1>
          <p className="text-slate-400 text-sm mb-5">Last updated: {legalConfig.lastUpdated}</p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">{intro}</p>
        </div>
      </section>

      <div className="max-w-[820px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-white/10 bg-navy-accent/40 p-6">
          <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((entry, index) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  className="text-slate-300 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {index + 1}. {entry.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="legal-content">{children}</article>

        <div className="mt-16 rounded-2xl border border-white/10 bg-navy-accent p-6 md:p-8">
          <h2 className="text-white font-bold text-lg mb-3">Questions about this page?</h2>
          <p className="text-slate-400 text-sm mb-5">
            Contact {legalConfig.tradingName} using the details below and we will do our best to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href={`tel:${legalConfig.phoneTel}`}
              className="inline-flex items-center gap-2 text-slate-200 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              {legalConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${legalConfig.privacyEmail}`}
              className="inline-flex items-center gap-2 text-slate-200 hover:text-primary transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-primary" />
              {legalConfig.privacyEmail}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {otherLegalPages.map((page) => (
            <Link key={page.href} href={page.href} className="text-primary font-semibold hover:underline">
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
