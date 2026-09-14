"use client"

import { MapPin } from "lucide-react"
import { useCookieConsent } from "@/lib/cookie-consent"

interface ConsentGatedMapProps {
  src: string
  title: string
  className?: string
}

/**
 * The embedded Google Maps iframe can set its own cookies, so it is gated
 * behind the "Preferences" consent category rather than loaded unconditionally.
 */
export default function ConsentGatedMap({ src, title, className }: ConsentGatedMapProps) {
  const { categories, hasChosen, openPreferences } = useCookieConsent()

  if (hasChosen && categories.preferences) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
        className={className}
      />
    )
  }

  return (
    <div className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-white/5 p-6 text-center ${className ?? ""}`}>
      <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
      <p className="text-slate-300 text-sm max-w-xs">
        The map is provided by Google Maps and requires Preferences cookies. Allow this category to view the map.
      </p>
      <button
        type="button"
        onClick={openPreferences}
        className="text-primary font-bold text-sm underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Manage Cookie Preferences
      </button>
    </div>
  )
}
