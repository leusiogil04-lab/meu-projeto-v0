"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
// Importação do hook de idioma
import { useLanguage } from "../app/LanguageContext"

const portfolioItems = [
  {
    id: 1,
    title: "EP Clamor",
    category: "Performance",
    image: "/imagens/performance.jpg",
  },
  {
    id: 2,
    title: "Kuwala Band",
    category: "Social Projects",
    image: "/imagens/kuwala.jpg",
  },
  {
    id: 3,
    title: "Cultural Bridge Workshop",
    category: "Education",
    image: "/imagens/worshopsantos.jpg",
  },
  {
    id: 4,
    title: "Documentary",
    category: "Project",
    image: "/imagens/horizontal02leusiogil.jpg",
  },
  {
    id: 5,
    title: "MOVE Concert",
    category: "Performance",
    image: "/imagens/nopianoleusio.jpg",
  },
  {
    id: 6,
    title: "Rhythm & Roots Workshop",
    category: "Education",
    image: "/imagens/workshopraizes.jpg",
  },
]

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Ativando as traduções
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Tradução: Badge Portfolio */}
          <span className="text-white text-sm font-medium tracking-widest uppercase opacity-70">
            {t.portfolio.badge}
          </span>
          {/* Tradução: Título Selected Works */}
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            {t.portfolio.title}
          </h2>
          {/* Tradução: Descrição do portfólio */}
          <p className="mt-6 text-white/70 leading-relaxed">
            {t.portfolio.desc}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => {
            const projectSlug = item.title
              .toLowerCase()
              .replace(/&/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-")

            return (
              <Link 
                key={item.id} 
                href={`/projetos/${projectSlug}`}
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-1000 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    <span className="text-white text-xs font-medium tracking-widest uppercase opacity-80">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-white font-serif text-lg md:text-xl font-medium">
                      {item.title}
                    </h3>
                    {/* Tradução: Botão View Project */}
                    <div className="mt-4 inline-block px-4 py-2 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                      {t.portfolio.view}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}