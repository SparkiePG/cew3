"use client"

import Image from "next/image"

/*
 * =============================================================================
 * COMPANY LOGOS CONFIGURATION
 * =============================================================================
 *
 * Simply add or remove company logos from the array below.
 * Each item needs:
 * - name: Company name (used for alt text)
 * - logo: Path to the logo image in /public folder
 *
 * Minimum: 1 logo | Maximum: Unlimited
 *
 * =============================================================================
 */

const companies = [
  { name: "TechCorp", logo: "/company-logos/techcorp-logo.jpg" },
  { name: "BuildRight", logo: "/company-logos/buildright-logo.jpg" },
  { name: "Metro Solutions", logo: "/company-logos/metro-solutions-logo.jpg" },
  { name: "Urban Spaces", logo: "/company-logos/urban-spaces-logo.jpg" },
  { name: "Prime Ventures", logo: "/company-logos/prime-ventures-logo.jpg" },
  { name: "Global Assets", logo: "/company-logos/global-assets-logo.jpg" },
]

// Ensures enough items to fill the screen for seamless loop (minimum 8 for visual continuity)
const MIN_ITEMS_FOR_LOOP = 8

export default function CompaniesCarousel() {
  const getDisplayItems = () => {
    if (companies.length === 0) return []

    // If only 1 company, repeat it to fill the carousel
    if (companies.length === 1) {
      return Array(MIN_ITEMS_FOR_LOOP).fill(companies[0])
    }

    // Duplicate array until we have enough items for smooth scrolling
    let items = [...companies]
    while (items.length < MIN_ITEMS_FOR_LOOP) {
      items = [...items, ...companies]
    }
    return items
  }

  const displayItems = getDisplayItems()

  return (
    <section
      id="companies"
      className="overflow-hidden w-full"
      style={{
        backgroundColor: "#f0efe7",
        paddingBlock: "clamp(3rem, 6vh, 5rem)",
        scrollMarginTop: "clamp(3.5rem, 8vh, 5rem)",
      }}
    >
      <div className="w-full" style={{ paddingInline: "clamp(1rem, 5vw, 5rem)" }}>
        <div className="flex justify-center" style={{ marginBottom: "clamp(2rem, 5vh, 3rem)" }}>
          <h2
            className="font-serif text-foreground italic tracking-wide"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Company worked with
          </h2>
        </div>
      </div>

      <div className="w-full infinite-scroll-container">
        <div className="infinite-scroll-track infinite-scroll-right scroll-slower flex items-center">
          {/* First set of items */}
          {displayItems.map((company, index) => (
            <div
              key={`a-${index}`}
              className="infinite-scroll-item flex items-center justify-center flex-shrink-0"
              style={{
                width: "clamp(140px, 15vw, 220px)",
                height: "clamp(70px, 8vw, 110px)",
                marginInline: "clamp(1rem, 2vw, 2rem)",
              }}
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={200}
                height={100}
                className="w-full h-full object-contain grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {displayItems.map((company, index) => (
            <div
              key={`b-${index}`}
              className="infinite-scroll-item flex items-center justify-center flex-shrink-0"
              style={{
                width: "clamp(140px, 15vw, 220px)",
                height: "clamp(70px, 8vw, 110px)",
                marginInline: "clamp(1rem, 2vw, 2rem)",
              }}
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={200}
                height={100}
                className="w-full h-full object-contain grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
