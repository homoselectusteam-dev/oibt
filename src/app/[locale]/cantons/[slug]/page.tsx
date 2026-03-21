import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/ui/CTASection';
import PeriodiciteTable from '@/components/ui/PeriodiciteTable';
import SchemaOrg, { buildFAQSchema, buildBreadcrumbSchema } from '@/components/seo/SchemaOrg';
import { cantons, getCantonBySlug } from '@/data/cantons';
import { villes } from '@/data/villes';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ['fr', 'de', 'it']) {
    for (const canton of cantons) {
      params.push({ locale, slug: canton.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const canton = getCantonBySlug(slug);
  if (!canton) return {};

  const name = locale === 'de' ? canton.nomDE : locale === 'it' ? canton.nomIT : canton.nomFR;
  const titles = {
    fr: `Contrôle OIBT ${name} ${new Date().getFullYear()} | CHF ${canton.prixMin}-${canton.prixMax} | ${canton.grdNom}`,
    de: `Elektrokontrolle NIV ${name} ${new Date().getFullYear()} | CHF ${canton.prixMin}-${canton.prixMax} | ${canton.grdNom}`,
    it: `Controllo OIBT ${name} ${new Date().getFullYear()} | CHF ${canton.prixMin}-${canton.prixMax}`,
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/cantons/${slug}` },
  };
}

export default async function CantonPage({ params }: Props) {
  const { locale, slug } = await params;
  const canton = getCantonBySlug(slug);
  if (!canton) notFound();

  const name = locale === 'de' ? canton.nomDE : locale === 'it' ? canton.nomIT : canton.nomFR;
  const desc = locale === 'de' ? canton.descDE : locale === 'it' ? canton.descIT : canton.descFR;

  const cantonVilles = villes.filter((v) => v.cantonCode === canton.code);

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Kantone' : locale === 'it' ? 'Cantoni' : 'Cantons', href: `/${locale}/cantons` },
    { label: locale === 'de' ? `Elektrokontrolle ${name}` : locale === 'it' ? `Controllo OIBT ${name}` : `Contrôle OIBT ${name}` },
  ];

  const faqs = [
    {
      q: locale === 'de' ? `Wer ist der Netzbetreiber für NIV-Kontrollen im Kanton ${name}?` : locale === 'it' ? `Chi è il GRD per i controlli OIBT nel cantone ${name}?` : `Quel est le GRD pour les contrôles OIBT dans le canton de ${name} ?`,
      a: locale === 'de' ? `Der Hauptnetzbetreiber (VNB) im Kanton ${name} ist ${canton.grdNom} (Tel. ${canton.grdTel}, ${canton.grdSite}).` : locale === 'it' ? `Il principale GRD nel cantone ${name} è ${canton.grdNom} (Tel. ${canton.grdTel}, ${canton.grdSite}).` : `Le principal GRD dans le canton de ${name} est ${canton.grdNom} (Tél. ${canton.grdTel}, ${canton.grdSite}).`,
    },
    {
      q: locale === 'de' ? `Wie viel kostet eine Elektrokontrolle im Kanton ${name}?` : locale === 'it' ? `Quanto costa un controllo OIBT nel cantone ${name}?` : `Quel est le prix d'un contrôle OIBT dans le canton de ${name} ?`,
      a: locale === 'de' ? `Im Kanton ${name} liegt der Preis zwischen CHF ${canton.prixMin} und CHF ${canton.prixMax}.` : locale === 'it' ? `Nel cantone ${name}, il prezzo varia tra CHF ${canton.prixMin} e CHF ${canton.prixMax}.` : `Dans le canton de ${name}, le prix varie entre CHF ${canton.prixMin} et CHF ${canton.prixMax}.`,
    },
  ];

  return (
    <>
      <SchemaOrg schema={buildFAQSchema(faqs)} />
      <SchemaOrg schema={buildBreadcrumbSchema(bc.map(b => ({ name: b.label, url: b.href ? `https://controle-oibt.ch${b.href}` : '#' })))} />

      <Breadcrumb items={bc} />

      <div className="bg-gradient-to-r from-primary-800 to-primary-600 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            {locale === 'de' ? `Elektrokontrolle NIV Kanton ${name}` : locale === 'it' ? `Controllo OIBT Cantone ${name}` : `Contrôle OIBT Canton de ${name}`}
          </h1>
          <p className="text-primary-100 text-lg mb-4">{desc}</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">{canton.grdNom}</span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">CHF {canton.prixMin}–{canton.prixMax}</span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">{canton.population.toLocaleString('fr-CH')} {locale === 'de' ? 'Einwohner' : locale === 'it' ? 'abitanti' : 'habitants'}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* GRD info */}
        <div className="card border-l-4 border-primary-500 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">
            {locale === 'de' ? `Netzbetreiber (VNB) — Kanton ${name}` : locale === 'it' ? `GRD — Cantone ${name}` : `GRD — Canton de ${name}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs mb-1">{locale === 'de' ? 'Netzbetreiber' : locale === 'it' ? 'Gestore di rete' : 'Gestionnaire'}</p>
              <p className="font-medium">{canton.grdNom}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">{locale === 'de' ? 'Telefon' : locale === 'it' ? 'Telefono' : 'Téléphone'}</p>
              <a href={`tel:${canton.grdTel}`} className="text-primary-700 font-medium">{canton.grdTel}</a>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Site web</p>
              <p className="text-gray-700">{canton.grdSite}</p>
            </div>
          </div>
        </div>

        {/* Periodicites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? `NIV-Kontrollfristen Kanton ${name}` : locale === 'it' ? `Periodicità OIBT Cantone ${name}` : `Périodicités OIBT — Canton de ${name}`}
          </h2>
          <PeriodiciteTable />
        </section>

        {/* Villes du canton */}
        {cantonVilles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? `Orte im Kanton ${name}` : locale === 'it' ? `Città nel cantone ${name}` : `Villes du canton de ${name}`}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {cantonVilles.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${locale}/villes/${v.slug}`}
                  className="text-primary-700 hover:underline text-sm py-1"
                >
                  {locale === 'de' ? v.nomDE : locale === 'it' ? v.nomIT : v.nom}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
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
