import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"
import { services, siteConfig } from "@/lib/site-config"

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/5 px-6 md:px-20 lg:px-40 py-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Logo />
          <p className="text-slate-500 max-w-sm">
            {siteConfig.name} is based in {siteConfig.location}, providing towing, breakdown assistance and vehicle
            recovery across {siteConfig.localCoverageArea}, plus nationwide breakdown recovery and vehicle
            transportation. Our fleet ranges from 4x4 recovery trailers to 18-tonne recovery lorries.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-primary" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-2 text-slate-500 text-sm mb-6">
            <li>
              <Link className="hover:text-primary" href="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/about">
                About Us
              </Link>
            </li>
          </ul>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary break-all">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              {siteConfig.location}, {siteConfig.country}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs gap-2">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Local recovery across {siteConfig.localCoverageArea}. Breakdown &amp; transport nationwide.</p>
      </div>
    </footer>
  )
}
