import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NOVA SILVA | Artista Musical',
  description: 'Descubra o universo musical de Nova Silva. Ouça os últimos lançamentos, confira a agenda de shows e conecte-se com a música.',
  keywords: ['música', 'artista', 'shows', 'álbum', 'tour', 'Nova Silva'],
  openGraph: {
    title: 'NOVA SILVA | Artista Musical',
    description: 'Descubra o universo musical de Nova Silva',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${montserrat.variable} ${openSans.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'Nova Silva',
              url: 'https://novasilva.com',
              genre: ['Electronic', 'Alternative', 'Indie'],
              description: 'Artista musical contemporâneo explorando sons eletrônicos e alternativos.',
              sameAs: [
                'https://instagram.com/novasilva',
                'https://twitter.com/novasilva',
                'https://open.spotify.com/artist/novasilva',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
