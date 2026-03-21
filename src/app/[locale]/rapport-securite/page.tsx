import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Rapport de sécurité OIBT (RdS) — Tout savoir | Guide complet 2026',
    de: 'Sicherheitsnachweis NIV (SiNa) — Alles Wissenswerte | Leitfaden 2026',
    it: 'Rapporto di sicurezza OIBT (RaSi) — Guida completa 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: {
      canonical: `https://controle-oibt.ch/${locale}/rapport-securite`,
      languages: {
        fr: 'https://controle-oibt.ch/fr/rapport-securite',
        de: 'https://controle-oibt.ch/de/sicherheitsnachweis',
        it: 'https://controle-oibt.ch/it/rapporto-sicurezza',
      },
    },
  };
}

export default async function RapportPage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Sicherheitsnachweis' : locale === 'it' ? 'Rapporto di sicurezza' : 'Rapport de sécurité' },
  ];

  const faqs = locale === 'de' ? [
    { q: "Was ist der Sicherheitsnachweis (SiNa)?", a: "Der Sicherheitsnachweis (SiNa) ist das offizielle Dokument, das nach einer NIV-Elektrokontrolle ausgestellt wird. Er bescheinigt den Zustand der elektrischen Installation und wird direkt an den Netzbetreiber (VNB) übermittelt." },
    { q: "Wer stellt den Sicherheitsnachweis aus?", a: "Der SiNa wird ausschließlich von einem unabhängigen Kontrollorgan ausgestellt. Der Installateur, der die Arbeiten ausgeführt hat, darf keinen SiNa für seine eigene Installation ausstellen." },
    { q: "Wie lange ist der Sicherheitsnachweis gültig?", a: "Die Gültigkeitsdauer entspricht der Kontrollperiode: 20 Jahre für Wohngebäude, 10 Jahre für Büros und Gewerbe, 5 Jahre für Hotels und Industrie." },
  ] : locale === 'it' ? [
    { q: "Cos'è il rapporto di sicurezza (RaSi)?", a: "Il rapporto di sicurezza (RaSi) è il documento ufficiale rilasciato dopo un controllo OIBT. Attesta lo stato dell'impianto elettrico e viene trasmesso direttamente al GRD (gestore di rete)." },
    { q: "Chi redige il rapporto di sicurezza?", a: "Il RaSi è redatto esclusivamente da un organo di controllo indipendente. L'installatore che ha eseguito i lavori non può redigere un RaSi per il proprio impianto." },
    { q: "Per quanto tempo è valido il rapporto di sicurezza?", a: "La durata di validità corrisponde alla periodicità: 20 anni per le abitazioni, 10 anni per uffici e negozi, 5 anni per hotel e industrie." },
  ] : [
    { q: "Qu'est-ce que le rapport de sécurité (RdS) OIBT ?", a: "Le rapport de sécurité (RdS) est le document officiel délivré après un contrôle OIBT. Il atteste l'état de l'installation électrique et est transmis directement au GRD (gestionnaire de réseau de distribution)." },
    { q: "Qui rédige le rapport de sécurité OIBT ?", a: "Le RdS est rédigé exclusivement par un organe de contrôle indépendant. L'installateur qui a réalisé les travaux ne peut pas rédiger de RdS pour sa propre installation (principe d'indépendance Art. 36 al. 3 OIBT)." },
    { q: "Que contient le rapport de sécurité OIBT ?", a: "Le RdS contient : l'identification complète de l'installation (adresse, type, puissance), la liste des défauts classés par niveau de risque (immédiat, à corriger, recommandation), l'attestation de conformité ou non-conformité, la date du prochain contrôle." },
    { q: "Combien de temps faut-il conserver le rapport de sécurité OIBT ?", a: "Le propriétaire doit conserver le rapport de sécurité OIBT pendant toute la durée de la périodicité, soit jusqu'au prochain contrôle. Il est recommandé de le conserver 20 ans minimum pour les habitations." },
    { q: "Mon assurance peut-elle refuser de m'indemniser sans rapport valide ?", a: "Oui. En cas de sinistre électrique (incendie, court-circuit) sans rapport de sécurité OIBT valide, votre assurance incendie (ECA, GVA, AGS...) peut légitimement réduire ou refuser votre indemnisation pour faute du propriétaire." },
  ];

  const content = {
    fr: {
      h1: "Rapport de sécurité OIBT (RdS) — Guide complet 2026",
      definition: "Le rapport de sécurité (RdS) OIBT est le document officiel certifiant la conformité d'une installation électrique à basse tension en Suisse. Il est délivré par un organe de contrôle indépendant après inspection et transmis au GRD local.",
      whatContains: [
        "Identification complète de l'installation (adresse, type, puissance, GRD)",
        "Date du contrôle et prochain échéance légale",
        "Liste exhaustive des défauts classés par niveau de risque :",
        "→ Danger immédiat (à corriger avant remise en service)",
        "→ Défaut à corriger (délai accordé)",
        "→ Recommandation (amélioration conseillée)",
        "Attestation de conformité ou non-conformité",
        "Signature et accréditation de l'organe de contrôle",
      ],
    },
    de: {
      h1: "Sicherheitsnachweis NIV (SiNa) — Vollständiger Leitfaden 2026",
      definition: "Der Sicherheitsnachweis (SiNa) NIV ist das offizielle Dokument, das die Konformität einer Niederspannungsinstallation in der Schweiz bescheinigt. Er wird von einem unabhängigen Kontrollorgan nach der Inspektion ausgestellt und direkt an den Netzbetreiber übermittelt.",
      whatContains: [
        "Vollständige Identifikation der Anlage (Adresse, Typ, Leistung, VNB)",
        "Datum der Kontrolle und nächste gesetzliche Fälligkeit",
        "Vollständige Mängelliste nach Risikoniveau klassifiziert:",
        "→ Unmittelbare Gefahr (vor Wiederinbetriebnahme zu beheben)",
        "→ Zu behebender Mangel (Frist gewährt)",
        "→ Empfehlung (empfohlene Verbesserung)",
        "Konformitäts- oder Nichtkonformitätsbescheinigung",
        "Unterschrift und Akkreditierung des Kontrollorgans",
      ],
    },
    it: {
      h1: "Rapporto di sicurezza OIBT (RaSi) — Guida completa 2026",
      definition: "Il rapporto di sicurezza (RaSi) OIBT è il documento ufficiale che certifica la conformità di un impianto elettrico a bassa tensione in Svizzera. Viene rilasciato da un organo di controllo indipendente dopo l'ispezione e trasmesso al GRD locale.",
      whatContains: [
        "Identificazione completa dell'impianto (indirizzo, tipo, potenza, GRD)",
        "Data del controllo e prossima scadenza legale",
        "Elenco completo dei difetti classificati per livello di rischio:",
        "→ Pericolo immediato (da correggere prima della rimessa in servizio)",
        "→ Difetto da correggere (termine concesso)",
        "→ Raccomandazione (miglioramento consigliato)",
        "Attestato di conformità o non conformità",
        "Firma e accreditamento dell'organo di controllo",
      ],
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-primary-700 p-5 mb-8 rounded-r-lg">
          <p className="text-gray-800 font-medium leading-relaxed">{c.definition}</p>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">{c.h1}</h1>

        {/* What it contains */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Was enthält der SiNa?' : locale === 'it' ? 'Cosa contiene il RaSi?' : 'Que contient le rapport de sécurité OIBT ?'}
          </h2>
          <ul className="space-y-2">
            {c.whatContains.map((item) => (
              <li key={item} className={`flex items-start gap-3 ${item.startsWith('→') ? 'ml-6 text-gray-600' : ''}`}>
                {!item.startsWith('→') && <span className="text-primary-600 font-bold mt-1">✓</span>}
                <span className={item.startsWith('→') ? 'text-gray-700' : 'text-gray-700 font-medium'}>{item}</span>
              </li>
            ))}
          </ul>
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
