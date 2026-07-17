"use client"

import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const shows = [
  {
    id: 3,
    date: "29, 30 e 31 Julho 2026",
    dateISO: "2026-07-29",
    time: "16:00 às 18:00",
    venue: "Raízes e Ritmos – Vivências Musicais de Moçambique para o Bem-Estar",
    city: "Tatuí, Brasil",
    status: "available",
    ticketUrl:
      "https://www.sympla.com.br/evento/vivencias-de-mocambique-para-o-bem-estar/3505004?share_id=copiarlink",
  },
  {
    id: 2,
    date: "25 Junho 2026",
    dateISO: "2026-06-25",
    time: "20:00",
    venue: "Hoyo hoyo",
    city: "São Paulo, Brasil",
    status: "available",
    ticketUrl: "#",
  },
  {
    id: 1,
    date: "16 Maio 2026",
    dateISO: "2026-05-16",
    time: "14:00",
    venue: "Banda Kuwala",
    city: "Piracicaba, Brasil",
    status: "finished",
    ticketUrl: "#",
  },
]

export function ShowsSchedule() {
  const today = new Date()

  const upcomingShows = shows
    .filter((show) => new Date(show.dateISO) >= today)
    .sort(
      (a, b) =>
        new Date(a.dateISO).getTime() -
        new Date(b.dateISO).getTime()
    )

  const pastShows = shows
    .filter((show) => new Date(show.dateISO) < today)
    .sort(
      (a, b) =>
        new Date(b.dateISO).getTime() -
        new Date(a.dateISO).getTime()
    )

  return (
    <section id="shows" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">
            Agenda
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
            Próximos Shows
          </h2>
        </div>

        {/* Próximos Shows */}
        {upcomingShows.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingShows.map((show) => (
              <div
                key={show.id}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">

                  {/* Data */}
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg">{show.date}</span>
                  </div>

                  {/* Hora */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{show.time}</span>
                  </div>

                  {/* Local */}
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {show.venue}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{show.city}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {show.status === "soldout" && (
                    <Badge
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      Esgotado
                    </Badge>
                  )}

                  {show.status === "limited" && (
                    <Badge className="bg-primary/20 text-primary border border-primary">
                      Últimos Bilhetes
                    </Badge>
                  )}

                  <Button
                    asChild
                    disabled={show.status === "soldout"}
                    className={`${
                      show.status === "soldout"
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    } transition-all duration-300 group-hover:scale-105`}
                  >
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {show.status === "soldout"
                        ? "Indisponível"
                        : "Inscreva-se"}

                      {show.status !== "soldout" && (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Nenhum show agendado no momento.
          </p>
        )}

        {/* Histórico */}
        {pastShows.length > 0 && (
          <div className="mt-24">

            <div className="text-center mb-12">
              <span className="text-primary text-sm uppercase tracking-[0.3em]">
                Arquivo
              </span>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
                Histórico de Shows
              </h2>

              <p className="text-muted-foreground mt-4">
                Apresentações realizadas recentemente.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {pastShows.map((show) => (
                <div
                  key={show.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg border border-border bg-muted/30 opacity-80"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">

                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Calendar className="h-5 w-5" />
                      <span className="text-lg">{show.date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{show.time}</span>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {show.venue}
                      </h3>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{show.city}</span>
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant="secondary"
                    className="mt-4 md:mt-0 bg-green-600/10 text-green-600 border border-green-600/20"
                  >
                    Realizado
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rodapé */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Gostaria de levar um espetáculo ou oficina para sua cidade?
          </p>

          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Entre em Contato
          </Button>
        </div>

      </div>
    </section>
  )
}