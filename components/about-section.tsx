"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
// Importamos o hook de idioma
import { useLanguage } from "../app/LanguageContext"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Ativamos as traduções
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
              <Image
                src="/imagens/fotobioleusiogil.jpg"
                alt="Leusio Gil - Musician and Composer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary -z-10" />
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            {/* Tradução: About */}
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              {t.about.badge}
            </span>
            {/* Tradução: Biography */}
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              {t.about.title}
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              {/* Tradução: Parágrafos da Bio */}
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}