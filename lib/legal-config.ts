import { siteConfig } from "./site-config"

/**
 * Central store of business/legal details used across the legal pages
 * (Privacy Policy, Terms and Conditions, Cookie Policy).
 *
 * IMPLEMENTATION NOTE — PLACEHOLDERS TO COMPLETE BEFORE PUBLISHING
 * ------------------------------------------------------------------
 * The following values could not be verified from the codebase and are
 * placeholders. AHS Recovery must confirm/replace every one of these
 * before the legal pages are published live:
 *
 *  1. legalName            — full legal or proprietor name (e.g. sole
 *                             trader's full name, or registered company name)
 *  2. legalStatus           — business type (sole trader / partnership /
 *                             limited company etc.)
 *  3. companyNumber         — Companies House number, if a limited company
 *  4. vatNumber              — VAT registration number, if VAT-registered
 *  5. registeredOffice      — registered office address, if different from
 *                             the trading address below
 *  6. dataRetentionPeriods  — see retention table in the Privacy Policy;
 *                             every "[CONFIRM RETENTION PERIOD]" placeholder
 *  7. cancellationPolicy    — see Terms and Conditions §9; the
 *                             "[CONFIRM CANCELLATION POLICY AND ANY
 *                             REASONABLE CHARGES]" placeholder
 *  8. bookingContractPoint  — the exact operational moment a quote/booking
 *                             becomes a binding contract (phone confirmation?
 *                             deposit? dispatch of a vehicle?)
 *  9. paymentMethods        — accepted payment methods/timing, beyond the
 *                             payment badges shown in the footer
 * 10. internationalTransfers — confirmation of whether any supplier
 *                             (e.g. hosting, analytics) transfers personal
 *                             data outside the UK, and the safeguard relied on
 *
 * This file is the single source of truth for these values — update here
 * and the change propagates to every legal page.
 */

export const legalConfig = {
  tradingName: siteConfig.name,

  // PLACEHOLDER — could not be verified from the codebase.
  legalName: "[INSERT FULL LEGAL OR PROPRIETOR NAME]",

  // PLACEHOLDER — could not be verified from the codebase.
  legalStatus: "[CONFIRM LEGAL STATUS, E.G. SOLE TRADER OR LIMITED COMPANY]",

  // PLACEHOLDER — only applicable if AHS Recovery is a registered company.
  companyNumber: "[INSERT COMPANY NUMBER, IF APPLICABLE]",

  // PLACEHOLDER — only applicable if AHS Recovery is VAT-registered.
  vatNumber: "[INSERT VAT NUMBER, IF APPLICABLE]",

  // Verified trading address (used sitewide in the footer and structured data).
  tradingAddress: siteConfig.fullAddress,

  // PLACEHOLDER — only needed if the registered office differs from the
  // trading address above (e.g. for a limited company with an accountant's
  // registered-office address).
  registeredOfficeNote:
    "[CONFIRM WHETHER THE REGISTERED OFFICE ADDRESS DIFFERS FROM THE TRADING ADDRESS ABOVE]",

  // Verified contact details (already used publicly on the Contact page/footer).
  contactEmail: siteConfig.email,
  privacyEmail: siteConfig.email,
  phoneDisplay: siteConfig.phoneDisplay,
  phoneTel: siteConfig.phoneTel,
  website: siteConfig.siteUrl,

  hostingProvider: "Vercel Inc.",
  analyticsProvider: "Vercel Web Analytics (Vercel Inc.)",

  icoComplaintUrl: "https://ico.org.uk/make-a-complaint/",
  citizensAdviceUrl: "https://www.citizensadvice.org.uk/consumer/",

  lastUpdated: "14 September 2026",
  cookiePolicyVersion: "1.0",
}
