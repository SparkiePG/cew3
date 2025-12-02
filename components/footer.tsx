import { MapPin, Mail } from "lucide-react"
import Image from "next/image"

/*
  =============================================
  FOOTER CONFIGURATION - Easy to edit
  =============================================
  EMAIL: Change the email address below
  ADDRESS: Change the address text below
  LOGO: Replace image in /public/logos/footer-logo.jpg
  =============================================
*/
const FOOTER_CONFIG = {
  companyName: "DGrealtor",
  email: "DGrealtor@mail.in",
  address: {
    line1: "123 Business District",
    line2: "New York, NY 10001",
  },
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-foreground text-background">
      <div
        className="w-full"
        style={{
          paddingInline: "clamp(1rem, 5vw, 5rem)",
          paddingBlock: "clamp(2.5rem, 6vh, 4rem)",
        }}
      >
        {/* Mobile Layout (< 640px) */}
        <div className="flex flex-col gap-6 sm:hidden">
          {/* Mobile: Logo and Company Name side by side at top */}
          <div className="flex items-center justify-center" style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}>
            <div
              className="relative overflow-hidden rounded"
              style={{
                width: "clamp(2.5rem, 5vw, 3rem)",
                height: "clamp(2.5rem, 5vw, 3rem)",
              }}
            >
              <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-semibold" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}>
              {FOOTER_CONFIG.companyName}
            </span>
          </div>

          {/* Mobile: Email section */}
          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-2 mb-1" style={{ fontSize: "0.85rem" }}>
              <Mail size={14} className="text-primary" />
              Email
            </p>
            <a
              href={`mailto:${FOOTER_CONFIG.email}`}
              className="text-background/80 hover:text-primary transition-colors"
              style={{ fontSize: "0.8rem" }}
            >
              {FOOTER_CONFIG.email}
            </a>
          </div>

          {/* Mobile: Address section */}
          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-2 mb-1" style={{ fontSize: "0.85rem" }}>
              <MapPin size={14} className="text-primary" />
              Address
            </p>
            <p className="text-background/80 leading-relaxed" style={{ fontSize: "0.8rem" }}>
              {FOOTER_CONFIG.address.line1}
              <br />
              {FOOTER_CONFIG.address.line2}
            </p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:flex lg:hidden flex-col gap-6">
          {/* Tablet: Top row - Logo and Company Name (bigger) */}
          <div className="flex items-center" style={{ gap: "clamp(1rem, 2.5vw, 1.25rem)" }}>
            <div
              className="relative overflow-hidden rounded"
              style={{
                width: "clamp(3.5rem, 6vw, 4.5rem)",
                height: "clamp(3.5rem, 6vw, 4.5rem)",
              }}
            >
              <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-semibold" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              {FOOTER_CONFIG.companyName}
            </span>
          </div>

          {/* Tablet: Bottom row - Address left, Email right */}
          <div className="flex items-end justify-between" style={{ marginTop: "clamp(0.5rem, 2vh, 1rem)" }}>
            {/* Address - Left Side */}
            <div>
              <p
                className="font-semibold flex items-center"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  marginBottom: "0.5rem",
                  gap: "0.5rem",
                }}
              >
                <MapPin size={16} className="text-primary" />
                Address
              </p>
              <p
                className="text-background/80 leading-relaxed pl-6"
                style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)" }}
              >
                {FOOTER_CONFIG.address.line1}
                <br />
                {FOOTER_CONFIG.address.line2}
              </p>
            </div>

            {/* Email - Right Side */}
            <div className="text-right">
              <p
                className="font-semibold flex items-center justify-end"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  marginBottom: "0.5rem",
                  gap: "0.5rem",
                }}
              >
                <Mail size={16} className="text-primary" />
                Email
              </p>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-background/80 hover:text-primary transition-colors"
                style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)" }}
              >
                {FOOTER_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className="hidden lg:flex lg:flex-row lg:items-end lg:justify-between"
          style={{ gap: "clamp(2rem, 5vw, 3rem)" }}
        >
          {/* Left Side - Logo, Name, and Address */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.25rem, 3vh, 1.75rem)" }}>
            <div className="flex items-center" style={{ gap: "clamp(0.75rem, 1.5vw, 1.25rem)" }}>
              <div
                className="relative overflow-hidden rounded"
                style={{
                  width: "clamp(3rem, 4vw, 4.5rem)",
                  height: "clamp(3rem, 4vw, 4.5rem)",
                }}
              >
                <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-semibold" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                {FOOTER_CONFIG.companyName}
              </span>
            </div>

            <div style={{ paddingTop: "clamp(0.25rem, 1vh, 0.5rem)" }}>
              <p
                className="font-semibold flex items-center"
                style={{
                  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                  marginBottom: "clamp(0.5rem, 1vh, 0.75rem)",
                  gap: "clamp(0.4rem, 0.75vw, 0.5rem)",
                }}
              >
                <MapPin
                  style={{ width: "clamp(14px, 1.2vw, 18px)", height: "clamp(14px, 1.2vw, 18px)" }}
                  className="text-primary"
                />
                Address
              </p>
              <p
                className="text-background/80 leading-relaxed"
                style={{ fontSize: "clamp(0.8rem, 1.1vw, 1rem)", paddingLeft: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                {FOOTER_CONFIG.address.line1}
                <br />
                {FOOTER_CONFIG.address.line2}
              </p>
            </div>
          </div>

          {/* Right Side - Email */}
          <div className="text-right" style={{ paddingBottom: "clamp(0.25rem, 1vh, 0.5rem)" }}>
            <div className="flex flex-col items-end" style={{ gap: "clamp(0.4rem, 1vh, 0.5rem)" }}>
              <p
                className="font-semibold flex items-center"
                style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", gap: "clamp(0.4rem, 0.75vw, 0.5rem)" }}
              >
                <Mail
                  style={{ width: "clamp(14px, 1.2vw, 18px)", height: "clamp(14px, 1.2vw, 18px)" }}
                  className="text-primary"
                />
                Email
              </p>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-background/80 hover:text-primary transition-colors"
                style={{ fontSize: "clamp(0.8rem, 1.1vw, 1rem)" }}
              >
                {FOOTER_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Centered on all screen sizes */}
        <div
          style={{
            marginTop: "clamp(2rem, 5vh, 3rem)",
            paddingTop: "clamp(1rem, 2.5vh, 1.5rem)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-background/50 text-center" style={{ fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)" }}>
            © {new Date().getFullYear()} {FOOTER_CONFIG.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
