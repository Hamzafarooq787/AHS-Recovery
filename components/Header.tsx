"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import Logo from "./Logo"
import { services, siteConfig } from "@/lib/site-config"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setMobileServicesOpen(false)
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full px-6 md:px-20 lg:px-40 py-3 md:py-4 h-[64px] md:h-[72px] transition-colors duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-white/10 bg-background-dark/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1280px] mx-auto h-full">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 py-2"
              href="/services"
            >
              Services
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </Link>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-background-dark border border-white/10 rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 hover:text-primary transition-colors"
                    >
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/gallery">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contact">
            Contact Us
          </Link>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="bg-primary text-background-dark px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phoneDisplay}
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="mobile-menu"
            className="fixed top-[64px] left-0 right-0 bottom-0 overflow-y-auto bg-background-dark border-b border-white/10 z-40 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="/"
                className="text-base font-medium text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-b border-white/10">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-base font-medium text-white hover:text-primary transition-colors py-3"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-3 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block text-sm text-gray-300 hover:text-primary transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/gallery"
                className="text-base font-medium text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-white hover:text-primary transition-colors py-3 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-primary text-background-dark px-6 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2 hover:brightness-110 transition-all mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
