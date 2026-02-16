import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leusio Gil | Mozambican Artist",
  description: "Official website of Leusio Gil: music, culture, and intercultural learning.",
  alternates: {
    canonical: "https://www.leusiogil.com",
  },
  verification: {
    google: "xv2a_rw9Jt4tLG4kfvGhZZYvCddKCzIbZnagUc71Be8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#043E43] text-white`}
      >
        {/* Container essencial para o Google Tradutor inicializar */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>

        {children}

        {/* Lógica de Tradução Atualizada */}
        <Script id="google-translate-logic" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'pt,en',
                autoDisplay: false
                // Removido o layout SIMPLE para garantir acesso ao elemento select
              }, 'google_translate_element');
            }

            // Função chamada pelos botões EN | PT no Navigation.tsx
            function changeLanguage(langCode) {
              var select = document.querySelector('select.goog-te-combo');
              if (select) {
                select.value = langCode;
                // Dispara o evento de mudança para o Google processar a tradução
                select.dispatchEvent(new Event('change'));
              }
            }
          `}
        </Script>
        
        {/* Carregamento do Script Externo do Google */}
        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}