"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const events = [
  {
    id: 1,
    title: "EP Clamor",
    date: "April 11, 2026",
    location: "Tatuí, São Paulo",
    type: "Show",
  },
]

export function EventsSection() {
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
      id="events"
      ref={sectionRef}
      // MUDANÇA: Adicionado relative, overflow-hidden e um gradiente sutil
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* ELEMENTOS DE FUNDO MINIMALISTAS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente Radial para foco central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.03),transparent_70%)]" />
        
        {/* Linhas de Grade (Grid) muito suaves */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Events
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Upcoming Experiences
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Join me at upcoming performances, workshops, and festivals around the world.
          </p>
        </div>

        <div className="mt-16 space-y-0">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                // MUDANÇA: Adicionado hover:bg-muted/30 para um efeito interativo leve
                "group py-6 border-b border-border first:border-t transition-all duration-1000 ease-out hover:bg-primary/[0.01] px-4 -mx-4 rounded-sm",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-primary text-xs font-medium tracking-widest uppercase">
                    {event.type}
                  </span>
                  <h3 className="mt-1 font-serif text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-12 text-center transition-all duration-1000 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 bg-transparent"
          >
            Book a Show
          </Link>
        </div>
      </div>
    </section>
  )
}