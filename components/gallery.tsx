"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    id: 1,
    src: "/imagens/fotogaleria1.jpg",
    alt: "Foto 1",
    category: "Galeria",
  },
  {
    id: 2,
    src: "/imagens/fotogaleria2.jpg",
    alt: "Foto 2",
    category: "Galeria",
  },
  {
    id: 3,
    src: "/imagens/fotogaleria3.jpg",
    alt: "Foto 3",
    category: "Galeria",
  },
  {
    id: 4,
    src: "/imagens/fotogaleria4.jpg",
    alt: "Foto 4",
    category: "Galeria",
  },
  {
    id: 5,
    src: "/imagens/fotogaleria5.jpg",
    alt: "Foto 5",
    category: "Galeria",
  },
   {
    id: 7,
    src: "/imagens/fotogaleria7.jpg",
    alt: "Foto 7",
    category: "Galeria",
  },
  {
    id: 8,
    src: "/imagens/divulga5.jpg",
    alt: "Foto 8",
    category: "Galeria",
  },
  {
    id: 9,
    src: "/imagens/fotogaleria9.jpg",
    alt: "Foto 9",
    category: "Galeria",
  },
  {
    id: 10,
    src: "/imagens/fotogaleria10.jpg",
    alt: "Foto 10",
    category: "Galeria",
  },
  {
    id: 11,
    src: "/imagens/fotogaleria11.jpg",
    alt: "Foto 11",
    category: "Galeria",
  },
  {
    id: 12,
    src: "/imagens/fotogaleria12.jpg",
    alt: "Foto 12",
    category: "Galeria",
  },
  {
    id: 13,
    src: "/imagens/fotogaleria13.jpg",
    alt: "Foto 13",
    category: "Galeria",
  },
  {
    id: 14,
    src: "/imagens/fotogaleria14.jpg",
    alt: "Foto 14",
    category: "Galeria",
  },
  {
    id: 15,
    src: "/imagens/fotogaleria15.jpg",
    alt: "Foto 15",
    category: "Galeria",
  },
  {
    id: 16,
    src: "/imagens/fotogaleria16.jpg",
    alt: "Foto 16",
    category: "Galeria",
  },
  {
    id: 17,
    src: "/imagens/fotogaleria17.jpg",
    alt: "Foto 17",
    category: "Galeria",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">
            Momentos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Galeria
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-wider text-primary">
                  {image.category}
                </span>

                <p className="text-sm text-foreground font-medium">
                  {image.alt}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-foreground hover:text-primary z-10"
              aria-label="Fechar"
            >
              <X className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 text-foreground hover:text-primary"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-10 w-10" />
            </Button>

            <div className="max-w-5xl max-h-[80vh] w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />

              <div className="text-center mt-4">
                <span className="text-primary text-sm uppercase tracking-wider">
                  {images[selectedImage].category}
                </span>

                <p className="text-foreground font-medium">
                  {images[selectedImage].alt}
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 text-foreground hover:text-primary"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-10 w-10" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}