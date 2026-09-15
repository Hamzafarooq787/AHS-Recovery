import LegalPageShell from "@/components/legal/LegalPageShell"
import { legalConfig } from "@/lib/legal-config"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Cookie Policy | AHS Recovery",
  description:
    "Find out what cookies and similar technologies the AHS Recovery website uses, what each one does, and how to manage your cookie preferences.",
  path: "/cookie-policy",
})

const toc = [
  { id: "what-are-cookies", label: "What cookies are" },
  { id: "how-we-use", label: "How AHS Recovery uses cookies" },
  { id: "categories", label: "Cookie categories" },
  { id: "table", label: "Cookies and storage we use" },
  { id: "third-parties", label: "Third-party services" },
  { id: "consent-and-control", label: "Your consent and how to change it" },
  { id: "changes", label: "Updates and contact" },
]

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Cookie Policy"
      currentPath="/cookie-policy"
      toc={toc}
      intro="This policy explains what cookies and similar storage technologies the AHS Recovery website uses, what they are for, and how you can control them using our cookie banner and preference centre."
    >
      <section id="what-are-cookies">
        <h2>1. What cookies are</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. Similar technologies include
          local storage, which websites can also use to remember information on your device. This policy covers
          both cookies and similar storage technologies used on our website.
        </p>
      </section>

      <section id="how-we-use">
        <h2>2. How AHS Recovery uses cookies</h2>
        <p>
          Our website uses a small number of strictly necessary cookies/local storage entries to run properly,
          including remembering the cookie choices you make. We only currently have confirmed use of one further
          technology: Vercel Web Analytics, which we only load once you have actively given consent to the
          Analytics category. We have not identified any confirmed use of advertising, remarketing or marketing
          cookies at this time. The Preferences and Marketing categories are kept in our preference centre and
          cookie table so that they are ready to be used accurately if AHS Recovery introduces such tools in
          future — nothing in either category is switched on or used today.
        </p>
      </section>

      <section id="categories">
        <h2>3. Cookie categories</h2>
        <p>We group cookies and similar technologies into four categories, used consistently across our cookie banner, preference centre and this policy:</p>
        <ul>
          <li><strong>Strictly Necessary</strong> — required for core website operation, security and remembering your cookie choices. These are always active and cannot be switched off, because the website cannot function properly without them.</li>
          <li><strong>Preferences</strong> — allow the website to remember optional choices that change how it behaves or appears (for example, whether an embedded Google Map is shown). Off by default.</li>
          <li><strong>Analytics</strong> — help us understand how visitors use the website so we can improve its performance and content. Off by default.</li>
          <li><strong>Marketing</strong> — may be used to measure advertising or provide more relevant marketing across websites. Off by default. We do not currently use any marketing cookies, but keep this category available in case that changes.</li>
        </ul>
      </section>

      <section id="table">
        <h2>4. Cookies and storage we use</h2>
        <p>
          Every entry below has been checked against what is actually implemented on the website. Where a detail
          could not be confirmed (for example, an exact expiry period set by a third party), it is marked for
          investigation rather than guessed.
        </p>
        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Cookie / storage key</th>
                <th scope="col">Provider</th>
                <th scope="col">Purpose</th>
                <th scope="col">Category</th>
                <th scope="col">First / third party</th>
                <th scope="col">Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ahs-recovery-cookie-consent</td>
                <td>{legalConfig.tradingName} (this website)</td>
                <td>Remembers your cookie category choices so the banner does not reappear unnecessarily</td>
                <td>Strictly Necessary</td>
                <td>First party</td>
                <td>Persists in browser storage until you clear it or withdraw consent</td>
              </tr>
              <tr>
                <td colSpan={6}><mark>[FURTHER STRICTLY NECESSARY COOKIES SET BY THE HOSTING PLATFORM ITSELF, IF ANY, SHOULD BE CONFIRMED WITH VERCEL AND ADDED HERE]</mark></td>
              </tr>
              <tr>
                <td>Vercel Web Analytics</td>
                <td>Vercel Inc.</td>
                <td>Helps us understand website traffic and usage so we can improve the site. Vercel states this product is designed to operate without cookies.</td>
                <td>Analytics</td>
                <td>Third party</td>
                <td><mark>[CONFIRM WITH VERCEL — NOT APPLICABLE IF NO COOKIE IS SET]</mark></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We have not identified any Preferences-category cookies currently set automatically, and no
          Marketing-category cookies are currently in use on this website.
        </p>
      </section>

      <section id="third-parties">
        <h2>5. Third-party services</h2>
        <p>Our website embeds or links to the following third-party services, which are only the ones we could verify are actually present:</p>
        <ul>
          <li>
            <strong>Google Maps</strong> — an embedded map showing our location. This is only loaded once you have
            consented to the Preferences category, as Google&apos;s embed can set its own cookies. Google&apos;s use
            of information is governed by Google&apos;s own privacy policy.
          </li>
          <li>
            <strong>Google Fonts</strong> — our website loads an icon font from Google Fonts&apos; servers, which
            means your browser makes a request directly to Google when you visit our site. This is a resource
            request rather than a cookie, but it can expose your IP address to Google. We are considering
            self-hosting this font to reduce third-party exposure.
          </li>
          <li>
            <strong>WhatsApp</strong> — our website links to WhatsApp so you can message us. No WhatsApp cookies
            are set by our own website; if you click through, you leave our site and WhatsApp&apos;s own privacy
            practices apply.
          </li>
          <li>
            <strong>Vercel Web Analytics</strong> — described in the table above.
          </li>
        </ul>
      </section>

      <section id="consent-and-control">
        <h2>6. Your consent and how to change it</h2>
        <p>
          When you first visit our website, a banner lets you Accept All optional cookies, Reject Optional cookies,
          or Manage Preferences to choose individual categories. Strictly Necessary storage runs regardless, as the
          site could not function without it; no optional category is switched on until you actively choose it.
        </p>
        <p>
          You can change your choice at any time using the <strong>Cookie Settings</strong> link in the website
          footer, which reopens the preference centre. If you withdraw consent for a category, we stop using
          cookies or scripts in that category going forward and remove optional first-party storage where this is
          technically possible.
        </p>
        <p>
          You can also control cookies through your browser settings, including deleting existing cookies and
          blocking cookies from being set in future. Blocking strictly necessary cookies may affect how our website
          works.
        </p>
      </section>

      <section id="changes">
        <h2>7. Updates and contact</h2>
        <p>
          We may update this Cookie Policy if the cookies or similar technologies we use change. The &quot;Last
          updated&quot; date at the top of this page shows when it was last revised. If our use of cookies changes
          materially, the cookie banner will be shown again so you can make a fresh choice.
        </p>
        <p>
          For questions about this policy, contact us at{" "}
          <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a> or{" "}
          <a href={`tel:${legalConfig.phoneTel}`}>{legalConfig.phoneDisplay}</a>. See also our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>
    </LegalPageShell>
  )
}
