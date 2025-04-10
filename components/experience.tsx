"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function Experience({ dict }: { dict: any }) {
  const { lang } = useLanguage()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 to-background"></div>

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
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Work Experience */}
          <motion.div variants={item}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-gold/10 mr-3">
                <Briefcase className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold">{dict.title}</h3>
            </div>

            <div className="space-y-6">
              {dict.jobs.map((job: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-hover overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-gold to-gold-light"></div>
                    <CardHeader>
                      <CardTitle>
                        <span className="text-xl">{job.title}</span>
                        <span className="text-gold"> @ {job.company}</span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{job.period}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {job.responsibilities.map((item: string, i: number) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={item}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-gold/10 mr-3">
                <GraduationCap className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold">{dict.education.title}</h3>
            </div>

            <Card className="card-hover overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gold-light to-gold"></div>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl">{dict.education.degree}</span>
                  <span className="text-gold"> @ {dict.education.institution}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{dict.education.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-2 font-medium">{dict.education.graduation}</p>
                <p className="text-muted-foreground">{dict.education.courses}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={item}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-gold/10 mr-3">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold">{dict.certifications.title}</h3>
            </div>

            <Card className="card-hover overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gold to-gold-light"></div>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl">{dict.certifications.name}</span>
                  <span className="text-gold"> @ {dict.certifications.institution}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{dict.certifications.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {dict.certifications.description.map((item: string, i: number) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
