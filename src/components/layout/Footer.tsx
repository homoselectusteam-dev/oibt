import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const cantonsFR = ['Genève', 'Vaud', 'Valais', 'Neuchâtel', 'Fribourg', 'Jura', 'Berne'];
  const cantonsDE = ['Zürich', 'Bern', 'Luzern', 'Aargau', 'St. Gallen', 'Solothurn', 'Basel'];
  const cantonsIT = ['Ticino'];

  const villesFR = ['Genève', 'Lausanne', 'Sion', 'Neuchâtel', 'Fribourg', 'Nyon', 'Montreux'];
  const villesDE = ['Zürich', 'Bern', 'Luzern', 'Basel', 'Winterthur', 'St. Gallen', 'Aarau'];
  const villesIT = ['Lugano', 'Bellinzona', 'Locarno'];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <span className="font-bold text-white text-lg">
                {locale === 'de' ? 'Elektrokontrolle NIV' : locale === 'it' ? 'Controllo OIBT' : 'Contrôle OIBT'}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">{t('desc')}</p>
            <div className="flex gap-2 text-xs">
              {(['fr', 'de', 'it'] as const).map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`px-2 py-1 rounded ${locale === loc ? 'bg-primary-700 text-white' : 'border border-gray-600 hover:border-gray-400'}`}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Cantons FR */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'de' ? 'Kantone (DE/FR)' : locale === 'it' ? 'Cantoni' : 'Cantons'}
            </h3>
            <ul className="space-y-2 text-sm">
              {(locale === 'de' ? cantonsDE : locale === 'it' ? cantonsIT : cantonsFR).map((c) => (
                <li key={c}>
                  <Link
                    href={`/${locale}/cantons/${c.toLowerCase().replace(/[\s']/g, '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {locale === 'de' ? `Elektrokontrolle ${c}` : locale === 'it' ? `Controllo OIBT ${c}` : `Contrôle OIBT ${c}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Villes principales */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'de' ? 'Hauptstädte' : locale === 'it' ? 'Città principali' : 'Villes principales'}
            </h3>
            <ul className="space-y-2 text-sm">
              {(locale === 'de' ? villesDE : locale === 'it' ? villesIT : villesFR).map((v) => (
                <li key={v}>
                  <Link
                    href={`/${locale}/villes/${v.toLowerCase().replace(/[\s'üäöé]/g, (m) => {
                      const map: Record<string, string> = { 'ü': 'ue', 'ä': 'ae', 'ö': 'oe', 'é': 'e', ' ': '-', "'": '' };
                      return map[m] || m;
                    })}`}
                    className="hover:text-white transition-colors"
                  >
                    {locale === 'de' ? `Elektrokontrolle ${v}` : locale === 'it' ? `Controllo OIBT ${v}` : `Contrôle OIBT ${v}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Liens */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'de' ? 'Informationen' : locale === 'it' ? 'Informazioni' : 'Informations'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/controle-oibt`} className="hover:text-white transition-colors">
                {locale === 'de' ? 'Elektrokontrolle NIV' : locale === 'it' ? 'Controllo OIBT' : 'Contrôle OIBT'}
              </Link></li>
              <li><Link href={`/${locale}/prix-controle-oibt`} className="hover:text-white transition-colors">
                {locale === 'de' ? 'Preise & Kosten' : locale === 'it' ? 'Prezzi' : 'Prix & Tarifs'}
              </Link></li>
              <li><Link href={`/${locale}/rapport-securite`} className="hover:text-white transition-colors">
                {locale === 'de' ? 'Sicherheitsnachweis' : locale === 'it' ? 'Rapporto di sicurezza' : 'Rapport de sécurité'}
              </Link></li>
              <li><Link href={`/${locale}/outils/simulateur-prix`} className="hover:text-white transition-colors">
                {locale === 'de' ? 'Preisrechner' : locale === 'it' ? 'Simulatore prezzi' : 'Simulateur prix'}
              </Link></li>
              <li><Link href={`/${locale}/a-propos`} className="hover:text-white transition-colors">
                {locale === 'de' ? 'Über uns' : locale === 'it' ? 'Chi siamo' : 'À propos'}
              </Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                {t('contact')}
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t('copyright').replace('{year}', String(year))}</p>
          <div className="flex gap-4">
            <Link href={`/${locale}/mentions-legales`} className="hover:text-gray-300">{t('legal')}</Link>
            <Link href={`/${locale}/cgu`} className="hover:text-gray-300">{t('cgu')}</Link>
            <Link href={`/${locale}/contact`} className="hover:text-gray-300">{t('contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
