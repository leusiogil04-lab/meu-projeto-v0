"use client"

import { useState } from "react"
import { SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"

const tracks = [
  {
    id: 1,
    title: "Rosa - Live Session",
    album: "Leusio Gil",
    cover: "/imagens/divulga1.jpg",
    embed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2266351826&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },

  {
    id: 2,
    title: "Live Sessions",
    album: "Leusio Gil",
    cover: "/imagens/divulga2.jpg",
    embed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2191261844&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
]

export function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)

  const handlePrevious = () => {
    setCurrentTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentTrack((prev) =>
      prev === tracks.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section id="musica" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">
            Discografia
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Ouça a Música
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Main Player */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-2xl">

            {/* Cover */}
            <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden">
              <img
                src={tracks[currentTrack].cover}
                alt={tracks[currentTrack].title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Track Info */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground">
                {tracks[currentTrack].title}
              </h3>

              <p className="text-muted-foreground mt-2 font-serif">
                {tracks[currentTrack].album}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-8">

              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="hover:text-primary"
              >
                <SkipBack className="h-6 w-6" />
              </Button>

              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90"
              >
                Tocando Agora
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="hover:text-primary"
              >
                <SkipForward className="h-6 w-6" />
              </Button>
            </div>

            {/* SoundCloud Player */}
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={tracks[currentTrack].embed}
              className="rounded-2xl overflow-hidden"
            />
          </div>

          {/* Playlist */}
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => setCurrentTrack(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  currentTrack === index
                    ? "bg-primary/20 border border-primary"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {/* Cover */}
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-foreground text-lg">
                    {track.title}
                  </h4>

                  <p className="text-sm text-muted-foreground mt-1">
                    {track.album}
                  </p>
                </div>

                {/* Active */}
                {currentTrack === index && (
                  <span className="text-primary text-sm uppercase tracking-wider">
                    Tocando
                  </span>
                )}
              </button>
            ))}

            {/* Extra Card */}
            <div className="mt-10 p-8 bg-card border border-border rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Escute no SoundCloud
              </h3>

              <p className="text-muted-foreground mb-6">
                Explore mais músicas, sessões ao vivo e novos lançamentos.
              </p>

              <a
                href="https://soundcloud.com/leusio-gil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  Abrir Perfil
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}