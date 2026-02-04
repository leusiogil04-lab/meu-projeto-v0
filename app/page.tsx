import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <EventsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}