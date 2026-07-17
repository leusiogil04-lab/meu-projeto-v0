"use client"

import { Download, Instagram, Youtube, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/leusiogil7/",
    label: "Instagram",
  },

  {
    icon: Youtube,
    href: "https://www.youtube.com/@leusiogil7",
    label: "YouTube",
  },

  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100079218982670",
    label: "Facebook",
  },

  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/leusio-gil-b9a111253/",
    label: "LinkedIn",
  },
]

const pressPhotos = [
  "/imagens/divulga1.jpg",
  "/imagens/divulga2.jpg",
  "/imagens/divulga5.jpg",
]

export function EPKSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">
            Electronic Press Kit
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Sobre o Artista
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Biography */}
          <div>

            {/* Main Image */}
            <div className="relative mb-8">
              <img
                src="/imagens/horizontal02leusiogil.jpg"
                alt="Leusio Gil - Artista"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
            </div>

            {/* Biography */}
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Biografia
            </h3>

            <div className="space-y-4 text-muted-foreground font-serif leading-relaxed">

              <p>
                Leusio Gil é um artista, compositor e pianista de Moçambique
                nascido na cidade de Maputo. Apaixonado pela música tradicional africana,
                ele combina elementos culturais com influências contemporâneas.
              </p>

              <p>
                Leusio tem se destacado como uma das vozes mais promissoras da nova geração
                de músicos africanos e pelos arranjos musicais sufisticados do jazz.
              </p>

              <p>
                O seu EP e show de estreia, "Clamor", foi lançado em 2026.
                Desde então, apresentou performances memoráveis em
                espaços culturais e comunidades do Brasil.
              </p>

              <p>
                Participou de intercâmbio cultural no Brasil,
                iniciando sua carreira internacional e promovendo
                diversidade cultural através da música.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10">

              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Redes Sociais
              </h4>

              <div className="flex gap-4">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Press Materials */}
          <div className="space-y-8">

            <div className="bg-card rounded-2xl p-8 border border-border">

              <h3 className="text-xl font-bold mb-6 text-foreground">
                Materiais para Imprensa
              </h3>

              {/* Photos */}
              <div className="mb-8">

                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Fotos de Alta Resolução
                </h4>

                <div className="grid grid-cols-3 gap-3">

                  {pressPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden"
                    >
                      <img
                        src={photo}
                        alt={`Press photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Download Photos */}
                <a
                  href="/leusiogilpress.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-primary text-primary hover:bg-primary/10"
                  >
                    <Download className="mr-2 h-4 w-4" />

                    Download Pack de Fotos
                  </Button>
                </a>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">

                <h4 className="text-sm uppercase tracking-wider text-muted-foreground">
                  Informações Rápidas
                </h4>

                <div className="grid grid-cols-2 gap-4 text-sm">

                  <div>
                    <span className="text-muted-foreground block">
                      Género
                    </span>

                    <span className="text-foreground font-medium">
                      Afrojazz 
                    </span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">
                      Origem
                    </span>

                    <span className="text-foreground font-medium">
                      Maputo, Moçambique
                    </span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">
                      Ativo Desde
                    </span>

                    <span className="text-foreground font-medium">
                      2021
                    </span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">
                      EP
                    </span>

                    <span className="text-foreground font-medium">
                      Clamor (2026)
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8 p-5 bg-secondary rounded-xl">

                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Contacto para Imprensa
                </h4>

                <p className="text-foreground font-medium">
                  gilartur114@gmail.com
                </p>

                <p className="text-muted-foreground text-sm font-serif">
                  Para entrevistas, features e parcerias
                </p>
              </div>
            </div>

            {/* Download EPK */}
            <a
              href="/leusiogilpress.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5" />

                Download EPK Completo (PDF)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}