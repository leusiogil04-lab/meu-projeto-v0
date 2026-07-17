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
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/imagens/fotogaleria7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay adaptável ao tema */}
      <div className="absolute inset-0 z-[1] bg-white/30 dark:bg-black/70" />

      {/* Gradiente adaptável ao tema */}
      <div
        className="
          absolute inset-0 z-[2]
          bg-gradient-to-b
          from-white/70
          via-white/20
          to-white/80
          dark:from-black/80
          dark:via-black/50
          dark:to-black/90
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div
          className="
            max-w-4xl
            rounded-3xl
            bg-white/70
            dark:bg-black/30
            backdrop-blur-md
            border
            border-black/10
            dark:border-white/10
            p-8
            md:p-12
            text-center
            shadow-2xl
          "
        >
          <span className="mb-6 inline-block text-primary text-sm md:text-base uppercase tracking-[0.35em] font-medium">
            Show Clamor Disponível
          </span>

          <h1
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              tracking-tight
              mb-6
              text-black
              dark:text-white
            "
          >
            <span className="text-primary">LEUSIO</span>{" "}
            <span className="text-black dark:text-white">GIL</span>
          </h1>

          <p
            className="
              text-black/80
              dark:text-white/90
              text-lg
              md:text-xl
              leading-relaxed
              max-w-3xl
              mx-auto
              mb-10
              font-serif
            "
          >
            Artista, Compositor e Pianista moçambicano que tranforma as tradições
           musicais de Moçambique em uma experiência contemporânea, sofisticada e cheia de identidade.
           
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="
                bg-primary
                text-primary-foreground
                hover:bg-primary/90
                px-8
                py-6
                text-lg
                font-semibold
                uppercase
                tracking-wider
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <Play className="mr-2 h-5 w-5" />
              Ouvir Agora
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
                border-black/20
                dark:border-white/40
                bg-white/40
                dark:bg-white/10
                backdrop-blur-sm
                text-black
                dark:text-white
                hover:bg-white/60
                dark:hover:bg-white/20
                px-8
                py-6
                text-lg
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Ver Agenda
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#musica" aria-label="Rolar para baixo">
          <ChevronDown className="h-8 w-8 text-black dark:text-white" />
        </a>
      </div>
    </section>
  )
}