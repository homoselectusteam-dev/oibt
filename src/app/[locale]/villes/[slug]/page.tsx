import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import PeriodiciteTable from '@/components/ui/PeriodiciteTable';
import SchemaOrg, {
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from '@/components/seo/SchemaOrg';
import { villes, getVilleBySlug, getAllSlugs } from '@/data/villes';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const slugs = getAllSlugs();
  for (const locale of ['fr', 'de', 'it']) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) return {};

  const cityName = locale === 'de' ? ville.nomDE : locale === 'it' ? ville.nomIT : ville.nom;
  const year = new Date().getFullYear();

  const titles = {
    fr: `Contrôle OIBT ${cityName} ${year} | Organe indépendant | CHF ${ville.prixMin}-${ville.prixMax}`,
    de: `Elektrokontrolle NIV ${cityName} ${year} | Unabhängiges Organ | CHF ${ville.prixMin}-${ville.prixMax}`,
    it: `Controllo OIBT ${cityName} ${year} | Organo indipendente | CHF ${ville.prixMin}-${ville.prixMax}`,
  };

  const descs = {
    fr: `Contrôle OIBT à ${cityName} (${ville.cantonCode}) ✓ Organe indépendant accrédité ✓ Rapport de sécurité 48h ✓ Devis gratuit ✓ Prix CHF ${ville.prixMin}-${ville.prixMax} ✓ GRD : ${ville.grdNom}`,
    de: `Elektrokontrolle NIV in ${cityName} (${ville.cantonCode}) ✓ Unabhängiges akkreditiertes Organ ✓ Sicherheitsnachweis 48h ✓ Kostenlose Offerte ✓ Preis CHF ${ville.prixMin}-${ville.prixMax} ✓ VNB: ${ville.grdNom}`,
    it: `Controllo OIBT a ${cityName} (${ville.cantonCode}) ✓ Organo indipendente accreditato ✓ Rapporto sicurezza 48h ✓ Preventivo gratuito ✓ CHF ${ville.prixMin}-${ville.prixMax} ✓ GRD: ${ville.grdNom}`,
  };

  const canonicals = {
    fr: `https://controle-oibt.ch/fr/villes/${slug}`,
    de: `https://controle-oibt.ch/de/staedte/${slug}`,
    it: `https://controle-oibt.ch/it/citta/${slug}`,
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: {
      canonical: canonicals[locale as keyof typeof canonicals],
      languages: {
        fr: canonicals.fr,
        de: canonicals.de,
        it: canonicals.it,
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descs[locale as keyof typeof descs],
    },
  };
}

