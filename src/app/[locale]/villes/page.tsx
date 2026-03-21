import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { villes } from '@/data/villes';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT par ville en Suisse | 231 villes couvertes',
    de: 'Elektrokontrolle NIV nach Ort in der Schweiz | 231 Orte',
    it: 'Controllo OIBT per città in Svizzera | 231 città',
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: '',
    alternates: { canonical: `https://controle-oibt.ch/${locale}/villes` },
  };
}

export default async function VillesIndexPage({ params }: Props) {
  const { locale } = await params;

  const breadcrumbs = {
    fr: [{ label: 'Accueil', href: '/fr' }, { label: 'Toutes les villes' }],
    de: [{ label: 'Startseite', href: '/de' }, { label: 'Alle Orte' }],
    it: [{ label: 'Home', href: '/it' }, { label: 'Tutte le città' }],
  };

  const bc = breadcrumbs[locale as keyof typeof breadcrumbs] || breadcrumbs.fr;

  // Group by canton
  const byCantons = villes.reduce((acc, v) => {
    if (!acc[v.canton]) acc[v.canton] = [];
    acc[v.canton].push(v);
    return acc;
  }, {} as Record<string, typeof villes>);

  return (
    <>
      <Breadcrumb items={bc} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {locale === 'de' ? 'Elektrokontrolle NIV — Alle Orte' : locale === 'it' ? 'Controllo OIBT — Tutte le città' : 'Contrôle OIBT — Toutes les villes'}
        </h1>
        <p className="text-gray-600 mb-10">
          {locale === 'de'
            ? '231 Orte in der Schweiz — unabhängige NIV-Elektrokontrolle in Ihrer Gemeinde.'
            : locale === 'it'
            ? '231 città in Svizzera — controllo OIBT indipendente nel vostro comune.'
            : '231 villes en Suisse — organe de contrôle indépendant dans votre commune.'}
        </p>

        {Object.entries(byCantons).map(([canton, cantonVilles]) => (
          <section key={canton} className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              {locale === 'de' ? `Elektrokontrolle Kanton ${canton}` : locale === 'it' ? `Controllo OIBT Cantone ${canton}` : `Contrôle OIBT ${canton}`}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {cantonVilles.map((v) => {
                const name = locale === 'de' ? v.nomDE : locale === 'it' ? v.nomIT : v.nom;
                return (
                  <Link
                    key={v.slug}
                    href={`/${locale}/villes/${v.slug}`}
                    className="text-sm text-primary-700 hover:text-primary-900 hover:underline py-1"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
