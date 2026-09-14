import { Star } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  location: string
}

// TODO: Replace these placeholder entries with real customer reviews before launch
// (e.g. copied from Google Reviews, with the customer's permission).
const testimonials: Testimonial[] = [
  {
    quote: "Add your customer's own words here — what happened, and how AHS Recovery helped.",
    name: "Customer Name",
    location: "Ilford, Essex",
  },
  {
    quote: "Add your customer's own words here — what happened, and how AHS Recovery helped.",
    name: "Customer Name",
    location: "Essex",
  },
  {
    quote: "Add your customer's own words here — what happened, and how AHS Recovery helped.",
    name: "Customer Name",
    location: "London",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="px-6 md:px-20 lg:px-40 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Reviews</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">What Our Customers Say</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Real feedback from people we&apos;ve helped on the roadside and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-slate-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
