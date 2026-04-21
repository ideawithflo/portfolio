import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB',
  robots: { index: false },
  alternates: { canonical: 'https://www.ideawithflo.com/agb' },
}

const sections = [
  {
    title: '§ 1 Geltung, Anwendungsbereich',
    body: (
      <>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Rechtsbeziehungen zwischen Florian Huber e.U.,
          Mariahilferstraße 124/13a, A-1070 Wien, Österreich (im Folgenden „Auftragnehmer“) und seinen Kunden (im
          Folgenden „Auftraggeber“) in der zum Zeitpunkt des Vertragsabschlusses gültigen Fassung.
        </p>
        <p className="mt-3">
          Die AGB gelten ausschließlich gegenüber Unternehmern im Sinne des UGB. Abweichende oder ergänzende
          Geschäftsbedingungen des Auftraggebers werden nicht Vertragsbestandteil, außer ihrer Geltung wird
          ausdrücklich und schriftlich zugestimmt.
        </p>
        <p className="mt-3">
          Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen
          unberührt.
        </p>
      </>
    ),
  },
  {
    title: '§ 2 Angebote und Vertragsabschluss',
    body: (
      <>
        <p>
          Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als bindend
          bezeichnet sind. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung, Unterfertigung eines
          Angebots, Freigabe per E-Mail oder durch tatsächlichen Beginn der Leistungserbringung zustande.
        </p>
        <p className="mt-3">
          Der Umfang der geschuldeten Leistungen ergibt sich aus Angebot, Leistungsbeschreibung,
          Briefingprotokoll, Auftragsbestätigung und gegebenenfalls schriftlich dokumentierten Änderungswünschen.
        </p>
      </>
    ),
  },
  {
    title: '§ 3 Leistungsumfang und Änderungswünsche',
    body: (
      <>
        <p>
          Der Auftragnehmer erbringt insbesondere Leistungen in den Bereichen Industrial Design, Produktentwicklung,
          Konzeption, Rapid Prototyping, Designberatung, Visualisierung, digitale Konzepte sowie AI/KI-gestützte
          Kreativ- und Entwicklungsleistungen.
        </p>
        <p className="mt-3">
          Nachträgliche Änderungen, Erweiterungen oder zusätzliche Leistungen, die nicht vom vereinbarten
          Leistungsumfang umfasst sind, werden gesondert nach Aufwand oder auf Basis eines ergänzenden Angebots
          verrechnet. Innerhalb des vereinbarten Rahmens besteht gestalterische und methodische Freiheit des
          Auftragnehmers.
        </p>
      </>
    ),
  },
  {
    title: '§ 4 Mitwirkungspflichten des Auftraggebers',
    body: (
      <>
        <p>
          Der Auftraggeber stellt alle für die Leistungserbringung erforderlichen Informationen, Unterlagen,
          Zugänge, Dateien, Freigaben, Materialien und Ansprechpartner rechtzeitig, vollständig und in verwertbarer
          Form zur Verfügung. Verzögerungen oder Mehraufwände, die durch unrichtige, unvollständige oder verspätete
          Mitwirkung entstehen, gehen zu Lasten des Auftraggebers.
        </p>
        <p className="mt-3">
          Der Auftraggeber ist verpflichtet, übermittelte Entwürfe, Konzepte, Texte, Visualisierungen, Prototypen,
          technische Zwischenstände und sonstige Arbeitsergebnisse innerhalb von drei Werktagen zu prüfen und
          schriftlich freizugeben oder konkret zu beanstanden. Erfolgt innerhalb dieser Frist keine Rückmeldung,
          gelten die betreffenden Leistungen als genehmigt.
        </p>
      </>
    ),
  },
  {
    title: '§ 5 Fremdleistungen, Materialien und Rechte Dritter',
    body: (
      <>
        <p>
          Der Auftragnehmer ist berechtigt, Leistungen ganz oder teilweise selbst zu erbringen oder durch fachkundige
          Dritte, freie Mitarbeiter, Hersteller, Softwareanbieter oder sonstige Erfüllungsgehilfen erbringen zu
          lassen.
        </p>
        <p className="mt-3">
          Externe Kosten, insbesondere für Modelle, Prototypen, 3D-Druck, Fertigung, Reiseaufwand, Stockmaterial,
          Fonts, Software, Hosting, APIs, Lizenzen, Domains, Hardware, Testaufbauten, Versand oder Fremdgewerke,
          sind vom Auftraggeber gesondert zu tragen, sofern nicht ausdrücklich anders vereinbart.
        </p>
        <p className="mt-3">
          Der Auftraggeber sichert zu, dass von ihm bereitgestellte Inhalte, Daten, Logos, Bilder, Marken,
          Texte, CAD-Dateien und sonstige Unterlagen frei von Rechten Dritter sind oder für den vereinbarten Zweck
          wirksam genutzt werden dürfen. Der Auftraggeber hält den Auftragnehmer bei Ansprüchen Dritter aus einer
          Verletzung solcher Rechte schad- und klaglos.
        </p>
      </>
    ),
  },
  {
    title: '§ 6 AI/KI-Leistungen, Prototypen und technische Umsetzungen',
    body: (
      <>
        <p>
          Soweit Leistungen unter Einsatz von AI/KI-Systemen, Automationen oder Drittsoftware erbracht werden,
          schuldet der Auftragnehmer keinen bestimmten wirtschaftlichen Erfolg, keine dauerhafte Verfügbarkeit dieser
          Systeme und keine vollständige Fehlerfreiheit, Schutzrechtsfreiheit oder rechtliche Unbedenklichkeit der
          generierten Ergebnisse. Der Auftraggeber hat Resultate vor produktiver, rechtlicher, technischer oder
          kommerzieller Nutzung eigenständig zu prüfen.
        </p>
        <p className="mt-3">
          Bei Konzepten, Prototypen, Visualisierungen, Renderings, 3D-Daten, Musterteilen und Rapid-Prototyping-
          Leistungen handelt es sich, sofern nicht ausdrücklich anders vereinbart, um Entwicklungs- und
          Entscheidungsgrundlagen. Serienreife, Zertifizierungen, Materialfreigaben, Sicherheitsprüfungen,
          Zulassungen, Produktionsfreigaben oder normkonforme technische Dokumentation sind nur geschuldet, wenn sie
          ausdrücklich beauftragt wurden.
        </p>
      </>
    ),
  },
  {
    title: '§ 7 Termine und Leistungshindernisse',
    body: (
      <>
        <p>
          Angegebene Liefer- und Leistungstermine sind grundsätzlich unverbindliche Zieltermine, sofern sie nicht
          ausdrücklich schriftlich als verbindlich vereinbart wurden. Fristen verschieben sich angemessen, wenn
          Mitwirkungsleistungen, Freigaben oder Unterlagen des Auftraggebers verspätet erfolgen oder wenn zusätzliche
          Leistungen beauftragt werden.
        </p>
        <p className="mt-3">
          Ereignisse höherer Gewalt, Ausfälle von Drittanbietern, Lieferengpässe, technische Störungen,
          behördliche Maßnahmen oder sonstige vom Auftragnehmer nicht zu vertretende Umstände verlängern die
          Leistungsfrist für die Dauer der Behinderung zuzüglich einer angemessenen Anlaufzeit.
        </p>
      </>
    ),
  },
  {
    title: '§ 8 Honorar, Abrechnung und Zahlung',
    body: (
      <>
        <p>
          Sämtliche Honorare verstehen sich in Euro netto zuzüglich gesetzlicher Umsatzsteuer. Mangels abweichender
          Vereinbarung ist der Auftragnehmer berechtigt, Vorschüsse, Akontozahlungen und Teilrechnungen entsprechend
          dem Projektfortschritt zu stellen.
        </p>
        <p className="mt-3">
          Rechnungen sind binnen 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug gelten
          die gesetzlichen Verzugszinsen für Unternehmergeschäfte. Zusätzlich sind angemessene Mahn-, Inkasso- und
          Rechtsverfolgungskosten zu ersetzen.
        </p>
        <p className="mt-3">
          Kostenvoranschläge sind unverbindlich. Ist eine Überschreitung von mehr als 15 % absehbar, wird der
          Auftragnehmer den Auftraggeber informieren. Bis zu einer Überschreitung von 15 % gilt die Zustimmung als
          vorweg erteilt, soweit die Mehrkosten sachlich durch den Projektverlauf begründet sind.
        </p>
        <p className="mt-3">
          Der Auftraggeber ist nicht berechtigt, mit eigenen Forderungen aufzurechnen, außer diese wurden schriftlich
          anerkannt oder rechtskräftig festgestellt.
        </p>
      </>
    ),
  },
  {
    title: '§ 9 Zurückbehaltungsrecht und vorzeitige Vertragsbeendigung',
    body: (
      <>
        <p>
          Bei Zahlungsverzug oder wesentlichen Verletzungen von Mitwirkungspflichten ist der Auftragnehmer berechtigt,
          Leistungen bis zur vollständigen Klärung auszusetzen. Bereits erbrachte Teilleistungen sind in diesem Fall
          vertragsgemäß zu vergüten.
        </p>
        <p className="mt-3">
          Kündigt oder storniert der Auftraggeber einen bereits erteilten Auftrag vorzeitig oder bricht er ein
          Projekt ohne vom Auftragnehmer zu vertretenden wichtigen Grund ab, sind die bis dahin erbrachten Leistungen
          samt angefallenen Fremdkosten zu vergüten. Darüber hinaus ist der Auftragnehmer berechtigt, den entfallenen
          Resthonoraranspruch gemäß § 1168 ABGB geltend zu machen, abzüglich dessen, was infolge des Unterbleibens
          der Leistung erspart oder anderweitig erworben wurde.
        </p>
      </>
    ),
  },
  {
    title: '§ 10 Präsentationen, Konzepte und Ideenschutz',
    body: (
      <>
        <p>
          Bereits die Einladung zur Ausarbeitung von Präsentationen, Konzepten, Entwürfen, Strategieansätzen,
          Designrichtungen oder sonstigen Vorleistungen begründet, sofern nichts anderes schriftlich vereinbart wurde,
          einen entgeltlichen Auftrag. Wird die Höhe der Vergütung für eine Präsentation oder Konzeptphase nicht
          gesondert vereinbart, steht dem Auftragnehmer eine angemessene Vergütung zu.
        </p>
        <p className="mt-3">
          Sämtliche im Rahmen von Pitches, Präsentationen oder Angebotsphasen vorgestellten Ideen, Konzepte,
          Visualisierungen, Texte, Strukturen, Gestaltungsansätze und sonstigen Vorarbeiten dürfen ohne ausdrückliche
          schriftliche Zustimmung des Auftragnehmers weder genutzt, weiterentwickelt, an Dritte weitergegeben noch
          wirtschaftlich verwertet werden, auch wenn sie keine urheberrechtliche Werkhöhe erreichen.
        </p>
      </>
    ),
  },
  {
    title: '§ 11 Nutzungsrechte, offene Daten und Referenznutzung',
    body: (
      <>
        <p>
          Sämtliche Urheber-, Eigentums- und sonstigen Schutzrechte an Entwürfen, Konzepten, 3D-Modellen,
          Visualisierungen, CAD-Daten, Prototypen, Texten, Präsentationen, Dokumentationen, Quellcodes und sonstigen
          Arbeitsergebnissen verbleiben bis zur vollständigen Bezahlung beim Auftragnehmer.
        </p>
        <p className="mt-3">
          Mit vollständiger Bezahlung erwirbt der Auftraggeber das einfache, nicht übertragbare Nutzungsrecht im
          ausdrücklich vereinbarten Umfang und für den vereinbarten Zweck. Eine darüber hinausgehende Nutzung,
          Bearbeitung, Serienverwertung, Mehrfachverwendung, internationale Nutzung oder Weitergabe an Dritte bedarf
          einer gesonderten schriftlichen Vereinbarung.
        </p>
        <p className="mt-3">
          Offene Dateien, editierbare Produktionsdaten, Arbeitsdateien, Quellcodes, Prompt-Bibliotheken,
          Parametriken, Rohdaten, Entwicklungsstände oder sonstige interne Herstellungsgrundlagen sind nur dann
          herauszugeben, wenn dies ausdrücklich schriftlich vereinbart und gesondert vergütet wurde.
        </p>
        <p className="mt-3">
          Der Auftragnehmer ist berechtigt, abgeschlossene oder veröffentlichte Projekte unter Nennung des Namens und
          gegebenenfalls des Logos des Auftraggebers als Referenz für Eigenwerbung, Portfolio, Website, Vorträge und
          Social Media zu verwenden, sofern nicht berechtigte Geheimhaltungsinteressen des Auftraggebers
          entgegenstehen oder schriftlich etwas anderes vereinbart wurde.
        </p>
      </>
    ),
  },
  {
    title: '§ 12 Gewährleistung',
    body: (
      <>
        <p>
          Mängel sind vom Auftraggeber unverzüglich, spätestens jedoch innerhalb von acht Tagen ab Lieferung oder
          Freigabe, verdeckte Mängel innerhalb von acht Tagen ab Entdeckung, schriftlich und konkret zu rügen.
          Unterbleibt eine fristgerechte Mängelrüge, gilt die Leistung als genehmigt.
        </p>
        <p className="mt-3">
          Im Fall berechtigter und rechtzeitiger Mängelrüge hat der Auftragnehmer zunächst das Recht auf Verbesserung
          oder Austausch innerhalb angemessener Frist. Erst wenn die Verbesserung fehlschlägt oder unzumutbar ist,
          kann der Auftraggeber Preisminderung verlangen. Die Gewährleistungsfrist beträgt sechs Monate ab Übergabe
          bzw. Freigabe.
        </p>
      </>
    ),
  },
  {
    title: '§ 13 Haftung',
    body: (
      <>
        <p>
          Der Auftragnehmer haftet, ausgenommen Personenschäden, nur für Schäden, die vorsätzlich oder grob fahrlässig
          verursacht wurden. Eine Haftung für leichte Fahrlässigkeit, entgangenen Gewinn, mittelbare Schäden,
          Mangelfolgeschäden, Datenverluste, Produktionsausfälle oder Schäden aus Ansprüchen Dritter ist, soweit
          gesetzlich zulässig, ausgeschlossen.
        </p>
        <p className="mt-3">
          Die Haftung des Auftragnehmers ist der Höhe nach mit dem Netto-Auftragswert des betroffenen Projekts
          begrenzt. Dies gilt auch für Ansprüche aus Verzug, Unmöglichkeit, positiver Vertragsverletzung und culpa in
          contrahendo.
        </p>
        <p className="mt-3">
          Für rechtliche, technische, regulatorische oder wirtschaftliche Entscheidungen, die der Auftraggeber auf
          Basis der Leistungen trifft, bleibt der Auftraggeber selbst verantwortlich. Insbesondere obliegt ihm die
          Prüfung auf marken-, design-, urheber-, wettbewerbs-, produktsicherheits-, zulassungs- und
          branchenspezifische Anforderungen.
        </p>
      </>
    ),
  },
  {
    title: '§ 14 Vertraulichkeit und Datenschutz',
    body: (
      <>
        <p>
          Beide Vertragsparteien verpflichten sich, im Rahmen der Zusammenarbeit erhaltene vertrauliche Informationen,
          Unterlagen und Geschäftsgeheimnisse der jeweils anderen Partei geheim zu halten und nur für die
          Vertragsdurchführung zu verwenden.
        </p>
        <p className="mt-3">
          Personenbezogene Daten werden ausschließlich im Rahmen der gesetzlichen Bestimmungen und der auf der Website
          veröffentlichten Datenschutzerklärung verarbeitet.
        </p>
      </>
    ),
  },
  {
    title: '§ 15 Anwendbares Recht und Gerichtsstand',
    body: (
      <>
        <p>
          Es gilt österreichisches materielles Recht unter Ausschluss seiner Verweisungsnormen und des UN-Kaufrechts.
          Erfüllungsort ist Wien.
        </p>
        <p className="mt-3">
          Für sämtliche Streitigkeiten aus oder im Zusammenhang mit dem Vertragsverhältnis wird, soweit gesetzlich
          zulässig, die ausschließliche Zuständigkeit des sachlich zuständigen Gerichts in Wien vereinbart.
        </p>
      </>
    ),
  },
]

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
        <h1 className="text-4xl sm:text-5xl leading-[0.95] sm:leading-tight font-light mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="font-mono text-xs opacity-100 mb-6">Florian Huber e.U. — Stand: April 2026</p>
        <p className="font-light opacity-100 leading-relaxed mb-16">
          Diese AGB sind auf B2B-Projekte zugeschnitten, insbesondere für Industrial Design, Produktentwicklung,
          Prototyping, Designberatung sowie digitale und AI/KI-gestützte Leistungen.
        </p>

        <div className="flex flex-col gap-10 font-light opacity-100 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-mono text-xs tracking-widest uppercase opacity-100 mb-3">{section.title}</h2>
              {section.body}
            </section>
          ))}
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
