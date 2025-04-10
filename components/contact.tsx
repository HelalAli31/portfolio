"use client";

import { useLanguage } from "./language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact({ dict }: { dict: any }) {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 -z-10 section-pattern opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            {dict.title}
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            className="w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="card-hover overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gold to-gold-light"></div>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-center group">
                    <div className="p-3 rounded-full bg-gold/10 mr-3 group-hover:bg-gold/20 transition-colors">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <a
                      href={`mailto:${dict.email}`}
                      className="hover:text-gold transition-colors"
                    >
                      {dict.email}
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <div className="p-3 rounded-full bg-gold/10 mr-3 group-hover:bg-gold/20 transition-colors">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <a
                      href="https://wa.me/972543596761?text=Hi%2C%20I%20saw%20your%20website%21"
                      className="hover:text-gold transition-colors"
                    >
                      {dict.phone}
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <div className="p-3 rounded-full bg-gold/10 mr-3 group-hover:bg-gold/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-gold" />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/helal-ali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {dict.linkedin}
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <div className="p-3 rounded-full bg-gold/10 mr-3 group-hover:bg-gold/20 transition-colors">
                      <Github className="h-5 w-5 text-gold" />
                    </div>
                    <a
                      href="https://github.com/HelalAli31"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {dict.github}
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
