"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About({ dict }: { dict: any }) {
  const { lang } = useLanguage()

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 section-pattern opacity-30"></div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">{dict.title}</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden animated-gradient-border">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-light/20"></div>
              <Image
                src="/images/helal-profile.png"
                alt="Helal Ali"
                width={192}
                height={192}
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-6 rounded-lg bg-card shadow-lg border border-border/50">
              <p className="text-lg leading-relaxed text-balance">{dict.summary}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
