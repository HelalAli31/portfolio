"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills({ dict }: { dict: any }) {
  const { lang } = useLanguage()
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  // Skill levels for visualization (out of 100)
  const skillLevels = {
    JavaScript: 90,
    React: 85,
    Angular: 80,
    "Node.js": 85,
    Python: 75,
    Java: 70,
    C: 65,
    PHP: 60,
    MySQL: 80,
    MongoDB: 75,
    "SQL Server": 70,
    HTML: 95,
    CSS: 90,
    Bootstrap: 85,
    jQuery: 80,
    WordPress: 75,
    Git: 85,
    "Visual Studio": 80,
    "VS Code": 90,
    Spider: 70,
    Windows: 90,
    Linux: 75,
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-gold/5"></div>

      <div className="max-w-4xl mx-auto px-4">
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

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dict.categories.map((category: any, index: number) => (
              <motion.div key={index} variants={item}>
                <Card className="card-hover overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-gold to-gold-light"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="text-xl mr-2">{category.emoji}</span>
                      <span>{category.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.split(", ").map((skill: string, i: number) => {
                        const cleanSkill = skill.replace(/[()]/g, "")
                        const level = skillLevels[cleanSkill as keyof typeof skillLevels] || 70

                        return (
                          <div
                            key={i}
                            className="relative"
                            onMouseEnter={() => setHoveredSkill(index * 100 + i)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <Badge
                              variant="secondary"
                              className="text-sm mb-1 cursor-pointer transition-all duration-300 hover:bg-gold/20"
                            >
                              {cleanSkill}
                            </Badge>
                            {hoveredSkill === index * 100 + i && (
                              <div className="absolute -bottom-6 left-0 w-full">
                                <div className="skill-bar">
                                  <motion.div
                                    className="skill-progress"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${level}%` }}
                                    transition={{ duration: 0.5 }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div variants={item}>
            <Card className="card-hover overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gold-light to-gold"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{dict.languages.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {dict.languages.items.map((lang: any, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-gradient-to-r from-gold/10 to-gold-light/10"
                    >
                      {lang.language}: {lang.level}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
