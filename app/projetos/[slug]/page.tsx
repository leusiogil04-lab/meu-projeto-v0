import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Resolve e decodifica o slug para aceitar caracteres como "&"
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).toLowerCase();
  
  // Cria o título legível
  const title = decodedSlug.replace(/-/g, " ").toUpperCase();

  // 2. Verificações de Projetos (mais flexíveis)
  const isWorkshops = decodedSlug.includes("workshop") || decodedSlug.includes("roots");
  const isDocumentary = decodedSlug.includes("documentary");
  const isEPClamor = decodedSlug.includes("ep-clamor");
  const isKuwalaBand = decodedSlug.includes("kuwala-band");
  const isMoveConcert = decodedSlug.includes("move-concert");

  // 3. Mapeamento dos IDs do YouTube (Adicionado o novo vídeo)
  let youtubeId = "";
  if (isWorkshops) youtubeId = "NtTlNnURZoc"; // NOVO VÍDEO QUE VOCÊ ENVIOU
  else if (isDocumentary) youtubeId = "kUqtZH8k0Mk";
  else if (isEPClamor) youtubeId = "ivorxGT_JH8";
  else if (isKuwalaBand) youtubeId = "NRo4VMlkpEQ";
  else if (isMoveConcert) youtubeId = "Qscqy-i9YOM";

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
              {isWorkshops ? "Education & Community" : "Artistic Project"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {isWorkshops ? "RHYTHM AND ROOTS WORKSHOPS" : title}
            </h1>
          </header>

          {/* SEÇÃO DO VÍDEO VERTICAL PARA WORKSHOP */}
          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div 
                className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10 ${
                  isWorkshops 
                  ? "w-[320px] h-[570px]" // FORMATO VERTICAL PARA SHORTS
                  : "aspect-video w-full"  // FORMATO HORIZONTAL PARA O RESTO
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
              <div className="aspect-video w-full rounded-2xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 border border-white/10">
                <p>Mídia não carregada para: {title}</p>
              </div>
            )}
          </div>

          {/* DESCRIÇÃO DO PROJETO */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed text-lg text-justify">
                {isWorkshops && (
                  <p>
                    The <strong>Rhythm and Roots Workshops</strong> are practical sessions designed to immerse participants in the vibrant percussive traditions of Mozambique, fostering connection through rhythm. This project explores the deep cultural roots of African drumming as a tool for community building and education.
                  </p>
                )}
                {isDocumentary && (
                  <p>A documentary project that explores social sustainability and cultural heritage through music.</p>
                )}
                {isEPClamor && (
                  <p>A performance piece fusing traditional Marrapiko rhythms with modern artistic expression.</p>
                )}
                {isKuwalaBand && (
                  <p>An international musical dialogue between Mozambican and Norwegian traditions.</p>
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