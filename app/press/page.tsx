"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Download, Newspaper, Radio, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../LanguageContext"

export default function ImprensaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mapeamento dos itens usando IDs fixos para a KEY do React
  const pressItems = [
    {
      id: "epk",
      icon: FileText,
      title: t.press.epkTitle,
      description: t.press.epkDesc,
      action: t.press.epkCTA,
      href: "/documentos/leusio-electronic press.pdf", 
      isDownload: true,
    },
    {
      id: "onesheet",
      icon: Download,
      title: t.press.oneSheetTitle,
      description: t.press.oneSheetDesc,
      action: t.press.oneSheetCTA,
      href: "/documentos/onesheet.pdf",
      downloadName: "onesheet.pdf",
      isDownload: true,
    },
    {
      id: "releases",
      icon: Newspaper,
      title: t.press.releasesTitle,
      description: t.press.releasesDesc,
      action: t.press.releasesCTA,
      href: "#",
      isDownload: false,
    },
    {
      id: "media",
      icon: Radio,
      title: t.press.mediaTitle,
      description: t.press.mediaDesc,
      action: t.press.mediaCTA,
      href: "#",
      isDownload: false,
    },
    {
      id: "news",
      icon: Clock,
      title: t.press.newsTitle,
      description: t.press.newsDesc,
      action: t.press.newsCTA,
      href: "#",
      isDownload: false,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#000000] dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-widest uppercase">
              {t.press.badge}
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              {t.press.title}
            </h1>
            <p className="mt-6 text-lg text-blue-50/80 leading-relaxed">
              {t.press.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Press Resources Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pressItems.map((item, index) => (
              <div
                key={item.id} // CORREÇÃO DO ERRO DE KEY
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

      <Footer />
    </main>
  )
}