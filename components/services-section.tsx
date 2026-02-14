"use client"

import { useEffect, useRef, useState } from "react"
import { Mic2, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
// Importamos o hook de idioma
import { useLanguage } from "../app/LanguageContext"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Ativamos as traduções
  const { t } = useLanguage()

  // Mapeamos os serviços usando as traduções do contexto
  const services = [
    {
      icon: Mic2,
      title: t.services.s1_title,
      description: t.services.s1_desc,
    },
    {
      icon: GraduationCap,
      title: t.services.s2_title,
      description: t.services.s2_desc,
    },
  ]

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
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Glow minimalista azul claro */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Tradução: Badge "What I Do" */}
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            {t.services.badge}
          </span>
          {/* Tradução: Título "Creative Services" */}
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            {t.services.title}
          </h2>
          {/* Tradução: Descrição geral */}
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t.services.desc}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group text-center p-8 transition-all duration-1000 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}