import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default async function ProjetoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(rawSlug).toLowerCase();
  const cleanSlug = decodedSlug.replace(/[^a-z0-9]/g, "");

  const isCulturalBridge = cleanSlug.includes("culturalbridge");
  const isRhythmRoots = cleanSlug.includes("rhythm") || cleanSlug.includes("roots");
  const isDocumentary = cleanSlug.includes("documentary");
  const isEPClamor = cleanSlug.includes("epclamor") || cleanSlug.includes("clamor");
  const isKuwalaBand = cleanSlug.includes("kuwalaband") || cleanSlug.includes("kuwala");
  const isMoveConcert = cleanSlug.includes("moveconcert") || cleanSlug.includes("move");

  const isAnyWorkshop = isCulturalBridge || isRhythmRoots;

  let youtubeId = "";
  if (isCulturalBridge) youtubeId = "xO4DV-Yp9NI"; 
  else if (isRhythmRoots) youtubeId = "NtTlNnURZoc"; 
  else if (isDocumentary) youtubeId = "kUqtZH8k0Mk";
  else if (isEPClamor) youtubeId = "ivorxGT_JH8";
  else if (isKuwalaBand) youtubeId = "NRo4VMlkpEQ";
  else if (isMoveConcert) youtubeId = "Qscqy-i9YOM";

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
          
          <Link href="/#portfolio" className="inline-flex items-center text-zinc-300 text-sm font-medium hover:text-white transition-all mb-12">
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

          <div className="relative w-full mb-16 flex justify-center">
            {youtubeId ? (
              <div className="w-full aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  title={displayTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
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
              <div className="space-y-6 leading-relaxed text-lg text-justify font-light">
                {isCulturalBridge && (
                  <>
                    <p><strong>Review of the Mozambican Exchange in Brazil.</strong>The Cultural represents a pivotal chapter in the artistic residency of Leusio Gil during his cultural exchange in Brazil. In a significant collaboration with LBV (Legião da Boa Vontade) in the coastal city of Santos, this project transcended the traditional boundaries of music education, serving as a vibrant portal into the heart of Mozambican identity.</p>
                    <p>The workshop was masterfully designed to introduce the richness of Mozambican heritage through a dual approach: the visceral power of traditional music and the communal joy of ancestral games. The footage captures Leusio’s unique pedagogical style, where "play" is a sophisticated tool for cultural transmission. By engaging participants in traditional Mozambican games, the workshop fostered an environment of spontaneous learning, allowing the rhythms of the Marrabenta to be felt through movement and collective interaction.</p>
                  </>
                )}
                {isRhythmRoots && (
                  <>
                    <p><strong>Rhythm and Roots Workshops</strong> is a project that uses music and interculturality from Mozambique to educate, welcome, and share the diversity of cultures, especially for people in situations of social vulnerability. Music and culture have the power to heal people from within, to embrace those who are often forgotten, and to remind everyone that they have value and a story to tell.</p>
                    <p>The project reaches people in educational institutions, social institutions, shelters, and marginalized communities.
                       Raízes e Ritmos uses music as a tool for social transformation, giving people the opportunity to express themselves through music in group choirs and educational workshops.</p>
                  </>
                )}
                {isDocumentary && (
                   <>
                    <p><strong>A Special Report on Art and Social Inclusion.</strong> The documentary "Raízes e Ritmos: Interculturality from Mozambique" chronicles one of the most poignant initiatives in cultural exchange and social inclusion within the heart of Tatuí, São Paulo. Led by the Mozambican artist and educator Leusio Gil, the film documents for months of intensive work, using traditional African music, history, and ancestral games as a vital tool for supporting individuals facing profound social vulnerability.</p>
                    <p>The narrative focuses on the project’s impactful residency at the CAPS (Psychosocial Care Centre), an environment where access to the arts is often limited. Leusio Gil articulates that the core objective transcends mere technical instruction; it is about bringing "joy and a different kind of knowledge" to those navigating complex psychosocial challenges. The documentary captures a remarkable breaking of barriers: participants who were previously withdrawn or silent found their voices, singing in Mozambican dialects they had never heard before, thereby forging a deep connection with a distant continent through a shared, rhythmic pulse.</p>
                    <p>Beyond the musical scores, the film highlights the project’s vital educational role. During these sessions, participants were encouraged to challenge common stereotypes regarding Africa and Mozambique, engaging in dialogues that spanned from modern economics to daily life. For Gil, the experience was profoundly reciprocal; his initial trepidation about working with a new audience dissolved into pure emotion as he witnessed Brazilians singing songs that evoked memories of his own childhood and homeland.</p>
                    <p>The true weight of the project is felt through the touching testimonies of the CAPS service users themselves. One participant notes that learning a "different language" and exploring new cultures was essential for "exercising the mind" and overcoming personal inhibitions. Another praises the patience and warmth of the teaching, describing the rehearsals as moments of genuine levity and collective triumph.</p>
                    <p>As Leusio Gil concludes, the Raízes e Ritmos project "is not merely about Mozambican culture; it is about people. The initiative serves as definitive proof that art is, indeed, one of the most potent forms of care and the recognition of human dignity. By sharing culture, the project shares life itself, leaving a lasting legacy of humanity and gratitude within the community.</p>
                   </>
                )}
                {isEPClamor && (
                   <>
                    <p>The <em>EP CLAMOR</em>  brings traditional Afro sonorities blended with modern jazz elements. Through compositions that narrate exchange experiences, social critiques, festive moments and a touch of romanticism, the project also incorporates aspects of Mozambican traditions through selected folk songs. The audience will be invited to sing, dance and feel the energy of Mozambique through rich polyrhythms.</p>
                   </>
                )}
                {isKuwalaBand && (
                   <>
                    <p><strong>A convergência entre o Índico e o Atlântico.</strong> A <em>KUWALA BAND</em> é um coletivo musical que personifica o conceito de intercâmbio transcontinental. O projeto promove um diálogo inédito entre as sonoridades africanas de Moçambique e as influências europeias da Noruega.</p>
                    <p>O resultado é uma sonoridade híbrida, rica em camadas e texturas, apresentando a química impecável de músicos que, apesar das distâncias geográficas, compartilham a mesma busca pela excelência artística.</p>
                   </>
                )}
                {isMoveConcert && (
                   <>
                    <p><strong>A explosão da colaboração criativa.</strong> O <em>MOVE CONCERT</em> não é apenas uma apresentação, é o clímax de um intercâmbio artístico internacional. O concerto exibe a energia crua de artistas que se movem em sintonia, desafiando barreiras linguísticas através da performance.</p>
                    <p>A narrativa do show é construída sobre a ideia de "movimento" — de corpos, de ideias e de culturas — celebrando a liberdade criativa coletiva com uma estética visual potente.</p>
                   </>
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