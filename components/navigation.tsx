"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/press", label: "Press" }, 
    { href: "/media", label: "Media" }, 
    { href: "/#events", label: "Events" },
    { href: "/#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para disparar a tradução através dos botões personalizados
  const handleTranslate = (lang: string) => {
    if (typeof window !== 'undefined' && (window as any).changeLanguage) {
      (window as any).changeLanguage(lang);
    }
    if (isOpen) setIsOpen(false); // Fecha o menu mobile ao trocar idioma
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black shadow-2xl h-16" : "bg-black/90 md:bg-black/40 h-20"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-xl font-serif font-semibold text-white tracking-wide hover:opacity-80 transition-opacity">
            Leusio Gil
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-widest uppercase">
                {link.label}
              </Link>
            ))}
            
            {/* SELETOR DE IDIOMA EN | PT (Desktop) */}
            <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-4 font-sans">
              <button 
                onClick={() => handleTranslate('en')}
                className="text-[10px] tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity uppercase text-white"
              >
                EN
              </button>
              <span className="opacity-20 text-[10px] text-white">|</span>
              <button 
                onClick={() => handleTranslate('pt')}
                className="text-[10px] tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity uppercase text-white"
              >
                PT
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            {/* SELETOR DE IDIOMA EN | PT (Mobile) */}
            <div className="flex items-center gap-2 border border-white/20 px-2 py-1 rounded">
              <button onClick={() => handleTranslate('en')} className="text-[10px] font-bold text-white uppercase">EN</button>
              <span className="opacity-20 text-[10px] text-white">|</span>
              <button onClick={() => handleTranslate('pt')} className="text-[10px] font-bold text-white uppercase">PT</button>
            </div>
            
            <button type="button" className="p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 bg-black shadow-2xl", 
          isOpen ? "max-h-[500px] pb-6 px-6" : "max-h-0"
        )}>
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