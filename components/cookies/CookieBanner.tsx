"use client"

import Link from "next/link"
import { useCookieConsent } from "@/lib/cookie-consent"

export default function CookieBanner() {
  const { isBannerOpen, acceptAll, rejectOptional, openPreferences } = useCookieConsent()

  if (!isBannerOpen) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 md:px-6 md:pb-6 motion-reduce:transition-none"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-navy-accent/98 backdrop-blur-md shadow-2xl shadow-black/50 p-5 md:p-6">
        <h2 className="text-white font-bold text-base md:text-lg mb-2">Your Cookie Choices</h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          We use essential cookies to keep this website secure and working properly. With your permission, we may
          also use optional cookies to understand website use and improve our services. You can accept all optional
          cookies, reject them or choose your preferences.{" "}
          <Link href="/cookie-policy" className="text-primary font-semibold hover:underline">
            Read our Cookie Policy
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="flex-1 bg-primary text-background-dark font-bold text-sm rounded-lg px-5 py-3 hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={rejectOptional}
            className="flex-1 bg-white/10 text-white font-bold text-sm rounded-lg px-5 py-3 border border-white/15 hover:bg-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent"
          >
            Reject Optional
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="flex-1 bg-transparent text-slate-300 font-bold text-sm rounded-lg px-5 py-3 border border-white/15 hover:bg-white/5 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent"
          >
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
