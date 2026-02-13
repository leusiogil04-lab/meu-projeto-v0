import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Resolve e decodifica o slug para evitar erros com o caractere "&"
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug); 
  
  // Limpa o título para exibição
  const title = slug.replace(/-/g, " ").toUpperCase();

  // 2. Verificações de Projetos (usando .includes para ser mais seguro)
  const isDocumentary = slug.includes("documentary");
  const isEPClamor = slug.includes("ep-clamor");
  const isKuwalaBand = slug.includes("kuwala-band");
  const isWorkshops = slug.includes("workshop") || slug.includes("roots");

  // 3. IDs dos Vídeos do YouTube
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
          </header>

          {/* SEÇÃO DE MÍDIA - CORREÇÃO PARA O VÍDEO APARECER */}
          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div 
                className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10 ${
                  isWorkshops 
                  ? "w-[320px] h-[570px]" // Formato vertical fixo para Shorts
                  : "aspect-video w-full"  // Formato horizontal para os outros
                }`}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 italic border border-white/10">
                <p>Video ID not found for: {title}</p>
              </div>
            )}
          </div>

          {/* CONTEÚDO DETALHADO */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed text-lg">
                {isWorkshops && (
                  <p>The <strong>Rhythm and Roots Workshops</strong> are practical sessions designed to immerse participants in the vibrant percussive traditions of Mozambique, fostering connection through rhythm.</p>
                )}
                {isDocumentary && (
                  <p>This documentary records the journey of the project Raízes e Ritmos developed at CAPS II and CAPS AD in Tatuí, São Paulo.</p>
                )}
                {isEPClamor && (
                  <p>EP CLAMOR celebrates the fusion of Mozambican cultural heritage with modern musicality.</p>
                )}
                {isKuwalaBand && (
                  <p>KUWALA BAND is a musical collective promoting a dialogue between African and European sonorities.</p>
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
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Lead Artist</h3>
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