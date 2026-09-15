import LegalPageShell from "@/components/legal/LegalPageShell"
import { legalConfig } from "@/lib/legal-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Terms and Conditions | AHS Recovery",
  description:
    "The terms and conditions covering use of the AHS Recovery website and the vehicle recovery, towing, breakdown and transportation services AHS Recovery provides.",
  path: "/terms-and-conditions",
})

const toc = [
  { id: "definitions", label: "Definitions" },
  { id: "services", label: "Our services" },
  { id: "quotations", label: "Requesting a quotation" },
  { id: "booking", label: "Booking and formation of a contract" },
  { id: "prices", label: "Prices and additional charges" },
  { id: "customer-responsibilities", label: "Your responsibilities" },
  { id: "vehicle-condition", label: "Vehicle condition and inspection" },
  { id: "estimated-times", label: "Estimated arrival and completion times" },
  { id: "cancellations", label: "Cancellations" },
  { id: "delays", label: "Delays and events beyond our control" },
  { id: "customer-property", label: "Your property and vehicle contents" },
  { id: "liability", label: "Liability" },
  { id: "complaints", label: "Complaints" },
  { id: "consumer-rights", label: "Your consumer rights" },
  { id: "business-customers", label: "Business customers" },
  { id: "privacy", label: "Privacy and cookies" },
  { id: "website-use", label: "Use of our website" },
  { id: "changes", label: "Changes to these terms" },
  { id: "governing-law", label: "Governing law" },
  { id: "contact", label: "Contact us" },
]

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms and Conditions"
      currentPath="/terms-and-conditions"
      toc={toc}
      intro="These terms cover two things: how you may use the AHS Recovery website, and the terms that apply when you book a recovery, towing, breakdown, roadside assistance, accident recovery or vehicle transportation service with us. Nothing here affects your statutory rights."
    >
      <section id="definitions">
        <h2>1. Definitions</h2>
        <ul>
          <li>&quot;We&quot;, &quot;us&quot;, &quot;our&quot; and &quot;{legalConfig.tradingName}&quot; means <mark>{legalConfig.legalName}</mark>, trading as {legalConfig.tradingName}.</li>
          <li>&quot;You&quot; and &quot;your&quot; means the person or business requesting or receiving our services, or using our website.</li>
          <li>&quot;Services&quot; means vehicle recovery, towing, breakdown assistance, roadside assistance, accident recovery and vehicle transportation services provided by us.</li>
          <li>&quot;Website&quot; means {legalConfig.website}.</li>
        </ul>
      </section>

      <section id="services">
        <h2>2. Our services</h2>
        <p>
          We provide towing, breakdown assistance, roadside assistance, accident/RTC recovery, vehicle recovery,
          winch-out recovery and nationwide vehicle transportation and delivery. Service availability depends on
          factors such as location, vehicle type, road and weather conditions, and vehicle/driver availability at
          the time. We do not guarantee that we will be able to accept every job requested, and we may decline or
          refer a job elsewhere at our discretion, for example where it falls outside our capability or capacity.
        </p>
      </section>

      <section id="quotations">
        <h2>3. Requesting a quotation</h2>
        <p>
          When you contact us for a quotation, please provide accurate information about your vehicle, its
          location, its condition and the service you need. Any price or time estimate we give is based on the
          information you provide, and may need to change if the actual situation differs (for example, if a
          vehicle is more difficult to access, heavier, or more damaged than described).
        </p>
        <p>
          A quotation given over the phone, by WhatsApp or by email is an estimate and does not create a binding
          fixed-price contract unless we have confirmed a fixed price for the specific job in writing.
        </p>
      </section>

      <section id="booking">
        <h2>4. Booking and formation of a contract</h2>
        <p>
          <mark>
            The precise point at which a quotation becomes a binding booking (for example, verbal confirmation by
            telephone, a WhatsApp message confirming dispatch, or arrival of our recovery vehicle) has not been
            confirmed and should be set out clearly here before this page is relied upon.
          </mark>{" "}
          In general, a contract for services is formed once we confirm that we are able to carry out the job and
          you agree for us to proceed.
        </p>
      </section>

      <section id="prices">
        <h2>5. Prices and additional charges</h2>
        <p>
          <mark>
            Standard pricing, callout charges, mileage rates, waiting-time charges and out-of-hours charges (if
            any) have not been confirmed and should be inserted here rather than left blank, once agreed by AHS
            Recovery. Any additional charges that may apply on top of an initial quotation (for example, due to
            additional distance, waiting time, or complexity discovered on arrival) should also be described.
          </mark>{" "}
          Where a fixed price has been agreed, we will not increase it without your agreement, except where the
          job turns out to be materially different from what was described to us when quoting.
        </p>
      </section>

      <section id="customer-responsibilities">
        <h2>6. Your responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate information about your vehicle, its location and its condition.</li>
          <li>Ensure, so far as you reasonably can, that our staff and vehicles can safely access the vehicle to be recovered or transported.</li>
          <li>Remove or declare any valuable or hazardous items before recovery or transportation, where practical.</li>
          <li>Pay the agreed price for the service provided, in line with any payment terms confirmed to you.</li>
        </ul>
      </section>

      <section id="vehicle-condition">
        <h2>7. Vehicle condition and inspection</h2>
        <p>
          We take reasonable care when recovering, towing or transporting your vehicle. However, we do not accept
          responsibility for:
        </p>
        <ul>
          <li>Pre-existing damage, or damage that was already present before we attended.</li>
          <li>Damage that is an unavoidable consequence of the vehicle&apos;s condition (for example, further damage to an already severely damaged accident vehicle that cannot reasonably be avoided during recovery).</li>
          <li>Damage or delay caused by inaccurate or incomplete information you gave us about the vehicle or its location.</li>
        </ul>
        <p>
          This does not exclude our responsibility for damage caused by our own negligence or that of our staff in
          the course of recovery, towing or transportation. Where practical, we will note the vehicle&apos;s
          condition before and after the job so that any dispute can be resolved fairly.
        </p>
      </section>

      <section id="estimated-times">
        <h2>8. Estimated arrival and completion times</h2>
        <p>
          Any arrival or completion time we give is an estimate only. Actual times can be affected by traffic,
          weather, road closures, the complexity of the job, and other jobs already in progress. We do not
          guarantee a specific response or arrival time unless this has been separately confirmed to you in
          writing for your booking.
        </p>
      </section>

      <section id="cancellations">
        <h2>9. Cancellations</h2>
        <p>
          You may cancel a booking by contacting us as soon as possible, ideally before a vehicle has been
          dispatched to you.
        </p>
        <p>
          Where a booking is made at a distance (for example, by phone, WhatsApp or our website) away from our
          business premises, it may in some circumstances be treated as an off-premises or distance consumer
          contract under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations
          2013, which can give you a statutory right to cancel within 14 days. However, because our services are
          typically urgent and performed at your request very soon after booking (for example, dispatching a
          recovery vehicle to a breakdown), you may be asked to expressly request that we begin the service
          immediately and to acknowledge that your right to cancel may be lost, or a proportionate charge may
          apply, once the service has been fully performed or once it has begun at your request.
        </p>
        <p>
          <mark>
            [CONFIRM CANCELLATION POLICY AND ANY REASONABLE CHARGES] — the specific cancellation window, any
            charge for cancelling after a vehicle has been dispatched, and any charge for cancelling part-way
            through a job have not been confirmed and must be added here, rather than assumed, before this policy
            is relied upon. Any cancellation charge must be reasonable and reflect costs actually incurred, not an
            arbitrary figure.
          </mark>
        </p>
      </section>

      <section id="delays">
        <h2>10. Delays and events beyond our control</h2>
        <p>
          We will not be liable for any delay or failure to perform our services caused by events beyond our
          reasonable control, including severe weather, road closures, traffic accidents not involving us, or
          other circumstances outside our control. We will let you know as soon as reasonably possible if such an
          event affects your booking.
        </p>
      </section>

      <section id="customer-property">
        <h2>11. Your property and vehicle contents</h2>
        <p>
          Please remove valuables and personal belongings from your vehicle before recovery or transportation
          where possible. We are not responsible for items left in a vehicle unless loss or damage to them is
          caused by our negligence.
        </p>
      </section>

      <section id="liability">
        <h2>12. Liability</h2>
        <p>
          Nothing in these terms excludes or limits our liability for death or personal injury caused by our
          negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be
          excluded or limited under English law, nor does it affect your statutory rights as a consumer.
        </p>
        <p>
          Subject to the paragraph above, we will only be liable for loss or damage that is a foreseeable result of
          our breach of these terms or our negligence, and we will not be liable for losses that are not
          foreseeable, or for business losses if you are a consumer using our services for personal purposes.
        </p>
      </section>

      <section id="complaints">
        <h2>13. Complaints</h2>
        <p>
          If you are unhappy with a service we have provided, please contact us using the details in Section 20 so
          we can investigate and try to put things right.
        </p>
      </section>

      <section id="consumer-rights">
        <h2>14. Your consumer rights</h2>
        <p>
          If you are a consumer, nothing in these terms affects your statutory rights under the Consumer Rights Act
          2015, including your right to services carried out with reasonable care and skill, within a reasonable
          time, and for a reasonable price where one was not agreed in advance. For general guidance on your
          consumer rights, see{" "}
          <a href={legalConfig.citizensAdviceUrl} target="_blank" rel="noopener noreferrer">
            Citizens Advice
          </a>
          .
        </p>
      </section>

      <section id="business-customers">
        <h2>15. Business customers</h2>
        <p>
          If you are booking our services in the course of a business (for example, a garage, fleet operator or
          insurer), some of the consumer protections referred to in these terms (such as the distance-cancellation
          right described in Section 9) do not apply, and separate commercial terms may be agreed between us in
          writing.
        </p>
      </section>

      <section id="privacy">
        <h2>16. Privacy and cookies</h2>
        <p>
          How we handle personal information is set out in our <a href="/privacy-policy">Privacy Policy</a>, and
          how our website uses cookies is set out in our <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </section>

      <section id="website-use">
        <h2>17. Use of our website</h2>
        <p>
          Our website is provided for general information about our services and to help you contact us. You may
          view and use the website for these purposes. You must not misuse the website, for example by
          attempting to gain unauthorised access, introducing malicious code, or copying its content for commercial
          use without our permission.
        </p>
        <p>
          The content of our website (including text, layout and our logo) belongs to us or our licensors. Any
          third-party trademarks, brand names or images referenced or shown on the website (for example, vehicle
          manufacturer names) belong to their respective owners, and we do not claim ownership of them.
        </p>
      </section>

      <section id="changes">
        <h2>18. Changes to these terms</h2>
        <p>
          We may update these terms from time to time, for example to reflect changes in our services or the law.
          The &quot;Last updated&quot; date at the top of this page shows when they were last revised. Terms agreed
          for a specific booking will generally be the terms in place at the time of that booking.
        </p>
      </section>

      <section id="governing-law">
        <h2>19. Governing law</h2>
        <p>
          These terms are governed by the law of England and Wales. If you are a consumer resident elsewhere in the
          United Kingdom, you will benefit from any mandatory consumer-protection provisions of the law of the part
          of the UK in which you live, and nothing in this section removes those protections. Any dispute will be
          subject to the non-exclusive jurisdiction of the courts of England and Wales, without preventing a
          consumer from bringing proceedings in their own local courts where the law allows.
        </p>
      </section>

      <section id="contact">
        <h2>20. Contact us</h2>
        <p>If you have any questions about these terms, please contact us:</p>
        <ul>
          <li>Telephone: <a href={`tel:${legalConfig.phoneTel}`}>{legalConfig.phoneDisplay}</a></li>
          <li>Email: <a href={`mailto:${legalConfig.contactEmail}`}>{legalConfig.contactEmail}</a></li>
          <li>Address: {legalConfig.tradingAddress}</li>
        </ul>
      </section>
    </LegalPageShell>
  )
}
