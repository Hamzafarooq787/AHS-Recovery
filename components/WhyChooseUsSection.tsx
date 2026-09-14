import { MapPin, Car, Route, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: MapPin,
    title: "Based in Ilford",
    description:
      "Our location helps us serve drivers across Ilford, Redbridge, East London and nearby parts of Essex.",
  },
  {
    icon: Car,
    title: "Recovery for Different Vehicles",
    description:
      "Our car and van recovery service covers many vehicle types, including cars, vans, 4x4s, non-running vehicles and certain larger vehicles.",
  },
  {
    icon: Route,
    title: "Local and Nationwide Coverage",
    description:
      "Local vehicle recovery is available within approximately 60 miles of Ilford. Nationwide coverage is offered for breakdown recovery and vehicle transportation.",
  },
  {
    icon: ShieldCheck,
    title: "Careful Vehicle Handling",
    description:
      "Each vehicle is assessed before loading. We choose a suitable recovery method based on its size, condition, position and destination.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Why Choose Us?</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
            A Local Vehicle Recovery Company Ready to Help
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Choosing a vehicle recovery company in Ilford is not only about finding a recovery truck. Your provider
            must understand the condition of the vehicle, use the correct loading method and communicate clearly
            throughout the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
