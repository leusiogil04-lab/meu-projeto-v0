import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").toUpperCase();

  // Verificações de Projetos Específicos
  const isDocumentary = slug === "documentary";
  const isEPClamor = slug === "ep-clamor";
  const isKuwalaBand = slug === "kuwala-band";

  // Definição de IDs do YouTube
  let youtubeId = "";
  if (isDocumentary) youtubeId = "kUqtZH8k0Mk";
  if (isEPClamor) youtubeId = "ivorxGT_JH8";
  if (isKuwalaBand) youtubeId = "NRo4VMlkpEQ";

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
              {isDocumentary ? "Film & Research" : isEPClamor || isKuwalaBand ? "Performance & Music" : "Project Detail"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {isDocumentary ? "DOCUMENTARY: Rhythm & Roots" : isKuwalaBand ? "KUWALA BAND" : title}
            </h1>
            
            {/* Subtítulos Condicionais */}
            <p className="mt-6 text-zinc-300 max-w-2xl mx-auto italic text-lg">
              {isDocumentary && "A project that educates, welcomes and cooperates for social sustainability."}
              {isEPClamor && "Fusing traditional Marrapiko rhythms with contemporary global sounds."}
              {isKuwalaBand && "A dialogue between Mozambican and Norwegian musical traditions."}
            </p>
          </header>

          {/* Seção de Mídia (Vídeo ou Imagem) */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl mb-16">
            {youtubeId ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <div className="relative aspect-video">
                <Image 
                  src={`/imagens/${slug}.jpg`} 
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Conteúdo Detalhado */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed">
                {isDocumentary && (
                  <>
                    <p>This documentary records the journey of the project Raízes e Ritmos – Interculturalidade de Moçambique, developed over four months at CAPS II and CAPS AD in Tatuí, São Paulo, Brazil.</p>
                    <p>The project used music, storytelling, rhythms and cultural traditions as tools for welcoming, listening and building meaningful connections with people facing psychosocial challenges.</p>
                  </>
                )}

                {isEPClamor && (
                  <>
                    <p>
                      <strong>EP CLAMOR</strong> is an artistic performance that celebrates the fusion of Mozambican cultural heritage with modern musicality. 
                    </p>
                    <p>
                      Through a powerful dialogue between percussion, piano, and vocals, the project aims to bridge the gap between tradition and innovation.
                    </p>
                  </>
                )}

                {isKuwalaBand && (
                  <>
                    <p>
                      <strong>KUWALA BAND</strong> is a unique musical collective that promotes an artistic meeting between African and European sonorities. 
                      The project specifically explores the intersection between Mozambican rhythms and Norwegian musical elements.
                    </p>
                    <p>
                      The performance, such as the one held at Sesc Piracicaba, highlights the group's ability to create a harmonious and energetic soundscape 
                      that transcends borders, celebrating diversity through instruments like the saxophone, piano, and traditional percussion.
                    </p>
                  </>
                )}

                {!isDocumentary && !isEPClamor && !isKuwalaBand && (
                  <p>Detailed description for {title} is currently being developed.</p>
                )}
              </div>
            </div>

            {/* Sidebar de Informações Técnicas */}
            <div className="md:col-span-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 space-y-6">
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Year</h3>
                  <p className="text-white font-medium">{isDocumentary ? "2025/2026" : "2024/2025"}</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Lead Artist</h3>
                  <p className="text-white font-medium">Leusio Gil</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Location</h3>
                  <p className="text-white font-medium">{isKuwalaBand ? "Sesc Piracicaba / International" : isDocumentary ? "Tatuí, Brasil" : "International Performance"}</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Themes</h3>
                  <p className="text-white/80 text-sm uppercase">
                    {isKuwalaBand ? "Afro-Norwegian Fusion, World Music" : isDocumentary ? "Interculturality, Art-therapy" : "Marrapiko, Contemporary Fusion"}
                  </p>
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