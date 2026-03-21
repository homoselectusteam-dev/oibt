import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { cantons } from '@/data/cantons';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Contrôle OIBT par canton — Prix et GRD pour chaque canton suisse | 2026',
    de: 'NIV-Kontrolle nach Kanton — Preise und VNB für jeden Schweizer Kanton | 2026',
    it: 'Controllo OIBT per cantone — Prezzi e GRD per ogni cantone svizzero | 2026',
  };
  return {
    title: titles[locale as keyof typeof titles],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/cantons` },
  };
}

export default async function CantonsIndexPage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Kantone' : locale === 'it' ? 'Cantoni' : 'Cantons' },
  ];

  const h1 = locale === 'de'
    ? 'NIV-Kontrolle nach Kanton — Preise und Informationen'
    : locale === 'it'
    ? 'Controllo OIBT per cantone — Prezzi e informazioni'
    : 'Contrôle OIBT par canton — Prix et informations';

  return (
    <>
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{h1}</h1>
        <p className="text-gray-600 mb-10">
          {locale === 'de'
            ? 'Informationen zur NIV-Elektrokontrolle in allen Schweizer Kantonen: Preise, Netzbetreiber und spezifische Besonderheiten.'
            : locale === 'it'
            ? 'Informazioni sul controllo OIBT in tutti i cantoni svizzeri: prezzi, gestori di rete e specificità regionali.'
            : 'Informations sur le contrôle OIBT dans tous les cantons suisses : prix, gestionnaires de réseau et spécificités régionales.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cantons.map((canton) => {
            const name = locale === 'de' ? canton.nomDE : locale === 'it' ? canton.nomIT : canton.nomFR;
            const desc = locale === 'de' ? canton.descDE : locale === 'it' ? canton.descIT : canton.descFR;
            return (
              <Link
                key={canton.code}
                href={`/${locale}/cantons/${canton.slug}`}
                className="card hover:shadow-md transition-shadow block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-primary-700">{canton.code}</span>
                  <span className="font-semibold text-gray-900">{name}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
                <div className="mt-2 text-sm text-primary-600 font-medium">
                  CHF {canton.prixMin}–{canton.prixMax}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
