import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT copropriété PPE — Guide complet 2026',
    de: 'NIV-Kontrolle Stockwerkeigentum (StWE) — Vollständiger Leitfaden 2026',
    it: 'Controllo OIBT proprietà per piani (PPP) — Guida completa 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-copropriete-ppe` },
  };
}

export default async function CoproprietePPEPage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Wer ist für die NIV-Kontrolle im Stockwerkeigentum verantwortlich?', a: 'Jeder Stockwerkeigentümer ist für seine eigene Einheit verantwortlich. Die StWE-Gemeinschaft ist gemeinsam für die Gemeinschaftsanlagen (Keller, Tiefgarage, Treppenhaus) verantwortlich.' },
    { q: 'Kann die StWE-Verwaltung die NIV-Kontrolle für alle organisieren?', a: 'Ja, und es wird empfohlen. Die Verwaltung kann alle Kontrollen koordinieren, einen besseren Preis verhandeln und sicherstellen, dass keine Einheit die Frist verpasst.' },
    { q: 'Wer zahlt die NIV-Kontrolle der Gemeinschaftsanlagen im StWE?', a: 'Die Kosten werden gemäss den Wertquoten auf alle Stockwerkeigentümer aufgeteilt und über den gemeinsamen Erneuerungsfonds oder die Nebenkosten abgerechnet.' },
  ] : locale === 'it' ? [
    { q: 'Chi è responsabile del controllo OIBT nella proprietà per piani?', a: 'Ogni comproprietario è responsabile per la propria unità. La comunione PPP è responsabile congiuntamente per gli impianti comuni (cantine, autorimessa, scale).' },
  ] : [
    { q: 'Qui est responsable du contrôle OIBT en PPE ?', a: 'Chaque copropriétaire est responsable de sa propre unité. La communauté PPE est responsable conjointement des installations communes (caves, parking, escaliers, locaux techniques).' },
    { q: 'La gérance PPE peut-elle organiser le contrôle OIBT pour tous ?', a: 'Oui, et c\'est recommandé. La gérance peut coordonner tous les contrôles, négocier un meilleur prix groupé et s\'assurer qu\'aucune unité ne rate son échéance.' },
    { q: 'Qui paie le contrôle OIBT des parties communes en PPE ?', a: 'Les frais sont répartis entre tous les copropriétaires selon les quotes-parts et passés par le fonds de rénovation ou les charges communes.' },
    { q: 'Un copropriétaire peut-il refuser le contrôle OIBT ?', a: 'Non. Le contrôle OIBT est une obligation légale. Un copropriétaire récalcitrant peut être mis en demeure par la communauté PPE et, en dernier recours, contraint par le tribunal.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle StWE' : locale === 'it' ? 'OIBT PPP' : 'OIBT PPE' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Im Stockwerkeigentum ist jeder Eigentümer für seine Einheit verantwortlich, während die StWE-Gemeinschaft die Kontrolle der Gemeinschaftsanlagen koordiniert. Die Verwaltung empfiehlt sich für die Gesamtorganisation.'
              : locale === 'it'
              ? 'Nella proprietà per piani, ogni proprietario è responsabile per la propria unità, mentre la comunione PPP coordina il controllo degli impianti comuni. L\'amministrazione è consigliata per l\'organizzazione globale.'
              : 'En PPE, chaque copropriétaire est responsable de son unité, tandis que la communauté PPE coordonne le contrôle des parties communes. La gérance est recommandée pour l\'organisation globale.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Kontrolle im Stockwerkeigentum (StWE) — Wer ist verantwortlich?'
            : locale === 'it'
            ? 'Controllo OIBT nella proprietà per piani (PPP) — Chi è responsabile?'
            : 'Contrôle OIBT en copropriété (PPE) — Qui est responsable de quoi ?'}
        </h1>

        {/* Répartition des responsabilités */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Verantwortlichkeitsaufteilung im StWE' : locale === 'it' ? 'Ripartizione delle responsabilità in PPP' : 'Répartition des responsabilités en PPE'}
          </h2>
          <div className="space-y-4">
            <div className="card border-blue-200 bg-blue-50">
              <h3 className="font-bold text-blue-900 mb-2">
                {locale === 'de' ? '🏠 Jeder Stockwerkeigentümer — für seine Einheit' : locale === 'it' ? '🏠 Ogni comproprietario — per la propria unità' : '🏠 Chaque copropriétaire — pour son unité'}
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                {(locale === 'de' ? [
                  'Elektroinstallation der eigenen Wohnung',
                  'Privatinstallationen (Geschirrspüler, Waschmaschine)',
                  'Eigene Kellerabteilung',
                  'Trägt die Kosten allein',
                ] : locale === 'it' ? [
                  'Impianto elettrico del proprio appartamento',
                  'Installazioni private (lavastoviglie, lavatrice)',
                  'Propria cantina',
                  'Sostiene i costi da solo',
                ] : [
                  'Installation électrique de son appartement',
                  'Installations privatives (lave-vaisselle, machine à laver)',
                  'Cave privative',
                  'Supporte les frais seul',
                ]).map(i => <li key={i}>✓ {i}</li>)}
              </ul>
            </div>
            <div className="card border-purple-200 bg-purple-50">
              <h3 className="font-bold text-purple-900 mb-2">
                {locale === 'de' ? '🏢 StWE-Gemeinschaft — für Gemeinschaftsanlagen' : locale === 'it' ? '🏢 Comunione PPP — per impianti comuni' : '🏢 Communauté PPE — pour les parties communes'}
              </h3>
              <ul className="text-sm text-purple-800 space-y-1">
                {(locale === 'de' ? [
                  'Hauptverteilung und Zähler',
                  'Treppenhaus und Beleuchtung',
                  'Tiefgarage und Aussenbereich',
                  'Lift und technische Anlagen',
                  'Kosten gemäss Wertquoten aufgeteilt',
                ] : locale === 'it' ? [
                  'Distribuzione principale e contatori',
                  'Scale e illuminazione',
                  'Autorimessa e aree esterne',
                  'Ascensore e impianti tecnici',
                  'Costi divisi secondo le quote di valore',
                ] : [
                  'Tableau général et compteurs',
                  'Escaliers et éclairage commun',
                  'Parking et extérieurs',
                  'Ascenseur et installations techniques',
                  'Frais répartis selon les quotes-parts',
                ]).map(i => <li key={i}>✓ {i}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card">
                <summary className="font-semibold cursor-pointer list-none flex justify-between">
                  <span>{faq.q}</span><span className="text-primary-600">+</span>
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
