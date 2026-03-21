import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'de' ? 'Impressum | NIV-Kontrolle Schweiz' : locale === 'it' ? 'Impressum | Controllo OIBT Svizzera' : 'Mentions légales | Contrôle OIBT Suisse',
    robots: { index: false, follow: false },
  };
}

export default async function MentionsLegalesPage({ params }: Props) {
  const { locale } = await params;

  const bc = [
    { label: locale === 'de' ? 'Startseite' : locale === 'it' ? 'Home' : 'Accueil', href: `/${locale}` },
    { label: locale === 'de' ? 'Impressum' : locale === 'it' ? 'Impressum' : 'Mentions légales' },
  ];

  return (
    <>
      <Breadcrumb items={bc} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {locale === 'de' ? 'Impressum' : locale === 'it' ? 'Impressum' : 'Mentions légales'}
        </h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Betreiber' : locale === 'it' ? 'Gestore' : 'Éditeur du site'}
            </h2>
            <p className="text-gray-700">
              Contrôle OIBT Suisse<br />
              Suisse / Schweiz / Svizzera<br />
              Email: contact@controle-oibt.ch
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Haftungsausschluss' : locale === 'it' ? 'Limitazione di responsabilità' : 'Limitation de responsabilité'}
            </h2>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Die auf dieser Website bereitgestellten Informationen dienen ausschliesslich allgemeinen Informationszwecken. Für verbindliche Rechtsauskünfte konsultieren Sie bitte einen qualifizierten Juristen oder die zuständigen Behörden.'
                : locale === 'it'
                ? 'Le informazioni fornite su questo sito sono esclusivamente a scopo informativo generale. Per consulenza legale vincolante, consultare un giurista qualificato o le autorità competenti.'
                : 'Les informations fournies sur ce site le sont à titre d\'information générale uniquement. Pour tout conseil juridique contraignant, veuillez consulter un juriste qualifié ou les autorités compétentes.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Akkreditierung' : locale === 'it' ? 'Accreditamento' : 'Accréditation'}
            </h2>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Unsere Kontrolleure sind bei der ESTI (Eidgenössisches Starkstrominspektorat) akkreditiert. Akkreditierungsnachweise auf Anfrage erhältlich.'
                : locale === 'it'
                ? 'I nostri controllori sono accreditati dall\'ESTI (Ispettorato federale degli impianti a corrente forte). Documenti di accreditamento disponibili su richiesta.'
                : 'Nos contrôleurs sont accrédités auprès de l\'ESTI (Inspection fédérale des installations à courant fort). Justificatifs d\'accréditation disponibles sur demande.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Datenschutz' : locale === 'it' ? 'Protezione dei dati' : 'Protection des données'}
            </h2>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Wir verarbeiten Ihre personenbezogenen Daten gemäss dem schweizerischen Datenschutzgesetz (DSG). Ihre Daten werden nicht an Dritte weitergegeben.'
                : locale === 'it'
                ? 'Trattiamo i vostri dati personali in conformità con la legge svizzera sulla protezione dei dati (LPD). I vostri dati non vengono trasmessi a terzi.'
                : 'Nous traitons vos données personnelles conformément à la loi suisse sur la protection des données (LPD). Vos données ne sont pas transmises à des tiers.'}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
