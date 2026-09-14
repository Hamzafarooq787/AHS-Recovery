import LegalPageShell from "@/components/legal/LegalPageShell"
import { legalConfig } from "@/lib/legal-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy | AHS Recovery",
  description:
    "Read how AHS Recovery collects, uses and protects personal information in line with UK GDPR and the Data Protection Act 2018.",
  path: "/privacy-policy",
})

const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "who-we-are", label: "Who is the data controller" },
  { id: "information-we-collect", label: "Personal information we collect" },
  { id: "how-we-collect", label: "How we collect information" },
  { id: "purposes", label: "How and why we use your information" },
  { id: "sharing", label: "Sharing your personal information" },
  { id: "international-transfers", label: "International transfers" },
  { id: "retention", label: "How long we keep information" },
  { id: "security", label: "Keeping your information secure" },
  { id: "your-rights", label: "Your data protection rights" },
  { id: "complaints", label: "How to complain" },
  { id: "cookies", label: "Cookies and similar technologies" },
  { id: "third-party-sites", label: "Links to other websites" },
  { id: "children", label: "Children's information" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      currentPath="/privacy-policy"
      toc={toc}
      intro="This policy explains what personal information AHS Recovery collects, why, and what rights you have over it. It is written to reflect the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and the Privacy and Electronic Communications Regulations (PECR)."
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy applies to the {legalConfig.tradingName} website ({legalConfig.website}) and to
          personal information collected when you contact {legalConfig.tradingName} by phone, WhatsApp or email to
          request recovery, towing, breakdown, roadside assistance, accident recovery or vehicle transportation
          services.
        </p>
        <p>
          Some details of {legalConfig.tradingName}&apos;s business set-up cannot currently be confirmed from public
          information and are marked with a placeholder below. {legalConfig.tradingName} should replace every
          placeholder with the correct information before this page is relied upon as a complete, accurate policy.
        </p>
      </section>

      <section id="who-we-are">
        <h2>2. Who is the data controller</h2>
        <p>
          The data controller responsible for your personal information is{" "}
          <mark>{legalConfig.legalName}</mark>, trading as {legalConfig.tradingName}, of{" "}
          {legalConfig.tradingAddress} ({legalConfig.registeredOfficeNote}). {legalConfig.tradingName}&apos;s legal
          status is <mark>{legalConfig.legalStatus}</mark>
          {" "}(company number <mark>{legalConfig.companyNumber}</mark>, VAT number{" "}
          <mark>{legalConfig.vatNumber}</mark>, where applicable).
        </p>
        <p>You can contact us using the details in Section 16 below.</p>
      </section>

      <section id="information-we-collect">
        <h2>3. Personal information we collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>Your name and contact details (telephone number, email address).</li>
          <li>Your vehicle details (registration, make and model, and condition or fault described to us).</li>
          <li>
            Location information, such as a pickup address, breakdown location, or details you share so we can
            find you (for example, when arranging vehicle recovery). Location data of this kind can indicate where
            you or your vehicle are at a given time, so we treat it carefully and only use it to deliver the
            service you have requested.
          </li>
          <li>Delivery or destination addresses for vehicle transportation bookings.</li>
          <li>The content of messages you send us, for example by WhatsApp, email, or our website enquiry form.</li>
          <li>Basic website usage information collected via analytics, but only where you have consented — see our{" "}
            <a href="/cookie-policy">Cookie Policy</a>.
          </li>
        </ul>
        <p>
          We do not currently have confirmation that telephone calls to {legalConfig.tradingName} are recorded. If
          this changes, this policy will be updated to explain call recording, its purpose and how long recordings
          are kept.
        </p>
      </section>

      <section id="how-we-collect">
        <h2>4. How we collect information</h2>
        <p>We collect personal information:</p>
        <ul>
          <li>Directly from you, when you call, WhatsApp, email us, or submit our website enquiry form.</li>
          <li>Automatically, through cookies and similar technologies, but only for optional categories once you have given consent (see our <a href="/cookie-policy">Cookie Policy</a>).</li>
        </ul>
      </section>

      <section id="purposes">
        <h2>5. How and why we use your information</h2>
        <p>The table below sets out the purposes for which we use personal information and the lawful basis we rely on under UK GDPR.</p>
        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Purpose</th>
                <th scope="col">Lawful basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Providing a quotation and arranging the recovery, towing, breakdown, roadside assistance or transportation service you have requested</td>
                <td>Performance of a contract with you, or steps taken at your request prior to entering into a contract</td>
              </tr>
              <tr>
                <td>Contacting you about your booking (e.g. arrival time, vehicle status)</td>
                <td>Performance of a contract with you</td>
              </tr>
              <tr>
                <td>Responding to enquiries that do not lead to a booking</td>
                <td>Legitimate interests, in responding to enquiries about our services</td>
              </tr>
              <tr>
                <td>Keeping records for accounting, tax and legal purposes</td>
                <td>Legal obligation, and/or legitimate interests</td>
              </tr>
              <tr>
                <td>Website analytics, where you have actively consented</td>
                <td>Consent (see our <a href="/cookie-policy">Cookie Policy</a>)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not rely on consent as the lawful basis for providing a service you have already booked with us —
          that use is based on performance of our contract with you.
        </p>
      </section>

      <section id="sharing">
        <h2>6. Sharing your personal information</h2>
        <p>
          We do not sell your personal information. We may share limited information with third parties who
          provide services that support our business, for example our website hosting provider ({legalConfig.hostingProvider}) and, where you have consented, our website analytics provider ({legalConfig.analyticsProvider}).
        </p>
        <p>
          We have not identified any other third-party services currently in operational use (such as payment
          processors, dedicated telephone-tracking software or live chat tools) from the information available to
          us. If {legalConfig.tradingName} begins using additional third-party services that process personal
          information, this section should be updated to name them and explain what they do.
        </p>
        <p>
          We may also share information where required by law, for example with the police or insurers following a
          road traffic collision, where necessary to protect our legal rights, or with your consent.
        </p>
      </section>

      <section id="international-transfers">
        <h2>7. International transfers</h2>
        <p>
          <mark>
            It has not been confirmed whether any supplier used by {legalConfig.tradingName} (such as our hosting or
            analytics provider) transfers personal information outside the United Kingdom, or what safeguard (for
            example UK adequacy regulations or standard contractual clauses) would apply. This should be confirmed
            and this section updated accordingly before publication.
          </mark>
        </p>
      </section>

      <section id="retention">
        <h2>8. How long we keep information</h2>
        <p>We aim to keep personal information for no longer than necessary for the purposes it was collected for. Exact retention periods have not been confirmed and are marked below for {legalConfig.tradingName} to complete.</p>
        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Information</th>
                <th scope="col">Retention period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Booking and job records (customer, vehicle and job details)</td>
                <td><mark>[CONFIRM RETENTION PERIOD]</mark></td>
              </tr>
              <tr>
                <td>Accounting and tax records</td>
                <td><mark>[CONFIRM RETENTION PERIOD — NOTE: UK TAX LAW TYPICALLY REQUIRES AT LEAST 6 YEARS]</mark></td>
              </tr>
              <tr>
                <td>Enquiries that do not result in a booking</td>
                <td><mark>[CONFIRM RETENTION PERIOD]</mark></td>
              </tr>
              <tr>
                <td>Cookie/analytics consent records</td>
                <td><mark>[CONFIRM RETENTION PERIOD]</mark></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="security">
        <h2>9. Keeping your information secure</h2>
        <p>
          We take reasonable technical and organisational measures to protect personal information against
          unauthorised access, loss or misuse. No method of transmission or storage over the internet can be
          guaranteed to be completely secure, and we cannot promise absolute security of information you send to
          us.
        </p>
      </section>

      <section id="your-rights">
        <h2>10. Your data protection rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you.</li>
          <li>Request correction of inaccurate personal information.</li>
          <li>Request erasure of your personal information, in certain circumstances.</li>
          <li>Request that we restrict processing of your personal information, in certain circumstances.</li>
          <li>Object to our processing of your personal information, in certain circumstances.</li>
          <li>Request that we transfer some of your personal information to another organisation (data portability).</li>
          <li>Withdraw consent at any time, where we rely on consent (for example, optional cookies).</li>
        </ul>
        <p>To exercise any of these rights, contact us using the details in Section 16.</p>
      </section>

      <section id="complaints">
        <h2>11. How to complain</h2>
        <p>
          If you are unhappy with how we have handled your personal information, please contact us first so we can
          try to resolve it. You also have the right to complain to the Information Commissioner&apos;s Office
          (ICO), the UK&apos;s data protection regulator, at{" "}
          <a href={legalConfig.icoComplaintUrl} target="_blank" rel="noopener noreferrer">
            {legalConfig.icoComplaintUrl}
          </a>
          .
        </p>
      </section>

      <section id="cookies">
        <h2>12. Cookies and similar technologies</h2>
        <p>
          Our website uses strictly necessary cookies to operate, and optional cookies (Preferences, Analytics and
          Marketing) only where you give active consent through our cookie banner and preference centre. Full
          details, including what each cookie does, are set out in our{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </section>

      <section id="third-party-sites">
        <h2>13. Links to other websites</h2>
        <p>
          Our website may contain links to third-party websites (for example, a Google Maps listing). We are not
          responsible for the privacy practices of other websites, and we encourage you to read their privacy
          policies.
        </p>
      </section>

      <section id="children">
        <h2>14. Children&apos;s information</h2>
        <p>
          Our services are aimed at adults arranging vehicle recovery, breakdown or transportation services. We do
          not knowingly collect personal information from children.
        </p>
      </section>

      <section id="changes">
        <h2>15. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time, for example if our business practices or the
          services and tools we use change. The &quot;Last updated&quot; date at the top of this page shows when it
          was last revised.
        </p>
      </section>

      <section id="contact">
        <h2>16. Contact us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal information, please
          contact us:
        </p>
        <ul>
          <li>Telephone: <a href={`tel:${legalConfig.phoneTel}`}>{legalConfig.phoneDisplay}</a></li>
          <li>Email: <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a></li>
          <li>Address: {legalConfig.tradingAddress}</li>
        </ul>
      </section>
    </LegalPageShell>
  )
}
