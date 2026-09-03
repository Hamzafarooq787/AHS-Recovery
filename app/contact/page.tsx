import ContactHero from "@/components/ContactHero"
import ContactServiceArea from "@/components/ContactServiceArea"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact AHS Recovery | Ilford, Essex Vehicle Recovery",
  description:
    "Contact AHS Recovery in Ilford, Essex for towing, breakdown assistance and vehicle recovery. Call 07462 486149 or email AHSRECOVERY@OUTLOOK.COM.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactServiceArea />
      <ContactCTA />
    </main>
  )
}
