"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Download, Newspaper, Radio, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const pressItems = [
  {
    icon: FileText,
    title: "Electronic Press Kit",
    description: "Complete material for media professionals, including biography, high-resolution photos, and technical information.",
    action: "Download EPK",
    href: "/documentos/leusio-electronic-press.pdf", 
    isDownload: true,
  },
  {
    icon: Download,
    title: "One Sheet",
    description: "One-page summary with essential information for event programmers and curators.",
    action: "Download PDF",
    href: "/documentos/onesheet.pdf",
    downloadName: "onesheet.pdf",
    isDownload: true,
  },
  {
    icon: Newspaper,
    title: "Press Releases",
    description: "Official press releases about releases, tours, and special projects.",
    action: "View All",
    href: "#",
    isDownload: false,
  },
  {
    icon: Radio,
    title: "Published Media",
    description: "Interviews, articles, and reports published in media outlets.",
    action: "Explore",
    href: "#",
    isDownload: false,
  },
  {
    icon: Clock,
    title: "Recent News",
    description: "Latest updates on activities, achievements, and new projects.",
    action: "Read More",
    href: "#",
    isDownload: false,
  },
]

const recentNews = [
  {
    date: "26 Nov 2025",
    title: "The Tatuí branch of the Brazilian Bar Association (OAB) is hosting an evening of remembrance and resistance on the eve of Black Consciousness Day.",
    source: "Focas na rede",
  },
  {
    date: "08 Apr 2025",
    title: "A cultural volunteer program with openings in Africa and Europe is receiving cultural exchange participants.",
    source: "Globo TV",
  },
]

export default function ImprensaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section com Fundo Azul Suave */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#000000] dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-widest uppercase">
              For Professionals
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              Press
            </h1>
            <p className="mt-6 text-lg text-blue-50/80 leading-relaxed">
              Resources and materials for journalists, producers, curators, and
              media professionals interested in coverage, interviews,
              and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pressItems.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <Button
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:text-primary/80 hover:bg-transparent"
                  asChild
                >
                  {item.isDownload ? (
                    <a href={item.href} download={item.downloadName || true}>
                      {item.action}
                    </a>
                  ) : (
                    <Link href={item.href || "#"}>{item.action}</Link>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... Restante do código (News e Contact) igual ao anterior */}
      <Footer />
    </main>
  )
}