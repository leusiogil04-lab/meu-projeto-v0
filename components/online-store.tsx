"use client"

import { ShoppingBag, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const whatsappNumber = "5515997205888"

const products = [
  {
    id: 1,
    name: "T-Shir Clamor",
    price: "R$ 120",
    image: "/imagens/produto1.jpg",
    category: "Vestuário",
    isNew: true,
  },

  {
    id: 3,
    name: "Hoodie Tour 2026",
    price: "R$ 180",
    image: "/imagens/produto3.jpg",
    category: "Vestuário",
    isNew: true,
  },

  {
    id: 4,
    name: "Poster Assinado",
    price: "R$ 80",
    image: "/imagens/produto4.jpg",
    category: "Colecionáveis",
    isNew: false,
  },
]

export function OnlineStore() {
  return (
    <section id="loja" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">
            Merchandise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Loja Oficial
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-serif">
            Merchandise exclusivo e edições limitadas diretamente do artista
          </p>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => {

            const whatsappMessage = encodeURIComponent(
              `Olá! Quero comprar o produto: ${product.name} - ${product.price}`
            )

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

            return (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >

                {/* Image */}
                <div className="relative aspect-square overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Novo
                    </Badge>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5">

                  <span className="text-xs uppercase tracking-wider text-primary">
                    {product.category}
                  </span>

                  <h3 className="font-semibold text-foreground mt-2 text-lg">
                    {product.name}
                  </h3>

                  <p className="text-2xl font-bold text-primary mt-3">
                    {product.price}
                  </p>

                  {/* Buy Button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-5"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-base font-semibold transition-all duration-300">

                      <MessageCircle className="mr-2 h-5 w-5" />

                      Comprar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 rounded-full text-lg"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />

              Falar com a Loja
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}