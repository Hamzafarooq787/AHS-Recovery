import type { Metadata } from "next"
import ContactHero from "@/components/ContactHero"
import ContactServiceArea from "@/components/ContactServiceArea"
import ContactCTA from "@/components/ContactCTA"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact AHS Recovery | Ilford, Essex Vehicle Recovery",
  description:
    "Contact AHS Recovery in Ilford, Essex for towing, breakdown assistance and vehicle recovery. Call 07462 486149 or email AHSRECOVERY@OUTLOOK.COM.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactServiceArea />
      <ContactCTA />
    </main>
  )
}
