import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Resolve e decodifica o slug para aceitar caracteres especiais
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(rawSlug).toLowerCase();
  
  // Versão limpa para lógica de busca
  const cleanSlug = decodedSlug.replace(/[^a-z0-9]/g, "");

  // 2. Verificações de Projetos específicas
  const isCulturalBridge = cleanSlug.includes("culturalbridge");
  const isRhythmRoots = cleanSlug.includes("rhythm") || cleanSlug.includes("roots");
  const isDocumentary = cleanSlug.includes("documentary");
  const isEPClamor = cleanSlug.includes("epclamor") || cleanSlug.includes("clamor");
  const isKuwalaBand = cleanSlug.includes("kuwalaband") || cleanSlug.includes("kuwala");
  const isMoveConcert = cleanSlug.includes("moveconcert") || cleanSlug.includes("move");

  // Define se é um workshop (para usar o formato vertical)
  const isAnyWorkshop = isCulturalBridge || isRhythmRoots;

  // 3. Mapeamento dos IDs do YouTube (Troca realizada aqui)
  let youtubeId = "";
  if (isCulturalBridge) {
    youtubeId = "xO4DV-Yp9NI"; 
  } else if (isRhythmRoots) {
    youtubeId = "NtTlNnURZoc"; // Recebeu o vídeo que estava no Move Concert
  } else if (isDocumentary) {
    youtubeId = "kUqtZH8k0Mk";
  } else if (isEPClamor) {
    youtubeId = "ivorxGT_JH8";
  } else if (isKuwalaBand) {
    youtubeId = "NRo4VMlkpEQ";
  } else if (isMoveConcert) {
    youtubeId = "Qscqy-i9YOM"; // Recebeu o vídeo que estava no Rhythm Roots
  }

  // Título de exibição
  const displayTitle = isCulturalBridge 
    ? "CULTURAL BRIDGE WORKSHOP" 
    : isRhythmRoots 
    ? "RHYTHM AND ROOTS WORKSHOPS" 
    : decodedSlug.replace(/-/g, " ").toUpperCase();

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
              {isAnyWorkshop ? "Education & Community" : "Artistic Project"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {displayTitle}
            </h1>
          </header>

          {/* ÁREA DO VÍDEO */}
          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div 
                className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10 ${
                  isAnyWorkshop 
                  ? "w-[320px] h-[570px]" // FORMATO VERTICAL PARA WORKSHOPS
                  : "aspect-video w-full"  // FORMATO HORIZONTAL PARA O RESTO
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
              <div className="aspect-video w-full rounded-2xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 border border-white/10">
                <p>Mídia não carregada para: {displayTitle}</p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed text-lg text-justify">
                {isCulturalBridge && (
                  <p>
                    The <strong>Cultural Bridge Workshop</strong> focuses on connecting different musical backgrounds through percussive exchange, building a rhythmic bridge between traditions.
                  </p>
                )}
                {isRhythmRoots && (
                  <p>
                    The <strong>Rhythm and Roots Workshops</strong> are practical sessions designed to immerse participants in the vibrant percussive traditions of Mozambique.
                  </p>
                )}
                {isDocumentary && <p>A documentary project exploring social sustainability through music.</p>}
                {isEPClamor && <p>A performance piece fusing traditional rhythms with modern expression.</p>}
                {isKuwalaBand && <p>An international musical dialogue between Mozambican and Norwegian traditions.</p>}
                {isMoveConcert && <p>A live performance capturing the energy of cross-cultural collaboration.</p>}
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