import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT borne de recharge VE — Obligatoire | Guide 2026',
    de: 'NIV-Kontrolle Ladestation E-Auto — Pflicht | Leitfaden 2026',
    it: 'Controllo OIBT colonnina ricarica VE — Obbligatorio | Guida 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-borne-recharge` },
  };
}

export default async function BorneRechargePage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Brauche ich eine NIV-Kontrolle für eine E-Auto-Ladestation?', a: 'Ja. Die Installation einer Ladestation (Typ 2, 11 kW oder 22 kW) gilt als wesentliche Änderung der Elektroinstallation und erfordert eine NIV-Abnahme vor der Inbetriebnahme.' },
    { q: 'Wer kontrolliert eine E-Auto-Ladestation in der Schweiz?', a: 'Ein unabhängiges NIV-Kontrollorgan — nicht der Installateur der Ladestation. Die Kontrolle umfasst den gesamten AC-Stromkreis von der Unterverteilung bis zur Ladestation.' },
    { q: 'Wie viel kostet die NIV-Kontrolle einer Ladestation?', a: 'Etwa CHF 150-300 für eine private Ladestation. Bei mehreren Ladestationen (Mehrfamilienhaus, Firmenparkplatz) sind Mengenrabatte möglich.' },
  ] : locale === 'it' ? [
    { q: 'Ho bisogno di un controllo OIBT per una colonnina di ricarica?', a: 'Sì. L\'installazione di una colonnina di ricarica (Tipo 2, 11 kW o 22 kW) costituisce una modifica sostanziale dell\'impianto elettrico e richiede una verifica OIBT prima della messa in servizio.' },
  ] : [
    { q: 'Faut-il un contrôle OIBT pour une borne de recharge véhicule électrique ?', a: 'Oui. L\'installation d\'une borne de recharge (Type 2, 11 kW ou 22 kW) constitue une modification substantielle de l\'installation électrique et nécessite une réception OIBT avant mise en service.' },
    { q: 'Qui contrôle une borne de recharge en Suisse ?', a: 'Un organe de contrôle OIBT indépendant — pas l\'installateur de la borne. Le contrôle porte sur l\'ensemble du circuit AC depuis le sous-tableau jusqu\'à la borne.' },
    { q: 'Combien coûte le contrôle OIBT d\'une borne de recharge ?', a: 'Environ CHF 150-300 pour une borne privée résidentielle. Pour plusieurs bornes (immeuble, parking d\'entreprise), des tarifs groupés sont disponibles.' },
    { q: 'La borne de recharge est-elle soumise aux mêmes périodicités OIBT ?', a: 'Oui. La borne dans un garage privé (habitation) : 20 ans. Dans un parking commercial ou d\'entreprise : 10 ans. Dans un parking ouvert au public : 5 ans.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle Ladestation' : locale === 'it' ? 'OIBT Colonnina ricarica' : 'OIBT Borne recharge' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Jede E-Auto-Ladestation in der Schweiz muss vor der Inbetriebnahme von einem unabhängigen NIV-Kontrollorgan abgenommen werden. Dies gilt für private, gewerbliche und öffentliche Ladestationen.'
              : locale === 'it'
              ? 'Ogni colonnina di ricarica per veicoli elettrici in Svizzera deve essere verificata da un organo di controllo OIBT indipendente prima della messa in servizio. Questo vale per le colonnine private, commerciali e pubbliche.'
              : 'Toute borne de recharge pour véhicule électrique en Suisse doit être réceptionnée par un organe de contrôle OIBT indépendant avant mise en service. Cela vaut pour les bornes privées, commerciales et publiques.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Kontrolle für E-Auto-Ladestationen — Alles Wissenswerte 2026'
            : locale === 'it'
            ? 'Controllo OIBT per colonnine di ricarica VE — Tutto 2026'
            : 'Contrôle OIBT pour bornes de recharge VE — Tout savoir 2026'}
        </h1>

        {/* Contexte VE */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Warum ist die Kontrolle einer Ladestation wichtig?' : locale === 'it' ? 'Perché il controllo di una colonnina è importante?' : 'Pourquoi le contrôle d\'une borne est-il important ?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(locale === 'de' ? [
              { icon: '⚡', title: 'Hohe Leistung', desc: 'Ladestationen (11-22 kW) belasten die Installation stark — fehlerhafte Kabel überhitzen' },
              { icon: '🔥', title: 'Brandrisiko', desc: 'Überlastung, Kurzschluss oder Wackelkontakt können zu Bränden führen' },
              { icon: '🛡️', title: 'Versicherungsschutz', desc: 'Ohne gültigen Sicherheitsnachweis riskieren Sie die Ablehnung der Versicherungsleistung' },
            ] : locale === 'it' ? [
              { icon: '⚡', title: 'Alta potenza', desc: 'Le colonnine (11-22 kW) sollecitano molto l\'impianto — i cavi difettosi si surriscaldano' },
              { icon: '🔥', title: 'Rischio incendio', desc: 'Sovraccarico, cortocircuito o contatto allentato possono causare incendi' },
              { icon: '🛡️', title: 'Copertura assicurativa', desc: 'Senza RaSi valido si rischia il rifiuto dell\'indennizzo assicurativo' },
            ] : [
              { icon: '⚡', title: 'Forte puissance', desc: 'Les bornes (11-22 kW) sollicitent fortement l\'installation — câbles défectueux = surchauffe' },
              { icon: '🔥', title: 'Risque incendie', desc: 'Surcharge, court-circuit ou mauvais contact peuvent provoquer des incendies' },
              { icon: '🛡️', title: 'Couverture assurance', desc: 'Sans RdS valide, vous risquez le refus d\'indemnisation de votre assurance' },
            ]).map(item => (
              <div key={item.title} className="card text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
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
