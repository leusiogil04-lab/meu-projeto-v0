import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Este componente recebe o "slug" da URL (ex: ep-clamor)
export default function ProjetoPage({ params }: { params: { slug: string } }) {
  // Converte o slug de volta para um título legível
  const title = params.slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Botão para retornar à Home */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all duration-300 mb-12 group"
          >
            <span className="mr-2">←</span> BACK TO PORTFOLIO
          </Link>

          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Coluna da Esquerda: Imagem e Ficha Técnica */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
                <Image 
                  // Tenta carregar a imagem com o mesmo nome do slug
                  src={`/imagens/${params.slug}.jpg`} 
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Ficha Técnica para Dispositivos Móveis (oculta em telas grandes) */}
              <div className="mt-12 lg:hidden space-y-8">
                <TechnicalDetails title={title} />
              </div>

              {/* Descrição Longa */}
              <div className="mt-12 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <h2 className="text-2xl font-serif text-foreground">Overview</h2>
                <p>
                  This project, <strong>{title}</strong>, represents a significant milestone in Leusio Gil's 
                  artistic journey. It explores the intersections of traditional Mozambican 
                  rhythms with contemporary global influences, creating a unique 
                  intercultural dialogue.
                </p>
                <p>
                  Developed through extensive research and collaboration, the work aims 
                  to bridge cultural gaps and provide a platform for artistic expression 
                  that resonates across borders. Every detail was curated to ensure an 
                  authentic and impactful experience.
                </p>
              </div>
            </div>

            {/* Coluna da Direita: Título e Ficha Técnica Desktop */}
            <div className="lg:col-span-5 space-y-12">
              <header>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Project Detail
                </span>
                <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                  {title}
                </h1>
              </header>

              <div className="hidden lg:block">
                <TechnicalDetails title={title} />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Componente auxiliar para a Ficha Técnica
function TechnicalDetails({ title }: { title: string }) {
  return (
    <div className="space-y-8 border-t border-white/10 pt-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Year</h3>
          <p className="text-foreground font-medium">2026</p>
        </div>
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Location</h3>
          <p className="text-foreground font-medium">International</p>
        </div>
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Category</h3>
          <p className="text-foreground font-medium">Arts & Culture</p>
        </div>
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Role</h3>
          <p className="text-foreground font-medium">Lead Artist</p>
        </div>
      </div>
      
      <div className="p-6 bg-card rounded-xl border border-white/5">
        <h3 className="text-foreground font-medium mb-3">Project Impact</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Focused on fostering community engagement and cultural preservation through 
          innovative performance and educational workshops.
        </p>
      </div>
    </div>
  )
}