import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false },
  alternates: { canonical: 'https://www.ideawithflo.com/datenschutz' },
}

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase opacity-100 hover:opacity-100 transition-opacity">← Back</Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-4">Legal</p>
        <h1 className="text-5xl font-light mb-16">Datenschutz&shy;erklärung</h1>

        <div className="flex flex-col gap-10 font-light opacity-100 leading-relaxed">

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">1. Verantwortlicher</h2>
            <p>Florian Huber e.U.<br />
            Mariahilferstraße 124/13a, A-1070 Wien<br />
            E-Mail: <a href="mailto:new@ideawithflo.com" className="underline">new@ideawithflo.com</a></p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">2. Erhobene Daten</h2>
            <p>Diese Website erhebt keine personenbezogenen Daten durch Tracking-Tools oder Cookies. Beim Besuch der Website werden durch den Hosting-Anbieter (Vercel) technisch notwendige Server-Logs gespeichert (IP-Adresse, Zeitstempel, aufgerufene Seiten). Diese Daten werden nicht mit anderen Daten zusammengeführt und nach spätestens 30 Tagen gelöscht.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">3. Kontaktaufnahme</h2>
            <p>Wenn Sie per E-Mail oder über sonstige Kontaktwege eine Anfrage senden, werden die angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für allfällige Anschlussfragen verarbeitet und nicht ohne Rechtsgrundlage an Dritte weitergegeben.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">4. Cookies</h2>
            <p>Diese Website verwendet ausschließlich technisch notwendige Cookies, insbesondere zur Speicherung der Theme-Präferenz (Hell/Dunkel). Es werden derzeit keine Tracking- oder Marketing-Cookies eingesetzt.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">5. Hosting</h2>
            <p>Diese Website wird gehostet bei Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA. Details zur Datenverarbeitung durch Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">vercel.com/legal/privacy-policy</a></p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">6. Inhalte (CMS)</h2>
            <p>Medieninhalte (Bilder, Texte) werden über Sanity.io bereitgestellt. Sanity Inc., 340 Pine Street #701, San Francisco, CA 94104. Details: <a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer" className="underline">sanity.io/legal/privacy</a></p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">7. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Wenden Sie sich dazu an: <a href="mailto:new@ideawithflo.com" className="underline">new@ideawithflo.com</a></p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">8. Beschwerderecht</h2>
            <p>Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:<br />
            Datenschutzbehörde, Barichgasse 40-42, 1030 Wien<br />
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline">dsb.gv.at</a></p>
          </div>

          <p className="font-mono text-xs opacity-100">Stand: April 2026</p>
        </div>
      </div>

      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="max-w-4xl mx-auto flex gap-6">
          <Link href="/impressum" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">Impressum</Link>
          <Link href="/datenschutz" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">Datenschutz</Link>
          <Link href="/agb" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">AGB</Link>
        </div>
      </footer>
    </div>
  )
}
