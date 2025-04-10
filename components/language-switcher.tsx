"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
  const { lang } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    const newLang = lang === "en" ? "he" : "en"
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPathname)
  }

  return (
    <Button variant="outline" size="sm" onClick={switchLanguage} className="px-3 py-2 animated-gradient-border">
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {lang === "en" ? "עברית" : "English"}
      </motion.span>
    </Button>
  )
}
