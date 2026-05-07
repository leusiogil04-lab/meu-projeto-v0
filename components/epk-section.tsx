"use client"

import { Download, Instagram, Youtube, Facebook, Linkedin } from "lucide-react" 
import { Button } from "@/components/ui/button"

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/leusiogil7/", 
    label: "Instagram" 
  },
  { 
    icon: Youtube, 
    href: "https://www.youtube.com/@leusiogil7", 
    label: "YouTube" 
  },
  { 
    icon: Facebook, // Se o erro persistir, mude para Facebook (com F maiúsculo)
    href: "https://www.facebook.com/profile.php?id=100079218982670", 
    label: "Facebook" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/leusio-gil-b9a111253/", 
    label: "LinkedIn" 
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
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">Electronic Press Kit</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Sobre o Artista
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div>
            <div className="relative mb-8">
              <img
                src= "/imagens/horizontal02leusiogil.jpg"
                alt="Leusio Gil - Artista"
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">Biografia</h3>
            <div className="space-y-4 text-muted-foreground font-serif leading-relaxed">
              <p>
                Leusio Gil é um artista e compositor de Moçambique que emergiu da cena tradicional e folclórica moçambicana em 2021. 
                Com uma fusão única de sons tradicionais e influências da música contemporânea, Leusio tem se destacado como uma das vozes mais promissoras da nova geração de músicos africanos. 
              </p>
              <p>
                O seu Ep e show de estreia, &quot;Clamor&quot;, foi lançado em 2026. Desde então, tem apresentado performances memoráveis nos 
               espaços cultirais e comunidades do Brasil, incluindo a festa das nações, YAM session.
              </p>
              <p>
                Participou de intercambio cultural no brasil, o que deu iniciou a sua carreia internacional.
                Também participa de iniciativas socias e educacionais atravéz da sua música e cultura, promovendo a diversidade e inclusão através de experiências muito
                imersivas.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
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
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Materiais para Imprensa</h3>

              {/* Press Photos */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Fotos de Alta Resolução
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {pressPhotos.map((photo, index) => (
                    <div key={index} className="aspect-square rounded overflow-hidden">
                      <img
                        src={photo}
                        alt={`Press photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary text-primary hover:bg-primary/10"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Pack de Fotos
                </Button>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground">
                  Informações Rápidas
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Género</span>
                    <span className="text-foreground font-medium">Afrojazz / Tribal</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Origem</span>
                    <span className="text-foreground font-medium">Maputo, Moçambique</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Ativo Desde</span>
                    <span className="text-foreground font-medium">2021</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Ep</span>
                    <span className="text-foreground font-medium">Clamor (2026)</span>   
                  </div>
                </div>
              </div>

              {/* Contact for Press */}
              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Contacto para Imprensa
                </h4>
                <p className="text-foreground font-medium">gilartur114@gmail.com</p>
                <p className="text-muted-foreground text-sm font-serif">
                  Para entrevistas, features e parcerias
                </p>
              </div>
            </div>

            {/* Download EPK */}
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download EPK Completo (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
