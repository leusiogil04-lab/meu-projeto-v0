"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", press: "Press", media: "Media", events: "Events", contact: "Contact" },
    hero: { title: "Leusio Gil", subtitle: "Artist · Composer · Educator", description: "Fusion of traditional African Music and Jazz", cta: "Explore My Work" },
    about: {
      badge: "About",
      title: "Biography",
      p1: "Mozambican artist, pianist and composer born in Maputo, Mozambique. Leusio Gil's artistic work is rooted in African musical traditions and shaped by contemporary influences such as Jazz.",
      p2: "Through live performances, original compositions, and collaborative projects, Leusio explores music as a shared human experience. He is also involved in educational and cultural initiatives, using music as a tool for intercultural exchange.",
      p3: "Exposed to and inspired by artists such as Moreira Chonguiça, Richard Bona, Assa Matusse and Albino Mbie, Leusio develops contemporary rhythmic compositions and interpretations that bridge tradition and modernity. These influences shape an energetic musical language marked by cultural identity and openness to the world. As an independent artist, Leusio is also an educator and cultural facilitator."
    },
    services: {
      badge: "What I Do",
      title: "Services",
      desc: "Sharing music and learning with dedication, making each project a meaningful experience.",
      s1_title: "Performer",
      s1_desc: "Live performances.",
      s2_title: "Educator",
      s2_desc: "Workshops and masterclasses."
    },
    portfolio: { badge: "Portfolio", title: "Selected Works", desc: "A curated collection of performances and educational projects.", view: "View Project" },
    press: {
      badge: "For Professionals",
      title: "Press",
      subtitle: "Resources and materials for journalists, producers, curators, and media professionals interested in coverage, interviews, and partnerships.",
      epkTitle: "Electronic Press Kit",
      epkDesc: "Complete material for media professionals, including biography, high-resolution photos, and technical information.",
      epkCTA: "Download EPK",
      oneSheetTitle: "One Sheet",
      oneSheetDesc: "One-page summary with essential information for event programmers and curators.",
      oneSheetCTA: "Download PDF",
      releasesTitle: "Press Releases",
      releasesDesc: "Official press releases about releases, tours, and special projects.",
      releasesCTA: "View All",
      mediaTitle: "Published Media", 
      mediaDesc: "Interviews, articles, and reports published in media outlets.",
      mediaCTA: "Explore",
      newsTitle: "Recent News", 
      newsDesc: "Latest updates on activities, achievements, and new projects.",
      newsCTA: "Read More"
    },
    events: { badge: "Events", title: "Upcoming Experiences", desc: "Join me at upcoming performances, workshops, and festivals around the world.", cta: "Book a Show" },
    contact: { badge: "Contact", title: "Let's Connect", desc: "Interested in collaborating? I would love to hear from you.", placeholderName: "Your Name", placeholderEmail: "Your Email", placeholderMessage: "Your Message", send: "Send Message", sending: "Sending..." }
  },
  pt: {
    nav: { home: "Início", about: "Sobre", services: "Serviços", press: "Imprensa", media: "Mídia", events: "Eventos", contact: "Contacto" },
    hero: { title: "Leusio Gil", subtitle: "Artista · Compositor · Educador", description: "Fusão de Música Tradicional Africana e Jazz", cta: "Explorar Meu Trabalho" },
    about: {
      badge: "Sobre",
      title: "Biografia",
      p1: "Artista moçambicano, pianista e compositor nascido em Maputo, Moçambique. O trabalho artístico de Leusio Gil tem raízes nas tradições musicais africanas e é moldado por influências contemporâneas, como o jazz.",
      p2: "Por meio de apresentações ao vivo, composições originais e projetos colaborativos, Leusio explora a música como uma experiência humana compartilhada. Ele também atua em iniciativas educacionais e culturais, utilizando a música como ferramenta de intercâmbio intercultural.",
      p3: "Exposto e inspirado por artistas como Moreira Chonguiça, Richard Bona, Assa Matusse e Albino Mbie, Leusio desenvolve composições e interpretações rítmicas contemporâneas que conectam tradição e modernidade. Essas influências moldam uma linguagem musical enérgica, marcada por identidade cultural e abertura ao mundo. Como artista independente, Leusio também é educador e facilitador cultural."
    },
    services: {
      badge: "O Que Faço",
      title: "Serviços",
      desc: "Compartilhando música e aprendizado com dedicação, tornando cada projeto uma experiência significativa.",
      s1_title: "Performer",
      s1_desc: "Performances ao vivo.",
      s2_title: "Educador",
      s2_desc: "Workshops e masterclasses."
    },
    portfolio: { badge: "Portfólio", title: "Trabalhos Selecionados", desc: "Uma coleção curada de performances e projetos educativos.", view: "Ver Projeto" },
    press: {
      badge: "Para Profissionais",
      title: "Imprensa",
      subtitle: "Recursos e materiais para jornalistas, produtores, curadores e profissionais da mídia.",
      epkTitle: "Electronic Press Kit",
      epkDesc: "Material completo para profissionais da mídia, incluindo fotos e informações técnicas.",
      epkCTA: "Baixar EPK",
      oneSheetTitle: "One Sheet",
      oneSheetDesc: "Resumo de uma página com informações essenciais para curadores.",
      oneSheetCTA: "Baixar PDF",
      releasesTitle: "Comunicados de Imprensa",
      releasesDesc: "Comunicados oficiais sobre lançamentos, turnês e projetos especiais.",
      releasesCTA: "Ver Todos",
      mediaTitle: "Mídia Publicada", // CHAVE QUE FALTAVA
      mediaDesc: "Entrevistas, artigos e reportagens publicados em veículos de comunicação.",
      mediaCTA: "Explorar",
      newsTitle: "Notícias Recentes", // CHAVE QUE FALTAVA
      newsDesc: "Últimas atualizações sobre atividades, conquistas e novos projetos.",
      newsCTA: "Ler Mais"
    },
    events: { badge: "Eventos", title: "Próximas Experiências", desc: "Junte-se a mim em apresentações e festivals pelo mundo.", cta: "Agendar Show" },
    contact: { badge: "Contacto", title: "Vamos Conversar", desc: "Interessado em colaborar? Adoraria ouvir de si.", placeholderName: "Seu Nome", placeholderEmail: "Seu E-mail", placeholderMessage: "Sua Mensagem", send: "Enviar Mensagem", sending: "Enviando..." }
  }
};

const LanguageContext = createContext<any>({ lang: 'en', t: translations.en, toggleLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const t = translations[lang];
  const toggleLang = () => setLang(prev => prev === 'en' ? 'pt' : 'en');
  if (!mounted) return <>{children}</>;
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);