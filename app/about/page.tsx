import type { Metadata } from "next"
import AboutHero from "@/components/AboutHero"
import AboutIntro from "@/components/AboutIntro"
import AboutValues from "@/components/AboutValues"
import AboutProcess from "@/components/AboutProcess"
import AboutCTA from "@/components/AboutCTA"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About AHS Recovery | Ilford, Essex Vehicle Recovery Team",
  description:
    "AHS Recovery is based in Ilford, Essex, providing local vehicle recovery within around 60 miles and nationwide breakdown recovery and vehicle transportation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutProcess />
      <AboutCTA />
    </main>
  )
}
