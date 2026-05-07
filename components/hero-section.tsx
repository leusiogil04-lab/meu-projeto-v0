"use client"

import { useEffect, useRef } from "react"
import { ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/imagens/fotogaleria7.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in">
          EP Novo Disponível
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 text-balance">
          <span className="text-primary">LEUSIO</span>
          <span className="text-foreground">GIL</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty font-serif">
          Artista e compositor moçambicano que tem conquistado o cenário musical com sua mistura única de ritmos tradicionais e contemporâneos, criando uma sonoridade cativante e autêntica.  
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Ouvir Agora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Ver Agenda
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#musica" aria-label="Rolar para baixo">
          <ChevronDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  )
}
