import type { Metadata } from "next"
import { Phone } from "lucide-react"
import GalleryGrid from "@/components/GalleryGrid"
import { siteConfig } from "@/lib/site-config"
import { galleryImages } from "@/lib/gallery"

export const metadata: Metadata = {
  title: "Recovery Photo Gallery | AHS Recovery",
  description:
    "Real recovery and transportation photos from AHS Recovery jobs — towing, breakdown recovery, accident recovery, 4x4 recovery and vehicle transportation, based in Ilford, Essex.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/gallery`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GalleryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${siteConfig.siteUrl}/gallery` },
    ],
  }

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "AHS Recovery Photo Gallery",
    url: `${siteConfig.siteUrl}/gallery`,
    image: galleryImages.map((image) => `${siteConfig.siteUrl}${image.src}`),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <main>
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden border-b border-white/5 bg-navy-accent">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(219,165,3,0.12), transparent 45%), radial-gradient(circle at 80% 60%, rgba(219,165,3,0.08), transparent 50%)",
            }}
          />
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Real Jobs, Real Photos
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Recovery Gallery</h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
              A look at real towing, breakdown, accident and vehicle transportation jobs carried out by AHS Recovery
              — from everyday vans to high-value supercars.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark">
          <div className="max-w-[1400px] mx-auto">
            <GalleryGrid />
          </div>
        </section>

        <section className="bg-primary py-12 md:py-20 text-center px-4 md:px-6">
          <h2 className="text-background-dark text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 px-2">
            Need Recovery Like This?
          </h2>
          <a
            className="inline-flex items-center justify-center gap-3 bg-background-dark text-white px-8 md:px-12 py-4 md:py-6 rounded-xl font-black text-xl md:text-3xl hover:scale-105 transition-transform border-4 border-white/10 shadow-2xl"
            href={`tel:${siteConfig.phoneTel}`}
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8" />
            {siteConfig.phoneDisplay}
          </a>
        </section>
      </main>
    </>
  )
}
