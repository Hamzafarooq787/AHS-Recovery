import { Banknote } from "lucide-react"

function VisaMark() {
  return (
    <span className="italic font-black text-[#1a1f71] text-lg tracking-tight" aria-hidden="true">
      VISA
    </span>
  )
}

function MastercardMark() {
  return (
    <svg className="w-9 h-6" viewBox="0 0 48 30" aria-hidden="true">
      <circle cx="18" cy="15" r="12" fill="#EB001B" />
      <circle cx="30" cy="15" r="12" fill="#F79E1B" />
      <path
        d="M24 5.5a12 12 0 010 19 12 12 0 010-19z"
        fill="#FF5F00"
      />
    </svg>
  )
}

function ApplePayMark() {
  return (
    <span className="flex items-center gap-1 text-slate-900 font-semibold" aria-hidden="true">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.365 1.43c0 1.14-.463 2.086-1.14 2.815-.767.83-2.02 1.474-3.07 1.39-.14-1.09.43-2.24 1.14-2.94.79-.79 2.14-1.36 3.07-1.265zM20.5 17.24c-.55 1.26-.82 1.82-1.53 2.93-.99 1.55-2.39 3.48-4.13 3.5-1.53.02-1.93-.98-4.02-.97-2.09.01-2.52 1-4.05.98-1.74-.02-3.06-1.75-4.05-3.3-2.78-4.31-3.07-9.37-1.35-12.06 1.22-1.9 3.15-3.02 4.96-3.02 1.85 0 3.02 1.02 4.55 1.02 1.48 0 2.4-1.02 4.55-1.02 1.61 0 3.32.88 4.53 2.4-3.98 2.18-3.34 7.85.55 9.57z" />
      </svg>
      <span>Pay</span>
    </span>
  )
}

function GooglePayMark() {
  return (
    <span className="flex items-center text-slate-900 font-semibold" aria-hidden="true">
      <span className="font-bold">
        <span className="text-[#4285F4]">G</span>
      </span>
      <span className="ml-1">Pay</span>
    </span>
  )
}

const paymentMethods = [
  { label: "Cash", node: <Banknote className="w-6 h-6 text-emerald-600" /> },
  { label: "Google Pay", node: <GooglePayMark /> },
  { label: "Apple Pay", node: <ApplePayMark /> },
  { label: "Mastercard", node: <MastercardMark /> },
  { label: "Visa", node: <VisaMark /> },
]

export default function PaymentMethods() {
  return (
    <div className="space-y-3">
      <h4 className="text-white font-bold uppercase tracking-wider text-sm">We Accept</h4>
      <div className="flex flex-wrap items-center gap-3">
        {paymentMethods.map((method) => (
          <div
            key={method.label}
            className="flex items-center justify-center h-10 px-3.5 rounded-lg bg-white shadow-sm"
            title={method.label}
          >
            {method.node}
          </div>
        ))}
      </div>
    </div>
  )
}
