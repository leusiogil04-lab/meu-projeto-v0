"use client"

import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const shows = [
  {
    id: 1,
    date: "16 Maio 2026",
    time: "14:00",
    venue: "Com a banda Kuwala",
    city: "Piracicaba, Brasil",
    status: "available",
    ticketUrl: "#",
  },
  {
    id: 2,
    date: "25 Junho 2026",
    time: "20:00",
    venue: "Independece Show com Lenna Bahule",
    city: "São Paulo, Brasil",
    status: "available",
    ticketUrl: "livre",
  },
]

export function ShowsSchedule() {
  return (
    <section id="shows" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">Tour 2026</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Próximos Shows
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {shows.map((show) => (
            <div
              key={show.id}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
                {/* Date */}
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">{show.date}</span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{show.time}</span>
                </div>

                {/* Venue & City */}
                <div>
                  <h3 className="font-semibold text-foreground">{show.venue}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground font-serif">
                    <MapPin className="h-4 w-4" />
                    <span>{show.city}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {show.status === "soldout" ? (
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    Esgotado
                  </Badge>
                ) : show.status === "limited" ? (
                  <Badge className="bg-primary/20 text-primary border border-primary">
                    Últimos Bilhetes
                  </Badge>
                ) : null}

                <Button
                  asChild
                  disabled={show.status === "soldout"}
                  className={`${
                    show.status === "soldout"
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  } transition-all duration-300 group-hover:scale-105`}
                >
                  <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                    {show.status === "soldout" ? "Indisponível" : "Comprar Bilhete"}
                    {show.status !== "soldout" && <ExternalLink className="ml-2 h-4 w-4" />}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 font-serif">
            Não encontrou um show perto de si?
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Ver Todas as Datas
          </Button>
        </div>
      </div>
    </section>
  )
}
