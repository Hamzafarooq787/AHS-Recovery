"use client"

import { useCookieConsent } from "@/lib/cookie-consent"

export default function CookieSettingsButton({ className }: { className?: string }) {
  const { openPreferences } = useCookieConsent()

  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie Settings
    </button>
  )
}
