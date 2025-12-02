import { Building2, MapPin, FileSearch, Handshake } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Property Search",
    description:
      "Access our extensive database of commercial properties. From retail storefronts to corporate offices, we find spaces that match your vision.",
  },
  {
    icon: MapPin,
    title: "Location Analysis",
    description:
      "In-depth market research and demographic analysis to ensure your business thrives in its new location. Data-driven decisions for lasting success.",
  },
  {
    icon: FileSearch,
    title: "Lease Negotiation",
    description:
      "Expert negotiation to secure favorable terms. We advocate for your interests, ensuring transparent and fair lease agreements.",
  },
  {
    icon: Handshake,
    title: "Full-Service Support",
    description:
      "From initial consultation to final walkthrough, we're with you every step. Comprehensive support that goes beyond the transaction.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">What We Do</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight text-balance">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Comprehensive commercial real estate solutions tailored to your business needs. We simplify the complex.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group p-6 sm:p-8 bg-background rounded-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon
                  className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

              {/* Decorative line */}
              <div className="mt-6 w-8 h-0.5 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
