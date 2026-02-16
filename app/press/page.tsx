"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Download, Newspaper, Radio, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function ImprensaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pressItems = [
    {
      id: "epk",
      icon: FileText,
      title: "Electronic Press Kit",
      description: "Complete professional dossier including biography, high-res photos, and technical rider.",
      action: "Download EPK",
      href: "/documentos/leusio-electronic press.pdf", 
      isDownload: true,
    },
    {
      id: "onesheet",
      icon: Download,
      title: "One Sheet",
      description: "Quick reference guide for promoters, venues, and media outlets.",
      action: "Download PDF",
      href: "/documentos/onesheet.pdf",
      downloadName: "onesheet.pdf",
      isDownload: true,
    },
    {
      id: "releases",
      icon: Newspaper,
      title: "Press Releases",
      description: "Latest official announcements and project launches.",
      action: "Read Releases",
      href: "#",
      isDownload: false,
    },
    {
      id: "media",
      icon: Radio,
      title: "Media Appearances",
      description: "Archive of interviews, radio sessions, and television features.",
      action: "View Archive",
      href: "#",
      isDownload: false,
    },
    {
      id: "news",
      icon: Clock,
      title: "Latest News",
      description: "Recent mentions and reviews from the global press.",
      action: "View News",
      href: "#",
      isDownload: false,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Press Room
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              Media Resources
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Find official documents, professional photos, and press materials for Leusio Gil.
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
                key={item.id}
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