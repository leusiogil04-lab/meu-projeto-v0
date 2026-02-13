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
  const isWorkshop = slug === "rhythm-and-roots-workshop";

  // Definição de IDs do YouTube
  let youtubeId = "";
  if (isDocumentary) youtubeId = "kUqtZH8k0Mk";
  if (isEPClamor) youtubeId = "ivorxGT_JH8";
  if (isKuwalaBand) youtubeId = "NRo4VMlkpEQ";
  if (isWorkshop) youtubeId = "NtTlNnURZoc"; // ID do vídeo Shorts

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
              {isWorkshop ? "Education & Community" : isDocumentary ? "Film & Research" : "Performance & Music"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase">
              {isWorkshop ? "Rhythm and Roots Workshops" : isDocumentary ? "DOCUMENTARY: Rhythm & Roots" : title}
            </h1>
            
            <p className="mt-6 text-zinc-300 max-w-2xl mx-auto italic text-lg">
              {isWorkshop && "Sharing Mozambican heritage through hands-on rhythmic experiences."}
              {isDocumentary && "A project that educates, welcomes and cooperates for social sustainability."}
            </p>
          </header>

          {/* Seção de Mídia - Ajustada para Shorts no caso dos Workshops */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl mb-16">
            {youtubeId ? (
              <div className={isWorkshop ? "aspect-[9/16] max-w-[350px] mx-auto" : "aspect-video w-full"}>
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
                <Image src={`/imagens/${slug}.jpg`} alt={title} fill className="object-cover" priority />
              </div>
            )}
          </div>

          {/* Conteúdo Detalhado */}
          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200">
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Overview</h2>
              <div className="space-y-4 leading-relaxed">
                {isWorkshop && (
                  <>
                    <p>
                      The <strong>Rhythm and Roots Workshops</strong> are practical sessions designed to immerse participants in the vibrant percussive traditions of Mozambique.
                    </p>
                    <p>
                      More than just music lessons, these workshops serve as a space for cultural exchange, where rhythm becomes a universal language for connection, storytelling, and community building. Participants explore traditional instruments and the deep-rooted meanings behind each beat.
                    </p>
                  </>
                )}

                {isDocumentary && (
                  <p>This documentary records the journey of the project Raízes e Ritmos – Interculturalidade de Moçambique, developed over four months at CAPS II and CAPS AD in Tatuí.</p>
                )}

                {!isWorkshop && !isDocumentary && (
                  <p>Detailed description for {title} is currently being developed.</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 space-y-6">
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Year</h3>
                  <p className="text-white font-medium">2024 - 2026</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Type</h3>
                  <p className="text-white font-medium">{isWorkshop ? "Educational Workshop" : "Cultural Project"}</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Focus</h3>
                  <p className="text-white/80 text-sm uppercase">
                    {isWorkshop ? "Percussion, Interaction, Heritage" : "Music & Art"}
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