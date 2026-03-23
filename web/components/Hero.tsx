'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

export function Hero() {
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoSrc = mounted && theme === 'dark' ? '/Logo_white@300x.png' : '/Logo@300x.png'

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden">
      <div
        className="flex flex-col items-center justify-center transition-all duration-500 ease-out"
        style={{
          transform: scrolled ? 'scale(0.3) translateY(-120px)' : 'scale(1) translateY(0)',
          opacity: scrolled ? 0 : 1,
        }}
      >
        <Image
          src={logoSrc}
          alt="Florian Huber"
          width={260}
          height={260}
          className="object-contain select-none"
          priority
        />
        <p className="font-mono text-xs tracking-widest uppercase opacity-100 mt-8">
          Industrial Designer — Vienna, Austria
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-6 py-3 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase opacity-100 hover:opacity-100 transition-opacity"
          >
            Get in Touch →
          </a>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'} animate-bounce`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}
