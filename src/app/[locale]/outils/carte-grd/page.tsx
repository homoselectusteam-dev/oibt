import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { cantons } from '@/data/cantons';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    fr: 'Carte des GRD Suisse — Trouver votre gestionnaire de réseau | Contrôle OIBT',
    de: 'VNB-Karte Schweiz — Ihren Netzbetreiber finden | NIV-Kontrolle',
    it: 'Mappa GRD Svizzera — Trovare il proprio gestore di rete | Controllo OIBT',
  };
  const descs = {
    fr: 'Trouvez le GRD (gestionnaire de réseau de distribution) responsable de votre commune en Suisse pour le contrôle OIBT.',
    de: 'Finden Sie den VNB (Verteilnetzbetreiber) für Ihre Gemeinde in der Schweiz für die NIV-Elektrokontrolle.',
    it: 'Trovate il GRD (gestore di rete di distribuzione) responsabile del vostro comune in Svizzera per il controllo OIBT.',
  };
  return {
    title: titles[locale as keyof typeof titles],
    description: descs[locale as keyof typeof descs],
    alternates: { canonical: `https://controle-oibt.ch/${locale}/outils/carte-grd` },
  };
}

export default async function CarteGRDPage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Werkzeuge' : locale === 'it' ? 'Strumenti' : 'Outils', href: `/${locale}/outils` },
    { label: locale === 'de' ? 'VNB-Karte' : locale === 'it' ? 'Mappa GRD' : 'Carte GRD' },
  ];

  const h1 = locale === 'de'
    ? 'VNB-Karte Schweiz — Finden Sie Ihren Netzbetreiber'
    : locale === 'it'
    ? 'Mappa GRD Svizzera — Trovate il vostro gestore di rete'
    : 'Carte des GRD Suisse — Trouvez votre gestionnaire de réseau';

  const intro = locale === 'de'
    ? 'Nach jeder NIV-Elektrokontrolle muss der Sicherheitsnachweis (SiNa) direkt an den lokalen Netzbetreiber (VNB) übermittelt werden. Finden Sie hier den VNB für Ihren Kanton.'
    : locale === 'it'
    ? 'Dopo ogni controllo OIBT, il rapporto di sicurezza (RaSi) deve essere trasmesso direttamente al gestore di rete locale (GRD). Trovate qui il GRD per il vostro cantone.'
    : 'Après chaque contrôle OIBT, le rapport de sécurité (RdS) est transmis directement au gestionnaire de réseau de distribution (GRD) local. Trouvez ici le GRD de votre canton.';

  const colCantonLabel = locale === 'de' ? 'Kanton' : locale === 'it' ? 'Cantone' : 'Canton';
  const colGRDLabel = locale === 'de' ? 'Netzbetreiber (VNB)' : locale === 'it' ? 'Gestore di rete (GRD)' : 'Gestionnaire de réseau (GRD)';
  const colTelLabel = locale === 'de' ? 'Telefon' : locale === 'it' ? 'Telefono' : 'Téléphone';
  const colMoreLabel = locale === 'de' ? 'Mehr' : locale === 'it' ? 'Altro' : 'Plus';

  return (
    <>
      <Breadcrumb items={bc} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{h1}</h1>
        <p className="text-gray-600 mb-8">{intro}</p>

        {/* Tableau GRD par canton */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-700 text-white">
                <th className="p-3 text-left">{colCantonLabel}</th>
                <th className="p-3 text-left">{colGRDLabel}</th>
                <th className="p-3 text-left">{colTelLabel}</th>
                <th className="p-3 text-center">{colMoreLabel}</th>
              </tr>
            </thead>
            <tbody>
              {cantons.map((canton, idx) => {
                const name = locale === 'de' ? canton.nomDE : locale === 'it' ? canton.nomIT : canton.nomFR;
                return (
                  <tr key={canton.code} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="p-3">
                      <span className="font-bold text-primary-700 mr-2">{canton.code}</span>
                      <span className="text-gray-700">{name}</span>
                    </td>
                    <td className="p-3 text-gray-700">{canton.grdNom}</td>
                    <td className="p-3">
                      <a href={`tel:${canton.grdTel.replace(/\s/g, '')}`} className="text-primary-600 hover:underline">
                        {canton.grdTel}
                      </a>
                    </td>
                    <td className="p-3 text-center">
                      <Link
                        href={`/${locale}/cantons/${canton.slug}`}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded hover:bg-primary-200 transition-colors"
                      >
                        {locale === 'de' ? 'Details' : locale === 'it' ? 'Dettagli' : 'Détails'}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Qu'est-ce qu'un GRD */}
        <section className="card mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            {locale === 'de'
              ? 'Was ist ein Verteilnetzbetreiber (VNB)?'
              : locale === 'it'
              ? "Cos'è un gestore di rete (GRD)?"
              : "Qu'est-ce qu'un GRD ?"}
          </h2>
          <p className="text-gray-700">
            {locale === 'de'
              ? 'Ein VNB (Verteilnetzbetreiber) ist das lokale Energieversorgungsunternehmen, das das Stromnetz in einer Region betreibt. Nach einer NIV-Elektrokontrolle wird der Sicherheitsnachweis (SiNa) direkt an den zuständigen VNB übermittelt. Der VNB überprüft die Konformität und kann bei gefährlichen Mängeln die Anlage abschalten.'
              : locale === 'it'
              ? "Un GRD (gestore di rete di distribuzione) è l'azienda energetica locale che gestisce la rete elettrica in una regione. Dopo un controllo OIBT, il rapporto di sicurezza (RaSi) viene trasmesso direttamente al GRD competente. Il GRD verifica la conformità e può disconnettere l'impianto in caso di difetti pericolosi."
              : "Un GRD (gestionnaire de réseau de distribution) est l'entreprise énergétique locale qui exploite le réseau électrique dans une région. Après un contrôle OIBT, le rapport de sécurité (RdS) est transmis directement au GRD compétent. Le GRD vérifie la conformité et peut couper l'installation en cas de défauts dangereux."}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-primary-700 text-white rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            {locale === 'de'
              ? 'NIV-Kontrolle beauftragen — wir übermitteln den SiNa an Ihren VNB'
              : locale === 'it'
              ? 'Ordinate un controllo OIBT — trasmettiamo noi il RaSi al vostro GRD'
              : 'Mandatez un contrôle OIBT — nous transmettons le RdS à votre GRD'}
          </h2>
          <p className="text-primary-100 mb-4">
            {locale === 'de'
              ? 'Unser akkreditiertes Kontrollorgan übernimmt die gesamte Kommunikation mit Ihrem VNB.'
              : locale === 'it'
              ? 'Il nostro organo di controllo accreditato gestisce tutta la comunicazione con il vostro GRD.'
              : 'Notre organe de contrôle accrédité gère toute la communication avec votre GRD.'}
          </p>
          <Link
            href={`/${locale}/devis-controle-oibt`}
            className="inline-block bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
          >
            {locale === 'de' ? 'Kostenlose Offerte anfordern' : locale === 'it' ? 'Preventivo gratuito' : 'Demander un devis gratuit'}
          </Link>
        </div>
      </div>
    </>
  );
}
