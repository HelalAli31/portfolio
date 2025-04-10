"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function Projects({ dict }: { dict: any }) {
  const { lang } = useLanguage()

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 -z-10 section-pattern opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.items.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col card-hover overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light"></div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-2">{project.emoji}</span>
                    <span>{project.title}</span>
                  </CardTitle>
                  <Badge variant="outline" className="w-fit bg-gold/10 text-gold-light">
                    {project.tech}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-1">
                    {project.description.map((item: string, i: number) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 animated-gradient-border border-gold/30 hover:bg-gold/10"
                  >
                    <a
                      href={
                        project.title.includes("Vacations")
                          ? "https://github.com/HelalAli31/Vacations-React"
                          : project.title.includes("Supermarket")
                            ? "https://github.com/HelalAli31/Supermarket-Angular"
                            : project.title.includes("The Fog Bank")
                              ? "https://github.com/HelalAli31/TFB"
                              : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  {project.website && (
                    <Button variant="outline" size="sm" asChild className="flex-1 animated-gradient-border">
                      <a
                        href={project.title.includes("The Fog Bank") ? "https://thefogbank.online" : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Website
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
