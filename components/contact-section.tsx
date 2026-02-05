"use client"

import React, { useEffect, useRef, useState } from "react"
import { Instagram, Youtube, Mail, Linkedin, Loader2 } from "lucide-react" // Adicionei Loader2
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Estado essencial
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // PARTE ESSENCIAL: Lógica do Resend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Mensagem enviada!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Erro ao enviar.")
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            {"Let's Connect"}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Interested in collaborating, booking a performance, or organizing a 
            workshop? I would love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={cn(
            "mt-12 space-y-6 transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-12 bg-background border-border focus:border-primary rounded-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12 bg-background border-border focus:border-primary rounded-sm"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={6}
              className="bg-background border-border focus:border-primary rounded-sm resize-none"
              required
            />
          </div>
          <div className="text-center">
            {/* BOTÃO COM LOADING */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-6 h-auto bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              {isSubmitting ? <Loader2 className="animate-spin h-4 w-4" /> : "Send Message"}
            </Button>
          </div>
        </form>

        {/* Social Links */}
        <div
          className={cn(
            "mt-16 flex items-center justify-center gap-6 transition-all duration-1000 ease-out delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <a
            href="https://www.instagram.com/leusiogil7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@leusiogil7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
            aria-label="YouTube"
          >       
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/leusio-gil-b9a111253/"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}