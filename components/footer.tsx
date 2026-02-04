import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="#home"
            className="font-serif text-lg font-medium tracking-wide"
          >
            Leusio Gil
          </Link>
          <p className="text-sm text-background/60">
            © {currentYear} Leusio Gil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
