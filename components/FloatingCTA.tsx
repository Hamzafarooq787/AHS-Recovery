"use client"

import { Phone, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-primary hover:brightness-110 text-white shadow-lg hover:shadow-xl transition-all"
        aria-label={`Call ${siteConfig.name}`}
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-lg hover:shadow-xl transition-all"
        aria-label={`Email ${siteConfig.name}`}
      >
        <Mail className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  )
}
