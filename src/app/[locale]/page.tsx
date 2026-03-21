import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import CTASection from '@/components/ui/CTASection';
import PeriodiciteTable from '@/components/ui/PeriodiciteTable';
import SchemaOrg, { buildOrganizationSchema, buildFAQSchema } from '@/components/seo/SchemaOrg';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const titles = {
    fr: 'Contrôle OIBT Suisse | Organe indépendant accrédité | Rapport de sécurité',
    de: 'Elektrokontrolle NIV Schweiz | Unabhängiges akkreditiertes Organ | Sicherheitsnachweis',
    it: 'Controllo OIBT Svizzera | Organo indipendente accreditato | Rapporto di sicurezza',
  };
  const descs = {
    fr: "Contrôle OIBT en Suisse ✓ Organe de contrôle indépendant accrédité ESTI ✓ Rapport de sécurité en 48h ✓ Devis gratuit ✓ Couverture 100% Suisse FR/DE/IT",
    de: "NIV-Elektrokontrolle in der Schweiz ✓ ESTI-akkreditiertes unabhängiges Organ ✓ Sicherheitsnachweis in 48h ✓ Kostenlose Offerte ✓ 100% Schweiz-Abdeckung",
    it: "Controllo OIBT in Svizzera ✓ Organo indipendente accreditato ESTI ✓ Rapporto di sicurezza in 48h ✓ Preventivo gratuito ✓ Copertura 100% Svizzera",
  };

  const altLocales = { fr: ['de', 'it'], de: ['fr', 'it'], it: ['fr', 'de'] };

  return {
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: descs[locale as keyof typeof descs] || descs.fr,
    alternates: {
      canonical: `https://controle-oibt.ch/${locale}`,
      languages: Object.fromEntries(
        (['fr', 'de', 'it'] as const).map((l) => [l, `https://controle-oibt.ch/${l}`])
      ),
    },
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descs[locale as keyof typeof descs],
      url: `https://controle-oibt.ch/${locale}`,
      locale: locale === 'de' ? 'de_CH' : locale === 'it' ? 'it_CH' : 'fr_CH',
    },
  };
}

