"use client"

import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* 
        =============================================
        BACKGROUND IMAGE - Change image here
        =============================================
        Replace the URL below with your own image.
        Recommended: High-quality architectural/commercial building image
        Ideal size: 1920x1080 or larger
      */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Modern commercial building with glass facade"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1
          className="font-serif text-white leading-tight tracking-tight text-balance"
          style={{ fontSize: "clamp(2rem, 5vw + 1rem, 4.5rem)", marginBottom: "clamp(1rem, 3vh, 1.5rem)" }}
        >
          Find your next business
          <br />
          <span className="text-primary">location with us.</span>
        </h1>
      </div>

      {/* Scroll Indicator - Fluid positioning */}
      <div
        className="absolute left-1/2 -translate-x-1/2 animate-bounce"
        style={{ bottom: "clamp(1.5rem, 4vh, 2.5rem)" }}
      >
        <a
          href="#companies"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="Scroll to companies section"
        >
          <span className="uppercase tracking-widest" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)" }}>
            Scroll
          </span>
          <ArrowDown style={{ width: "clamp(16px, 2vw, 20px)", height: "clamp(16px, 2vw, 20px)" }} />
        </a>
      </div>
    </section>
  )
}
