import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Konfetti } from '@/components/Konfetti'
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
          <span className="font-mono text-xs opacity-30">
            © {new Date().getFullYear()} Florian Huber e.U. — Vienna
          </span>
          <span className="font-mono text-xs opacity-30">Industrial Designer</span>
        </div>
      </footer>
    </>
  )
}
