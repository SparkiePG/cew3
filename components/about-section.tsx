import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Deep local market expertise across major metropolitan areas",
  "Transparent pricing with no hidden fees or surprises",
  "Dedicated agent assigned to your search from day one",
  "Access to off-market properties and exclusive listings",
  "Post-lease support for tenant improvements and build-outs",
  "Flexible terms and creative solutions for unique needs",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* 
              =============================================
              ABOUT SECTION IMAGE - Change image here
              =============================================
              Replace the URL with your own team or office image
            */}
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Professional team discussing commercial real estate opportunities"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">About Us</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground tracking-tight text-balance">
              Why Choose Prime Locations?
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over 12 years of experience in commercial real estate, we've built our reputation on integrity,
              market knowledge, and client-first service. We don't just find spaces—we find the right spaces that help
              businesses thrive.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of certified commercial real estate professionals combines local expertise with innovative market
              analysis tools to deliver results that exceed expectations.
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide uppercase rounded-sm transition-all hover:opacity-90 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Start Your Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
