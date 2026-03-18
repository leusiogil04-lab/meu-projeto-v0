"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { MapPin, Calendar, ExternalLink, Ticket, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const events = [
  {
    id: 1,
    title: "Roots & Rhythms Workshop",
    date: "March 24, 2026",
    time: "17:00",
    location: "Tatuí, SP",
    venue: "Tatuí Conservatory - Unit 3",
    type: "Cultural Workshop",
    description: "For students and teachers of the Children's Musicalization course.",
    ticketUrl: "#", 
    buttonText: "More Info"
  },
  {
    id: 2,
    title: "Roots & Rhythms Workshop",
    date: "March 27, 2026",
    time: "09:30",
    location: "Tatuí, SP",
    venue: "Tatuí Conservatory - Unit 3",
    type: "Cultural Workshop",
    description: "For students and teachers of the Children's Musicalization course.",
    ticketUrl: "#", 
    buttonText: "More Info"
  },
  {
    id: 3,
    title: "EP Clamor Concert",
    date: "April 11, 2026",
    time: "21:00",
    location: "Tatuí, SP",
    venue: "Procópio Ferreira Theater",
    type: "Live Show",
    ticketUrl: "https://conservatorio-de-tatui.byinti.com/#/event/concerto-clamor-no-conservatorio-de-tatui",
    buttonText: "Get Tickets"
  },
]

export function EventsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-24 md:py-40 bg-background overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 opacity-70 grayscale transition-all duration-1000"
        style={{
          backgroundImage: "url('/imagens/fundo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline */}
          <div className={cn(
            "lg:col-span-5 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-[2px] bg-primary" />
               <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                Schedule
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-medium text-foreground leading-none">
              Live & <br />
              <span className="text-primary italic tracking-tight">Authentic</span>
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-md">
              Feel the pulse of African music and join us in a journey of rhythm, voice, and ancestry through our workshops and live performances.
            </p>
          </div>

          {/* Right Side: Event Cards */}
          <div className="lg:col-span-7 space-y-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "relative group transition-all duration-1000 ease-out bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-10 hover:border-primary/40",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                )}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase rounded-md">
                      {event.type}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{event.venue}</span>
                      </div>
                    </div>
                    {event.description && (
                      <p className="text-sm text-muted-foreground/80 italic">{event.description}</p>
                    )}
                  </div>

                  <Link
                    href={event.ticketUrl}
                    target="_blank"
                    className="flex-shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase rounded-xl hover:scale-105 transition-all shadow-2xl"
                  >
                    {event.type === "Cultural Workshop" ? <Users className="w-5 h-5" /> : <Ticket className="w-5 h-5" />}
                    {event.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}