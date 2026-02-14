"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
// Importamos o tradutor global
import { useLanguage } from "../app/LanguageContext"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  // Puxamos as traduções (t) do contexto
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/imagens/horizontal02leusiogil.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-tight">
            Leusio Gil
          </h1>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Usamos a tradução do subtitle definida no contexto */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide">
            {t.hero.subtitle}
          </p>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Criaremos esta chave 'description' no LanguageContext em seguida */}
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            {t.hero.cta}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-5 h-5 text-white/70" />
        </Link>
      </div>
    </section>
  )
}