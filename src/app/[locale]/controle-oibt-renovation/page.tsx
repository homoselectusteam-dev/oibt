import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT après rénovation — Obligatoire ? | Guide 2026',
    de: 'NIV-Kontrolle nach Renovation — Pflicht? | Leitfaden 2026',
    it: 'Controllo OIBT dopo ristrutturazione — Obbligatorio? | Guida 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-renovation` },
  };
}

export default async function RenovationPage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Brauche ich eine NIV-Kontrolle nach einer Renovation?', a: 'Ja, wenn die Elektroinstallation verändert oder erweitert wurde. Jede Änderung der elektrischen Anlage erfordert eine Abnahme durch ein unabhängiges Kontrollorgan.' },
    { q: 'Wann genau muss nach einer Renovation eine NIV-Kontrolle erfolgen?', a: 'Vor der Wiederinbetriebnahme der neuen oder geänderten Anlage. Der Installateur führt zuerst eine Selbstkontrolle durch; dann prüft das Kontrollorgan die Anlage.' },
    { q: 'Was kostet die NIV-Kontrolle nach einer Renovation?', a: 'Je nach Umfang der Arbeiten CHF 150-500 für eine Wohnung. Wenn nur ein Teilbereich renoviert wurde, ist die Kontrolle auf diesen Bereich beschränkt.' },
  ] : locale === 'it' ? [
    { q: 'Ho bisogno di un controllo OIBT dopo una ristrutturazione?', a: 'Sì, se l\'impianto elettrico è stato modificato o ampliato. Qualsiasi modifica all\'impianto elettrico richiede una verifica da parte di un organo di controllo indipendente.' },
  ] : [
    { q: 'Faut-il un contrôle OIBT après une rénovation ?', a: 'Oui, dès lors que l\'installation électrique a été modifiée ou étendue. Toute modification de l\'installation électrique nécessite une réception par un organe de contrôle indépendant avant remise en service.' },
    { q: 'Quand exactement faut-il faire le contrôle OIBT après rénovation ?', a: 'Avant la remise en service de la nouvelle installation ou des parties modifiées. L\'installateur réalise d\'abord son autocontrôle, puis l\'organe de contrôle indépendant inspecte l\'installation.' },
    { q: 'La rénovation déclenche-t-elle un nouveau cycle de contrôle périodique ?', a: 'Oui. Une rénovation substantielle remet à zéro le compteur de la périodicité. La prochaine échéance sera calculée à partir de la date du contrôle de mise en service post-rénovation.' },
    { q: 'Que se passe-t-il si je rénove sans contrôle OIBT ?', a: 'L\'installation non contrôlée est illégale. En cas de sinistre électrique, votre assurance peut refuser l\'indemnisation. De plus, le GRD peut exiger un contrôle a posteriori avec amende possible.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle nach Renovation' : locale === 'it' ? 'OIBT & Ristrutturazione' : 'OIBT & Rénovation' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Jede Änderung oder Erweiterung einer Elektroinstallation in der Schweiz erfordert eine Abnahme durch ein unabhängiges NIV-Kontrollorgan vor der Wiederinbetriebnahme.'
              : locale === 'it'
              ? 'Qualsiasi modifica o ampliamento di un impianto elettrico in Svizzera richiede una verifica da parte di un organo di controllo OIBT indipendente prima della rimessa in servizio.'
              : 'Toute modification ou extension d\'une installation électrique en Suisse nécessite une réception par un organe de contrôle OIBT indépendant avant remise en service.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Kontrolle nach Renovation — Wann und wie?'
            : locale === 'it'
            ? 'Controllo OIBT dopo ristrutturazione — Quando e come?'
            : 'Contrôle OIBT après rénovation — Quand et comment ?'}
        </h1>

        {/* Quels travaux */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Welche Arbeiten erfordern eine NIV-Kontrolle?' : locale === 'it' ? 'Quali lavori richiedono un controllo OIBT?' : 'Quels travaux nécessitent un contrôle OIBT ?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-400 rounded-xl p-4">
              <h3 className="font-bold text-green-800 mb-2">
                {locale === 'de' ? '✅ Kontrolle erforderlich' : locale === 'it' ? '✅ Controllo richiesto' : '✅ Contrôle requis'}
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                {(locale === 'de' ? [
                  'Neue Stromkreise oder Steckdosen',
                  'Einbau neuer Küche oder Badezimmer',
                  'Erweiterung des Sicherungskastens',
                  'Installation einer PV-Anlage oder Wärmepumpe',
                  'Umbau von Heizung oder HLKK',
                ] : locale === 'it' ? [
                  'Nuovi circuiti o prese',
                  'Installazione cucina o bagno nuovo',
                  'Ampliamento del quadro elettrico',
                  'Installazione impianto FV o pompa di calore',
                ] : [
                  'Nouveaux circuits ou prises de courant',
                  'Installation d\'une cuisine ou salle de bain neuve',
                  'Extension du tableau électrique',
                  'Installation d\'une PV ou pompe à chaleur',
                  'Remplacement du tableau électrique',
                ]).map((i) => <li key={i}>✓ {i}</li>)}
              </ul>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4">
              <h3 className="font-bold text-gray-700 mb-2">
                {locale === 'de' ? '⚪ Keine Kontrolle nötig' : locale === 'it' ? '⚪ Nessun controllo necessario' : '⚪ Contrôle non requis'}
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {(locale === 'de' ? [
                  'Austausch einer defekten Steckdose (gleiche Position)',
                  'Austausch einer Glühbirne oder LED',
                  'Austausch eines Lichtschalters (gleiche Position)',
                  'Reparatur am gleichen Gerät',
                ] : locale === 'it' ? [
                  'Sostituzione di una presa difettosa (stessa posizione)',
                  'Sostituzione di una lampadina o LED',
                  'Sostituzione di un interruttore (stessa posizione)',
                ] : [
                  'Remplacement d\'une prise défectueuse (même emplacement)',
                  'Remplacement d\'une ampoule ou LED',
                  'Remplacement d\'un interrupteur (même emplacement)',
                  'Réparation à l\'identique sur le même appareil',
                ]).map((i) => <li key={i}>○ {i}</li>)}
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
