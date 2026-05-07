"use client"

import { useState } from "react"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">Fale Connosco</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 text-balance">
            Contacto
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-serif">
            Tem uma pergunta, proposta ou apenas quer dizer olá? Estamos aqui para ouvir.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-8 border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground font-serif">
                  Obrigado pelo contacto. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nome
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="O seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="pl-10 bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="pl-10 bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Sobre o que gostaria de falar?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Mensagem
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      placeholder="Escreva a sua mensagem aqui..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="pl-10 bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      A enviar...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Additional Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-1">Booking</h4>
              <p className="text-muted-foreground text-sm font-serif">leusiogil04@gmail.com</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-1">Imprensa</h4>
              <p className="text-muted-foreground text-sm font-serif">gilartur114@gmail.com</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-1">Geral</h4>
              <p className="text-muted-foreground text-sm font-serif">leusiogil04@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
