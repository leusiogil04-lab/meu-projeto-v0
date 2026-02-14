"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", press: "Press", media: "Media", events: "Events", contact: "Contact" },
    hero: { title: "Leusio Gil", subtitle: "Artist · Composer · Educator", description: "Fusion of traditional African Music and Jazz", cta: "Explore My Work" },
    about: {
      badge: "About",
      title: "Biography",
      p1: "Mozambican artist, pianist, vocalist, composer and cultural educator, Leusio Gil is emerging as a distinctive voice connecting African roots, contemporary sounds and intercultural dialogue.",
      p2: "Born in Maputo, Mozambique, Leusio builds bridges between music, education and identity.",
      p3: "As an independent artist, Leusio is also an educator and cultural facilitator."
    },
    services: {
      badge: "What I Do",
      title: "Creative Services",
      desc: "Bringing passion and expertise to every project, from live performances to educational workshops.",
      s1_title: "Performer",
      s1_desc: "Live performances that captivate and inspire.",
      s2_title: "Educator",
      s2_desc: "Workshops and masterclasses that explore the intersection of culture and music."
    },
    portfolio: { badge: "Portfolio", title: "Selected Works", desc: "A curated collection of performances, compositions, and educational projects.", view: "View Project" },
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
      mediaTitle: "Published Media", // CHAVE QUE FALTAVA
      mediaDesc: "Interviews, articles, and reports published in media outlets.",
      mediaCTA: "Explore",
      newsTitle: "Recent News", // CHAVE QUE FALTAVA
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
      p1: "Artista moçambicano, pianista, vocalista, compositor e educador cultural, Leusio Gil emerge como uma voz distinta.",
      p2: "Nascido em Maputo, Moçambique, Leusio constrói pontes entre música, educação e identidade.",
      p3: "Como artista independente, Leusio é também educador e facilitador cultural."
    },
    services: {
      badge: "O Que Faço",
      title: "Serviços Criativos",
      desc: "Trazendo paixão e experiência para cada projeto, desde apresentações ao vivo a workshops educativos.",
      s1_title: "Performer",
      s1_desc: "Performances ao vivo que cativam e inspiram.",
      s2_title: "Educador",
      s2_desc: "Workshops e masterclasses que exploram a interseção entre cultura e música."
    },
    portfolio: { badge: "Portfólio", title: "Trabalhos Selecionados", desc: "Uma coleção curada de performances, composições e projetos educativos.", view: "Ver Projeto" },
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