export default async function VillePage({ params }: Props) {
  const { locale, slug } = await params;
  const ville = getVilleBySlug(slug);

  if (!ville) notFound();

  const cityName = locale === 'de' ? ville.nomDE : locale === 'it' ? ville.nomIT : ville.nom;
  const year = new Date().getFullYear();

  const intro = locale === 'de' ? ville.introDE : locale === 'it' ? ville.introIT : ville.introFR;
  const faqs = locale === 'de' ? ville.faqDE : locale === 'it' ? ville.faqIT : ville.faqFR;

  const breadcrumbs = {
    fr: [
      { label: 'Accueil', href: '/fr' },
      { label: 'Villes', href: '/fr/villes' },
      { label: `Contrôle OIBT ${ville.nom}` },
    ],
    de: [
      { label: 'Startseite', href: '/de' },
      { label: 'Städte', href: '/de/staedte' },
      { label: `Elektrokontrolle ${ville.nomDE}` },
    ],
    it: [
      { label: 'Home', href: '/it' },
      { label: 'Città', href: '/it/citta' },
      { label: `Controllo OIBT ${ville.nomIT}` },
    ],
  };

  const bc = breadcrumbs[locale as keyof typeof breadcrumbs] || breadcrumbs.fr;

  // Content par locale
  const processSteps = {
    fr: [
      { n: '1', title: 'Demande de devis gratuit', desc: 'Remplissez le formulaire ou appelez-nous. Devis personnalisé en 24h.' },
      { n: '2', title: 'Prise de rendez-vous', desc: `Nous fixons un rendez-vous à ${ville.nom} dans les 5-10 jours ouvrés.` },
      { n: '3', title: 'Inspection de l\'installation', desc: 'Notre contrôleur vérifie toute l\'installation selon OIBT Art. 36.' },
      { n: '4', title: 'Rapport de sécurité (RdS)', desc: `Le rapport est rédigé et transmis à ${ville.grdNom} dans les 48h.` },
      { n: '5', title: 'Suivi & mise en conformité', desc: 'En cas de défauts, nous vous orientons. Rappel avant prochaine échéance.' },
    ],
    de: [
      { n: '1', title: 'Kostenlose Offerte', desc: 'Formular ausfüllen oder anrufen. Persönliche Offerte in 24h.' },
      { n: '2', title: 'Terminvereinbarung', desc: `Termin in ${ville.nomDE} innerhalb von 5-10 Werktagen.` },
      { n: '3', title: 'Vor-Ort-Inspektion', desc: 'Unser Kontrolleur prüft die gesamte Anlage gemäß NIV Art. 36.' },
      { n: '4', title: 'Sicherheitsnachweis (SiNa)', desc: `Der SiNa wird erstellt und innerhalb 48h an ${ville.grdNom} übermittelt.` },
      { n: '5', title: 'Nachverfolgung', desc: 'Bei Mängeln Weiterleitung an Elektriker. Erinnerung vor Fälligkeit.' },
    ],
    it: [
      { n: '1', title: 'Preventivo gratuito', desc: 'Compilare il modulo o chiamarci. Preventivo personalizzato in 24h.' },
      { n: '2', title: 'Appuntamento', desc: `Fissiamo un appuntamento a ${ville.nomIT} entro 5-10 giorni lavorativi.` },
      { n: '3', title: 'Ispezione in loco', desc: 'Il nostro controllore verifica l\'intero impianto secondo OIBT Art. 36.' },
      { n: '4', title: 'Rapporto di sicurezza (RaSi)', desc: `Il rapporto è redatto e trasmesso a ${ville.grdNom} entro 48h.` },
      { n: '5', title: 'Follow-up', desc: 'In caso di difetti, orientamento verso elettricista. Promemoria prima della scadenza.' },
    ],
  };

  const steps = processSteps[locale as keyof typeof processSteps] || processSteps.fr;

  const sectionTitles = {
    fr: {
      why: `Pourquoi faire le contrôle OIBT à ${ville.nom} ?`,
      process: `Comment se déroule le contrôle OIBT à ${ville.nom} ?`,
      price: `Prix du contrôle OIBT à ${ville.nom}`,
      grd: 'GRD local (Gestionnaire de réseau)',
      data: 'Données locales',
      periodicite: `Périodicités OIBT à ${ville.nom}`,
      voisines: 'Villes voisines desservies',
      faq: `FAQ — Contrôle OIBT ${ville.nom}`,
    },
    de: {
      why: `Warum eine Elektrokontrolle NIV in ${ville.nomDE}?`,
      process: `Wie läuft die NIV-Kontrolle in ${ville.nomDE} ab?`,
      price: `Preis der Elektrokontrolle in ${ville.nomDE}`,
      grd: 'Lokaler Netzbetreiber (VNB)',
      data: 'Lokale Daten',
      periodicite: `NIV-Kontrollfristen in ${ville.nomDE}`,
      voisines: 'Benachbarte Gemeinden',
      faq: `FAQ — Elektrokontrolle NIV ${ville.nomDE}`,
    },
    it: {
      why: `Perché fare il controllo OIBT a ${ville.nomIT}?`,
      process: `Come si svolge il controllo OIBT a ${ville.nomIT}?`,
      price: `Prezzo del controllo OIBT a ${ville.nomIT}`,
      grd: 'GRD locale (Gestore di rete)',
      data: 'Dati locali',
      periodicite: `Periodicità OIBT a ${ville.nomIT}`,
      voisines: 'Città vicine servite',
      faq: `FAQ — Controllo OIBT ${ville.nomIT}`,
    },
  };

  const t = sectionTitles[locale as keyof typeof sectionTitles] || sectionTitles.fr;

  const whyPoints = {
    fr: [
      `Obligation légale Art. 36 OIBT : périodicité 20 ans pour les habitations à ${ville.nom}`,
      `Le GRD local ${ville.grdNom} envoie les convocations 6 mois avant l'échéance`,
      `Le propriétaire est responsable en cas d'accident sans rapport valide`,
      `Contrôle quinquennal obligatoire en cas de vente immobilière à ${ville.nom}`,
      `Notre organe de contrôle est totalement indépendant — rapport objectif garanti`,
    ],
    de: [
      `Gesetzliche Pflicht NIV Art. 36: 20 Jahre Kontrollfrist für Wohngebäude in ${ville.nomDE}`,
      `Der lokale VNB ${ville.grdNom} schreibt 6 Monate vor Fälligkeit`,
      `Der Eigentümer haftet bei Unfall ohne gültigen Sicherheitsnachweis`,
      `Fünfjähreskontrolle bei Immobilienverkauf in ${ville.nomDE} obligatorisch`,
      `Unabhängiges Kontrollorgan — objektiver Bericht garantiert`,
    ],
    it: [
      `Obbligo legale Art. 36 OIBT: periodicità 20 anni per le abitazioni a ${ville.nomIT}`,
      `Il GRD locale ${ville.grdNom} invia le convocazioni 6 mesi prima della scadenza`,
      `Il proprietario è responsabile in caso di incidente senza rapporto valido`,
      `Controllo quinquennale obbligatorio in caso di vendita immobiliare a ${ville.nomIT}`,
      `Organo di controllo totalmente indipendente — rapporto obiettivo garantito`,
    ],
  };

  const whyP = whyPoints[locale as keyof typeof whyPoints] || whyPoints.fr;

  return (
    <>
      {/* Schemas SEO */}
      <SchemaOrg
        schema={buildLocalBusinessSchema({
          locale,
          city: cityName,
          canton: ville.canton,
          lat: ville.lat,
          lng: ville.lng,
          prixMin: ville.prixMin,
          prixMax: ville.prixMax,
        })}
      />
      <SchemaOrg
        schema={buildServiceSchema({
          locale,
          city: cityName,
          prixMin: ville.prixMin,
          prixMax: ville.prixMax,
        })}
      />
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema(
          bc.map((b) => ({ name: b.label, url: b.href ? `https://controle-oibt.ch${b.href}` : '#' }))
        )}
      />

      <Breadcrumb items={bc} />

      {/* Hero ville */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            {locale === 'de'
              ? `Elektrokontrolle NIV ${cityName} ${year}`
              : locale === 'it'
              ? `Controllo OIBT ${cityName} ${year}`
              : `Contrôle OIBT ${cityName} ${year}`}
          </h1>
          <p className="text-primary-100 text-lg mb-6">{intro}</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {locale === 'de' ? `CHF ${ville.prixMin}–${ville.prixMax}` : locale === 'it' ? `CHF ${ville.prixMin}–${ville.prixMax}` : `CHF ${ville.prixMin} – CHF ${ville.prixMax}`}
            </span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {locale === 'de' ? 'Unabhängiges Organ' : locale === 'it' ? 'Organo indipendente' : 'Organe indépendant'}
            </span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {locale === 'de' ? 'SiNa in 48h' : locale === 'it' ? 'RaSi in 48h' : 'Rapport en 48h'}
            </span>
            <Link
              href={`/${locale}/devis-controle-oibt`}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors"
            >
              {locale === 'de' ? 'Kostenlose Offerte' : locale === 'it' ? 'Preventivo gratuito' : 'Devis gratuit'}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Données locales + GRD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* GRD card */}
          <div className="card border-l-4 border-primary-500">
            <h2 className="font-bold text-gray-900 mb-3">{t.grd}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-gray-500 w-24 shrink-0">
                  {locale === 'de' ? 'VNB:' : locale === 'it' ? 'GRD:' : 'GRD :'}
                </span>
                <span className="font-medium text-gray-900">{ville.grdNom}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 w-24 shrink-0">Tél.:</span>
                <a href={`tel:${ville.grdTel}`} className="text-primary-700 font-medium">{ville.grdTel}</a>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 w-24 shrink-0">Site:</span>
                <span className="text-gray-700">{ville.grdSite}</span>
              </div>
            </div>
          </div>

          {/* Data card */}
          <div className="card border-l-4 border-green-500">
            <h2 className="font-bold text-gray-900 mb-3">{t.data}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {locale === 'de' ? 'Einwohner:' : locale === 'it' ? 'Popolazione:' : 'Population :'}
                </span>
                <span className="font-medium">{ville.population.toLocaleString('fr-CH')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {locale === 'de' ? 'Wohnungen:' : locale === 'it' ? 'Abitazioni:' : 'Logements :'}
                </span>
                <span className="font-medium">{ville.nbLogements.toLocaleString('fr-CH')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {locale === 'de' ? 'Eigentumsquote:' : locale === 'it' ? 'Tasso proprietà:' : 'Taux propriété :'}
                </span>
                <span className="font-medium">{ville.tauxProprietaire}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {locale === 'de' ? 'Postleitzahl:' : locale === 'it' ? 'CAP:' : 'Code postal :'}
                </span>
                <span className="font-medium">{ville.codePostal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">{t.why}</h2>
          <ul className="space-y-3">
            {whyP.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Price section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">{t.price}</h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary-700">CHF {ville.prixMin}</p>
                <p className="text-xs text-gray-500">Min.</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary-700">CHF {ville.prixMax}</p>
                <p className="text-xs text-gray-500">Max.</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'de'
                ? `Richtpreise für eine Elektrokontrolle NIV in ${cityName}. Der Endpreis hängt von Größe und Komplexität der Anlage ab. Kostenlose Offerte auf Anfrage.`
                : locale === 'it'
                ? `Prezzi indicativi per un controllo OIBT a ${cityName}. Il prezzo finale dipende dalle dimensioni e dalla complessità dell'impianto.`
                : `Fourchette de prix indicative pour un contrôle OIBT à ${cityName}. Le prix final dépend de la taille et de la complexité de votre installation. Devis gratuit sur demande.`}
            </p>
            <Link
              href={`/${locale}/devis-controle-oibt`}
              className="btn-primary mt-4 inline-flex"
            >
              {locale === 'de' ? 'Kostenlose Offerte anfordern' : locale === 'it' ? 'Richiedi preventivo gratuito' : 'Obtenir mon devis gratuit'}
            </Link>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.process}</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Periodicites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.periodicite}</h2>
          <PeriodiciteTable />
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.faq}</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="card">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between">
                    <span>{faq.q}</span>
                    <span className="text-primary-600">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Villes voisines */}
        {ville.villesVoisines.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.voisines}</h2>
            <div className="flex flex-wrap gap-2">
              {ville.villesVoisines.map((vv) => {
                const voisine = villes.find((v) => v.nom === vv || v.nomDE === vv);
                if (!voisine) return (
                  <span key={vv} className="border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm">{vv}</span>
                );
                return (
                  <Link
                    key={vv}
                    href={`/${locale}/villes/${voisine.slug}`}
                    className="border border-primary-200 text-primary-700 hover:bg-primary-50 px-3 py-1 rounded-lg text-sm transition-colors"
                  >
                    {locale === 'de'
                      ? `Elektrokontrolle ${voisine.nomDE}`
                      : locale === 'it'
                      ? `Controllo OIBT ${voisine.nomIT}`
                      : `Contrôle OIBT ${voisine.nom}`}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <CTASection city={cityName} />
    </>
  );
}
