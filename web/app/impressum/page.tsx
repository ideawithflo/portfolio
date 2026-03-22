import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">← Back</Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-4">Legal</p>
        <h1 className="text-5xl font-light mb-16">Impressum</h1>

        <div className="flex flex-col gap-10 font-light opacity-70 leading-relaxed">

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Unternehmensangaben</h2>
            <p>Florian Huber e.U.<br />
            Mariahilferstraße 124/13a<br />
            A-1070 Wien<br />
            Österreich</p>
            <p className="mt-2">UID-Nr.: ATU82798206</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:new@ideawithflo.com" className="underline hover:opacity-100 transition-opacity">new@ideawithflo.com</a><br />
            Web: <a href="https://ideawithflo.com" className="underline hover:opacity-100 transition-opacity">ideawithflo.com</a></p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Unternehmensgegenstand</h2>
            <p>Industrial Design, Produktentwicklung, Konzeption und Designberatung.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Gerichtsstand</h2>
            <p>Gerichtsstand: Wien, Österreich</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Anwendbares Recht</h2>
            <p>Es gilt österreichisches Recht. Anwendbares Recht ist das Recht der Republik Österreich.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Haftungsausschluss</h2>
            <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-3">Urheberrecht</h2>
            <p>Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem österreichischen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedarf der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>

        </div>
      </div>

      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="max-w-4xl mx-auto flex gap-6">
          <Link href="/impressum" className="font-mono text-xs opacity-40 hover:opacity-100 transition-opacity">Impressum</Link>
          <Link href="/datenschutz" className="font-mono text-xs opacity-40 hover:opacity-100 transition-opacity">Datenschutz</Link>
        </div>
      </footer>
    </div>
  )
}
