import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Nos certifications et accréditations OIBT — ESTI, SIA | Contrôle OIBT',
    de: 'Unsere NIV-Zertifizierungen und Akkreditierungen — ESTI, SIA | NIV-Kontrolle',
    it: 'Le nostre certificazioni e accreditamenti OIBT — ESTI, SIA | Controllo OIBT',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/certifications` },
  };
}

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Zertifizierungen' : locale === 'it' ? 'Certificazioni' : 'Certifications' },
  ];

  const certSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Contrôle OIBT Suisse',
    url: 'https://controle-oibt.ch',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Accréditation ESTI — Organe de contrôle OIBT',
        credentialCategory: 'Accréditation fédérale',
        recognizedBy: { '@type': 'Organization', name: 'ESTI — Inspection fédérale des installations à courant fort' },
      },
    ],
    sameAs: [
      'https://www.esti.admin.ch',
    ],
  };

  const certs = locale === 'de' ? [
    {
      name: 'ESTI-Akkreditierung — NIV-Kontrollorgan',
      org: 'Eidgenössisches Starkstrominspektorat (ESTI)',
      desc: 'Offizielle Bundesakkreditierung als unabhängiges NIV-Kontrollorgan. Erlaubt die Durchführung von periodischen Elektrokontrollen und die Ausstellung von Sicherheitsnachweisen (SiNa) in der ganzen Schweiz.',
      icon: '🏛️',
    },
    {
      name: 'ISO 9001:2015 — Qualitätsmanagementsystem',
      org: 'SQS — Schweizerische Vereinigung für Qualitäts- und Managementsysteme',
      desc: 'Zertifizierung des Qualitätsmanagementsystems für alle Kontroll- und Berichtsprozesse.',
      icon: '✅',
    },
    {
      name: 'SIA 1000 — Normkonformität',
      org: 'Schweizerischer Ingenieur- und Architektenverein (SIA)',
      desc: 'Alle Kontrollen werden gemäss den aktuellen SIA-Normen und der NIV durchgeführt.',
      icon: '📐',
    },
  ] : locale === 'it' ? [
    {
      name: 'Accreditamento ESTI — Organo di controllo OIBT',
      org: 'Ispettorato federale degli impianti a corrente forte (ESTI)',
      desc: 'Accreditamento federale ufficiale come organo di controllo OIBT indipendente. Consente l\'esecuzione di controlli elettrici periodici e il rilascio di rapporti di sicurezza (RaSi) in tutta la Svizzera.',
      icon: '🏛️',
    },
    {
      name: 'ISO 9001:2015 — Sistema di gestione della qualità',
      org: 'SQS — Associazione svizzera per la qualità e i sistemi di gestione',
      desc: 'Certificazione del sistema di gestione della qualità per tutti i processi di controllo e reporting.',
      icon: '✅',
    },
  ] : [
    {
      name: 'Accréditation ESTI — Organe de contrôle OIBT',
      org: 'Inspection fédérale des installations à courant fort (ESTI)',
      desc: 'Accréditation fédérale officielle en tant qu\'organe de contrôle OIBT indépendant. Autorise la réalisation de contrôles électriques périodiques et la délivrance de rapports de sécurité (RdS) dans toute la Suisse.',
      icon: '🏛️',
    },
    {
      name: 'ISO 9001:2015 — Système de management de la qualité',
      org: 'SQS — Association suisse pour systèmes de qualité et de management',
      desc: 'Certification du système de management de la qualité pour tous les processus de contrôle et de reporting.',
      icon: '✅',
    },
    {
      name: 'SIA 1000 — Conformité aux normes',
      org: 'Société suisse des ingénieurs et des architectes (SIA)',
      desc: 'Tous les contrôles sont réalisés selon les normes SIA en vigueur et l\'OIBT.',
      icon: '📐',
    },
    {
      name: 'Formation continue annuelle',
      org: 'ESTI / Electrosuisse',
      desc: 'Tous nos contrôleurs suivent une formation continue annuelle pour rester à jour sur les évolutions réglementaires et techniques.',
      icon: '📚',
    },
  ];

  return (
    <>
      <SchemaOrg schema={certSchema} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {locale === 'de'
            ? 'Unsere Zertifizierungen und Akkreditierungen'
            : locale === 'it'
            ? 'Le nostre certificazioni e accreditamenti'
            : 'Nos certifications et accréditations'}
        </h1>
        <p className="text-gray-600 mb-10">
          {locale === 'de'
            ? 'Unsere Qualifikationen garantieren unabhängige, konforme und anerkannte NIV-Kontrollen in der gesamten Schweiz.'
            : locale === 'it'
            ? 'Le nostre qualifiche garantiscono controlli OIBT indipendenti, conformi e riconosciuti in tutta la Svizzera.'
            : 'Nos qualifications garantissent des contrôles OIBT indépendants, conformes et reconnus dans toute la Suisse.'}
        </p>

        <div className="space-y-6">
          {certs.map((cert) => (
            <div key={cert.name} className="card flex gap-4">
              <div className="text-4xl flex-shrink-0">{cert.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h2>
                <p className="text-primary-700 text-sm font-medium mb-2">{cert.org}</p>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pourquoi l'accréditation ESTI est fondamentale */}
        <div className="card bg-primary-50 border-primary-200 mt-10">
          <h2 className="font-bold text-primary-900 text-xl mb-3">
            {locale === 'de'
              ? '🏛️ Warum ist die ESTI-Akkreditierung entscheidend?'
              : locale === 'it'
              ? '🏛️ Perché l\'accreditamento ESTI è fondamentale?'
              : '🏛️ Pourquoi l\'accréditation ESTI est-elle fondamentale ?'}
          </h2>
          <p className="text-primary-800">
            {locale === 'de'
              ? 'Nur von der ESTI akkreditierte Organe dürfen in der Schweiz NIV-Kontrollen durchführen und Sicherheitsnachweise (SiNa) ausstellen. Ein nicht akkreditiertes Organ darf keinen gültigen SiNa ausstellen — die Kontrolle wäre nichtig und rechtlich wirkungslos.'
              : locale === 'it'
              ? 'Solo gli organi accreditati dall\'ESTI possono effettuare controlli OIBT in Svizzera e rilasciare rapporti di sicurezza (RaSi). Un organo non accreditato non può rilasciare un RaSi valido — il controllo sarebbe nullo e giuridicamente privo di effetti.'
              : 'Seuls les organes accrédités par l\'ESTI peuvent réaliser des contrôles OIBT en Suisse et délivrer des rapports de sécurité (RdS). Un organe non accrédité ne peut pas délivrer de RdS valide — le contrôle serait nul et sans effet juridique.'}
          </p>
        </div>
      </div>
    </>
  );
}
