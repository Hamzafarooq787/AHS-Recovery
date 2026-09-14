"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Which areas do you cover from Ilford?",
    answer:
      "Our local recovery service generally covers locations within approximately 60 miles of Ilford. This includes nearby areas across Redbridge, East London and parts of Essex.",
  },
  {
    question: "What vehicles can AHS Recovery transport?",
    answer:
      "We can recover and transport many cars, vans, 4x4s, non-running vehicles and certain larger vehicles. Provide the vehicle's make, model, size and condition when requesting assistance.",
  },
  {
    question: "Can you recover a car that will not start?",
    answer:
      "Yes. If your car will not start, we can assess whether it requires roadside assistance, a battery jump start or complete vehicle recovery.",
  },
  {
    question: "Can you take my vehicle to a garage?",
    answer: "Yes. We can transport your vehicle to an agreed garage, home, storage facility or another suitable destination.",
  },
  {
    question: "Do you provide nationwide vehicle recovery?",
    answer:
      "Nationwide assistance is available specifically for breakdown recovery and vehicle transportation. Most other recovery services cover Ilford and locations within approximately 60 miles.",
  },
  {
    question: "Do you recover accident-damaged vehicles?",
    answer:
      "Yes. We provide accident recovery, RTC recovery and specialist accident recovery. The vehicle can be moved once the scene is safe and the relevant authorities have permitted its removal.",
  },
  {
    question: "Can you recover vehicles from the A12 and A406?",
    answer:
      "We can assist on major routes around Ilford, including the A12, A406, M11 and sections of the M25. Attendance depends on safe access, traffic conditions and availability.",
  },
  {
    question: "What information do you need when I call?",
    answer:
      "Provide your exact location, vehicle type, its current condition, the nature of the problem and the destination. Photos can also help us assess damaged or difficult-to-access vehicles.",
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
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Frequently Asked Questions</h2>
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
