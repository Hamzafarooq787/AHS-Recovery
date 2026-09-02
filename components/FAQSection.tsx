"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Where is AHS Recovery based?",
    answer: `AHS Recovery is based in ${siteConfig.location}, and handles local recovery work across ${siteConfig.localCoverageArea}.`,
  },
  {
    question: "Do you only cover Ilford and Essex?",
    answer:
      "Our local recovery services cover Ilford, Essex and surrounding areas within around 60 miles. Breakdown recovery and vehicle transportation are both available nationwide.",
  },
  {
    question: "What types of vehicles can you recover?",
    answer:
      "We recover cars, vans, 4x4s and larger vehicles. Our fleet ranges from 4x4 recovery trailers to 18-tonne recovery lorries, so we can match the right vehicle to the job.",
  },
  {
    question: "Can you help if my vehicle won't start?",
    answer:
      "Yes. Alongside full recovery and towing, we offer jump starts for both 12V and 24V vehicles, so you can often get back on the road without a full tow.",
  },
  {
    question: "Do you recover vehicles after an accident?",
    answer:
      "Yes, we provide RTC (road traffic collision) recovery and accident recovery, including specialist accident recovery for larger or more complex situations.",
  },
  {
    question: "Do you deliver or transport vehicles that don't run?",
    answer:
      "Yes. Our nationwide vehicle transportation and delivery service can move non-runner vehicles as well as those that are driveable.",
  },
  {
    question: "How do I book a recovery?",
    answer: `Call us on ${siteConfig.phoneDisplay} or email ${siteConfig.email} with your location and vehicle details, and we'll take it from there.`,
  },
  {
    question: "Do I need to be with my vehicle when you arrive?",
    answer:
      "Ideally yes, so our driver can confirm details and discuss where you'd like the vehicle taken. If that's not possible, let us know when you contact us and we'll agree the best arrangement for your situation.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">FAQs</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about our recovery service. Can&apos;t find your answer? Call{" "}
            <a href={`tel:${siteConfig.phoneTel}`} className="text-primary font-bold hover:underline">
              {siteConfig.phoneDisplay}
            </a>{" "}
            and we&apos;ll help right away.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? "border-primary/40 bg-primary/5" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5"
                >
                  <span className="font-bold text-slate-900 text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-4 md:pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
