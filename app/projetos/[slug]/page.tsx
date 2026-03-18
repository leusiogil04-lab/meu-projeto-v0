import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

// Removi o "use client" daqui para permitir o async
export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(rawSlug).toLowerCase();
  const cleanSlug = decodedSlug.replace(/[^a-z0-9]/g, "");

  const isCultural = cleanSlug.includes("cultural");
  const isRhythmRoots = cleanSlug.includes("rhythm") || cleanSlug.includes("roots");
  const isDocumentary = cleanSlug.includes("documentary");
  const isEPClamor = cleanSlug.includes("epclamor") || cleanSlug.includes("clamor");
  const isKuwalaBand = cleanSlug.includes("kuwalaband") || cleanSlug.includes("kuwala");
  const isMoveConcert = cleanSlug.includes("moveconcert") || cleanSlug.includes("move");

  const isAnyWorkshop = isCultural || isRhythmRoots;

  let youtubeId = "";
  if (isCultural) youtubeId = "xO4DV-Yp9NI"; 
  else if (isRhythmRoots) youtubeId = "NtTlNnURZoc"; 
  else if (isDocumentary) youtubeId = "kUqtZH8k0Mk";
  else if (isEPClamor) youtubeId = "ivorxGT_JH8";
  else if (isKuwalaBand) youtubeId = "NRo4VMlkpEQ";
  else if (isMoveConcert) youtubeId = "Qscqy-i9YOM";

  const displayTitle = isCultural 
    ? "CULTURAL BRIDGE WORKSHOP" 
    : isRhythmRoots 
    ? "RHYTHM AND ROOTS WORKSHOPS" 
    : decodedSlug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="flex min-h-screen flex-col bg-[#4c1316] relative overflow-hidden">
      {/* Background Image - CSS puro no Server Component */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "url('/background-paint-still-life.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <div className="absolute inset-0 bg-[#4c1316]/80 z-1" />

      <Navigation />
      
      <main className="relative z-10 flex-grow pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <Link href="/#portfolio" className="group inline-flex items-center text-zinc-300 text-sm font-medium hover:text-primary transition-all mb-12 uppercase tracking-widest">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO PORTFOLIO
          </Link>

          <header className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                {isAnyWorkshop ? "Education & Community" : "Artistic Project"}
              </span>
            </div>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight uppercase tracking-tight">
              {displayTitle}
            </h1>
          </header>

          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div className="w-full aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  title={displayTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 border border-white/10 backdrop-blur-md">
                <p>Mídia não carregada para: {displayTitle}</p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-8 space-y-8 text-zinc-200 text-lg leading-relaxed text-justify font-light">
              <h2 className="text-2xl font-serif text-primary uppercase tracking-wider text-left">Overview</h2>
              
              {isCultural && (
                <div className="space-y-6">
                  <p><strong className="text-white font-medium">Review of the Mozambican Exchange in Brazil.</strong> The Cultural represents a pivotal chapter in the artistic residency of Leusio Gil during his cultural exchange in Brazil. In a significant collaboration with LBV (Legião da Boa Vontade) in the coastal city of Santos, this project transcended the traditional boundaries of music education, serving as a vibrant portal into the heart of Mozambican identity.</p>
                  <p>The workshop was masterfully designed to introduce the richness of Mozambican heritage through a dual approach: the visceral power of traditional music and the communal joy of ancestral games.</p>
                </div>
              )}

              {isRhythmRoots && (
                <div className="space-y-6">
                  <p><strong className="text-white font-medium">Rhythm and Roots Workshops</strong> is a project that uses music and interculturality from Mozambique to educate, welcome, and share the diversity of cultures.</p>
                  <p>Music and culture have the power to heal people from within, to embrace those who are often forgotten, and to remind everyone that they have value and a story to tell.</p>
                </div>
              )}

              {isDocumentary && (
                <div className="space-y-6">
                  <p><strong className="text-white font-medium">A Special Report on Art and Social Inclusion.</strong> The documentary "Raízes e Ritmos: Interculturality from Mozambique" chronicles one of the most poignant initiatives in cultural exchange...</p>
                  <p>The narrative focuses on the project’s impactful residency at the CAPS (Psychosocial Care Centre), an environment where access to the arts is often limited.</p>
                </div>
              )}

              {isEPClamor && (
                <p>The <em className="text-primary">EP CLAMOR</em> brings traditional Afro sonorities blended with modern jazz elements. Through compositions that narrate exchange experiences, social critiques, festive moments and a touch of romanticism.</p>
              )}

              {isKuwalaBand && (
                <div className="space-y-6">
                   <p><strong className="text-white font-medium">A convergência entre o Índico e o Atlântico.</strong> A KUWALA BAND é um coletivo musical que personifica o conceito de intercâmbio transcontinental.</p>
                </div>
              )}

              {isMoveConcert && (
                <div className="space-y-6 text-left">
                  <p><strong className="text-white font-medium">Leusio Gil at the Procópio Ferreira Theatre.</strong> This video captures a magnificent performance held at the renowned Procópio Ferreira Theatre in Tatuí, São Paulo.</p>
                </div>
              )}
            </div>

            <div className="md:col-span-4">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 space-y-8 sticky top-32">
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">Year</h3>
                  <p className="text-white font-serif text-xl">2024 - 2026</p>
                </div>
                <div className="h-[1px] bg-white/10" />
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">Lead Artist</h3>
                  <p className="text-white font-serif text-xl">Leusio Gil</p>
                </div>
                <div className="h-[1px] bg-white/10" />
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">Origin</h3>
                  <p className="text-white font-serif text-xl">Mozambique</p>
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