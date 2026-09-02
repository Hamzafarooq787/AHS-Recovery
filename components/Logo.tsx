import Link from "next/link"
import { LifeBuoy } from "lucide-react"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="AHS Recovery home">
      <span className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary flex-shrink-0">
        <LifeBuoy className="w-5 h-5 md:w-6 md:h-6 text-background-dark" />
      </span>
      <span className="leading-tight">
        <span className="block text-white font-black text-base md:text-lg tracking-tight">AHS Recovery</span>
        <span className="block text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Ilford, Essex
        </span>
      </span>
    </Link>
  )
}
