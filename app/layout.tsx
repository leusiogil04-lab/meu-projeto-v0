import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundEffects } from "@/components/background-effects"

import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LEUSIO GIL | Artista Moçambicano",
  description:
    "Descubra o universo musical de Leusio Gil. Ouça os últimos lançamentos, confira a agenda de shows e conecte-se com a música.",

  keywords: [
    "música",
    "artista",
    "shows",
    "álbum",
    "tour",
    "Leusio Gil",
  ],

  openGraph: {
    title: "LEUSIO GIL | Artista Moçambicano",
    description: "Descubra o universo musical de Leusio Gil",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Leusio Gil",
              url: "https://leusiogil.com",
              genre: ["Electronic", "Alternative", "Indie"],
              description:
                "Artista musical contemporâneo explorando sons eletrônicos e alternativos.",
              sameAs: [
                "https://instagram.com/leusiogil",
                "https://twitter.com/leusiogil",
                "https://open.spotify.com/artist/leusiogil",
              ],
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* Fundo animado */}
          <BackgroundEffects />

          {/* Conteúdo */}
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}