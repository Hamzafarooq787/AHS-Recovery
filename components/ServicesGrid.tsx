import ServiceCard from "./ServiceCard"
import { services } from "@/lib/site-config"
import { serviceIcons } from "@/lib/service-icons"

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-14">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
              image={service.image}
              icon={serviceIcons[service.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
