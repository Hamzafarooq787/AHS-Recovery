"use client"

import { useEffect, useId, useRef, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import Link from "next/link"
import { useCookieConsent, type ConsentCategories } from "@/lib/cookie-consent"

interface CategoryDef {
  key: keyof Omit<ConsentCategories, "necessary">
  title: string
  description: string
}

const OPTIONAL_CATEGORIES: CategoryDef[] = [
  {
    key: "preferences",
    title: "Preferences",
    description: "Allows the website to remember optional choices that change how it behaves or appears.",
  },
  {
    key: "analytics",
    title: "Analytics",
    description: "Helps us understand how visitors use the website so we can improve its performance and content.",
  },
  {
    key: "marketing",
    title: "Marketing",
    description: "May be used to measure advertising or provide more relevant marketing across websites.",
  },
]

function Toggle({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean
  onChange?: (value: boolean) => void
  label: string
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent ${
        checked ? "bg-primary" : "bg-white/15"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

export default function CookiePreferencesModal() {
  const { categories, isPreferencesOpen, openPreferences, closePreferences, acceptAll, rejectOptional, savePreferences } =
    useCookieConsent()
  const [draft, setDraft] = useState(categories)
  const headingId = useId()
  const descId = useId()
  const initialised = useRef(false)

  useEffect(() => {
    if (isPreferencesOpen) {
      setDraft(categories)
      initialised.current = true
    }
  }, [isPreferencesOpen, categories])

  return (
    <DialogPrimitive.Root
      open={isPreferencesOpen}
      onOpenChange={(open) => (open ? openPreferences() : closePreferences())}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[80] bg-black/60 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          aria-labelledby={headingId}
          aria-describedby={descId}
          className="fixed left-1/2 top-1/2 z-[90] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-navy-accent shadow-2xl shadow-black/50 max-h-[85vh] overflow-y-auto focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <DialogPrimitive.Title id={headingId} className="text-white font-black text-xl md:text-2xl">
                Cookie Preferences
              </DialogPrimitive.Title>
              <DialogPrimitive.Close
                aria-label="Close cookie preferences"
                className="flex-shrink-0 rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="w-5 h-5" />
              </DialogPrimitive.Close>
            </div>
            <DialogPrimitive.Description id={descId} className="text-slate-300 text-sm leading-relaxed mb-6">
              Choose which optional cookies you allow. Strictly Necessary cookies are always on because the site
              cannot function properly without them. You can change these choices at any time from the Cookie
              Settings link in the footer.{" "}
              <Link href="/cookie-policy" className="text-primary font-semibold hover:underline">
                Read our Cookie Policy
              </Link>
              .
            </DialogPrimitive.Description>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Strictly Necessary</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Required for core website operation, security and remembering your cookie choices. These
                      cannot be switched off because the website relies on them to function.
                    </p>
                  </div>
                  <Toggle checked disabled label="Strictly Necessary cookies (always on)" />
                </div>
              </div>

              {OPTIONAL_CATEGORIES.map((category) => (
                <div key={category.key} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{category.title}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{category.description}</p>
                    </div>
                    <Toggle
                      checked={draft[category.key]}
                      onChange={(value) => setDraft((prev) => ({ ...prev, [category.key]: value }))}
                      label={`${category.title} cookies`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    preferences: draft.preferences,
                    analytics: draft.analytics,
                    marketing: draft.marketing,
                  })
                }
                className="flex-1 bg-primary text-background-dark font-bold text-sm rounded-lg px-5 py-3 hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 bg-white/10 text-white font-bold text-sm rounded-lg px-5 py-3 border border-white/15 hover:bg-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="flex-1 bg-transparent text-slate-300 font-bold text-sm rounded-lg px-5 py-3 border border-white/15 hover:bg-white/5 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-accent"
              >
                Reject Optional
              </button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
