import Link from "next/link"
import Image from "next/image"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  image?: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, href, image, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="relative px-4 pt-4">
        <div className="relative h-48 rounded-xl overflow-hidden bg-slate-100">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md ring-4 ring-white">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="pt-10 pb-8 px-8 space-y-3">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all pt-1">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
