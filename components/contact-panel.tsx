"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Focus first input when panel opens
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  /*
    =============================================
    EMAIL VALIDATION - Gmail/Yahoo only
    =============================================
    This function validates that the email is from Gmail or Yahoo
  */
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address"
    }

    const domain = email.toLowerCase().split("@")[1]
    const allowedDomains = ["gmail.com", "yahoo.com", "yahoo.co.uk", "yahoo.in"]

    if (!allowedDomains.includes(domain)) {
      return "Unsupported email address. Only Gmail and Yahoo Mail are accepted."
    }

    return undefined
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    const emailError = validateEmail(formData.email)
    if (emailError) {
      newErrors.email = emailError
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /*
    =============================================
    GOOGLE FORM INTEGRATION
    =============================================
    Connected to Google Forms with the following entry IDs:
    - Full Name: entry.1234567890
    - Email: entry.9876543210
    - Message: entry.5555555555
  */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLSdLAm9-acrTTJPZONyRtddSC1dqeLxEdlE5VtEdJQf8M-cZBQ/formResponse"

      const formBody = new FormData()
      formBody.append("entry.1234567890", formData.fullName)
      formBody.append("entry.9876543210", formData.email)
      formBody.append("entry.5555555555", formData.message)

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      })

      setIsSuccess(true)
      setFormData({ fullName: "", email: "", subject: "", message: "" })
      setErrors({})

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setIsOpen(false)
      }, 5000)
    } catch {
      setErrors({ message: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-full shadow-lg transition-all hover:opacity-90 hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open contact form"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">Contact Me</span>
      </button>

      {/* Contact Panel */}
      <div
        id="contact"
        ref={panelRef}
        className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 bg-card rounded-lg shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-panel-title"
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 id="contact-panel-title" className="font-serif text-lg text-foreground">
            Contact Me
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-muted-foreground hover:text-foreground rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close contact form"
          >
            <X size={20} />
          </button>
        </div>

        {/* Panel Content */}
        <div className="p-4 max-h-[70vh] overflow-y-auto">
          {isSuccess ? (
            /* Success State */
            <div className="py-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Ticket Created!</h3>
              <p className="text-muted-foreground text-sm">We'll get back to you within 5-7 days.</p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2.5 text-sm border rounded-sm bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.fullName ? "border-destructive" : "border-input"
                  }`}
                  placeholder="John Smith"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-1.5 text-xs text-destructive flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={12} />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2.5 text-sm border rounded-sm bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.email ? "border-destructive" : "border-input"
                  }`}
                  placeholder="you@gmail.com"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-hint email-error"
                />
                <p id="email-hint" className="mt-1 text-xs text-muted-foreground">
                  Gmail or Yahoo addresses only
                </p>
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-destructive flex items-center gap-1" role="alert">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  Subject <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2.5 text-sm border rounded-sm bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.subject ? "border-destructive" : "border-input"
                  }`}
                  placeholder="Inquiry about retail space"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-1.5 text-xs text-destructive flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={12} />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2.5 text-sm border rounded-sm bg-background transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.message ? "border-destructive" : "border-input"
                  }`}
                  placeholder="Tell us about your requirements..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-xs text-destructive flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
