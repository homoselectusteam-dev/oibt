import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT construction neuve — Mise en service | Guide 2026',
    de: 'NIV-Kontrolle Neubau — Inbetriebnahme | Leitfaden 2026',
    it: 'Controllo OIBT costruzione nuova — Messa in servizio | Guida 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/controle-oibt-neuf-construction` },
  };
}

export default async function NeufConstructionPage({ params }: Props) {
  const { locale } = await params;

  const faqs = locale === 'de' ? [
    { q: 'Ist eine NIV-Kontrolle bei einem Neubau obligatorisch?', a: 'Ja, absolut. Bei jedem Neubau muss die Elektroinstallation vor der Inbetriebnahme von einem unabhängigen NIV-Kontrollorgan geprüft und ein Sicherheitsnachweis (SiNa) ausgestellt werden.' },
    { q: 'Wann erfolgt die NIV-Kontrolle beim Neubau?', a: 'Die Kontrolle erfolgt nach Abschluss der elektrischen Arbeiten und vor der Inbetriebnahme. Der Installateur führt zuerst seine Selbstkontrolle durch, dann kommt das Kontrollorgan.' },
    { q: 'Wer zahlt die NIV-Erstabnahme beim Neubau?', a: 'Der Bauherr (zukünftiger Eigentümer) trägt die Kosten. Diese sind in der Regel im Angebot des Elektroinstallateurs enthalten oder separat beim Kontrollorgan bestellbar.' },
  ] : locale === 'it' ? [
    { q: 'Il controllo OIBT è obbligatorio per un edificio nuovo?', a: 'Sì, assolutamente. Per ogni nuova costruzione, l\'impianto elettrico deve essere verificato da un organo di controllo OIBT indipendente prima della messa in servizio e deve essere rilasciato un rapporto di sicurezza (RaSi).' },
  ] : [
    { q: 'Le contrôle OIBT est-il obligatoire pour une construction neuve ?', a: 'Oui, absolument. Pour toute construction neuve, l\'installation électrique doit être contrôlée par un organe de contrôle OIBT indépendant avant mise en service et un rapport de sécurité (RdS) doit être délivré.' },
    { q: 'À quel moment le contrôle OIBT intervient-il dans une construction neuve ?', a: 'Le contrôle intervient après la fin des travaux électriques et avant la mise en service. L\'installateur réalise d\'abord son autocontrôle, puis l\'organe de contrôle indépendant inspecte l\'installation.' },
    { q: 'Qui paie le contrôle OIBT lors d\'une construction neuve ?', a: 'Le maître d\'ouvrage (futur propriétaire) assume les frais. Ils sont généralement inclus dans l\'offre de l\'installateur électrique ou commandables séparément auprès de l\'organe de contrôle.' },
    { q: 'Quand commence la périodicité après une construction neuve ?', a: 'La périodicité (20 ans pour habitation) commence à la date de la première réception OIBT. Le premier contrôle périodique interviendra 20 ans plus tard.' },
  ];

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'NIV-Kontrolle Neubau' : locale === 'it' ? 'OIBT Costruzione nuova' : 'OIBT Construction neuve' },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">
            {locale === 'de'
              ? 'Bei jedem Neubau in der Schweiz muss die Elektroinstallation vor der Inbetriebnahme von einem unabhängigen NIV-Kontrollorgan geprüft werden. Ohne Sicherheitsnachweis (SiNa) darf die Anlage nicht in Betrieb genommen werden.'
              : locale === 'it'
              ? 'Per ogni nuova costruzione in Svizzera, l\'impianto elettrico deve essere verificato da un organo di controllo OIBT indipendente prima della messa in servizio. Senza rapporto di sicurezza (RaSi) l\'impianto non può essere messo in servizio.'
              : 'Pour toute construction neuve en Suisse, l\'installation électrique doit être contrôlée par un organe de contrôle OIBT indépendant avant mise en service. Sans rapport de sécurité (RdS), l\'installation ne peut pas être mise en service.'}
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de'
            ? 'NIV-Erstabnahme beim Neubau — Ablauf und Anforderungen'
            : locale === 'it'
            ? 'Prima verifica OIBT per nuova costruzione — Procedura e requisiti'
            : 'Contrôle OIBT pour construction neuve — Procédure et exigences'}
        </h1>

        {/* Processus */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Ablauf der NIV-Erstabnahme' : locale === 'it' ? 'Procedura della prima verifica OIBT' : 'Étapes du contrôle OIBT pour construction neuve'}
          </h2>
          <div className="space-y-3">
            {(locale === 'de' ? [
              { num: '1', title: 'Elektroarbeiten abgeschlossen', desc: 'Installateur schliesst alle Elektroarbeiten ab' },
              { num: '2', title: 'Selbstkontrolle Installateur', desc: 'Der Installateur führt seine eigene Prüfung durch und stellt die Installationsanzeige aus' },
              { num: '3', title: 'Kontrollorgan mandatieren', desc: 'Unabhängiges NIV-Kontrollorgan beauftragen' },
              { num: '4', title: 'Vor-Ort-Kontrolle', desc: 'Das Kontrollorgan prüft die Anlage systematisch (Sichtprüfung + Messungen)' },
              { num: '5', title: 'SiNa ausstellen', desc: 'Bei Konformität: Sicherheitsnachweis wird an den Netzbetreiber übermittelt' },
              { num: '6', title: 'Inbetriebnahme', desc: 'Der VNB schaltet das Netz frei — Anlage kann in Betrieb genommen werden' },
            ] : locale === 'it' ? [
              { num: '1', title: 'Lavori elettrici completati', desc: 'L\'installatore completa tutti i lavori elettrici' },
              { num: '2', title: 'Autocontrollo installatore', desc: 'L\'installatore effettua il proprio controllo e rilascia la dichiarazione di installazione' },
              { num: '3', title: 'Incarico organo di controllo', desc: 'Incaricare un organo di controllo OIBT indipendente' },
              { num: '4', title: 'Verifica in loco', desc: 'L\'organo di controllo verifica sistematicamente l\'impianto (ispezione visiva + misurazioni)' },
              { num: '5', title: 'Rilascio RaSi', desc: 'In caso di conformità: rapporto di sicurezza trasmesso al GRD' },
              { num: '6', title: 'Messa in servizio', desc: 'Il GRD abilita la rete — l\'impianto può essere messo in servizio' },
            ] : [
              { num: '1', title: 'Travaux électriques terminés', desc: 'L\'installateur finalise tous les travaux électriques' },
              { num: '2', title: 'Autocontrôle installateur', desc: 'L\'installateur effectue son propre contrôle et établit l\'avis d\'installation' },
              { num: '3', title: 'Mandater l\'organe de contrôle', desc: 'Mandater un organe de contrôle OIBT indépendant' },
              { num: '4', title: 'Contrôle sur place', desc: 'L\'organe de contrôle inspecte l\'installation systématiquement (visuel + mesures)' },
              { num: '5', title: 'Délivrance du RdS', desc: 'En cas de conformité : rapport de sécurité transmis au GRD' },
              { num: '6', title: 'Mise en service', desc: 'Le GRD libère le réseau — l\'installation peut être mise en service' },
            ]).map(step => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
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
