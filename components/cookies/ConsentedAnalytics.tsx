"use client"

import { Analytics } from "@vercel/analytics/next"
import { useCookieConsent } from "@/lib/cookie-consent"

/** Only mounts Vercel Web Analytics once the visitor has actively consented to the Analytics category. */
export default function ConsentedAnalytics() {
  const { categories, hasChosen } = useCookieConsent()

  if (!hasChosen || !categories.analytics) return null

  return <Analytics />
}
