"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function Hero({ dict }: { dict: any }) {
  const { lang } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Canvas animation for background particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `hsla(${Math.random() * 60 + 190}, 100%, 50%, ${Math.random() * 0.3 + 0.1})`
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.speedX
        this.y += this.speedY

        // Mouse interaction - subtle attraction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          this.x += dx * 0.01
          this.y += dy * 0.01
        }

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y)
        particle.draw(ctx)
      })

      // Connect particles with lines
      connectParticles(ctx, particles)

      requestAnimationFrame(animate)
    }

    // Connect nearby particles with lines
    const connectParticles = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [mousePosition])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ opacity: 0.8 }} />

      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-background via-background to-gold/10 opacity-80"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-muted-foreground mb-2"
          >
            {dict.greeting}
          </motion.h2>

          {/* Name with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
            className="relative py-10 my-4"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gold/10 to-gold-light/10 blur-xl animate-pulse-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 border border-gold/20 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 border border-gold-light/20 rounded-full animate-float"></div>
            </div>

            {/* Name text */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-0 relative z-10">
              <span className="gradient-text inline-block animate-gradient-x">{dict.name}</span>
            </h1>

            {/* Decorative line */}
            <div className="h-1 w-40 md:w-60 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mt-4 animate-pulse-slow"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-2xl md:text-3xl font-semibold mb-6 text-balance">{dict.title}</p>
            <p className="text-muted-foreground mb-8">📍 {dict.location} | 📧 Helalali1@hotmail.com | 📱 054-3596761</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 transition-opacity text-black"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                {dict.cta}
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="animated-gradient-border">
              <a href="#projects">
                <Github className="mr-2 h-4 w-4" />
                Projects
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="https://github.com/HelalAli31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/helal-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="#about"
            className="animate-float p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
