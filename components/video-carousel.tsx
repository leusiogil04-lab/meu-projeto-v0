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
    title: "ROSA ao vivo",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    youtubeId: "Qscqy-i9YOM",
  },
  {
    id: "2",
    title: "Natalia - Live Session",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    youtubeId: "LtMZczgsqjU&list",
  },
  {
    id: "3",
    title: "Ama twe twe",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    youtubeId: "nZ6bS9zD_UY",
  },
  {
    id: "4",
    title: "Kaluma - Live Session",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    youtubeId: "sF4NcnIn9LM",
  },
  {
    id: "5",
    title: "Xi n'wanana - Live Session",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    youtubeId: "UjkX8AQl-8M&list=",
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
            Assiste aos videoclips oficiais, performances ao vivo e conteúdo exclusivo
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground hidden md:flex"
            onClick={() => scrollTo("left")}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground hidden md:flex"
            onClick={() => scrollTo("right")}
            disabled={currentIndex >= videos.length - 3}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleVideos().map((video) => (
              <div
                key={video.id}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-card border border-border"
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="text-foreground font-semibold text-sm md:text-base line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(videos.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setCurrentIndex(index * 3)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
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

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-foreground hover:text-primary"
              onClick={() => setActiveVideo(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
