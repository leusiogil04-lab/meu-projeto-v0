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

  // Verifica se o projeto atual é o documentário para exibir o vídeo
  const isDocumentary = slug === "documentary";
  const youtubeId = "kUqtZH8k0Mk"; // ID do seu vídeo

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]"> {/* Cor minimalista de fundo */}
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-zinc-500 text-sm font-medium hover:text-primary transition-all mb-12"
          >
            <span className="mr-2">←</span> BACK TO PORTFOLIO
          </Link>

          <header className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              {isDocumentary ? "Film & Research" : "Project Detail"}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-zinc-900 leading-tight">
              {isDocumentary ? "DOCUMENTARY: Rhythm & Roots" : title}
            </h1>
            {isDocumentary && (
              <p className="mt-6 text-zinc-600 max-w-2xl mx-auto italic text-lg">
                "Uma jornada através da interculturalidade de Moçambique e seu poder de transformação social."
              </p>
            )}
          </header>

          {/* Seção do Vídeo ou Imagem Principal */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-sm mb-16">
            {isDocumentary ? (
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
          <div className="grid md:grid-cols-12 gap-12 border-t border-zinc-200 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-700">
              <h2 className="text-2xl font-serif text-zinc-900">Overview</h2>
              <div className="space-y-4 leading-relaxed">
                {isDocumentary ? (
                  <>
                    <p>
                      O documentário <strong>Raízes e Ritmos</strong> explora a interculturalidade de Moçambique 
                      como uma ferramenta de acolhimento para pessoas em situação de vulnerabilidade social [00:00:28].
                    </p>
                    <p>
                      Ao longo de quatro meses de trabalho na cidade de Tatuí, o projeto utilizou música, 
                      histórias e brincadeiras tradicionais moçambicanas para conectar pacientes do CAPS 
                      e estudantes com a diversidade cultural [00:01:13].
                    </p>
                    <p>
                      O filme captura momentos emocionantes de superação, onde a arte rompe barreiras linguísticas 
                      e sociais, provando ser uma ferramenta poderosa de cuidado e humanização [00:05:21].
                    </p>
                  </>
                ) : (
                  <p>Descrição detalhada do projeto {title} em desenvolvimento...</p>
                )}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 space-y-6">
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Year</h3>
                  <p className="text-zinc-900 font-medium">2025/2026</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Director</h3>
                  <p className="text-zinc-900 font-medium">Leusio Gil</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Location</h3>
                  <p className="text-zinc-900 font-medium">Tatuí, Brasil</p>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1">Themes</h3>
                  <p className="text-zinc-900 text-sm">Interculturality, Social Vulnerability, Art-therapy</p>
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