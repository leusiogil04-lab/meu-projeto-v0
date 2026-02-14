"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
// CORREÇÃO DO CAMINHO: Subimos um nível para entrar na pasta 'app'
import { useLanguage } from "../app/LanguageContext"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Consumindo o contexto global de idioma
  const { lang, t, toggleLang } = useLanguage();

  // Mapeamento dos links usando as traduções globais
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/press/", label: t.nav.press }, 
    { href: "/media/", label: t.nav.media }, 
    { href: "/#events", label: t.nav.events },
    { href: "/#contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-widest uppercase">
                {link.label}
              </Link>
            ))}
            
            {/* Botão de Troca Global */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 text-[10px] font-bold text-white border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition-all"
            >
              <Globe className="w-3 h-3" />
              {lang.toUpperCase()}
            </button>
          </div>

          <button type="button" className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300 bg-black shadow-2xl rounded-b-xl", isOpen ? "max-h-96 pb-6 px-4" : "max-h-0")}>
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-bold text-white py-3 border-b border-white/5 uppercase tracking-widest" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="text-sm font-bold text-white py-3 uppercase tracking-widest text-left flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> 
              {lang === "en" ? "Mudar para Português" : "Switch to English"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}