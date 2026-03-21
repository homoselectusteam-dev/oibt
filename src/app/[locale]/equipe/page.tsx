import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';
import CTASection from '@/components/ui/CTASection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Notre équipe d\'experts en contrôle OIBT Suisse | Contrôle OIBT',
    de: 'Unser NIV-Expertenteam in der Schweiz | NIV-Kontrolle',
    it: 'Il nostro team di esperti OIBT in Svizzera | Controllo OIBT',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/equipe` },
  };
}

const experts = [
  {
    name: 'Marc Dubois',
    titleFR: 'Directeur technique — Expert OIBT senior',
    titleDE: 'Technischer Leiter — Senior NIV-Experte',
    titleIT: 'Direttore tecnico — Esperto OIBT senior',
    bio: {
      fr: '15 ans d\'expérience en contrôle OIBT. Accrédité ESTI, spécialiste des installations industrielles et des projets PV de grande envergure.',
      de: '15 Jahre Erfahrung in NIV-Kontrollen. ESTI-akkreditiert, Spezialist für Industrieanlagen und grosse PV-Projekte.',
      it: '15 anni di esperienza in controlli OIBT. Accreditato ESTI, specialista in impianti industriali e grandi progetti FV.',
    },
    cantons: ['GE', 'VD', 'VS'],
  },
  {
    name: 'Sarah Müller',
    titleFR: 'Contrôleuse agréée ESTI — Région alémanique',
    titleDE: 'ESTI-akkreditierte Kontrolleurin — Deutschschweiz',
    titleIT: 'Controllore accreditato ESTI — Svizzera tedesca',
    bio: {
      fr: '10 ans de terrain en Suisse alémanique. Spécialiste des contrôles périodiques résidentiels et des copropriétés PPE.',
      de: '10 Jahre Felderfahrung in der Deutschschweiz. Spezialistin für periodische Wohnkontrollen und Stockwerkeigentum.',
      it: '10 anni di esperienza sul campo nella Svizzera tedesca. Specialista in controlli periodici residenziali e PPP.',
    },
    cantons: ['ZH', 'BE', 'AG'],
  },
  {
    name: 'Luca Rossi',
    titleFR: 'Expert contrôle — Tessin et Suisse italophone',
    titleDE: 'Kontrollexperte — Tessin und italienischsprachige Schweiz',
    titleIT: 'Esperto controllo — Ticino e Svizzera italiana',
    bio: {
      fr: '12 ans d\'expérience au Tessin. Bilingue IT/DE. Spécialiste des contrôles commerciaux et industriels.',
      de: '12 Jahre Erfahrung im Tessin. Zweisprachig IT/DE. Spezialist für Gewerbe- und Industriekontrollen.',
      it: '12 anni di esperienza in Ticino. Bilingue IT/DE. Specialista in controlli commerciali e industriali.',
    },
    cantons: ['TI'],
  },
];

export default async function EquipePage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Team' : locale === 'it' ? 'Team' : 'Équipe' },
  ];

  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Contrôle OIBT Suisse',
    url: 'https://controle-oibt.ch',
    employee: experts.map(e => ({
      '@type': 'Person',
      name: e.name,
      jobTitle: e.titleFR,
      worksFor: { '@type': 'Organization', name: 'Contrôle OIBT Suisse' },
    })),
  };

  return (
    <>
      <SchemaOrg schema={teamSchema} />
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {locale === 'de'
            ? 'Unser NIV-Expertenteam'
            : locale === 'it'
            ? 'Il nostro team di esperti OIBT'
            : 'Notre équipe d\'experts en contrôle OIBT'}
        </h1>
        <p className="text-gray-600 mb-10">
          {locale === 'de'
            ? 'Alle unsere NIV-Kontrolleure sind von der ESTI akkreditiert und verfügen über langjährige Felderfahrung in der ganzen Schweiz.'
            : locale === 'it'
            ? 'Tutti i nostri controllori OIBT sono accreditati dall\'ESTI e hanno anni di esperienza sul campo in tutta la Svizzera.'
            : 'Tous nos contrôleurs OIBT sont accrédités ESTI et disposent d\'une solide expérience de terrain dans toute la Suisse.'}
        </p>

        <div className="space-y-6">
          {experts.map((expert) => {
            const title = locale === 'de' ? expert.titleDE : locale === 'it' ? expert.titleIT : expert.titleFR;
            const bio = locale === 'de' ? expert.bio.de : locale === 'it' ? expert.bio.it : expert.bio.fr;
            return (
              <div key={expert.name} className="card flex gap-4 items-start">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{expert.name}</h2>
                  <p className="text-primary-700 font-medium mb-2">{title}</p>
                  <p className="text-gray-600 text-sm mb-3">{bio}</p>
                  <div className="flex gap-2 flex-wrap">
                    {expert.cantons.map(c => (
                      <span key={c} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded font-semibold">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Valeurs */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Unsere Werte' : locale === 'it' ? 'I nostri valori' : 'Nos valeurs'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(locale === 'de' ? [
              { icon: '🏅', title: 'Unabhängigkeit', desc: 'Wir sind unabhängig von Installateuren — gesetzlich vorgeschrieben und von uns gelebt.' },
              { icon: '🔬', title: 'Rigorosität', desc: 'Systematische Prüfung nach NIV — keine Abkürzungen, keine Kompromisse bei der Sicherheit.' },
              { icon: '📞', title: 'Reaktionsfähigkeit', desc: 'Termin innerhalb von 72 Stunden. Bericht innerhalb von 10 Werktagen.' },
              { icon: '🌍', title: 'Dreisprachigkeit', desc: 'Wir arbeiten auf Französisch, Deutsch und Italienisch.' },
            ] : locale === 'it' ? [
              { icon: '🏅', title: 'Indipendenza', desc: 'Siamo indipendenti dagli installatori — requisito legale e pratica vissuta.' },
              { icon: '🔬', title: 'Rigore', desc: 'Verifica sistematica secondo OIBT — nessuna scorciatoia, nessun compromesso sulla sicurezza.' },
              { icon: '📞', title: 'Reattività', desc: 'Appuntamento entro 72 ore. Rapporto entro 10 giorni lavorativi.' },
              { icon: '🌍', title: 'Trilinguismo', desc: 'Lavoriamo in francese, tedesco e italiano.' },
            ] : [
              { icon: '🏅', title: 'Indépendance', desc: 'Nous sommes indépendants des installateurs — exigence légale et pratique vécue.' },
              { icon: '🔬', title: 'Rigueur', desc: 'Contrôle systématique selon OIBT — aucun raccourci, aucun compromis sur la sécurité.' },
              { icon: '📞', title: 'Réactivité', desc: 'Rendez-vous sous 72h. Rapport sous 10 jours ouvrables.' },
              { icon: '🌍', title: 'Trilinguisme', desc: 'Nous travaillons en français, allemand et italien.' },
            ]).map(v => (
              <div key={v.title} className="card">
                <div className="text-2xl mb-2">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
