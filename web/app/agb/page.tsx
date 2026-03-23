import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB',
  robots: { index: false },
}

export default function AGB() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase opacity-100 hover:opacity-100 transition-opacity">← Back</Link>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-4">Legal</p>
        <h1 className="text-5xl font-light mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="font-mono text-xs opacity-100 mb-16">Florian Huber e.U. — Stand: März 2026</p>

        <div className="flex flex-col gap-10 font-light opacity-100 leading-relaxed">

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Aufträge zwischen Florian Huber e.U. (im Folgenden „Auftragnehmer") und dem Auftraggeber. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 2 Vertragsabschluss</h2>
            <p>Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung zustande. Änderungen und Ergänzungen bedürfen der Schriftform.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 3 Leistungsumfang</h2>
            <p>Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung. Zusätzliche Leistungen, die über den vereinbarten Umfang hinausgehen, werden gesondert beauftragt und vergütet. Der Auftragnehmer behält sich das Recht vor, Teilleistungen an qualifizierte Dritte zu vergeben.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 4 Vergütung & Zahlungsbedingungen</h2>
            <p>Die Vergütung richtet sich nach dem vereinbarten Angebot. Sofern nichts anderes vereinbart, gilt:</p>
            <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
              <li>50 % des Auftragswertes als Anzahlung bei Auftragserteilung</li>
              <li>50 % bei Lieferung der Endergebnisse</li>
              <li>Zahlungsfrist: 14 Tage ab Rechnungsdatum</li>
              <li>Bei Zahlungsverzug werden Verzugszinsen in der gesetzlichen Höhe berechnet</li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 5 Urheberrecht & Nutzungsrechte</h2>
            <p>Alle im Rahmen des Auftrages erstellten Werke (Entwürfe, Konzepte, 3D-Modelle, Visualisierungen etc.) sind urheberrechtlich geschützt. Die vollständigen Nutzungsrechte gehen erst nach vollständiger Bezahlung des vereinbarten Honorars auf den Auftraggeber über. Bis dahin verbleiben alle Rechte beim Auftragnehmer. Der Auftragnehmer behält sich das Recht vor, die erstellten Arbeiten zu Referenzzwecken zu verwenden.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 6 Mitwirkungspflichten des Auftraggebers</h2>
            <p>Der Auftraggeber stellt alle für die Leistungserbringung notwendigen Informationen, Materialien und Freigaben rechtzeitig zur Verfügung. Verzögerungen, die durch mangelnde Mitwirkung des Auftraggebers entstehen, gehen nicht zu Lasten des Auftragnehmers. Mehraufwand durch nachträgliche Änderungen wird gesondert berechnet.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 7 Kündigung & Stornierung</h2>
            <p>Bei Stornierung eines Auftrages durch den Auftraggeber werden folgende Stornogebühren fällig:</p>
            <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
              <li>Bis 14 Tage vor Projektbeginn: 25 % des Auftragswertes</li>
              <li>Bis 7 Tage vor Projektbeginn: 50 % des Auftragswertes</li>
              <li>Weniger als 7 Tage oder nach Projektbeginn: 100 % des Auftragswertes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 8 Haftung</h2>
            <p>Der Auftragnehmer haftet nur für Schäden, die auf grober Fahrlässigkeit oder Vorsatz beruhen. Die Haftung ist auf den Auftragswert begrenzt. Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 9 Gewährleistung</h2>
            <p>Mängel sind unverzüglich, spätestens innerhalb von 14 Tagen nach Lieferung, schriftlich zu melden. Der Auftragnehmer ist berechtigt, Mängel durch Nachbesserung zu beheben. Schlägt die Nachbesserung fehl, hat der Auftraggeber das Recht auf Preisminderung.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 10 Vertraulichkeit</h2>
            <p>Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen geheim zu halten und nicht an Dritte weiterzugeben.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">§ 11 Anwendbares Recht & Gerichtsstand</h2>
            <p>Es gilt österreichisches Recht. Gerichtsstand ist Wien. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.</p>
          </div>

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
