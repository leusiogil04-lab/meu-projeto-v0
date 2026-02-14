"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  // Define o idioma inicial como Inglês (EN)
  const [language, setLanguage] = useState("EN")

  const toggleLanguage = () => {
    // Se for EN, muda para PT. Se for PT, muda para EN.
    const newLang = language === "EN" ? "PT" : "EN"
    setLanguage(newLang)
    
    // Dispara um evento customizado para que o restante do site saiba da mudança
    window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }))
  }

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm group cursor-pointer"
    >
      <Globe className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
      <span className="text-[10px] font-bold text-white tracking-widest leading-none">
        {language}
      </span>
    </button>
  )
}