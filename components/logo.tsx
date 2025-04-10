"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export default function Logo() {
  const { lang } = useLanguage()

  return (
    <Link href="#home" className="flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-10 h-10 mr-2 rounded-full overflow-hidden bg-black border-2 border-gold flex items-center justify-center"
      >
        <span className="text-gold font-bold text-xl">HA</span>
      </motion.div>
      <span className="text-xl font-bold tracking-tight gradient-text">Helal Ali</span>
    </Link>
  )
}
