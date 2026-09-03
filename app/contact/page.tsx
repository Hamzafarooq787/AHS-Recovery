import ContactHero from "@/components/ContactHero"
import ContactInfo from "@/components/ContactInfo"
import EmergencyRequestForm from "@/components/EmergencyRequestForm"
import ContactServiceArea from "@/components/ContactServiceArea"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact AHS Recovery | Ilford, Essex Vehicle Recovery",
  description:
    "Contact AHS Recovery in Ilford, Essex for towing, breakdown assistance and vehicle recovery. Call 07576 614651 or email AHSRECOVERY@OUTLOOK.COM.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="bg-background-dark py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-8 items-start">
            <ContactInfo />
            <EmergencyRequestForm />
          </div>
        </div>
      </section>
      <ContactServiceArea />
      <ContactCTA />
    </main>
  )
}
