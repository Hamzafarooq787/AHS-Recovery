import Link from "next/link"
import { Phone } from "lucide-react"
import { siteConfig, services } from "@/lib/site-config"

export const metadata = {
  title: "Page Not Found | AHS Recovery",
  description: "The page you're looking for doesn't exist. Find AHS Recovery's services, or call for vehicle recovery now.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-background-dark">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <span className="text-primary font-black text-7xl md:text-9xl tracking-tight">404</span>
        <h1 className="text-3xl md:text-5xl font-black text-white">Page Not Found</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of the links below, or call
          us directly for vehicle recovery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <div className="pt-10 border-t border-white/5">
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="text-primary hover:underline text-sm font-medium">
              All Services
            </Link>
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-slate-400 hover:text-primary text-sm font-medium"
              >
                {service.title}
              </Link>
            ))}
            <Link href="/about" className="text-slate-400 hover:text-primary text-sm font-medium">
              About Us
            </Link>
            <Link href="/gallery" className="text-slate-400 hover:text-primary text-sm font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-primary text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
