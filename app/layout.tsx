import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ConditionalLayout from "@/components/ConditionalLayout"
import ScrollToTop from "@/components/ScrollToTop"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
})

const title = "AHS Recovery | Vehicle Recovery, Breakdown & Transportation"
const description =
  "AHS Recovery, based in Ilford, Essex, provides towing, breakdown assistance, RTC and accident recovery, roadside assistance and 4x4 recovery locally within 60 miles, plus nationwide breakdown recovery and vehicle transportation. Call 07462 486149."

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", addressLocality: "Ilford, Essex" },
        geoRadius: "96560",
      },
      "United Kingdom",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ilford",
      addressRegion: "Essex",
      addressCountry: "GB",
    },
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [],
  }

  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background-dark text-slate-100">
        <ScrollToTop />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  )
}
