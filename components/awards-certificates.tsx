"use client"

/**
 * =====================================================
 * AWARDS AND CERTIFICATES CONFIGURATION
 * =====================================================
 *
 * Simply add text items to the arrays below.
 * - If you add only 1 item, it will repeat across all visible slots
 * - As you add more items, they automatically appear in sequence
 * - No limit on how many items you can add!
 *
 * =====================================================
 */

const awards = [
  "Excellence in Real Estate",
  "Top 100 Realtors",
  "Client Choice Award",
  "Best Commercial Agent 2024",
  "Service Award",
  "Industry Leadership",
  "Innovation Award 2023",
  "Market Excellence",
  "Professional Excellence",
  "Community Impact",
  "Rising Star Award",
  "Regional Top Agent",
]

const certificates = [
  "Commercial Appraisal",
  "Licensed Commercial Agent",
  "Property Management Cert.",
  "Real Estate Investment",
  "Market Analysis",
  "Valuation Expert",
  "Legal Compliance",
  "Negotiation Specialist",
  "Business Development",
  "Financial Analysis",
  "Property Law",
  "Risk Management",
]

// Minimum items for smooth scrolling
const MIN_ITEMS = 6

function InfiniteScrollRow({
  items,
  direction = "left",
  speed = "normal",
}: {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
}) {
  // Ensure enough items for smooth infinite scroll
  const getDisplayItems = () => {
    if (items.length === 0) return []
    if (items.length === 1) {
      return Array(MIN_ITEMS).fill(items[0])
    }
    let displayItems = [...items]
    while (displayItems.length < MIN_ITEMS) {
      displayItems = [...displayItems, ...items]
    }
    return displayItems
  }

  const displayItems = getDisplayItems()
  const animationClass = direction === "left" ? "infinite-scroll-left" : "infinite-scroll-right"
  const speedClass = speed === "slow" ? "scroll-slow" : speed === "fast" ? "scroll-fast" : ""

  const renderItem = (item: string, index: number, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="infinite-scroll-item flex-shrink-0 border border-white/30 rounded-sm flex items-center justify-center hover:bg-white/10 transition-all"
      style={{
        width: "clamp(100px, 12vw, 150px)",
        height: "clamp(70px, 8vw, 100px)",
        padding: "clamp(0.25rem, 0.5vw, 0.5rem)",
        marginInline: "clamp(0.25rem, 0.5vw, 0.5rem)",
      }}
    >
      <span
        className="text-center leading-tight font-semibold text-white/90"
        style={{ fontSize: "clamp(0.55rem, 1vw, 0.8rem)" }}
      >
        {item}
      </span>
    </div>
  )

  return (
    <div className="infinite-scroll-container">
      <div className={`infinite-scroll-track ${animationClass} ${speedClass}`}>
        {displayItems.map((item, index) => renderItem(item, index, "a"))}
        {displayItems.map((item, index) => renderItem(item, index, "b"))}
      </div>
    </div>
  )
}

export default function AwardsCertificates() {
  return (
    <section
      id="awards"
      className="overflow-hidden w-full"
      style={{
        backgroundColor: "#818380",
        paddingBlock: "clamp(3rem, 6vh, 5rem)",
      }}
    >
      <div className="w-full" style={{ paddingInline: "clamp(1rem, 5vw, 5rem)" }}>
        <h2
          className="font-serif text-center text-white"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            marginBottom: "clamp(2rem, 4vh, 3rem)",
          }}
        >
          Awards and Certificates
        </h2>

        <div
          className="flex flex-col md:flex-row justify-center items-stretch"
          style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          {/* Awards Column */}
          <div className="flex flex-col items-center w-full md:w-[48%]">
            <h3
              className="font-serif text-white text-center w-full"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                marginBottom: "clamp(1.5rem, 3vh, 2rem)",
              }}
            >
              Award
            </h3>
            <div className="w-full flex flex-col" style={{ gap: "clamp(0.75rem, 1.5vh, 1.25rem)" }}>
              <InfiniteScrollRow items={awards.slice(0, 4)} direction="right" />
              <InfiniteScrollRow items={awards.slice(4, 8)} direction="left" speed="slow" />
              <InfiniteScrollRow items={awards.slice(8, 12)} direction="right" speed="fast" />
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden md:block self-stretch flex-shrink-0"
            style={{ width: "2px", backgroundColor: "#D9D9D9", marginInline: "clamp(0.5rem, 2vw, 2rem)" }}
          />
          <div
            className="md:hidden w-3/4 mx-auto"
            style={{ height: "2px", backgroundColor: "#D9D9D9", marginBlock: "clamp(0.5rem, 2vh, 1rem)" }}
          />

          {/* Certificates Column */}
          <div className="flex flex-col items-center w-full md:w-[48%]">
            <h3
              className="font-serif text-white text-center w-full"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                marginBottom: "clamp(1.5rem, 3vh, 2rem)",
              }}
            >
              Certificates
            </h3>
            <div className="w-full flex flex-col" style={{ gap: "clamp(0.75rem, 1.5vh, 1.25rem)" }}>
              <InfiniteScrollRow items={certificates.slice(0, 4)} direction="left" />
              <InfiniteScrollRow items={certificates.slice(4, 8)} direction="right" speed="slow" />
              <InfiniteScrollRow items={certificates.slice(8, 12)} direction="left" speed="fast" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
