'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
  { href: '/new', label: 'Start a Project', highlight: true },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — appears in navbar after scrolling */}
        <a href="#" className="flex items-center">
          <div
            className="transition-all duration-500 ease-out overflow-hidden"
            style={{
              width: scrolled ? '32px' : '0px',
              opacity: scrolled ? 1 : 0,
            }}
          >
            <Image
              src={theme === 'dark' ? '/Logo_white@300x.png' : '/Logo@300x.png'}
              alt="Florian Huber"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={l.highlight
                ? 'font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-4 py-2 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors'
                : 'font-mono text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity'
              }
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2">
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-8 flex flex-col gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
