import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { type Locale, i18n } from "@/lib/i18n-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Helal Ali - Portfolio",
  description: "Software Engineer & Fullstack Developer Portfolio",
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} dir={params.lang === "he" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider lang={params.lang}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
