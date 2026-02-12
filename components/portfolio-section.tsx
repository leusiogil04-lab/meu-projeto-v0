"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link" // Importado para permitir a navegação
import { cn } from "@/lib/utils"

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
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Selected Works
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A curated collection of performances, compositions, and educational 
            projects from around the world.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link 
              key={item.id} 
              // Cria um link dinâmico baseado no título: "EP Clamor" vira "/projetos/ep-clamor"
              href={`/projetos/${item.title.toLowerCase().replace(/ /g, "-")}`}
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
              
              {/* Overlay que aparece no Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <span className="text-primary text-xs font-medium tracking-widest uppercase">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-white font-serif text-lg md:text-xl font-medium">
                    {item.title}
                  </h3>
                  <div className="mt-4 inline-block px-4 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    View Project
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}