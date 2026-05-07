import { Instagram, Twitter, Youtube, Music2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music2, href: "#", label: "Spotify" },
]

const footerLinks = [
  {
    title: "Música",
    links: [
      { label: "Discografia", href: "#musica" },
      { label: "Álbuns", href: "#" },
      { label: "Singles", href: "#" },
      { label: "Remixes", href: "#" },
    ],
  },
  {
    title: "Shows",
    links: [
      { label: "Agenda", href: "#shows" },
      { label: "Bilhetes", href: "#" },
      { label: "VIP", href: "#" },
      { label: "Meetups", href: "#" },
    ],
  },
  {
    title: "Mais",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Loja", href: "#loja" },
      { label: "Imprensa", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Junte-se à Comunidade
              </h3>
              <p className="text-muted-foreground font-serif">
                Receba novidades, lançamentos exclusivos e acesso antecipado a bilhetes.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="O seu email"
                  className="pl-10 bg-secondary border-border"
                />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscrever
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="text-3xl font-bold tracking-tighter">
              <span className="text-primary">LEUSIO</span>
              <span className="text-foreground">GIL</span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm font-serif leading-relaxed">
              Uma jornada sonora através de paisagens Afrotradicionais e melodias que transcendem o tempo.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-serif"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-serif">
              © 2026 LEUSIO GIL. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
