import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AudioPlayer } from "@/components/audio-player"
import { ShowsSchedule } from "@/components/shows-schedule"
import { Gallery } from "@/components/gallery"
import { EPKSection } from "@/components/epk-section"
import { OnlineStore } from "@/components/online-store"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AudioPlayer />
        <ShowsSchedule />
        <Gallery />
        <EPKSection />
        <OnlineStore />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
