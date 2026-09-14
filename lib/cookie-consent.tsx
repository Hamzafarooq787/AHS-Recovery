"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing"

export interface ConsentCategories {
  necessary: true
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

interface ConsentRecord {
  categories: ConsentCategories
  policyVersion: string
  timestamp: string
}

const STORAGE_KEY = "ahs-recovery-cookie-consent"
// Bump this when the cookie/technology usage changes materially so the
// banner re-appears for visitors with an outdated saved choice.
const POLICY_VERSION = "1.0"

const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
}

interface CookieConsentContextValue {
  categories: ConsentCategories
  hasChosen: boolean
  isBannerOpen: boolean
  isPreferencesOpen: boolean
  acceptAll: () => void
  rejectOptional: () => void
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void
  openPreferences: () => void
  closePreferences: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

function readStoredConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentRecord
    if (parsed.policyVersion !== POLICY_VERSION) return null
    if (typeof parsed.categories?.preferences !== "boolean") return null
    return parsed
  } catch {
    return null
  }
}

function writeStoredConsent(categories: ConsentCategories) {
  if (typeof window === "undefined") return
  const record: ConsentRecord = {
    categories,
    policyVersion: POLICY_VERSION,
    timestamp: new Date().toISOString(),
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch {
    // localStorage may be unavailable (private browsing, blocked storage) —
    // consent choice simply won't persist between visits in that case.
  }
}

/** Removes optional first-party storage this site itself may have written. */
function clearOptionalStorage(categories: ConsentCategories) {
  if (typeof window === "undefined") return
  if (!categories.analytics) {
    // Vercel Web Analytics does not use cookies or localStorage, but this
    // is a safe no-op placeholder should that ever change.
  }
  if (!categories.preferences) {
    try {
      window.localStorage.removeItem("ahs-recovery-map-preference")
    } catch {
      // ignore
    }
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<ConsentCategories>(DEFAULT_CATEGORIES)
  const [hasChosen, setHasChosen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)

  useEffect(() => {
    const stored = readStoredConsent()
    if (stored) {
      setCategories(stored.categories)
      setHasChosen(true)
    }
    setIsHydrated(true)
  }, [])

  const persist = useCallback((next: ConsentCategories) => {
    setCategories(next)
    setHasChosen(true)
    writeStoredConsent(next)
    clearOptionalStorage(next)
  }, [])

  const acceptAll = useCallback(() => {
    persist({ necessary: true, preferences: true, analytics: true, marketing: true })
    setIsPreferencesOpen(false)
  }, [persist])

  const rejectOptional = useCallback(() => {
    persist({ necessary: true, preferences: false, analytics: false, marketing: false })
    setIsPreferencesOpen(false)
  }, [persist])

  const savePreferences = useCallback(
    (next: Omit<ConsentCategories, "necessary">) => {
      persist({ necessary: true, ...next })
      setIsPreferencesOpen(false)
    },
    [persist],
  )

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), [])
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), [])

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      categories,
      hasChosen,
      isBannerOpen: isHydrated && !hasChosen && !isPreferencesOpen,
      isPreferencesOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [categories, hasChosen, isHydrated, isPreferencesOpen, acceptAll, rejectOptional, savePreferences, openPreferences, closePreferences],
  )

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return ctx
}
