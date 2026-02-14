"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/press/", label: "Press" }, 
  { href: "/media/", label: "Media" }, 
  { href: "/#events", label: "Events" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Mudado de bg-black/80 para bg-black puro para o efeito Dark total
        scrolled 
          ? "bg-black shadow-2xl border-b border-white/10 h-16" 
          : "bg-transparent h-20"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-white tracking-wide hover:opacity-80 transition-opacity"
          >
            Leusio Gil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white/90 hover:text-white transition-colors duration-200 tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Também ajustado para preto sólido */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-black rounded-b-2xl shadow-2xl",
            isOpen ? "max-h-96 pb-6 px-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-primary py-3 border-b border-white/5 uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}