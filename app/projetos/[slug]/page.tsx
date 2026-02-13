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
                    <p><strong>A música como linguagem diplomática.</strong> O <em>Cultural Bridge Workshop</em> surge como um manifesto de interconectividade, onde o ritmo deixa de ser apenas som para se tornar um espaço de diálogo entre fronteiras. Sob a mentoria de Leusio Gil, o workshop explora como as tradições percussivas moçambicanas podem encontrar eco em diferentes contextos culturais.</p>
                    <p>Mais do que uma aula de técnica, o projeto documenta o encontro humano. Através de instrumentos tradicionais e improvisação, participantes de diversas origens constroem uma ponte sonora que celebra a diversidade.</p>
                  </>
                )}
                {isRhythmRoots && (
                  <>
                    <p><strong>Resgate, ancestralidade e movimento.</strong> Nos <em>Rhythm and Roots Workshops</em>, o foco é a imersão profunda nas matrizes rítmicas de Moçambique. O projeto apresenta uma narrativa de preservação viva: Leusio Gil não apenas ensina toques, mas transmite o peso histórico e espiritual de cada cadência.</p>
                    <p>As sessões são dinâmicas e viscerais, focadas na pedagogia do corpo e na transmissão oral. O projeto atua como um arquivo vivo, garantindo que as raízes do Marrapiko e de outros ritmos tradicionais continuem a florescer.</p>
                  </>
                )}
                {isDocumentary && (
                   <>
                    <p><strong>Um olhar cinematográfico sobre a sustentabilidade social.</strong> Este documentário registra a jornada transformadora do projeto <em>Raízes e Ritmos</em>, desenvolvido em centros de atenção psicossocial (CAPS) no interior de São Paulo.</p>
                    <p>O filme explora a vulnerabilidade e a cura, mostrando como a percussão ofereceu uma nova forma de expressão para indivíduos em tratamento de saúde mental. É um relato humano sobre como o ritmo pode reintegrar cidadãos e oferecer dignidade através da arte.</p>
                   </>
                )}
                {isEPClamor && (
                   <>
                    <p><strong>O grito musical de uma nova era moçambicana.</strong> O <em>EP CLAMOR</em> é uma obra de vanguarda que funde a herança cultural de Moçambique com a estética sonora moderna. A performance captura um artista em pleno domínio de sua identidade, utilizando a música como um clamor por reconhecimento.</p>
                    <p>Com arranjos que desafiam categorias tradicionais, o projeto é um diálogo vibrante entre o passado e o futuro, carregando as dores e as alegrias de um povo em melodias sofisticadas.</p>
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