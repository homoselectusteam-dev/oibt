import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT installation photovoltaïque — Obligatoire | Guide 2026',
    de: 'NIV-Kontrolle Photovoltaikanlage — Pflicht | Leitfaden 2026',
    it: 'Controllo OIBT impianto fotovoltaico — Obbligatorio | Guida 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-photovoltaique` },
  };
}

export default async function PhotovoltaiquePage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Ist eine NIV-Kontrolle für eine Photovoltaikanlage obligatorisch?', a: 'Ja. Jede Photovoltaikanlage (AC-Seite) unterliegt der NIV-Kontrollpflicht. Die Kontrollperiode beträgt 10 Jahre für gewerbliche Anlagen und 20 Jahre bei Wohngebäuden.' },
    { q: 'Wer kontrolliert die Photovoltaikanlage?', a: 'Ein unabhängiges NIV-Kontrollorgan, nicht der Installateur der PV-Anlage. Die Kontrolle umfasst die AC-Seite der Anlage (Wechselrichter, Schutzeinrichtungen, Anschluss ans Netz).' },
    { q: 'Wie viel kostet die NIV-Kontrolle einer PV-Anlage?', a: 'Rechnen Sie mit CHF 200-400 für eine Wohnanlage und CHF 400-800 für gewerbliche PV-Installationen. Der Preis hängt von der Anlagengrösse und dem Kanton ab.' },
  ] : locale === 'it' ? [
    { q: 'Il controllo OIBT è obbligatorio per un impianto fotovoltaico?', a: 'Sì. Ogni impianto fotovoltaico (lato AC) è soggetto all\'obbligo di controllo OIBT. La periodicità è di 10 anni per gli impianti commerciali e 20 anni per le abitazioni.' },
    { q: 'Chi controlla l\'impianto fotovoltaico?', a: 'Un organo di controllo OIBT indipendente, non l\'installatore dell\'impianto FV. Il controllo riguarda il lato AC dell\'impianto (inverter, dispositivi di protezione, collegamento alla rete).' },
  ] : [
    { q: 'Le contrôle OIBT est-il obligatoire pour une installation photovoltaïque ?', a: 'Oui. Toute installation photovoltaïque (côté AC) est soumise à l\'obligation de contrôle OIBT. La périodicité est de 10 ans pour les installations commerciales et 20 ans pour les habitations.' },
    { q: 'Qui contrôle une installation photovoltaïque ?', a: 'Un organe de contrôle OIBT indépendant, pas l\'installateur de la PV. Le contrôle porte sur le côté AC de l\'installation (onduleur, protections, raccordement réseau).' },
    { q: 'Combien coûte le contrôle OIBT d\'une installation solaire ?', a: 'Comptez CHF 200-400 pour une installation résidentielle et CHF 400-800 pour une installation commerciale PV. Le prix varie selon la puissance de l\'installation et le canton.' },
    { q: 'La mise en service d\'une installation PV déclenche-t-elle un nouveau cycle OIBT ?', a: 'Oui. L\'ajout d\'une installation photovoltaïque est considéré comme une modification substantielle de l\'installation électrique. Le GRD doit être informé et un contrôle de mise en service est requis.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle & PV-Anlage' : locale === 'it' ? 'OIBT & Fotovoltaico' : 'OIBT & Photovoltaïque' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Jede Photovoltaikanlage in der Schweiz unterliegt der NIV-Kontrollpflicht (Seite AC). Ein unabhängiges Kontrollorgan muss die Anlage nach der Installation und periodisch prüfen.'
              : locale === 'it'
              ? 'Ogni impianto fotovoltaico in Svizzera è soggetto all\'obbligo di controllo OIBT (lato AC). Un organo di controllo indipendente deve verificare l\'impianto dopo l\'installazione e periodicamente.'
              : 'Toute installation photovoltaïque en Suisse est soumise à l\'obligation de contrôle OIBT (côté AC). Un organe de contrôle indépendant doit vérifier l\'installation après sa mise en service et périodiquement.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Kontrolle für Photovoltaikanlagen — Alles Wissenswerte'
            : locale === 'it'
            ? 'Controllo OIBT per impianti fotovoltaici — Tutto quello che c\'è da sapere'
            : 'Contrôle OIBT pour installations photovoltaïques — Tout savoir'}
        </h1>

        {/* Spécificités PV */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Was wird bei einer PV-Anlage kontrolliert?' : locale === 'it' ? 'Cosa viene controllato in un impianto FV?' : 'Qu\'est-ce qui est contrôlé dans une installation PV ?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(locale === 'de' ? [
              { icon: '⚡', title: 'Wechselrichter', desc: 'Schutzfunktionen, Isolationswiderstand, Erdung' },
              { icon: '🔌', title: 'AC-Anschluss', desc: 'Kabelquerschnitte, Absicherungen, Anschluss ans Hausnetz' },
              { icon: '🛡️', title: 'Schutzeinrichtungen', desc: 'FI-Schutzschalter, Überspannungsschutz, Netzschutz' },
              { icon: '📋', title: 'Dokumentation', desc: 'Schemaplan, Konformitätserklärung des Installateurs' },
            ] : locale === 'it' ? [
              { icon: '⚡', title: 'Inverter', desc: 'Funzioni di protezione, resistenza di isolamento, messa a terra' },
              { icon: '🔌', title: 'Collegamento AC', desc: 'Sezioni dei cavi, protezioni, collegamento alla rete domestica' },
              { icon: '🛡️', title: 'Dispositivi di protezione', desc: 'Interruttore differenziale, protezione da sovratensioni, protezione di rete' },
              { icon: '📋', title: 'Documentazione', desc: 'Schema elettrico, dichiarazione di conformità dell\'installatore' },
            ] : [
              { icon: '⚡', title: 'Onduleur', desc: 'Fonctions de protection, résistance d\'isolement, mise à la terre' },
              { icon: '🔌', title: 'Raccordement AC', desc: 'Sections des câbles, protections, connexion au réseau domestique' },
              { icon: '🛡️', title: 'Protections', desc: 'Disjoncteur différentiel, protection surtension, protection réseau' },
              { icon: '📋', title: 'Documentation', desc: 'Schéma électrique, déclaration de conformité de l\'installateur' },
            ]).map((item) => (
              <div key={item.title} className="card">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Périodicités */}
        <div className="card mb-10">
          <h2 className="font-bold text-gray-900 text-xl mb-3">
            {locale === 'de' ? '📅 Kontrollperioden für PV-Anlagen' : locale === 'it' ? '📅 Periodicità di controllo per impianti FV' : '📅 Périodicités de contrôle pour installations PV'}
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2">{locale === 'de' ? 'Anlagentyp' : locale === 'it' ? 'Tipo impianto' : 'Type d\'installation'}</th>
                <th className="text-center p-2">{locale === 'de' ? 'Periode' : locale === 'it' ? 'Periodicità' : 'Périodicité'}</th>
              </tr>
            </thead>
            <tbody>
              {(locale === 'de' ? [
                ['PV-Anlage Wohngebäude', '20 Jahre'],
                ['PV-Anlage Gewerbe/Büro', '10 Jahre'],
                ['PV-Anlage Industrie', '5 Jahre'],
                ['Neue PV-Anlage (Erstabnahme)', 'Bei Inbetriebnahme'],
              ] : locale === 'it' ? [
                ['Impianto FV abitativo', '20 anni'],
                ['Impianto FV commerciale/uffici', '10 anni'],
                ['Impianto FV industriale', '5 anni'],
                ['Nuovo impianto FV (collaudo)', 'All\'avviamento'],
              ] : [
                ['PV résidentielle', '20 ans'],
                ['PV commerciale/bureau', '10 ans'],
                ['PV industrielle', '5 ans'],
                ['Nouvelle PV (mise en service)', 'À la mise en service'],
              ]).map(([type, period]) => (
                <tr key={type} className="border-t">
                  <td className="p-2 text-gray-700">{type}</td>
                  <td className="p-2 text-center font-semibold text-primary-700">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
