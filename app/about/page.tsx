import AboutHero from "@/components/AboutHero"
import AboutIntro from "@/components/AboutIntro"
import AboutValues from "@/components/AboutValues"
import AboutProcess from "@/components/AboutProcess"
import AboutCTA from "@/components/AboutCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About AHS Recovery | Ilford, Essex Vehicle Recovery Team",
  description:
    "AHS Recovery is based in Ilford, Essex, providing local vehicle recovery within around 60 miles and nationwide breakdown recovery and vehicle transportation.",
  path: "/about",
})

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
