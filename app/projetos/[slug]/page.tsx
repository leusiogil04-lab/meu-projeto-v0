import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. CORREÇÃO DO ERRO 'REPLACE': Aguardar o params antes de usar
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Limpar o título para exibição
  const title = slug.replace(/-/g, " ").toUpperCase();

  // 2. MAPEAMENTO DE DADOS (Garante que o conteúdo apareça)
  const isDocumentary = slug === "documentary";
  const isEPClamor = slug === "ep-clamor";
  const isKuwalaBand = slug === "kuwala-band";
  // Note o slug exato para workshops
  const isWorkshops = slug === "rhythm-and-roots-workshops" || slug.includes("workshop");

  // Definição de IDs do YouTube
  let youtubeId = "";
  if (isDocumentary) youtubeId = "kUqtZH8k0Mk";
  if (isEPClamor) youtubeId = "ivorxGT_JH8";
  if (isKuwalaBand) youtubeId = "NRo4VMlkpEQ";
  if (isWorkshops) youtubeId = "NtTlNnURZoc";

  return (
    <div className="flex min-h-screen flex-col bg-[#043E43]">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-zinc-300 text-sm font-medium hover:text-white transition-all mb-12"
          >
            <span className="mr-2">←</span> BACK TO PORTFOLIO
          </Link>

          <header className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              {isWorkshops ? "Education & Community" : isDocumentary ? "Film & Research" : "Performance & Music"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {isDocumentary ? "DOCUMENTARY: Rhythm & Roots" : title}
            </h1>
            
            <div className="mt-6 text-zinc-300 max-w-2xl mx-auto italic text-lg">
              {isDocumentary && <p>"A project that educates, welcomes and cooperates for social sustainability."</p>}
              {isEPClamor && <p>"Fusing traditional Marrapiko rhythms with contemporary global sounds."</p>}
              {isKuwalaBand && <p>"A dialogue between Mozambican and Norwegian musical traditions."</p>}
              {isWorkshops && <p>"Sharing Mozambican heritage through hands-on rhythmic experiences."</p>}
            </div>
          </header>

          {/* Player do YouTube */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl mb-16">
            {youtubeId ? (
              <div className={isWorkshops ? "aspect-[9/16] max-w-[350px] mx-auto" : "aspect-video w-full"}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <div className="relative aspect-video flex items-center justify-center bg-zinc-800 text-zinc-500">
                 <p>Image for {title} not found in /imagens/{slug}.jpg</p>
              </div>
            )}
          </div>

          {/* Seção de Texto */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed">
                {isWorkshops && (
                  <p>The Rhythm and Roots Workshops are practical sessions designed to immerse participants in the vibrant percussive traditions of Mozambique. Rhythm becomes a universal language for connection and community building.</p>
                )}
                {isDocumentary && (
                  <p>This documentary records the journey of the project Raízes e Ritmos developed at CAPS II and CAPS AD in Tatuí, São Paulo.</p>
                )}
                {isEPClamor && (
                  <p>EP CLAMOR is an artistic performance that celebrates the fusion of Mozambican cultural heritage with modern musicality.</p>
                )}
                {isKuwalaBand && (
                  <p>KUWALA BAND is a unique musical collective that promotes an artistic meeting between African and European sonorities.</p>
                )}
                {/* Fallback caso nenhum slug bata */}
                {!isWorkshops && !isDocumentary && !isEPClamor && !isKuwalaBand && (
                   <p>Content for {title} coming soon.</p>
                )}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 space-y-6">
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Year</h3>
                  <p className="text-white font-medium">2024 - 2026</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Artist</h3>
                  <p className="text-white font-medium">Leusio Gil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}