import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT immeuble locatif — Guide propriétaire 2026',
    de: 'NIV-Kontrolle Mietgebäude — Leitfaden für Eigentümer 2026',
    it: 'Controllo OIBT edificio in affitto — Guida proprietario 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-immeuble-locatif` },
  };
}

export default async function ImmeubleLocatifPage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Wer ist für die NIV-Kontrolle eines Mietgebäudes verantwortlich?', a: 'Der Eigentümer des Gebäudes ist allein verantwortlich für die periodische NIV-Kontrolle und trägt alle Kosten. Dies kann weder auf die Mieter noch auf die Verwaltung abgewälzt werden.' },
    { q: 'Wie wird die NIV-Kontrolle in einem Mehrfamilienhaus organisiert?', a: 'Der Eigentümer (oder seine Verwaltung) beauftragt das Kontrollorgan, das dann jeden Wohnungsinhaber mit angemessener Voranmeldung (mindestens 10 Tage) um Zugang ersucht.' },
    { q: 'Was passiert, wenn ein Mieter den Zugang zur NIV-Kontrolle verweigert?', a: 'Der Eigentümer muss dem Mieter schriftlich eine Frist setzen. Bei wiederholter Verweigerung kann der Eigentümer rechtliche Schritte einleiten und das Gericht um Zugang ersuchen.' },
  ] : locale === 'it' ? [
    { q: 'Chi è responsabile del controllo OIBT di un edificio in affitto?', a: 'Il proprietario dell\'edificio è l\'unico responsabile del controllo OIBT periodico e sostiene tutti i costi. Ciò non può essere trasferito né agli inquilini né all\'amministrazione.' },
  ] : [
    { q: 'Qui est responsable du contrôle OIBT dans un immeuble locatif ?', a: 'Le propriétaire de l\'immeuble est seul responsable du contrôle OIBT périodique et en assume tous les frais. Cela ne peut être répercuté ni sur les locataires ni sur la régie.' },
    { q: 'Comment organiser le contrôle OIBT dans un immeuble avec plusieurs locataires ?', a: 'Le propriétaire (ou sa régie) mandate l\'organe de contrôle qui contacte ensuite chaque occupant avec un préavis raisonnable (minimum 10 jours) pour convenir d\'un accès.' },
    { q: 'Que faire si un locataire refuse l\'accès pour le contrôle OIBT ?', a: 'Le propriétaire doit mettre le locataire en demeure par écrit avec un délai. En cas de refus répété, le propriétaire peut saisir le tribunal pour obtenir l\'accès. Ce refus peut constituer une violation du bail.' },
    { q: 'Les parties communes sont-elles soumises au contrôle OIBT ?', a: 'Oui. Les installations des parties communes (cave, garage, couloirs, ascenseur) sont soumises aux mêmes obligations de contrôle que les appartements, avec une périodicité de 10 ans pour les locaux commerciaux.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle Mietgebäude' : locale === 'it' ? 'OIBT Edificio locativo' : 'OIBT Immeuble locatif' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Bei einem Mietgebäude in der Schweiz ist der Eigentümer für alle NIV-Kontrollen verantwortlich — sowohl für die Wohnungen als auch für die Gemeinschaftsbereiche. Die Mieter zahlen nie.'
              : locale === 'it'
              ? 'In un edificio in affitto in Svizzera, il proprietario è responsabile di tutti i controlli OIBT — sia per gli appartamenti che per le aree comuni. Gli inquilini non pagano mai.'
              : 'Dans un immeuble locatif en Suisse, le propriétaire est responsable de tous les contrôles OIBT — appartements et parties communes. Les locataires ne paient jamais.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Kontrolle im Mietgebäude — Pflichten des Eigentümers'
            : locale === 'it'
            ? 'Controllo OIBT nell\'edificio locativo — Obblighi del proprietario'
            : 'Contrôle OIBT dans un immeuble locatif — Obligations du propriétaire'}
        </h1>

        {/* Tableau parties */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Wer prüft was?' : locale === 'it' ? 'Chi controlla cosa?' : 'Qui contrôle quoi ?'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="p-3 text-left">{locale === 'de' ? 'Bereich' : locale === 'it' ? 'Area' : 'Zone'}</th>
                  <th className="p-3 text-center">{locale === 'de' ? 'Verantwortlicher' : locale === 'it' ? 'Responsabile' : 'Responsable'}</th>
                  <th className="p-3 text-center">{locale === 'de' ? 'Periode' : locale === 'it' ? 'Periodicità' : 'Périodicité'}</th>
                </tr>
              </thead>
              <tbody>
                {(locale === 'de' ? [
                  ['Wohnungen', 'Eigentümer', '20 Jahre'],
                  ['Keller / Garage', 'Eigentümer', '20 Jahre'],
                  ['Gemeinschaftsbereiche', 'Eigentümer', '10 Jahre'],
                  ['Gewerberäume', 'Eigentümer', '10 Jahre'],
                  ['Lift / technische Anlagen', 'Eigentümer', '5 Jahre'],
                ] : locale === 'it' ? [
                  ['Appartamenti', 'Proprietario', '20 anni'],
                  ['Cantine / garage', 'Proprietario', '20 anni'],
                  ['Aree comuni', 'Proprietario', '10 anni'],
                  ['Locali commerciali', 'Proprietario', '10 anni'],
                  ['Ascensore / impianti tecnici', 'Proprietario', '5 anni'],
                ] : [
                  ['Appartements', 'Propriétaire', '20 ans'],
                  ['Cave / garage', 'Propriétaire', '20 ans'],
                  ['Parties communes', 'Propriétaire', '10 ans'],
                  ['Locaux commerciaux', 'Propriétaire', '10 ans'],
                  ['Ascenseur / installations techniques', 'Propriétaire', '5 ans'],
                ]).map(([zone, resp, period]) => (
                  <tr key={zone} className="border-t">
                    <td className="p-3 text-gray-700">{zone}</td>
                    <td className="p-3 text-center font-medium text-primary-700">{resp}</td>
                    <td className="p-3 text-center font-semibold">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
