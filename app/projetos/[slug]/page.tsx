import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// No Next.js moderno, a função deve ser assíncrona (async)
export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Aguardamos os parâmetros serem resolvidos
  const { slug } = await params;
  
  // Agora o slug existe e podemos usar o replace
  const title = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all duration-300 mb-12 group"
          >
            <span className="mr-2">←</span> BACK TO PORTFOLIO
          </Link>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
                <Image 
                  src={`/imagens/${slug}.jpg`} 
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-12 lg:hidden space-y-8">
                <TechnicalDetails title={title} />
              </div>

              <div className="mt-12 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <h2 className="text-2xl font-serif text-foreground">Overview</h2>
                <p>
                  This project, <strong>{title}</strong>, represents a significant milestone in Leusio Gil's 
                  artistic journey.
                </p>
              </div>
            </div>

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
      </div>
    </div>
  )
}