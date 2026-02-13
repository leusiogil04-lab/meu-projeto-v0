import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Resolve os parâmetros da URL
  const resolvedParams = await params;
  const slugFromUrl = resolvedParams.slug;
  
  // 2. Decodifica e limpa o slug para a lógica de busca
  const decodedSlug = decodeURIComponent(slugFromUrl).toLowerCase();
  const cleanSlug = decodedSlug.replace(/[^a-z0-9]/g, "");

  // 3. Mapeamento de IDs e Títulos
  let youtubeId = "";
  let displayTitle = "";

  if (cleanSlug.includes("culturalbridge")) {
    youtubeId = "xO4DV-Yp9NI"; 
    displayTitle = "CULTURAL BRIDGE WORKSHOP";
  } 
  else if (cleanSlug.includes("rhythm") || cleanSlug.includes("roots")) {
    youtubeId = "NtTlNnURZoc"; 
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
    youtubeId = "Qscqy-i9YOM";
    displayTitle = "MOVE CONCERT";
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#043E43] text-white">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <Link href="/#portfolio" className="inline-flex items-center text-zinc-300 text-sm font-medium hover:text-white mb-12 transition-colors">
            <span className="mr-2">←</span> BACK TO PORTFOLIO
          </Link>

          <header className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              Artistic Project & Education
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {displayTitle || "PROJECT"}
            </h1>
          </header>

          {/* SEÇÃO DO VÍDEO - TAMANHO IDEAL YOUTUBE (16:9) */}
          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div className="w-full aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=0`}
                  title={displayTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-white/5 flex flex-col items-center justify-center text-zinc-400 border border-dashed border-white/20 p-10 text-center">
                <p className="text-white font-bold">Video not found.</p>
                <p className="text-xs opacity-50 font-mono mt-2">Slug: {slugFromUrl}</p>
              </div>
            )}
          </div>

          {/* CONTEÚDO */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed text-lg text-justify">
                <p>
                  This project focuses on the intersection of rhythm, culture, and community. 
                  Through {displayTitle.toLowerCase()}, we explore Mozambican musical heritage 
                  and its power to connect people across different backgrounds.
                </p>
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