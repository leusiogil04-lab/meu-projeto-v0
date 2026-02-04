"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Camera, Video, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const photos = [
  { src: "/imagens/horizontal01leusiogil.jpg", alt: "Live performance", category: "Shows" },
  { src: "/imagens/horizontal02leusiogil.jpg", alt: "Live performance", category: "Shows" },
  { src: "/imagens/divulgacao1leusiogil.jpg", alt: "Live performance", category: "Shows" },
  { src: "/imagens/divulgacao2leusiogil.jpg", alt: "Educational workshop", category: "Workshop" },
  { src: "/imagens/quadrado02leusiogil.jpg", alt: "Live performance", category: "Shows" },
  { src: "/imagens/quadrado01leusiogil.jpg", alt: "Live performance", category: "Shows" },
  { src: "/imagens/divulgacao3leusiogil.jpg", alt: "Educational workshop", category: "Workshop" },
  { src: "/imagens/fotobioleusiogil.jpg", alt: "Live performance", category: "Shows" },
]

const videos = [
  {
    title: "Til Nest Gang Brazil - Live Session",
    duration: "03:30",
    category: "Performance",
    youtubeId: "nZ6bS9zD_UY",
  },
  {
    title: "Til Nest Gang Brazil - Live Session",
    duration: "05:15",
    category: "Shows",
    youtubeId: "KZYj5Wa8t0Y",
  },
  {
    title: "MOVE Concert",
    duration: "05:06",
    category: "Shows",
    youtubeId: "Qscqy-i9YOM",
  },
  {
    title: "Til Nest Gang Brazil - Live Session",
    duration: "06:56",
    category: "Shows",
    youtubeId: "LtMZczgsqjU",
  },
]

export default function MidiaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos")
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Gallery</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              Media
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              High-quality promotional images and videos are available.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              type="button"
              onClick={() => setActiveTab("photos")}
              className={cn(
                "py-4 text-sm font-medium tracking-wide uppercase border-b-2 transition-colors flex items-center gap-2",
                activeTab === "photos"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <Camera className="w-4 h-4" />
              Photos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("videos")}
              className={cn(
                "py-4 text-sm font-medium tracking-wide uppercase border-b-2 transition-colors flex items-center gap-2",
                activeTab === "videos"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <Video className="w-4 h-4" />
              Videos
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {activeTab === "photos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedPhoto(index)}
                  className={cn(
                    "group relative aspect-square overflow-hidden bg-muted cursor-pointer transition-all duration-500",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-white text-sm font-medium">{photo.alt}</p>
                      <p className="text-white/70 text-xs">{photo.category}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={cn(
                    "group transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Container do Embed do YouTube */}
                  <div className="relative aspect-video overflow-hidden bg-muted rounded-lg shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary font-medium tracking-wide uppercase">
                        {video.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                    </div>
                    <h3 className="mt-1 font-medium text-foreground">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">Need high-resolution photos?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Media professionals can request access to the complete image bank for editorial use.
          </p>
          <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/press">Access Press Kit</a>
          </Button>
        </div>
      </section>

      {/* Photo Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              src={photos[selectedPhoto].src || "/placeholder.svg"}
              alt={photos[selectedPhoto].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-medium">{photos[selectedPhoto].alt}</p>
            <p className="text-white/60 text-sm">{photos[selectedPhoto].category}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}