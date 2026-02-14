import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Importamos o Provider que você criou (ajuste o caminho se necessário)
import { LanguageProvider } from "./LanguageContext"; 

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
        {/* O LanguageProvider deve envolver o children para que todos os componentes acessem as traduções */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}