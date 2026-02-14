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
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Ajuste aqui: Agora a barra tem um fundo preto leve mesmo no topo 
        // para garantir visibilidade em páginas brancas
        scrolled 
          ? "bg-black shadow-2xl h-16" 
          : "bg-black/90 md:bg-black/40 h-20" // Um leve preto mesmo sem scroll
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

          {/* Desktop Navigation - Forçado text-white para contraste total */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-widest uppercase"
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
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Sempre Preto Sólido */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-black shadow-2xl rounded-b-xl",
            isOpen ? "max-h-96 pb-6 px-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white py-3 border-b border-white/5 uppercase tracking-widest"
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