import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import SchemaOrg, { buildOrganizationSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'À propos | Contrôle OIBT Suisse — Organe indépendant accrédité ESTI',
    de: 'Über uns | Elektrokontrolle NIV Schweiz — ESTI-akkreditiertes Organ',
    it: 'Chi siamo | Controllo OIBT Svizzera — Organo indipendente accreditato ESTI',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/a-propos` },
  };
}

const orgSchema = {
  ...buildOrganizationSchema(),
  foundingDate: '2020',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
  knowsLanguage: ['fr', 'de', 'it'],
  areaServed: { '@type': 'Country', name: 'Suisse' },
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const content = {
    fr: {
      h1: 'À propos de Contrôle OIBT Suisse',
      mission: "Notre mission : garantir la sécurité électrique de chaque bâtiment en Suisse grâce à des contrôles OIBT rigoureux, indépendants et accessibles à tous les propriétaires.",
      breadcrumb: [{ label: 'Accueil', href: '/fr' }, { label: 'À propos' }],
      values: [
        { icon: '⚖️', title: 'Indépendance totale', desc: 'Nous ne réalisons aucun travail de mise en conformité. Notre seul métier : contrôler et certifier. Objectivité absolue garantie.' },
        { icon: '🏆', title: 'Excellence technique', desc: '12 contrôleurs experts, formation continue ESTI, maîtrise des 3 langues nationales. Plus de 15\'000 contrôles réalisés.' },
        { icon: '🌍', title: 'Couverture nationale', desc: '231 villes, 26 cantons, 3 langues. De Genève à Zurich, de Lugano à Bâle : nous couvrons 100% du territoire suisse.' },
        { icon: '📋', title: 'Transparence', desc: 'Devis détaillé avant toute intervention. Rapport de sécurité clair et complet. Facturation simple et transparente.' },
      ],
      stats: [
        { n: '15\'000+', label: 'Contrôles réalisés' },
        { n: '231', label: 'Villes couvertes' },
        { n: '3', label: 'Langues nationales' },
        { n: '12', label: 'Experts certifiés' },
      ],
      engagements: [
        "Indépendance totale vis-à-vis des installateurs électriques",
        "Rapport de sécurité transmis au GRD dans les 48h",
        "Réponse à votre demande de devis dans les 24h",
        "Prix transparents et fixes — sans surprise",
        "Formation continue de nos contrôleurs (normes OIBT, NIN, NIBT)",
        "Couverture 100% Suisse en français, allemand et italien",
      ],
    },
    de: {
      h1: 'Über uns — Elektrokontrolle NIV Schweiz',
      mission: "Unsere Mission: die elektrische Sicherheit jedes Gebäudes in der Schweiz durch strenge, unabhängige NIV-Kontrollen zu gewährleisten.",
      breadcrumb: [{ label: 'Startseite', href: '/de' }, { label: 'Über uns' }],
      values: [
        { icon: '⚖️', title: 'Vollständige Unabhängigkeit', desc: 'Wir führen keine Sanierungsarbeiten durch. Unser einziger Beruf: Kontrollieren und Zertifizieren.' },
        { icon: '🏆', title: 'Technische Exzellenz', desc: '12 Expertenprüfer, kontinuierliche ESTI-Schulung, alle 3 Landessprachen. Über 15\'000 durchgeführte Kontrollen.' },
        { icon: '🌍', title: 'Nationale Abdeckung', desc: '231 Orte, 26 Kantone, 3 Sprachen. Von Genf bis Zürich, von Lugano bis Basel: 100% Schweiz-Abdeckung.' },
        { icon: '📋', title: 'Transparenz', desc: 'Detailliertes Angebot vor jedem Einsatz. Klarer und vollständiger Sicherheitsnachweis. Einfache Abrechnung.' },
      ],
      stats: [
        { n: '15\'000+', label: 'Durchgeführte Kontrollen' },
        { n: '231', label: 'Abgedeckte Orte' },
        { n: '3', label: 'Landessprachen' },
        { n: '12', label: 'Zertifizierte Experten' },
      ],
      engagements: [
        "Vollständige Unabhängigkeit von Elektroinstallateuren",
        "Sicherheitsnachweis innerhalb von 48h an VNB übermittelt",
        "Antwort auf Ihre Offertanfrage innerhalb von 24h",
        "Transparente Pauschalpreise — keine Überraschungen",
        "Kontinuierliche Schulung der Prüfer (NIV, NIN, NIBT)",
        "100% Schweiz-Abdeckung auf Deutsch, Französisch und Italienisch",
      ],
    },
    it: {
      h1: 'Chi siamo — Controllo OIBT Svizzera',
      mission: "La nostra missione: garantire la sicurezza elettrica di ogni edificio in Svizzera attraverso controlli OIBT rigorosi, indipendenti e accessibili a tutti i proprietari.",
      breadcrumb: [{ label: 'Home', href: '/it' }, { label: 'Chi siamo' }],
      values: [
        { icon: '⚖️', title: 'Indipendenza totale', desc: 'Non eseguiamo lavori di messa a norma. Il nostro unico mestiere: controllare e certificare.' },
        { icon: '🏆', title: 'Eccellenza tecnica', desc: '12 controllori esperti, formazione continua ESTI, padronanza delle 3 lingue nazionali. Oltre 15\'000 controlli effettuati.' },
        { icon: '🌍', title: 'Copertura nazionale', desc: '231 città, 26 cantoni, 3 lingue. Da Ginevra a Zurigo, da Lugano a Basilea: 100% di copertura svizzera.' },
        { icon: '📋', title: 'Trasparenza', desc: 'Preventivo dettagliato prima di ogni intervento. Rapporto di sicurezza chiaro e completo.' },
      ],
      stats: [
        { n: '15\'000+', label: 'Controlli effettuati' },
        { n: '231', label: 'Città coperte' },
        { n: '3', label: 'Lingue nazionali' },
        { n: '12', label: 'Esperti certificati' },
      ],
      engagements: [
        "Indipendenza totale dagli installatori elettrici",
        "Rapporto di sicurezza trasmesso al GRD entro 48h",
        "Risposta alla richiesta di preventivo entro 24h",
        "Prezzi trasparenti e fissi — senza sorprese",
        "Formazione continua dei controllori (OIBT, NIN, NIBT)",
        "Copertura 100% Svizzera in italiano, francese e tedesco",
      ],
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  return (
    <>
      <SchemaOrg schema={orgSchema} />
      <Breadcrumb items={c.breadcrumb} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{c.h1}</h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">{c.mission}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {c.stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-primary-50 rounded-xl">
              <p className="text-4xl font-extrabold text-primary-800 mb-1">{stat.n}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {locale === 'de' ? 'Unsere Werte' : locale === 'it' ? 'I nostri valori' : 'Nos valeurs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {c.values.map((v) => (
            <div key={v.title} className="card">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Engagements */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {locale === 'de' ? 'Unsere Verpflichtungen' : locale === 'it' ? 'I nostri impegni' : 'Nos engagements'}
        </h2>
        <ul className="space-y-3 mb-12">
          {c.engagements.map((eng) => (
            <li key={eng} className="flex items-start gap-3">
              <span className="text-primary-600 font-bold mt-1">✓</span>
              <span className="text-gray-700">{eng}</span>
            </li>
          ))}
        </ul>

        {/* ESTI mention */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-blue-900 font-medium">
            {locale === 'de'
              ? '🏛️ Unser Kontrollorgan arbeitet in Übereinstimmung mit den Richtlinien des ESTI (Eidgenössisches Starkstrominspektorat), der eidgenössischen Aufsichtsbehörde für elektrische Installationen.'
              : locale === 'it'
              ? '🏛️ Il nostro organo di controllo opera in conformità con le linee guida dell\'ESTI (Ispettorato federale degli impianti a corrente forte), l\'autorità federale di vigilanza.'
              : '🏛️ Notre organe de contrôle opère en conformité avec les directives de l\'ESTI (Inspection fédérale des installations à courant fort), l\'autorité fédérale de surveillance des installations électriques.'}
          </p>
        </div>
      </div>

      <CTASection />
    </>
  );
}
