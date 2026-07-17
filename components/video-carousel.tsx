"use client"

import { useState, useRef } from "react"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Video {
  id: string
  title: string
  thumbnail: string
  youtubeId: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "Clamor - Show Completo",
    thumbnail: "https://img.youtube.com/vi/37e8kcMVDaA/maxresdefault.jpg",
    youtubeId: "37e8kcMVDaA",
  },
  {
    id: "2",
    title: "Leusio Gil - Performance ao Vivo",
    thumbnail: "https://img.youtube.com/vi/jPyKYlZmGr0/maxresdefault.jpg",
    youtubeId: "jPyKYlZmGr0",
  },
  {
    id: "3",
    title: "Leusio Gil - Live Session",
    thumbnail: "https://img.youtube.com/vi/2HAxNi_4mVc/maxresdefault.jpg",
    youtubeId: "2HAxNi_4mVc",
  },
  {
    id: "4",
    title: "Música Tradicional Moçambicana",
    thumbnail: "https://img.youtube.com/vi/Vd4_D9I3H6M/maxresdefault.jpg",
    youtubeId: "Vd4_D9I3H6M",
  },
  {
    id: "5",
    title: "Raízes e Ritmos",
    thumbnail: "https://img.youtube.com/vi/KYaVefm8vF8/maxresdefault.jpg",
    youtubeId: "KYaVefm8vF8",
  },
]

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollTo = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => Math.max(0, prev - 1))
    } else {
      setCurrentIndex((prev) => Math.min(videos.length - 1, prev + 1))
    }
  }

  const visibleVideos = () => {
    const start = currentIndex
    const end = Math.min(currentIndex + 3, videos.length)
    return videos.slice(start, end)
  }

  return (
  <section id="videos" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Vídeos
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Assista aos videoclipes, performances ao vivo e registros dos meus
          projetos musicais.
        </p>
      </div>

      <div className="relative">
        {/* Navegação Desktop */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 hidden md:flex bg-background/80 backdrop-blur-xl"
          onClick={() => scrollTo("left")}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 hidden md:flex bg-background/80 backdrop-blur-xl"
          onClick={() => scrollTo("right")}
          disabled={currentIndex >= videos.length - 3}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleVideos().map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video overflow-hidden rounded-2xl border border-border cursor-pointer bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40"
            >
              <img
                src={video.thumbnail}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-all duration-700" />

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/10 transition-opacity duration-700" />

              {/* Botão Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                  <Play
                    className="h-9 w-9 text-primary-foreground ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({
            length: Math.ceil(videos.length / 3),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`transition-all duration-500 rounded-full ${
                Math.floor(currentIndex / 3) === index
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navegação Mobile */}
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollTo("left")}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollTo("right")}
          disabled={currentIndex >= videos.length - 1}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>

    {/* Modal */}
    {activeVideo && (
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
        onClick={() => setActiveVideo(null)}
      >
        <div
          className="relative w-full max-w-6xl aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-14 right-0 text-white hover:text-primary"
            onClick={() => setActiveVideo(null)}
          >
            <X className="h-7 w-7" />
          </Button>

          <iframe
            src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    )}
  </section>
  )}
