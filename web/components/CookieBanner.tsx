'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-accepted')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-accepted', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-xs opacity-60 leading-relaxed max-w-xl">
          Diese Website verwendet ausschließlich technisch notwendige Cookies (Theme-Präferenz). Kein Tracking, keine Werbung.{' '}
          <Link href="/datenschutz" className="underline hover:opacity-100">Datenschutz</Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-6 py-2 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  )
}
