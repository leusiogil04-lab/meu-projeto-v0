"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-y-12"
            )}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              About
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Biography
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Mozambican artist, pianist and composer born in Maputo, Mozambique. Leusio Gil's artistic work is rooted in African musical traditions and shaped by contemporary influences such as Jazz.
              </p>
              <p>
                Through live performances and collaborative projects, Leusio explores music as a shared human experience. He is also involved in educational and cultural initiatives, using music as a tool for intercultural exchange.
              </p>
              <p>
                Exposed to and inspired by artists such as Moreira Chonguiça, Richard Bona, Assa Matusse and Albino Mbie, Leusio develops contemporary compositions that bridge tradition and modernity. As an independent artist, Leusio is also an educator and cultural facilitator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}