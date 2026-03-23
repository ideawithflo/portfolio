import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Konfetti } from '@/components/Konfetti'
import { CookieBanner } from '@/components/CookieBanner'
import { FeaturedProject } from '@/components/FeaturedProject'
import { ProjectSlider } from '@/components/ProjectSlider'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Konfetti />
      <Navbar />
      <main>
        <Hero />
        <ProjectSlider />
        <FeaturedProject />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs opacity-100">
            © {new Date().getFullYear()} Florian Huber e.U. — Vienna
          </span>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">Impressum</a>
            <a href="/datenschutz" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">Datenschutz</a>
            <a href="/agb" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">AGB</a>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </>
  )
}
