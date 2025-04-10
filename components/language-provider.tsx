"use client"

import type React from "react"

import { createContext, useContext } from "react"
import type { Locale } from "@/lib/i18n-config"

type LanguageContextType = {
  lang: Locale
}

const LanguageContext = createContext<LanguageContextType>({ lang: "en" })

export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: Locale
}) {
  return <LanguageContext.Provider value={{ lang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
