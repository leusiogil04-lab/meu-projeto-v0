"use client"

import { useEffect, useRef, useState } from "react"
import { Mic2, GraduationCap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: Mic2,
      title: "Live Music & Performance",
      description: "Professional live performances that blend traditional rhythms with modern soul, creating an unforgettable atmosphere.",
      tag: "Experience",
    },
    {
      icon: GraduationCap,
      title: "Cultural Workshops",
      description: "Intercultural learning through music, dance, and storytelling. Deep dives into the heritage and heartbeat of Africa.",
      tag: "Education",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-40 bg-background overflow-hidden"
    >
      {/* Background Image com Máscara Complexa */}
      <div 
        className="absolute inset-0 z-0 opacity-30 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
        style={{
          backgroundImage: "url('/imagens/fundo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Overlay de gradiente para dar profundidade e foco ao texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna de Texto (Sticky no Desktop) */}
          <div className={cn(
            "lg:col-span-5 lg:sticky lg:top-40 transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full">
               <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Expertise
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-foreground leading-[1.1]">
              Services & <br /> <span className="text-primary italic">Impact</span>
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-md">
              Bridging continents through artistic expression. Each performance and workshop is a deliberate step toward global cultural harmony.
            </p>
            
            <div className="mt-10 hidden lg:block">
               <div className="w-24 h-[1px] bg-primary/50" />
            </div>
          </div>

          {/* Coluna de Cards Assímétricos */}
          <div className="lg:col-span-7 space-y-12 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "relative group transition-all duration-1000 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  index % 2 !== 0 ? "lg:ml-20" : "lg:mr-20"
                )}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Card com efeito Glassmorphism */}
                <div className="relative z-10 p-8 md:p-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/40 transition-colors duration-500 overflow-hidden shadow-2xl">
                  {/* Numero decorativo no fundo */}
                  <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.02] select-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Sombra de destaque atrás do card */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}