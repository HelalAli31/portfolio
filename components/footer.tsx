"use client";

import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer({ dict }: { dict: any }) {
  const { lang } = useLanguage();

  return (
    <footer className="py-8 border-t relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground text-center">
            {dict.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
