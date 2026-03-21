type SchemaOrgProps = {
  schema: Record<string, unknown> | Record<string, unknown>[];
};

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Schema helpers ────────────────────────────────────────────────────────────

export function buildLocalBusinessSchema({
  locale,
  city,
  canton,
  lat,
  lng,
  prixMin,
  prixMax,
}: {
  locale: string;
  city: string;
  canton: string;
  lat: number;
  lng: number;
  prixMin: number;
  prixMax: number;
}) {
  const names = {
    fr: `Contrôle OIBT ${city} – Organe de contrôle indépendant`,
    de: `Elektrokontrolle NIV ${city} – Unabhängiges Kontrollorgan`,
    it: `Controllo OIBT ${city} – Organo di controllo indipendente`,
  };
  const descs = {
    fr: `Contrôle OIBT indépendant à ${city} (${canton}). Rapport de sécurité électrique certifié. Devis gratuit.`,
    de: `Unabhängige NIV-Elektrokontrolle in ${city} (${canton}). Zertifizierter Sicherheitsnachweis. Kostenlose Offerte.`,
    it: `Controllo OIBT indipendente a ${city} (${canton}). Rapporto di sicurezza certificato. Preventivo gratuito.`,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://controle-oibt.ch/${locale}/villes/${city.toLowerCase()}#local-business`,
    name: names[locale as keyof typeof names] || names.fr,
    description: descs[locale as keyof typeof descs] || descs.fr,
    url: `https://controle-oibt.ch/${locale}/villes/${city.toLowerCase()}`,
    telephone: '+41800XXXX',
    priceRange: `CHF ${prixMin} - CHF ${prixMax}`,
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: canton,
        containedInPlace: {
          '@type': 'Country',
          name: 'Suisse',
          sameAs: 'https://www.wikidata.org/wiki/Q39',
        },
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    },
    knowsAbout: 'OIBT contrôle électrique Suisse',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'de' ? 'NIV-Elektrokontrolle' : locale === 'it' ? 'Controllo OIBT' : 'Contrôle OIBT',
      itemListElement: [
        {
          '@type': 'Offer',
          name: locale === 'de' ? 'Periodische Kontrolle (NIV Art. 36)' : locale === 'it' ? 'Controllo periodico (OIBT Art. 36)' : 'Contrôle périodique (OIBT Art. 36)',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: prixMin,
            maxPrice: prixMax,
            priceCurrency: 'CHF',
          },
        },
      ],
    },
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema({
  locale,
  city,
  prixMin,
  prixMax,
}: {
  locale: string;
  city: string;
  prixMin: number;
  prixMax: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locale === 'de'
      ? `NIV-Elektrokontrolle ${city}`
      : locale === 'it'
      ? `Controllo OIBT ${city}`
      : `Contrôle OIBT ${city}`,
    provider: {
      '@type': 'Organization',
      name: 'Contrôle OIBT Suisse',
      url: 'https://controle-oibt.ch',
    },
    areaServed: city,
    serviceType: locale === 'de' ? 'Elektrokontrolle NIV' : locale === 'it' ? 'Controllo elettrico OIBT' : 'Contrôle électrique OIBT',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: prixMin,
        maxPrice: prixMax,
        priceCurrency: 'CHF',
      },
    },
    termsOfService: 'https://controle-oibt.ch/cgu',
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://controle-oibt.ch/#organization',
    name: 'Contrôle OIBT Suisse',
    alternateName: ['Elektrokontrolle NIV Schweiz', 'Controllo OIBT Svizzera'],
    url: 'https://controle-oibt.ch',
    logo: 'https://controle-oibt.ch/logo.png',
    description: 'Organe de contrôle OIBT indépendant. Couverture 100% Suisse. Rapport de sécurité électrique certifié.',
    areaServed: {
      '@type': 'Country',
      name: 'Suisse',
      sameAs: 'https://www.wikidata.org/wiki/Q39',
    },
    knowsAbout: [
      'OIBT (Ordonnance sur les installations électriques à basse tension)',
      'NIV (Niederspannungs-Installationsverordnung)',
      'Contrôle électrique Suisse',
      'Rapport de sécurité (RdS)',
      'Sicherheitsnachweis (SiNa)',
    ],
    sameAs: [
      'https://www.linkedin.com/company/controle-oibt-suisse',
    ],
  };
}

export function buildHowToSchema(locale: string) {
  const steps = {
    fr: [
      { name: 'Contact & Devis', text: 'Contactez-nous par formulaire ou téléphone pour obtenir votre devis gratuit sous 24h.' },
      { name: 'Prise de rendez-vous', text: 'Nous fixons un rendez-vous dans les 5-10 jours ouvrés selon votre convenance.' },
      { name: 'Inspection sur site', text: 'Notre contrôleur inspecte toute l\'installation électrique selon OIBT Art. 36.' },
      { name: 'Rapport de sécurité', text: 'Le rapport de sécurité (RdS) est établi et transmis au GRD dans les 48h.' },
      { name: 'Suivi & Archivage', text: 'Vous recevez votre rapport. Nous assurons le suivi de la prochaine échéance.' },
    ],
    de: [
      { name: 'Kontakt & Offerte', text: 'Kontaktieren Sie uns per Formular oder Telefon für Ihre kostenlose Offerte innerhalb von 24h.' },
      { name: 'Terminvereinbarung', text: 'Wir vereinbaren einen Termin innerhalb von 5-10 Werktagen.' },
      { name: 'Vor-Ort-Inspektion', text: 'Unser Kontrolleur prüft die gesamte Elektroinstallation gemäß NIV Art. 36.' },
      { name: 'Sicherheitsnachweis', text: 'Der Sicherheitsnachweis (SiNa) wird erstellt und innerhalb von 48h an den VNB übermittelt.' },
      { name: 'Nachverfolgung', text: 'Sie erhalten Ihren Bericht. Wir überwachen den nächsten Fälligkeitstermin.' },
    ],
    it: [
      { name: 'Contatto & Preventivo', text: 'Contattateci tramite modulo o telefono per il vostro preventivo gratuito entro 24h.' },
      { name: 'Appuntamento', text: 'Fissiamo un appuntamento entro 5-10 giorni lavorativi.' },
      { name: 'Ispezione in loco', text: 'Il nostro controllore verifica l\'intera installazione elettrica secondo OIBT Art. 36.' },
      { name: 'Rapporto di sicurezza', text: 'Il rapporto di sicurezza (RaSi) viene redatto e trasmesso al GRD entro 48h.' },
      { name: 'Follow-up', text: 'Ricevete il vostro rapporto. Monitoriamo la prossima scadenza.' },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: locale === 'de'
      ? 'Wie läuft eine NIV-Elektrokontrolle ab?'
      : locale === 'it'
      ? 'Come si svolge il controllo OIBT?'
      : 'Comment se déroule un contrôle OIBT ?',
    step: (steps[locale as keyof typeof steps] || steps.fr).map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
