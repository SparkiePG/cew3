"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function ScrollNavigation() {
  const [showNav, setShowNav] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setShowNav(scrollY > 100)
      setAtTop(scrollY < 100)
      setAtBottom(scrollY + windowHeight >= documentHeight - 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    // Temporarily disable smooth scroll behavior to prevent interception
    const html = document.documentElement
    const originalBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = "auto"

    // Force scroll to absolute top using multiple methods
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Re-enable smooth scroll after a frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalBehavior || "smooth"
    })
  }, [])

  const scrollToBottom = useCallback(() => {
    // Temporarily disable smooth scroll behavior to prevent interception
    const html = document.documentElement
    const originalBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = "auto"

    // Calculate absolute max scroll position
    const maxScroll =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
      ) - window.innerHeight

    // Force scroll to absolute bottom using multiple methods
    window.scrollTo(0, maxScroll)
    document.documentElement.scrollTop = maxScroll
    document.body.scrollTop = maxScroll

    // Re-enable smooth scroll after a frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalBehavior || "smooth"
    })
  }, [])

  return (
    <>
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        disabled={atTop}
        className={`fixed right-3 top-1/2 -translate-y-8 z-40 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${atTop ? "bg-transparent cursor-not-allowed" : "bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm"}`}
        aria-label="Scroll to top"
      >
        <ChevronUp
          className={`w-4 h-4 transition-colors ${atTop ? "text-gray-500" : "text-gray-200"}`}
          strokeWidth={2.5}
        />
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={scrollToBottom}
        disabled={atBottom}
        className={`fixed right-3 top-1/2 translate-y-2 z-40 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${atBottom ? "bg-transparent cursor-not-allowed" : "bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm"}`}
        aria-label="Scroll to bottom"
      >
        <ChevronDown
          className={`w-4 h-4 transition-colors ${atBottom ? "text-gray-500" : "text-gray-200"}`}
          strokeWidth={2.5}
        />
      </button>
    </>
  )
}