function HeroSection({ locale }: { locale: string }) {
  const villes = {
    fr: [
      { nom: 'Genève', slug: 'geneve' },
      { nom: 'Lausanne', slug: 'lausanne' },
      { nom: 'Sion', slug: 'sion' },
      { nom: 'Neuchâtel', slug: 'neuchatel' },
      { nom: 'Fribourg', slug: 'fribourg' },
      { nom: 'Nyon', slug: 'nyon' },
    ],
    de: [
      { nom: 'Zürich', slug: 'zuerich' },
      { nom: 'Bern', slug: 'bern' },
      { nom: 'Luzern', slug: 'luzern' },
      { nom: 'Winterthur', slug: 'winterthur' },
      { nom: 'St. Gallen', slug: 'st-gallen' },
      { nom: 'Aarau', slug: 'aarau' },
    ],
    it: [
      { nom: 'Lugano', slug: 'lugano' },
      { nom: 'Bellinzona', slug: 'bellinzona' },
      { nom: 'Locarno', slug: 'locarno' },
    ],
  };

  const heroVilles = villes[locale as keyof typeof villes] || villes.fr;

  const content = {
    fr: {
      badge: '🏆 N°1 du contrôle OIBT en Suisse',
      title: 'Contrôle OIBT — Rapport de sécurité électrique',
      subtitle: 'Organe de contrôle indépendant accrédité ESTI. Couverture 100% Suisse trilingue. Rapport de sécurité (RdS) en 48h.',
      cta: 'Devis gratuit en 24h',
      ctaSub: 'Ou appelez : 0800 XXX XXX',
      trust: ['Accrédité ESTI', 'Indépendant', 'Rapport 48h', '100% Suisse'],
      villesTitle: 'Villes principales',
    },
    de: {
      badge: '🏆 Nr. 1 der NIV-Elektrokontrolle in der Schweiz',
      title: 'Elektrokontrolle NIV — Sicherheitsnachweis',
      subtitle: 'ESTI-akkreditiertes unabhängiges Kontrollorgan. 100% Schweiz-Abdeckung in 3 Sprachen. Sicherheitsnachweis (SiNa) in 48h.',
      cta: 'Kostenlose Offerte in 24h',
      ctaSub: 'Oder anrufen: 0800 XXX XXX',
      trust: ['ESTI-akkreditiert', 'Unabhängig', 'SiNa in 48h', '100% Schweiz'],
      villesTitle: 'Hauptstädte',
    },
    it: {
      badge: '🏆 N°1 del controllo OIBT in Svizzera',
      title: 'Controllo OIBT — Rapporto di sicurezza elettrico',
      subtitle: 'Organo di controllo indipendente accreditato ESTI. Copertura 100% Svizzera. Rapporto di sicurezza (RaSi) in 48h.',
      cta: 'Preventivo gratuito in 24h',
      ctaSub: 'Oppure chiama: 0800 XXX XXX',
      trust: ['Accreditato ESTI', 'Indipendente', 'Rapporto 48h', '100% Svizzera'],
      villesTitle: 'Città principali',
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          {c.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {c.title}
        </h1>
        <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
          {c.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={`/${locale}/devis-controle-oibt`}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            {c.cta}
          </Link>
        </div>
        <p className="text-primary-200 text-sm mb-10">{c.ctaSub}</p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {c.trust.map((item) => (
            <div key={item} className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium">
              <span className="text-green-400">✓</span>
              {item}
            </div>
          ))}
        </div>

        {/* Quick links villes */}
        <div className="text-left max-w-3xl mx-auto">
          <p className="text-primary-200 text-xs uppercase tracking-wider mb-3">{c.villesTitle}</p>
          <div className="flex flex-wrap gap-2">
            {heroVilles.map((v) => (
              <Link
                key={v.slug}
                href={`/${locale}/villes/${v.slug}`}
                className="bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1 rounded-lg transition-colors"
              >
                {locale === 'de' ? `Elektrokontrolle ${v.nom}` : locale === 'it' ? `Controllo OIBT ${v.nom}` : `Contrôle OIBT ${v.nom}`}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ locale }: { locale: string }) {
  const features = {
    fr: [
      { icon: '⚖️', title: 'Obligation légale OIBT', desc: "L'OIBT (Ordonnance sur les installations électriques à basse tension) impose un contrôle périodique obligatoire pour toutes les installations en Suisse. Non-conformité = responsabilité pénale et civile." },
      { icon: '🔍', title: 'Organe indépendant', desc: "Notre organe de contrôle est totalement indépendant des installateurs. Nous ne réalisons PAS les travaux de mise en conformité — garantie d'objectivité absolue (Art. 5 OIBT)." },
      { icon: '📋', title: 'Rapport de sécurité officiel', desc: "Votre rapport de sécurité (RdS) est transmis directement au GRD local. Document officiel, valable selon la périodicité légale. Archivage numérique garanti." },
      { icon: '🏆', title: 'Couverture 100% Suisse', desc: "231 villes, 26 cantons, 3 langues. De Genève à Zurich, de Lugano à Bâle. Nous intervenons partout en Suisse en français, allemand et italien." },
      { icon: '⚡', title: 'Intervention rapide', desc: "Rendez-vous sous 5-10 jours ouvrés. Rapport transmis en 48h après inspection. Devis gratuit sans engagement répondu en 24h maximum." },
      { icon: '💰', title: 'Prix transparent', desc: "Pas de mauvaises surprises. Devis détaillé avant intervention. Facturation forfaitaire selon type et taille de votre installation. De CHF 250 à CHF 2\'000." },
    ],
    de: [
      { icon: '⚖️', title: 'Gesetzliche NIV-Pflicht', desc: "Die NIV (Niederspannungs-Installationsverordnung) schreibt für alle Elektroinstallationen in der Schweiz eine periodische Kontrolle vor. Nichtkonformität = zivil- und strafrechtliche Haftung." },
      { icon: '🔍', title: 'Unabhängiges Organ', desc: "Unser Kontrollorgan ist völlig unabhängig von den Elektroinstallateuren. Wir führen KEINE Sanierungsarbeiten durch — absolute Objektivitätsgarantie (NIV Art. 5)." },
      { icon: '📋', title: 'Offizieller Sicherheitsnachweis', desc: "Ihr Sicherheitsnachweis (SiNa) wird direkt an den lokalen Netzbetreiber (VNB) übermittelt. Offizielles Dokument, gültig für die gesetzliche Kontrollperiode." },
      { icon: '🏆', title: '100% Schweiz-Abdeckung', desc: "231 Städte, 26 Kantone, 3 Sprachen. Von Genf bis Zürich, von Lugano bis Basel. Wir sind in der gesamten Schweiz tätig — auf Deutsch, Französisch und Italienisch." },
      { icon: '⚡', title: 'Schnelle Intervention', desc: "Termin innerhalb von 5-10 Werktagen. Bericht innerhalb von 48h nach der Inspektion übermittelt. Kostenlose Offerte innerhalb von 24h." },
      { icon: '💰', title: 'Transparente Preise', desc: "Keine Überraschungen. Detailliertes Angebot vor der Intervention. Pauschalabrechnung nach Art und Größe Ihrer Anlage. Von CHF 250 bis CHF 2\'000." },
    ],
    it: [
      { icon: '⚖️', title: 'Obbligo legale OIBT', desc: "L'OIBT impone un controllo periodico obbligatorio per tutti gli impianti elettrici in Svizzera. La non conformità comporta responsabilità penale e civile." },
      { icon: '🔍', title: 'Organo indipendente', desc: "Il nostro organo di controllo è totalmente indipendente dagli installatori. NON eseguiamo lavori di messa a norma — garanzia assoluta di obiettività (Art. 5 OIBT)." },
      { icon: '📋', title: 'Rapporto ufficiale', desc: "Il vostro rapporto di sicurezza (RaSi) è trasmesso direttamente al GRD locale. Documento ufficiale, valido secondo la periodicità legale." },
      { icon: '🏆', title: 'Copertura 100% Svizzera', desc: "231 città, 26 cantoni, 3 lingue. Da Ginevra a Zurigo, da Lugano a Basilea. Interveniamo in tutta la Svizzera in italiano, francese e tedesco." },
      { icon: '⚡', title: 'Intervento rapido', desc: "Appuntamento entro 5-10 giorni lavorativi. Rapporto trasmesso entro 48h dopo l'ispezione. Preventivo gratuito entro 24h." },
      { icon: '💰', title: 'Prezzi trasparenti', desc: "Nessuna sorpresa. Preventivo dettagliato prima dell'intervento. Da CHF 250 a CHF 2'000." },
    ],
  };

  const f = features[locale as keyof typeof features] || features.fr;

  return (
    <section className="section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {locale === 'de'
            ? 'Warum unsere NIV-Elektrokontrolle wählen?'
            : locale === 'it'
            ? 'Perché scegliere il nostro controllo OIBT?'
            : 'Pourquoi choisir notre contrôle OIBT ?'}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {f.map((feat) => (
          <div key={feat.title} className="card hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{feat.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DefinitionSection({ locale }: { locale: string }) {
  const content = {
    fr: {
      title: "Qu'est-ce que le contrôle OIBT ?",
      definition: "Le contrôle OIBT (Ordonnance sur les Installations électriques à Basse Tension) est une inspection électrique obligatoire en Suisse, imposée par l'ESTI (Inspection fédérale des installations à courant fort). Tout propriétaire d'une installation électrique doit faire contrôler son installation par un organe de contrôle indépendant selon une périodicité fixée par la loi.",
      keyPoints: [
        "Base légale : Ordonnance OIBT du 7 novembre 2001, révisée le 1er janvier 2024",
        "Autorité de surveillance : ESTI (Eidg. Starkstrominspektorat)",
        "Périodicité : 20 ans pour les habitations, 10 ans pour les bureaux/commerces",
        "Sanction : responsabilité civile et pénale en cas d'accident électrique",
        "Le locataire ne paie JAMAIS le contrôle — obligation exclusive du propriétaire",
      ],
    },
    de: {
      title: "Was ist die NIV-Elektrokontrolle?",
      definition: "Die NIV-Elektrokontrolle (Niederspannungs-Installationsverordnung) ist eine in der Schweiz gesetzlich vorgeschriebene Kontrolle elektrischer Installationen, die vom ESTI (Eidgenössisches Starkstrominspektorat) überwacht wird. Jeder Eigentümer einer Elektroinstallation muss seine Anlage durch ein unabhängiges Kontrollorgan in gesetzlich festgelegten Abständen prüfen lassen.",
      keyPoints: [
        "Rechtsgrundlage: NIV vom 7. November 2001, revidiert am 1. Januar 2024",
        "Aufsichtsbehörde: ESTI (Eidg. Starkstrominspektorat)",
        "Kontrollfrist: 20 Jahre für Wohngebäude, 10 Jahre für Büros/Gewerbe",
        "Sanktion: Zivil- und strafrechtliche Haftung bei Elektrounfall",
        "Der Mieter zahlt NIE die Kontrolle — ausschließliche Pflicht des Eigentümers",
      ],
    },
    it: {
      title: "Cos'è il controllo OIBT?",
      definition: "Il controllo OIBT (Ordinanza sugli impianti a bassa tensione) è un'ispezione elettrica obbligatoria in Svizzera, imposta dall'ESTI (Ispettorato federale degli impianti a corrente forte). Ogni proprietario di un impianto elettrico deve far controllare il proprio impianto da un organo di controllo indipendente secondo una periodicità stabilita dalla legge.",
      keyPoints: [
        "Base legale: Ordinanza OIBT del 7 novembre 2001, revisionata il 1° gennaio 2024",
        "Autorità di vigilanza: ESTI (Ispettorato federale)",
        "Periodicità: 20 anni per le abitazioni, 10 anni per uffici/negozi",
        "Sanzione: responsabilità civile e penale in caso di incidente elettrico",
        "L'inquilino NON paga MAI il controllo — obbligo esclusivo del proprietario",
      ],
    },
  };

  const c = content[locale as keyof typeof content] || content.fr;

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{c.definition}</p>
        <ul className="space-y-3">
          {c.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="text-primary-600 font-bold mt-1">✓</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const faqsFR = [
    { q: "Le contrôle OIBT est-il obligatoire en Suisse ?", a: "Oui, le contrôle OIBT est obligatoire pour toutes les installations électriques en Suisse (Art. 36 OIBT). La périodicité varie selon le type : 20 ans pour les habitations, 10 ans pour les bureaux, 5 ans pour les hôtels et industries." },
    { q: "Qui paie le contrôle OIBT, le locataire ou le propriétaire ?", a: "C'est exclusivement le propriétaire qui paie et organise le contrôle OIBT (Art. 5 OIBT). Le locataire ne peut en aucun cas être contraint de payer ou d'organiser ce contrôle." },
    { q: "Quel est le prix d'un contrôle OIBT en Suisse ?", a: "Le prix d'un contrôle OIBT en Suisse varie entre CHF 250 et CHF 2'000 selon la taille de l'installation, le type de bâtiment et le canton. L'OIBT ne fixe aucun barème : le marché est entièrement libéralisé." },
    { q: "Qui peut réaliser un contrôle OIBT ?", a: "Un organe de contrôle indépendant, accrédité ou simplement indépendant selon les exigences OIBT. L'installateur qui a réalisé les travaux NE PEUT PAS effectuer son propre contrôle OIBT (principe d'indépendance)." },
    { q: "Que se passe-t-il si je refuse le contrôle OIBT ?", a: "Si vous refusez ou négligez le contrôle OIBT, le GRD peut signaler le cas à l'ESTI. En cas d'accident électrique sans rapport de sécurité valide, vous engagez votre responsabilité civile et pénale. Votre assurance incendie peut refuser d'indemniser le sinistre." },
  ];

  const faqsDE = [
    { q: "Ist die NIV-Elektrokontrolle in der Schweiz Pflicht?", a: "Ja, die Elektrokontrolle ist für alle Elektroinstallationen in der Schweiz gemäß NIV Art. 36 obligatorisch. Die Frist variiert: 20 Jahre für Wohngebäude, 10 Jahre für Büros und Gewerbe, 5 Jahre für Hotels und Industrie." },
    { q: "Wer zahlt die Elektrokontrolle, Mieter oder Eigentümer?", a: "Ausschließlich der Eigentümer zahlt und organisiert die NIV-Elektrokontrolle (NIV Art. 5). Der Mieter kann unter keinen Umständen zur Zahlung oder Organisation dieser Kontrolle verpflichtet werden." },
    { q: "Was kostet eine Elektrokontrolle in der Schweiz?", a: "Eine NIV-Elektrokontrolle in der Schweiz kostet zwischen CHF 250 und CHF 2'000, je nach Größe der Anlage, Gebäudetyp und Kanton. Die NIV legt keine Tarife fest — der Markt ist vollständig liberalisiert." },
    { q: "Was passiert, wenn ich die Elektrokontrolle verweigere?", a: "Wenn Sie die NIV-Kontrolle verweigern, kann der VNB den Fall dem ESTI melden. Bei einem Elektrounfall ohne gültigen Sicherheitsnachweis haften Sie zivil- und strafrechtlich. Ihre Gebäudeversicherung kann die Entschädigung verweigern." },
  ];

  const faqsIT = [
    { q: "Il controllo OIBT è obbligatorio in Svizzera?", a: "Sì, il controllo OIBT è obbligatorio per tutti gli impianti elettrici in Svizzera (Art. 36 OIBT). La periodicità varia: 20 anni per le abitazioni, 10 anni per uffici e negozi, 5 anni per hotel e industrie." },
    { q: "Chi paga il controllo OIBT, l'inquilino o il proprietario?", a: "È esclusivamente il proprietario che paga e organizza il controllo OIBT (Art. 5 OIBT). L'inquilino non può in alcun modo essere costretto a pagare o organizzare questo controllo." },
    { q: "Quanto costa un controllo OIBT in Svizzera?", a: "Il costo del controllo OIBT in Svizzera varia tra CHF 250 e CHF 2'000 in base alle dimensioni dell'impianto, al tipo di edificio e al cantone. L'OIBT non fissa alcuna tariffa." },
  ];

  const faqs = locale === 'de' ? faqsDE : locale === 'it' ? faqsIT : faqsFR;

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <HeroSection locale={locale} />
      <DefinitionSection locale={locale} />
      <FeaturesSection locale={locale} />

      {/* Periodicites */}
      <section className="section">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {locale === 'de'
            ? 'NIV-Kontrollfristen nach Gebäudetyp'
            : locale === 'it'
            ? 'Periodicità OIBT per tipo di edificio'
            : 'Périodicités OIBT par type de bâtiment'}
        </h2>
        <PeriodiciteTable />
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {locale === 'de' ? 'Häufig gestellte Fragen (FAQ)' : locale === 'it' ? 'Domande frequenti (FAQ)' : 'Questions fréquentes (FAQ)'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-primary-600 ml-4">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
