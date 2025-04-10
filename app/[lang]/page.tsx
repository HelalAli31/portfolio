import type { Locale } from "@/lib/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-background">
      <Navbar dict={dict.navbar} />
      <div className="container mx-auto px-4 py-8">
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Experience dict={dict.experience} />
        <Projects dict={dict.projects} />
        <Skills dict={dict.skills} />
        <Contact dict={dict.contact} />
        <Footer dict={dict.footer} />
      </div>
    </main>
  )
}
