"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#footer", label: "Contact" },
    { href: "#companies", label: "About" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full" style={{ paddingInline: "clamp(1rem, 5vw, 5rem)" }}>
        <div className="flex items-center justify-between" style={{ height: "clamp(3.5rem, 8vh, 5rem)" }}>
          {/* 
            =============================================
            HEADER LOGO - Replace image in /public/logos/header-logo.jpg
            =============================================
          */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className="relative overflow-hidden rounded transition-transform group-hover:scale-105"
              style={{
                width: "clamp(2.5rem, 4vw, 3.5rem)",
                height: "clamp(2.5rem, 4vw, 3.5rem)",
              }}
            >
              <Image src="/logos/header-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" priority />
            </div>
            <span
              className={`font-serif font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              DGrealtor
            </span>
          </a>

          <nav className="flex items-center" style={{ gap: "clamp(1.5rem, 4vw, 3rem)" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium tracking-wide transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded ${
                  isScrolled ? "text-muted-foreground" : "text-white/90"
                }`}
                style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.1rem)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
