import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Resolve e limpa o slug para evitar erros de símbolos na URL
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).toLowerCase();
  
  // Versão super limpa para a lógica (remove hifens e símbolos)
  const cleanSlug = decodedSlug.replace(/[^a-z0-9]/g, "");

  // 2. Mapeamento de IDs e Condicionais
  let youtubeId = "";
  let isWorkshop = false;
  let displayTitle = "";

  // LÓGICA DE SELEÇÃO:
  if (cleanSlug.includes("culturalbridge")) {
    youtubeId = "xO4DV-Yp9NI"; // O vídeo que você pediu agora
    isWorkshop = true;
    displayTitle = "CULTURAL BRIDGE WORKSHOP";
  } 
  else if (cleanSlug.includes("rhythm") || cleanSlug.includes("roots")) {
    youtubeId = "Qscqy-i9YOM"; 
    isWorkshop = true;
    displayTitle = "RHYTHM AND ROOTS WORKSHOPS";
  }
  else if (cleanSlug.includes("documentary")) {
    youtubeId = "kUqtZH8k0Mk";
    displayTitle = "DOCUMENTARY: RHYTHM & ROOTS";
  }
  else if (cleanSlug.includes("epclamor") || cleanSlug.includes("clamor")) {
    youtubeId = "ivorxGT_JH8";
    displayTitle = "EP CLAMOR";
  }
  else if (cleanSlug.includes("kuwalaband") || cleanSlug.includes("kuwala")) {
    youtubeId = "NRo4VMlkpEQ";
    displayTitle = "KUWALA BAND";
  }
  else if (cleanSlug.includes("moveconcert") || cleanSlug.includes("move")) {
    youtubeId = "NtTlNnURZoc";
    displayTitle = "MOVE CONCERT";
  }
  else {
    displayTitle = decodedSlug.replace(/-/g, " ").toUpperCase();
  }

  return (
    // Forçamos o fundo escuro aqui no container principal
    <div className="flex min-h-screen flex-col bg-[#043E43] text-white">
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
              {isWorkshop ? "Education & Community" : "Artistic Project"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {displayTitle}
            </h1>
          </header>

          {/* SEÇÃO DO VÍDEO - CORREÇÃO DEFINITIVA */}
          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div 
                className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10 ${
                  isWorkshop 
                  ? "w-[320px] h-[570px]" // Formato vertical para workshops
                  : "aspect-video w-full"  // Formato horizontal para música/filme
                }`}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  title={displayTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-zinc-900/50 flex items-center justify-center text-zinc-400 border border-white/10">
                <p>Mídia não carregada para: {displayTitle}</p>
              </div>
            )}
          </div>

          {/* CONTEÚDO TEXTUAL */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed text-lg text-justify">
                {cleanSlug.includes("culturalbridge") && (
                  <p>The <strong>Cultural Bridge Workshop</strong> focuses on connecting different musical backgrounds through percussive exchange, building a rhythmic bridge between traditions.</p>
                )}
                {(cleanSlug.includes("rhythm") || cleanSlug.includes("roots")) && (
                  <p>The <strong>Rhythm and Roots Workshops</strong> are practical sessions designed to immerse participants in the vibrant percussive traditions of Mozambique.</p>
                )}
                {/* Fallback caso não tenha descrição específica */}
                {!isWorkshop && <p>Detailed description for {displayTitle} is currently being updated.</p>}
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