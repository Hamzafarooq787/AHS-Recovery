"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { User, Phone, Hash, Car, MapPin, Wrench, MessageSquare, AlertTriangle, Siren, ChevronDown } from "lucide-react"
import { siteConfig, services } from "@/lib/site-config"

const urgencyLevels = [
  { value: "standard", label: "Standard – can wait a few hours" },
  { value: "urgent", label: "Urgent – need help today" },
  { value: "high", label: "High – need help soon" },
  { value: "emergency", label: "Emergency – immediate assistance needed" },
]

const fieldClasses =
  "w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white hover:border-slate-300 transition-colors"
const labelClasses = "block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
      {children}
    </div>
  )
}

export default function EmergencyRequestForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const fullName = data.get("fullName")
    const phone = data.get("phone")
    const registration = data.get("registration")
    const vehicle = data.get("vehicle")
    const location = data.get("location")
    const assistanceType = data.get("assistanceType")
    const description = data.get("description")
    const urgencyValue = data.get("urgency")
    const urgencyLabel = urgencyLevels.find((u) => u.value === urgencyValue)?.label ?? urgencyValue

    const body = [
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Vehicle Registration: ${registration}`,
      `Vehicle Make & Model: ${vehicle}`,
      `Location/Postcode: ${location}`,
      `Assistance Needed: ${assistanceType}`,
      `Problem Description: ${description}`,
      `Urgency: ${urgencyLabel}`,
    ].join("\n")

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Recovery Request",
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setSubmitted(true)
    form.reset()
  }

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-primary via-amber-400 to-primary" />
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Siren className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-slate-900 text-xl md:text-2xl font-black leading-tight">Request Vehicle Recovery</h2>
            <p className="text-slate-500 text-sm mt-1">
              Fill in your details and we&apos;ll open an email to {siteConfig.email} so we can arrange help. For
              emergencies, please call {siteConfig.phoneDisplay} directly.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className={labelClasses}>
                Full Name
              </label>
              <Field icon={<User className="w-4 h-4" />}>
                <input id="fullName" name="fullName" type="text" required placeholder="John Smith" className={fieldClasses} />
              </Field>
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number
              </label>
              <Field icon={<Phone className="w-4 h-4" />}>
                <input id="phone" name="phone" type="tel" required placeholder="07462 486149" className={fieldClasses} />
              </Field>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="registration" className={labelClasses}>
                Vehicle Registration
              </label>
              <Field icon={<Hash className="w-4 h-4" />}>
                <input
                  id="registration"
                  name="registration"
                  type="text"
                  required
                  placeholder="AB12 CDE"
                  className={fieldClasses}
                />
              </Field>
            </div>
            <div>
              <label htmlFor="vehicle" className={labelClasses}>
                Vehicle Make and Model
              </label>
              <Field icon={<Car className="w-4 h-4" />}>
                <input id="vehicle" name="vehicle" type="text" required placeholder="Ford Focus" className={fieldClasses} />
              </Field>
            </div>
          </div>

          <div>
            <label htmlFor="location" className={labelClasses}>
              Current Location / Postcode
            </label>
            <Field icon={<MapPin className="w-4 h-4" />}>
              <input id="location" name="location" type="text" required placeholder="e.g. B1 1AA" className={fieldClasses} />
            </Field>
          </div>

          <div>
            <label htmlFor="assistanceType" className={labelClasses}>
              Type of Assistance Required
            </label>
            <Field icon={<Wrench className="w-4 h-4" />}>
              <select
                id="assistanceType"
                name="assistanceType"
                required
                defaultValue=""
                className={`${fieldClasses} appearance-none cursor-pointer pr-10`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </Field>
          </div>

          <div>
            <label htmlFor="description" className={labelClasses}>
              Problem Description
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400">
                <MessageSquare className="w-4 h-4" />
              </span>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                placeholder="Briefly describe what's happened..."
                className={`${fieldClasses} pt-3 resize-none`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="urgency" className={labelClasses}>
              Urgency Level
            </label>
            <Field icon={<AlertTriangle className="w-4 h-4" />}>
              <select
                id="urgency"
                name="urgency"
                required
                defaultValue=""
                className={`${fieldClasses} appearance-none cursor-pointer pr-10`}
              >
                <option value="" disabled>
                  Select urgency
                </option>
                {urgencyLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </Field>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-background-dark font-black text-base py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Siren className="w-5 h-5" />
            Request Vehicle Recovery
          </button>

          <p className="text-center text-xs text-slate-400">
            Local recovery across {siteConfig.localCoverageArea}, plus nationwide breakdown and transport.
          </p>

          {submitted && (
            <p className="text-center text-sm font-bold text-primary bg-primary/10 rounded-lg py-2" role="status">
              Opening your email app with the request details…
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
